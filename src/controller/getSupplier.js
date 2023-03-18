const { getSupplier } = require('../service/user.js')


async function getSupplierInfo(ctx) {
    const rows = await getSupplier()
    ctx.body = {
        success: true,
        data: rows
    }
}

module.exports = {
    getSupplierInfo,
}