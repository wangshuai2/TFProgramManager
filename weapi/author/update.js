const mysql = require('../../mysql')

module.exports = async ctx => {
  const reqbody = ctx.request.body
  const addData = {
    author_desc: reqbody.desc,
    author_name: reqbody.title,
    author_img: reqbody.imgurl
  }
  await mysql('staff_list').update(addData).where('author_id', reqbody.author_id).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
