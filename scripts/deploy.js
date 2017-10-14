const { exec } = require('child_process')

const execAsync = (cmd) => {
  return new Promise((resolve, reject) => {
    // console.log('\t', cmd)
    exec(cmd, { 'cwd': '' }, (err, data) => err ? reject(err) : resolve(data))
  })
}

/**
* @function execute
* @param  {Array} cmds {terminal commands}
* @return {Void} {Execute terminal commands in order}
*/
const execute = (cmds) => {
  return new Promise((resolve, reject) => {
    const resolveData = []

    cmds
    .reduce((cur, next) => {
      return cur.then(data => {
        if (data) resolveData.push(data)
        return execAsync(next)
      })
    }, Promise.resolve())
    .then((data) => {
      resolveData.push(data)
      resolve(resolveData)
    })
    .catch(err => reject(err))
  })
}

const cmds = []
const commitMessage = process.argv[2] || "new release"

cmds.push('echo "NODE_ENV=production" > .env')
cmds.push('npm run build')
cmds.push('git checkout .env')
cmds.push('cd ../Team1772.github.io/')

cmds.push('find . | grep -vi /.git | grep -v --regexp="^\.$" | xargs rm -rf')

cmds.push('cp ../TeamWork/dist/index.html index.html')
cmds.push('cp ../TeamWork/dist/static static')
cmds.push('cp ../TeamWork/dist/service-worker.js service-worker.js')

cmds.push('git add -A')
cmds.push(`git commit -m "${commitMessage}"`)
cmds.push(`git push origin master`)
cmds.push(`git checkout ../TeamWork/`)

execute(cmds)
  .then(resolveData => {
    console.log(resolveData[1])
    process.exit()
  }).catch(err => {
    console.log(err.message)
    process.exit(1)
  })
