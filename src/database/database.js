const mysql = require("mysql2/promise");
const mySqlConn = require("../../config.json");

let connection = null;

async function main() {
  if (connection) {
    return connection;
  }
  connection = await mysql.createConnection(mySqlConn);
  return connection;
}

async function getUserById(username) {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT * FROM `user` WHERE `username` = ? ",
    [username]
  );
  return rows;
}

async function getAdminUserById(id) {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT * FROM `admin` WHERE `ID` = ? ",
    [id]
  );
  return rows;
}

async function getUserInDatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT username,password,sex FROM `user`"
  );
  return rows;
}

async function getAdminIndatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT ID,password,sex,telephone FROM `admin`"
  );
  return rows;
}

async function insertUserData(username, password, sex) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `user` (username, password, sex) VALUES (" +
      "'" +
      username +
      "'" +
      "," +
      "'" +
      password +
      "'" +
      "," +
      "'" +
      sex +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertWarehouseData(ckid, ckdz) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `warehouse` (ckid, ckdz) VALUES (" +
      "'" +
      ckid +
      "'" +
      "," +
      "'" +
      ckdz +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}


async function insertAdminData(ID, password, telephone, sex) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `admin` (ID, password, telephone, sex) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      password +
      "'" +
      "," +
      "'" +
      telephone +
      "'" +
      "," +
      "'" +
      sex +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertOrderData(ID, ghid, buynumber) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `admin` (ID, ghid, buynumber) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      ghid +
      "'" +
      "," +
      "'" +
      buynumber +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertSaleData(ID, username, number) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `sale` (ID, username, number) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      username +
      "'" +
      "," +
      "'" +
      number +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertProductData(
  spid,
  newpassword,
  newnumber,
  newprice,
  newarehouse
) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `product` (ID, name, number, prices, ckid) VALUES (" +
      "'" +
      spid +
      "'" +
      "," +
      "'" +
      newpassword +
      "'" +
      "," +
      "'" +
      newnumber +
      "'" +
      "," +
      "'" +
      newprice +
      "'" +
      "," +
      "'" +
      newarehouse +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertSupplierData(ghid, telephone, name, address) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `supplier` (ghid, telephone, name, address) VALUES (" +
      "'" +
      ghid +
      "'" +
      "," +
      "'" +
      telephone +
      "'" +
      "," +
      "'" +
      name +
      "'" +
      "," +
      "'" +
      address +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function insertShoppingData(ID, username, prices, number, buynumber) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `shoppingcar` (ID, username, prices, number, buynumber) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      username +
      "'" +
      "," +
      "'" +
      prices +
      "'" +
      "," +
      "'" +
      number +
      "'" +
      "," +
      "'" +
      buynumber +
      "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function deleteUserData(username) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `user` WHERE `username` ='" + username + "'"
  );
  return rows;
  // console.log(rows)
  // console.log(fields)
  // console.log(error)
}

async function deleteProductData(ID) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `user` WHERE `ID` ='" + ID + "'"
  );
  return rows;
  // console.log(rows)
  // console.log(fields)
  // console.log(error)
}

async function deleteSaleData(ID, username, number) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `sale` WHERE `ID` ='" + ID + "' AND `username` ='" + username + "' AND `number` ='" + number + "'"
  );
  return rows;
}

async function deleteWarehouseData(ckid) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `warehouse` WHERE `ckid` ='" + ckid + "'"
  );
  return rows;
}

async function deleteAdminData(ID) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `admin` WHERE `ID` ='" + ID + "'"
  );
  return rows;
}

async function deleteSupplierData(ghid) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `supplier` WHERE `ghid` ='" + ghid + "'"
  );
  return rows;
}


async function deleteOrderData(ID,number) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `buyproduct` WHERE `ID` ='" + ID + "' AND `buynumber` ='" + number + "'"
  );
  return rows;
}

async function deleteShoppingCarData(username, prices) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `shoppingcar` WHERE `username` ='" + username + "' AND `prices` ='" + prices + "'"
  );
  return rows;
}

async function deleteAllCarData(username) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "DELETE FROM `shoppingcar` WHERE `username` ='" + username + "'"
  );
  return rows;
}


async function updateUserData(username, password, sex) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `user` SET `password` ='" +
      password +
      "',`sex` ='" +
      sex +
      "' WHERE `username` = '" +
      username +
      "'"
  );
  return rows;
  // console.log(rows)
  // console.log(fields)
  // console.log(error)
}

async function updateWarehouseData(ckid, ckdz) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `warehouse` SET `ckdz` ='" +
    ckdz +
      "' WHERE `ckid` = '" +
      ckid +
      "'"
  );
  return rows;
}

async function updateAdminData(ID, password, telephone, sex) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `admin` SET `password` ='" +
      password +
      "',`sex` ='" +
      sex +
      "',`telephone` ='" +
      telephone +
      "' WHERE `ID` = '" +
      ID +
      "'"
  );
  return rows;
  // console.log(rows)
  // console.log(fields)
  // console.log(error)
}

async function updateSupplierData(ghid, telephone, name, address) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `supplier` SET `telephone` ='" +
      telephone +
      "',`telephone` ='" +
      telephone +
      "',`name` ='" +
      name +
      "',`address` ='" +
      address +
      "' WHERE `ghid` = '" +
      ghid +
      "'"
  );
  return rows;
}

async function updateOrderData(ID, ghid, buynumber) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `buyproduct` SET `ghid` ='" +
      ghid +
      "',`buynumber` ='" +
      buynumber +
      "' WHERE `ID` = '" +
      ID +
      "'"
  );
  return rows;
}

async function updateSaleData(ID, username, number) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `sale` SET `username` ='" +
    username +
      "',`number` ='" +
      number +
      "' WHERE `ID` = '" +
      ID +
      "'"
  );
  return rows;
}

async function updateSendData(ID, username, number) {
  const ins = await main();
  const [rows, fields, error] = await ins.execute(
    "UPDATE `sale` SET `send` = 'yes' WHERE `ID` = '" + ID + "' AND `username` = '" + username + "' AND `number` = '" + number + "'"
  );
  return rows;
}

async function getProductsData() {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `product`");
  return rows;
}

async function getProductsPrice(ID, number) {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT prices,number FROM `product` WHERE `ID`='" + ID + "'"
  );
  return rows;
}

async function getSupplierInDatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `supplier`");
  return rows;
}

async function payProductData(ID, number, buynumber, username) {
  const ins = await main();
  const newNumber = parseInt(number) - parseInt(buynumber);
  await ins.execute(
    "UPDATE `product` SET `number` ='" + //更新商品表
      newNumber +
      "' WHERE `ID` = '" +
      ID +
      "'"
  );
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `sale` (ID, username, number, send) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      username +
      "'" +
      "," +
      "'" +
      buynumber +
      "'" +
      ", 'no' )"
  );
  return rows;
  // console.log(rows)
  // console.log(fields)
  // console.log(error)
}

async function insertbuyproductData(ID, ghid, buynumber, number, ckid) {
  const ins = await main();
  const newNumber = parseInt(number) + parseInt(buynumber);
  console.log(newNumber);
  await ins.execute(
    "UPDATE `product` SET `number` ='" +
      newNumber +
      "' WHERE `ID` = '" +
      ID +
      "'"
  );
  const [rows, fields, error] = await ins.execute(
    "INSERT INTO `buyproduct` (ID, ghid, buynumber) VALUES (" +
      "'" +
      ID +
      "'" +
      "," +
      "'" +
      ghid +
      "'" +
      "," +
      "'" +
      parseInt(buynumber) +
      "'" +
      // "," +
      // "'" +
      // ckid +
      // "'" +
      ")"
  );
  return rows;
  // console.log(rows)
}

async function getOrderInDatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `buyproduct`");
  return rows;
}

async function getSaleInDatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `sale`");
  return rows;
}

async function getSomeSaleInDatabase(username) {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT * FROM `sale` WHERE `username` = '" + username + "'"
  );
  return rows;
}

async function getSomeUserInDatabase(username) {
  const ins = await main();
  const [rows, fields] = await ins.execute(
    "SELECT * FROM `user` WHERE `username` = '" + username + "'"
  );
  return rows;
}

async function getWarehouseInDatabase() {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `warehouse`");
  return rows;
}

async function getShoppingCarInDatabase(username) {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `shoppingcar` WHERE `username` = '" + username + "'");
  return rows;
}


module.exports = {
  getUserById,
  getAdminUserById,
  getUserInDatabase,
  getAdminIndatabase,
  insertUserData,
  deleteUserData,
  updateUserData,
  getProductsData,
  deleteProductData,
  getProductsPrice,
  getSupplierInDatabase,
  payProductData,
  insertbuyproductData,
  getOrderInDatabase,
  getSaleInDatabase,
  getSomeSaleInDatabase,
  getWarehouseInDatabase,
  deleteAdminData,
  updateAdminData,
  insertAdminData,
  insertProductData,
  deleteSupplierData,
  insertSupplierData,
  updateSupplierData,
  deleteOrderData,
  updateOrderData,
  insertOrderData,
  deleteSaleData,
  updateSaleData,
  insertSaleData,
  deleteWarehouseData,
  updateWarehouseData,
  insertWarehouseData,
  updateSendData,
  getSomeUserInDatabase,
  insertShoppingData,
  deleteShoppingCarData,
  getShoppingCarInDatabase,
  deleteAllCarData
};
