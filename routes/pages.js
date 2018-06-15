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

/**
 * 曲谱操作部分
 */
// 获取曲谱列表
router.get('/staff_list.json', controller.staff.list)

// 提交曲谱
router.post('/staff_add.json', controller.staff.add)

// 上传曲谱图片
router.post('/staff_upload.json', koaForm(options), controller.staff.upload)

// 根据曲谱ID 获取曲谱
router.get('/staff.json', controller.staff.staff)

// 删除曲谱
router.post('/staff_delete.json', controller.staff.delete)

// 更新曲谱
router.post('/staff_update.json', controller.staff.update)

/**
 * 作者操作部分
 */
// 获取作者列表
router.get('/author_list.json', controller.author.list)

// 提交作者
router.post('/author_add.json', controller.author.add)

// 上传作者图片
router.post('/author_upload.json', koaForm(options), controller.author.upload)

// 根据作者ID 获取作者
router.get('/author.json', controller.author.author)

// 删除作者
router.post('/author_delete.json', controller.author.delete)

// 更新作者
router.post('/author_update.json', controller.author.update)

/**
 * 轮播图操作部分
 */
// 获取轮播图列表
router.get('/carousel_list.json', controller.carousel.list)

// 提交轮播图
router.post('/carousel_add.json', controller.carousel.add)

// 上传轮播图图片
router.post('/carousel_upload.json', koaForm(options), controller.carousel.upload)

// 根据轮播图ID 获取轮播图
router.get('/carousel.json', controller.carousel.carousel)

// 删除轮播图
router.post('/carousel_delete.json', controller.carousel.delete)

// 更新轮播图
router.post('/carousel_update.json', controller.carousel.update)

module.exports = router
