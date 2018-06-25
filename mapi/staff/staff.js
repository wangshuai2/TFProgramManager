const mysql = require('../../mysql')

module.exports = async ctx => {
  let w = {}
  let sqlwhere = {}
  if (ctx.request.query.id) {
    w = {
      staff_id: ctx.request.query.id
    }
    sqlwhere = {
      key: 'staff_id',
      value: ctx.request.query.id
    }
  } else if (ctx.request.query.name) {
    w = {
      staff_name: ctx.request.query.name
    }
    sqlwhere = {
      key: 'staff_name',
      value: ctx.request.query.name
    }
  }
  await mysql('staff_list').select('*').where(w).then(res => {
    const newpv = res[0].pv + 1
    console.log(newpv)
    mysql('staff_list').update({pv: newpv}).where(sqlwhere.key, '=', sqlwhere.value).then(() => {
    }).catch(error => {
      throw new Error(error)
    })
    ctx.state.code = 0
    ctx.state.data = res[0]
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}
