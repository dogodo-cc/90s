/* eslint-disable */

require("shelljs/global");

const path = require("path");
const exec = require("child-process-promise").exec;

const CDN_PATH = "cdn://service/libcdn/meeting-view/";
const DIST_PATH = path.join(__dirname, "dist");

// is build dev
const isDev = process.env.CI_COMMIT_REF_NAME === "dev";

const lastCommitHash = isDev ? 'echo "dev"' : 'git log -1 --format="%h"';

const build = version => {
  mkdir(`dist/${version}`);

  cp("./dist/index.html", `dist/${version}/index.html`);

  exec(`rsync -r . ${CDN_PATH}`, {
    cwd: DIST_PATH
  })
    .then(() => {
      console.log("sync to cdn done!");
    })
    .catch(err => {
      if (err) throw err;
    });
};

exec(lastCommitHash)
  .then(({ stdout }) => {
    const version = stdout.replace(/[^a-z0-9]/gi, "").slice(0, 7);
    build(version);
  })
  .catch(err => {
    console.error("出错啦！！" + err);
    process.nextTick(() => {
      throw err;
    });
    process.exit(1);
  });
