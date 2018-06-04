const router = require('koa-router')({
  prefix: '/mapi'
})

const controller = require('../mapi')
const config = require('../config')

const koaForm = require('formidable-upload-koa')

const options = {
  uploadDir: config.rootDir + '/upload',
  keepExtensions: true
}

// 获取曲谱列表
router.get('/staff_list.json', controller.staff.list)

// 提交曲谱
router.post('/staff_add.json', controller.staff.add)

// 上传曲谱图片
router.post('/staff_upload.json', koaForm(options), controller.staff.upload)

// 根据曲谱ID 获取曲谱
router.get('/staff.json', controller.staff.staff)

// 根据曲谱名称获取曲谱
// router.get('/staff_name.json')

// 删除曲谱
router.post('/staff_delete.json', controller.staff.delete)

// 更新曲谱
router.post('staff_update.json', controller.staff.update)

module.exports = router
