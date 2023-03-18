const Koa = require('koa')
const { router } = require('./src/router/index.js')
const cors = require('@koa/cors')

const server = new Koa()

server.use(cors())

server
    .use(router.routes())
    .use(router.allowedMethods())

// server.use((ctx) => {
//     ctx.body = 'hello'
// })

server.listen(8081, () => console.log('server is listening on http://localhost:8081'))