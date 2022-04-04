const router = require('koa-router')()

const validator = require('../modules/validator') // 表单校验
const sender = require('../modules/sender') // 发送邮件

// www.email.com/send
router.post('/send', async (ctx, next) => {
    let params = Object.assign({}, ctx.request.body)
    if(validator(ctx, params)){
        const sendResult = await sender(params)
        ctx.body = sendResult
    }
})

module.exports = router