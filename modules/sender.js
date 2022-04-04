const nodemailer = require('nodemailer')

const sender = (params) => {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'raozhi19981006@gmail.com',
                pass: 'raozhi19981006...'
            }
        });

        let mailOptions = {
            from: 'raozhi19981006@gmail.com',
            to: '2829656235@qq.com',
            subject: '邮件',
            html: `姓名：${params.name || ''}
				   微信号/WhatsApp：${params.wechat || ''}
                   邮箱：${params.email || ''}
                   手机：${params.phone || ''}
                   留言：${params.message || ''}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            try{
                transporter.close()
            }catch(e){
            }
            
            if (error) {
                resolve({
                    status: 'failure',
                    message: '邮件发送失败'
                })
                return console.log(error);
            }

            resolve({
                status: 'success',
                message: '邮件发送成功'
            })
        });
    })
}

module.exports = sender