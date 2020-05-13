#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program.version('0.0.1');

program.command('help')
.description('show help tips')
.action(() => {
  program.outputHelp();
})

program.command('create [dir]')
.description('create a empty doc')
.action(dir => {
  console.log('create %s', dir);
})

program.command('preview [dir]')
.description('实时预览')
.action(dir => {
  console.log('preview %s', dir);
  require('../lib/cmd_preview')();
})

program.command('build [dir]')
.description('build the static html site')
.option('-o, --output <dir>', 'the output path')
.action((dir, options) => {
  console.log('create %s, output %s', dir, options.output);
})

program.parse(process.argv);