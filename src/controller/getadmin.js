const { getAdmins, getShoppingCar } = require('../service/user.js')


async function getadminInfo(ctx) {
    const rows = await getAdmins()
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getShoppingCarInfo(ctx) {
    const { username } = ctx.query
    const rows = await getShoppingCar(username)
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getadminInfo,
    getShoppingCarInfo
}