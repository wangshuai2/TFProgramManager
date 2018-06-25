const mysql = require('../../mysql')

module.exports = async ctx => {
  const reqbody = ctx.request.body
  const addData = {
    carousel_title: reqbody.title,
    carousel_link: reqbody.link,
    carousel_img: reqbody.img,
    is_show: reqbody.show
  }
  await mysql('carousel_list').update(addData).where('carousel_id', reqbody.carousel_id).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
