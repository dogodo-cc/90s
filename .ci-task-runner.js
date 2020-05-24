const ciTaskRunnerConfig = {
  "repository": "git",
  "cache": "cache/ci-task-runner/ci-task-runner.json",
  "tasks": [{
    name: 'install dependencies',
    dependencies: ['packages/ui/packages.json', 'packages/web/packages.json'],
    program: 'yarn'
  },{
    name: '构建 => hi-ui',
    path: 'packages/ui/',
    program: 'npm run publish:ui',
    dependencies: ['packages/web/']
  }]
}

const buildTasks = [
  {name: 'ui', dependencies: ['packages/ui/']},
  {name: 'web', dependencies: ['packages/web/']},
].map(m => {
  return {
      name: `build_${m.name}`,
      path: `packages/${m.name}/`,
      dependencies: m.dependencies,
      program: `npm run build:${m.name}`
  };
});

ciTaskRunnerConfig.tasks.push(buildTasks);

module.exports = ciTaskRunnerConfig;