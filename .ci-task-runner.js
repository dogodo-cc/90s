const ciTaskRunnerConfig = {
  "repository": "git",
  "cache": "cache/ci-task-runner/ci-task-runner.json",
  "tasks": []
}

const buildTasks = [
  {name: 'ui', dependencies: ['packages/ui/']},
  {name: 'tools' },
  {name: 'docs', dependencies: ['packages/web/']},
  {name: 'web', dependencies: ['packages/tools/']}, 
].map(m => {
  return {
      "name": `build_${m.name}`,
      "path": `packages/${m.name}/`,
      "dependencies": m.dependencies,
      "program": `npm run build:${m.name}`
  };
});

ciTaskRunnerConfig.tasks.push(buildTasks);

module.exports = ciTaskRunnerConfig;