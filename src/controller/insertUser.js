const { insertUserInfo, inAdminUserInfo, insertProductInfo, insertSupplierInfo, insertOrderInfo, insertSaleInfo, insertWarehouseInfo, insertShoppingcarInfo } = require('../service/user.js')


async function insertUserInfoToDatabase(ctx) {
    const {username, password, sex} = ctx.query
    const rows = await insertUserInfo(username, password, sex)
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

async function insertAdminInfoToDatabase(ctx) {
  const {ID, password, telephone, sex} = ctx.query
  const rows = await inAdminUserInfo(ID, password, telephone, sex)
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

async function insertProductInfoToDatabase(ctx) {
  const {spid, newpassword, newnumber, newprice, newarehouse} = ctx.query
  const rows = await insertProductInfo(spid, newpassword, newnumber, newprice, newarehouse)
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

async function insertSupplierInfoToDatabase(ctx) {
  const {ghid, telephone, name, address} = ctx.query
  const rows = await insertSupplierInfo(ghid, telephone, name, address)
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

async function insertOrderInfoToDatabase(ctx) {
  const {ID, ghid, buynumber} = ctx.query
  const rows = await insertOrderInfo(ID, ghid, buynumber)
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

async function insertSaleInfoToDatabase(ctx) {
  const {ID, username, number} = ctx.query
  const rows = await insertSaleInfo(ID, username, number)
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

async function insertWarehouseInfoToDatabase(ctx) {
  const {ckid,ckdz} = ctx.query
  const rows = await insertWarehouseInfo(ckid,ckdz)
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

async function insertrShoppingcarInfoToDatabase(ctx) {
  const {ID, username, prices, num, buynumber} = ctx.query
  const rows = await insertShoppingcarInfo(ID, username, prices, num, buynumber)
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
  insertUserInfoToDatabase,
  insertAdminInfoToDatabase,
  insertProductInfoToDatabase,
  insertSupplierInfoToDatabase,
  insertOrderInfoToDatabase,
  insertSaleInfoToDatabase,
  insertWarehouseInfoToDatabase,
  insertrShoppingcarInfoToDatabase
}