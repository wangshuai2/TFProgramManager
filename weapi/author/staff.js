const mysql = require('../../mysql')

module.exports = async ctx => {
  await mysql('staff_list').select('*').where('author_id', '=', ctx.request.query.id).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
