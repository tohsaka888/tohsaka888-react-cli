const { getRepoList } = require('./http.js')
const downloadGitRepo = require('download-git-repo');
const path = require('path');
const util = require('util');
const chalk = require('chalk');
const figlet = require('figlet');

const inquirer = require('inquirer')

async function onDownload(name, repo) {
  const requestUrl = `tohsaka888-react-cli/${repo}`;//创建下载地址
  const cwd = process.cwd(); //获取当前命令行选择的目录
  const targetPath = path.join(cwd, name); //模板下载所在地址
  const downloadFunc = util.promisify(downloadGitRepo);
  await downloadFunc(requestUrl, targetPath);
}

module.exports = async function (name, options) {
  const repoList = await getRepoList()
  const repos = repoList.map(item => item.name)
  const { repo } = await inquirer.prompt([{
    name: 'repo',
    type: 'list',
    choices: repos,
    message: '请选择一个模板'
  }])
  console.clear()
  await figlet('tohsaka888-react-cli', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.redBright(data));
  });
  console.log('\nLoading...')
  await onDownload(name, repo);
  console.clear()
  console.log(`\n成功创建项目 ${chalk.cyan(name)}`);
  console.log(`\ncd ${chalk.cyan(name)}`);
  console.log('\nyarn install && yarn start\r\n');
}