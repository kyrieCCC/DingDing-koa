const { deleteDataFormDatabase, deleteProductFormDatabase, deleteAdminFormDatabase, deleteSupplierDatabase, deleteOrderDatabase,deleteSaleDatabase, deleteWarehouseDatabase, deleteShoppingCarDatabase, deleteAllCarDatabase } = require("../service/user.js");

async function deleteData(ctx) {
  const { username } = ctx.query;
  const rows = await deleteDataFormDatabase(username);
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


async function deleteProductData(ctx) {
  const { ID } = ctx.query;
  const rows = await deleteProductFormDatabase(ID);
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

async function deleteAdmin(ctx) {
  const { ID } = ctx.query;
  const rows = await deleteAdminFormDatabase(ID);
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

async function deleteSupplierData(ctx) {
  const { ghid } = ctx.query;
  const rows = await deleteSupplierDatabase(ghid);
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

async function deleteOrderData(ctx) {
  const { ID,number } = ctx.query;
  const rows = await deleteOrderDatabase(ID,number);
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

async function deleteSale(ctx) {
  const { ID, username, number } = ctx.query;
  const rows = await deleteSaleDatabase(ID,username, number);
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

async function deleteWarehouse(ctx) {
  const { ckid } = ctx.query;
  const rows = await deleteWarehouseDatabase(ckid);
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

async function deleteShoppingCar(ctx) {
  const { username, prices } = ctx.query;
  const rows = await deleteShoppingCarDatabase(username, prices);
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

async function deleteAllCar(ctx) {
  const { username } = ctx.query;
  const rows = await deleteAllCarDatabase(username);
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
  deleteData,
  deleteProductData,
  deleteAdmin,
  deleteSupplierData,
  deleteOrderData,
  deleteSale,
  deleteWarehouse,
  deleteShoppingCar,
  deleteAllCar
};
