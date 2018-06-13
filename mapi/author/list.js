const mysql = require('../../mysql')

module.exports = async ctx => {
  await mysql('author_list').select('*').then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
