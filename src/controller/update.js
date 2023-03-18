const {
  updateDataFormDatabase,
  payProductInfoFormDatabase,
  payAdminInfoFormDatabase,
  updateSupplierInfoFormDatabase,
  updateOrderInfoFormDatabase,
  updateSaleInfoFormDatabase,
  updateWarehouseInfoFormDatabase,
  updateSendInfoFormDatabase
} = require("../service/user.js");

async function updateData(ctx) {
  const { username, password, sex } = ctx.query;
  const rows = await updateDataFormDatabase(username, password, sex);
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
        msg: "update suceess",
      },
    };
  }
}

async function payProductInfo(ctx) {
  const { ID, number, buynumber, username } = ctx.query;
  const rows = await payProductInfoFormDatabase(
    ID,
    number,
    buynumber,
    username
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateAdminData(ctx) {
  const { ID, password, telephone, sex } = ctx.query;
  const rows = await payAdminInfoFormDatabase(
    ID,
    password,
    telephone,
    sex
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateSupplierData(ctx) {
  const { ghid, telephone, name, address } = ctx.query;
  const rows = await updateSupplierInfoFormDatabase(
    ghid,
    telephone,
    name,
    address
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateOrderData(ctx) {
  const { ID, ghid, buynumber } = ctx.query;
  const rows = await updateOrderInfoFormDatabase(
    ID, ghid, buynumber
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateSaleData(ctx) {
  const { ID, username, number } = ctx.query;
  const rows = await updateSaleInfoFormDatabase(
    ID, username, number
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateWarehouseData(ctx) {
  const { ckid, ckdz } = ctx.query;
  const rows = await updateWarehouseInfoFormDatabase(
    ckid, ckdz
  );
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
        msg: "update suceess",
      },
    };
  }
}

async function updateSendData(ctx) {
  const { ID, username, number } = ctx.query;
  const rows = await updateSendInfoFormDatabase(
    ID, username, number
  );
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
        msg: "update suceess",
      },
    };
  }
}

module.exports = {
  updateData,
  payProductInfo,
  updateAdminData,
  updateSupplierData,
  updateOrderData,
  updateSaleData,
  updateWarehouseData,
  updateSendData
};
