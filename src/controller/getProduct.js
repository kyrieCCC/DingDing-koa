const { getProducts } = require('../service/user.js')


async function getProductInfo(ctx) {
    const rows = await getProducts()
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getProductInfo,
}