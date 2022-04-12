#! /usr/bin/env node
const chalk = require('chalk')


const program = require('commander')
program
  .command('create <appname>') //其中<>代表必填 []代表可选
  .option('-f,--force', '描述性文字')
  .description('创建一个新的项目')
  .action((name, options) => {
    console.log('项目名是：', chalk.blue(name));
    require('./create.js')(name,options)
  })
program.parse()

