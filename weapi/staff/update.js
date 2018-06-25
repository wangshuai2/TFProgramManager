const mysql = require('../../mysql')

module.exports = async ctx => {
  const reqbody = ctx.request.body
  const addData = {
    author: reqbody.author,
    author_id: reqbody.author_id,
    staff_desc: reqbody.desc,
    staff_name: reqbody.title,
    staff_img: reqbody.imgurl
  }
  console.log(addData)
  await mysql('staff_list').where('staff_id', '=', reqbody.staff_id).update(addData).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
