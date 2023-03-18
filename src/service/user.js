const { User } = require("../database/test-database.js");
const {
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
} = require("../database/database.js");

async function checkUser(username, password) {
  // if (User[username] && User[username].password === password) {
  //     return User[username]
  // }
  // else {
  //     return null
  // }
  const rows = await getUserById(username);
  if (rows.length !== 1) {
    return null;
  }
  const user = rows[0];
  if (user.password === password) {
    return user;
  }
  return null;
}

async function checkAdminUser(id, password) {
  const rows = await getAdminUserById(id);
  if (rows.length !== 1) {
    return null;
  }
  const user = rows[0];
  if (user.password === password) {
    return user;
  }
  return null;
}

async function getUsers() {
  const rows = await getUserInDatabase();
  return rows || [];
}

async function getAdmins() {
  const rows = await getAdminIndatabase();
  return rows || [];
}

async function insertUserInfo(username, password, sex) {
  const rows = await insertUserData(username, password, sex);
  return rows || [];
}

async function insertOrderInfo(ID, ghid, buynumber) {
  const rows = await insertOrderData(ID, ghid, buynumber);
  return rows || [];
}

async function inAdminUserInfo(ID, password, telephone, sex) {
  const rows = await insertAdminData(ID, password, telephone, sex);
  return rows || [];
}

async function deleteDataFormDatabase(username) {
  const rows = await deleteUserData(username);
  return rows || [];
}

async function deleteProductFormDatabase(ID) {
  const rows = await deleteProductData(ID);
  return rows || [];
}

async function deleteSaleDatabase(ID, username, number) {
  const rows = await deleteSaleData(ID, username, number);
  return rows || [];
}

async function deleteWarehouseDatabase(ckid) {
  const rows = await deleteWarehouseData(ckid);
  return rows || [];
}

async function deleteAdminFormDatabase(ID) {
  const rows = await deleteAdminData(ID);
  return rows || [];
}

async function deleteSupplierDatabase(ghid) {
  const rows = await deleteSupplierData(ghid);
  return rows || [];
}

async function deleteOrderDatabase(ID,number) {
  const rows = await deleteOrderData(ID,number);
  return rows || [];
}

async function deleteShoppingCarDatabase(username, prices) {
  const rows = await deleteShoppingCarData(username, prices);
  return rows || [];
}

async function deleteAllCarDatabase(username) {
  const rows = await deleteAllCarData(username);
  return rows || [];
}

async function updateDataFormDatabase(username, password, sex) {
  const rows = await updateUserData(username, password, sex);
  return rows || [];
}

async function updateSupplierInfoFormDatabase(ghid, telephone, name, address) {
  const rows = await updateSupplierData(ghid, telephone, name, address);
  return rows || [];
}

async function updateOrderInfoFormDatabase(ID, ghid, buynumber) {
  const rows = await updateOrderData(ID, ghid, buynumber);
  return rows || [];
}

async function updateSaleInfoFormDatabase(ID, username, number) {
  const rows = await updateSaleData(ID, username, number);
  return rows || [];
}

async function updateSendInfoFormDatabase(ID, username, number) {
  const rows = await updateSendData(ID, username, number);
  return rows || [];
}

async function updateWarehouseInfoFormDatabase(ckid,ckdz) {
  const rows = await updateWarehouseData(ckid,ckdz);
  return rows || [];
}

async function payAdminInfoFormDatabase(ID, password, telephone, sex) {
  const rows = await updateAdminData(ID, password, telephone, sex);
  return rows || [];
}

async function getProducts() {
  const rows = await getProductsData();
  return rows || [];
}

async function getPrices(ID, number) {
  const rows = await getProductsPrice(ID, number);
  return rows || [];
}

async function getPricesAll() {
  const rows = await getProductsPrice();
  return rows || [];
}

async function getSupplier() {
  const rows = await getSupplierInDatabase();
  return rows || [];
}

async function payProductInfoFormDatabase(ID, number, buynumber, username) {
  const rows = await payProductData(ID, number, buynumber, username);
  return rows || [];
}

async function insertbuyproductInfo(ID, ghid, buynumber, number, ckid) {
  const rows = await insertbuyproductData(ID, ghid, buynumber, number, ckid);
  return rows || [];
}

async function insertProductInfo(spid, newpassword, newnumber, newprice, newarehouse) {
  const rows = await insertProductData(spid, newpassword, newnumber, newprice, newarehouse);
  return rows || [];
}

async function insertSupplierInfo(ghid, telephone, name, address) {
  const rows = await insertSupplierData(ghid, telephone, name, address);
  return rows || [];
}

async function insertSaleInfo(ID, username, number) {
  const rows = await insertSaleData(ID, username, number);
  return rows || [];
}

async function insertWarehouseInfo(ckid, ckdz) {
  const rows = await insertWarehouseData(ckid, ckdz);
  return rows || [];
}

async function insertShoppingcarInfo(ID, username, prices, number, buynumber) {
  const rows = await insertShoppingData(ID, username, prices, number, buynumber);
  return rows || [];
}

async function getOrder() {
  const rows = await getOrderInDatabase();
  return rows || [];
}

async function getSale() {
  const rows = await getSaleInDatabase();
  return rows || [];
}


async function getSomeSale(username) {
  const rows = await getSomeSaleInDatabase(username);
  return rows || [];
}


async function getwarehouse() {
  const rows = await getWarehouseInDatabase();
  return rows || [];
}

async function getSomeUser(username) {
  const rows = await getSomeUserInDatabase(username);
  return rows || [];
}

async function getShoppingCar(username) {
  const rows = await getShoppingCarInDatabase(username);
  return rows || [];
}


module.exports = {
  checkUser,
  checkAdminUser,
  getUsers,
  getAdmins,
  insertUserInfo,
  deleteDataFormDatabase,
  updateDataFormDatabase,
  getProducts,
  deleteProductFormDatabase,
  getPrices,
  getPricesAll,
  getSupplier,
  payProductInfoFormDatabase,
  insertbuyproductInfo,
  getOrder,
  getSale,
  getSomeSale,
  getwarehouse,
  deleteAdminFormDatabase,
  payAdminInfoFormDatabase,
  inAdminUserInfo,
  insertProductInfo,
  deleteSupplierDatabase,
  insertSupplierInfo,
  updateSupplierInfoFormDatabase,
  deleteOrderDatabase,
  updateOrderInfoFormDatabase,
  insertOrderInfo,
  deleteSaleDatabase,
  updateSaleInfoFormDatabase,
  insertSaleInfo,
  deleteWarehouseDatabase,
  updateWarehouseInfoFormDatabase,
  insertWarehouseInfo,
  updateSendInfoFormDatabase,
  getSomeUser,
  insertShoppingcarInfo,
  deleteShoppingCarDatabase,
  getShoppingCar,
  deleteAllCarDatabase
};
