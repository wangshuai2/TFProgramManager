const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('wangTest')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

app.use(response)

app.use(bodyParser())

// 引入路由分发
const apiRouter = require('./routes/index')
app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

const pageRouter = require('./routes/pages')
app.use(pageRouter.routes())
app.use(pageRouter.allowedMethods())

app.listen(config.port, () => debug(`listening on port ${config.port}`))
