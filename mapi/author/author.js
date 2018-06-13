const mysql = require('../../mysql')

module.exports = async ctx => {
  let w = {}
  if (ctx.request.query.id) {
    w = {
      author_id: ctx.request.query.id
    }
  } else if (ctx.request.query.name) {
    w = {
      author_name: ctx.request.query.name
    }
  }
  await mysql('author_list').select('*').where(w).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
