/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
  prefix: '/weapi'
})
const controller = require('../weapi')
// const config = require('../config')

/**
 * 曲谱操作部分
 */
// 获取曲谱列表
router.get('/staff_list.json', controller.staff.list)

// 根据曲谱ID 获取曲谱
router.get('/staff.json', controller.staff.staff)

/**
 * 作者操作部分
 */
// 获取作者列表
router.get('/author_list.json', controller.author.list)

// 根据作者ID 获取作者
router.get('/author.json', controller.author.author)

// 根据作者ID获取曲谱
router.get('/staffForAuthor.json', controller.author.staff)

/**
 * 轮播图操作部分
 */
// 获取轮播图列表
router.get('/carousel_list.json', controller.carousel.list)

module.exports = router
