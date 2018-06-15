const mysql = require('../../mysql')

module.exports = async ctx => {
  const reqbody = ctx.request.body
  const addData = {
    carousel_id: reqbody.carousel_id
  }
  await mysql('carousel_list').where('carousel_id', addData.carousel_id).del().then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
