const { checkUser, checkAdminUser } = require('../service/user.js')


async function loginController(ctx) {
    const { username, password } = ctx.query
    console.log(username, password)
    const userInfo = await checkUser(username, password)
    if (userInfo) {
        ctx.body = {
            success: true,
            data: userInfo
        }
    }
    else {
        ctx.body = {
            success: false,
            data: {
                msg: 'ERROR! your username or password not in database!'
            }
        }
    }
}



async function adminLoginController(ctx) {
    const { id, password } = ctx.query
    console.log(id, password)
    const userInfo = await checkAdminUser(id, password)
    if (userInfo) {
        ctx.body = {
            success: true,
            data: userInfo
        }
    }
    else {
        ctx.body = {
            success: false,
            data: {
                msg: 'ERROR! your username or password not in database!'
            }
        }
    }
}


module.exports = {
    loginController,
    adminLoginController
}