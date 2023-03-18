const { getPrices, getPricesAll } = require('../service/user.js')


async function getProductPrices(ctx) {
    const { ID, number } = ctx.query
    const rows = await getPrices(ID, number)
    ctx.body = {
        success: true,
        data: rows
    }
}

async function getProductPricesAll(ctx) {
    const rows = await getPricesAll()
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getProductPrices,
    getProductPricesAll
}