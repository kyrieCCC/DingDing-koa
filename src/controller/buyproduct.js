const { insertbuyproductInfo } = require('../service/user.js')


async function buyproductInfo(ctx) {
    const {ID, ghid, buynumber, number, ckid} = ctx.query
    const rows = await insertbuyproductInfo(ID, ghid, buynumber,number, ckid)
    if (!rows.affectedRows) {
        ctx.body = {
          success: false,
          data: {
            msg: "can not found this data",
          },
        };
      } else {
        ctx.body = {
          success: true,
          data: {
            data: rows.affectedRows,
            msg: "delete suceess",
          },
        };
      }
}

module.exports = {
    buyproductInfo,
}