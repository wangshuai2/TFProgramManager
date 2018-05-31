const router = require('koa-router')({
  prefix: '/mapi'
})

const controller = require('../mapi')

// 获取曲谱列表
router.get('/staff_list.json', controller.staff.test)

// 提交曲谱
// router.get('/staff_add.json', controller.staffAdd)

// 上传曲谱图片
// router.get('/staff_upload.json', controller.staffUpload)

// 根据曲谱ID 获取曲谱
// router.get('/staff.json', controller.staff)

// 根据曲谱名称获取曲谱
// router.get('/staff_name.json')

// 删除曲谱
// router.delete('staff.json')

// 更新曲谱
// router.post('staff_update.json')

module.exports = router
