const mysql = require('../../mysql')

module.exports = async ctx => {
  let w = {}
  if (ctx.request.query.id) {
    w = {
      staff_id: ctx.request.query.id
    }
  } else if (ctx.request.query.name) {
    w = {
      staff_name: ctx.request.query.name
    }
  }
  await mysql('staff_list').select('*').where(w).then(res => {
    ctx.state.code = 0
    ctx.state.data = res[0]
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
