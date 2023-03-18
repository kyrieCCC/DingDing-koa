const { getUsers, getwarehouse, getSomeUser } = require('../service/user.js')


async function getUserInfo(ctx) {
    const rows = await getUsers()
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getwarehouseInfo(ctx) {
    const rows = await getwarehouse()
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getSomeUserInfo(ctx) {
    const { username } = ctx.query
    const rows = await getSomeUser(username)
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getUserInfo,
    getwarehouseInfo,
    getSomeUserInfo
}