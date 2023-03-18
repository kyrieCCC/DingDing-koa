const { getOrder, getSale, getSomeSale } = require('../service/user.js')


async function getOrderInfo(ctx) {
    const rows = await getOrder()
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getSaleInfo(ctx) {
    const rows = await getSale()
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getSomeSaleInfo(ctx) {
    const { username } = ctx.query
    const rows = await getSomeSale(username)
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getOrderInfo,
    getSaleInfo,
    getSomeSaleInfo
}