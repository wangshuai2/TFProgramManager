const mysql = require('../../mysql')

module.exports = async ctx => {
  if (ctx.request.query.no) {
    await mysql('staff_list').select('*').limit(10).offset(ctx.request.query.no * 10).then(res => {
      ctx.state.code = 0
      ctx.state.data = res
    }).catch(err => {
      ctx.state.code = -1
      throw new Error(err)
    })
  } else {
    await mysql('staff_list').select('*').then(res => {
      ctx.state.code = 0
      ctx.state.data = res
    }).catch(err => {
      ctx.state.code = -1
      throw new Error(err)
    })
  }
}
