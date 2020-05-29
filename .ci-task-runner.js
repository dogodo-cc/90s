const ciTaskRunnerConfig = {
  "repository": "git",
  "cache": "cache/ci-task-runner/ci-task-runner.json",
  "tasks": [{
    name: 'install dependencies',
    program: 'yarn',
    path: 'package.json',
    dependencies: ['packages/ui/packages.json', 'packages/web/packages.json'],
  },{
    name: '构建 => hi-ui',
    path: 'packages/ui/',
    program: 'npm run publish:ui',
    dependencies: ['packages/web/'], // 确保构建web的时候能引用到lib文件
  },
  {
    name: '构建 => hi-ui 文档',
    path: 'packages/ui/',
    program: 'npm run build:ui',
    dependencies: ['packages/web/'], // 确保在部署web的时候能复制dist文件
  }]
}

const buildTasks = [
  {name: 'web', dependencies: ['packages/web/', 'packages/ui/']}
].map(m => {
  return {
      name: `构建 => ${m.name}`,
      path: `packages/${m.name}/`,
      dependencies: m.dependencies,
      program: `npm run build:${m.name}`
  };
});

ciTaskRunnerConfig.tasks.push(buildTasks);

module.exports = ciTaskRunnerConfig;