const mysql = require('../../mysql')

module.exports = async ctx => {
  let w = {}
  if (ctx.request.query.id) {
    w = {
      carousel_id: ctx.request.query.id
    }
  } else if (ctx.request.query.title) {
    w = {
      carousel_title: ctx.request.query.title
    }
  }
  await mysql('carousel_list').select('*').where(w).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
