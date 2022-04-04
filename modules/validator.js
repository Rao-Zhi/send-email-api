const WeValidator = require('we-validator')

const oValidator = new WeValidator({
    rules: {
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        email: {
            required: '邮箱不能为空',
            email: '邮箱格式不正确'
        },
    }
})

const validator = (ctx, params) => {
    return oValidator.checkData(params, (data) => {
        ctx.body = {
            status: 'failure',
            message: data.msg
        }
    })
}

module.exports = validator