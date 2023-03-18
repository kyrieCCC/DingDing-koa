const Router = require("@koa/router");
const {
  loginController,
  adminLoginController,
} = require("../controller/loginController.js");
const { getUserInfo, getwarehouseInfo, getSomeUserInfo } = require("../controller/getUser.js");
const { getadminInfo, getShoppingCarInfo } = require("../controller/getadmin.js");
const {
  insertUserInfoToDatabase,
  insertAdminInfoToDatabase,
  insertProductInfoToDatabase,
  insertSupplierInfoToDatabase,
  insertOrderInfoToDatabase,
  insertSaleInfoToDatabase,
    insertWarehouseInfoToDatabase,
    insertrShoppingcarInfoToDatabase
} = require("../controller/insertUser.js");
const {
  deleteData,
  deleteAdmin,
  deleteSupplierData,
  deleteOrderData,
    deleteSale,
    deleteShoppingCar,
    deleteAllCar
} = require("../controller/delete.js");
const {
  updateData,
  payProductInfo,
  updateAdminData,
  updateSupplierData,
  updateOrderData,
  updateSaleData,
  updateWarehouseData,
  updateSendData,
} = require("../controller/update.js");
const { getProductInfo } = require("../controller/getProduct.js");
const {
  deleteProductData,
  deleteWarehouse,
} = require("../controller/delete.js");
const {
  getProductPrices,
  getProductPricesAll,
} = require("../controller/getPrice.js");
const { getSupplierInfo } = require("../controller/getSupplier.js");
const { buyproductInfo } = require("../controller/buyproduct.js");
const {
  getOrderInfo,
  getSaleInfo,
    getSomeSaleInfo,
  
} = require("../controller/getOrder.js");

const router = new Router();

//接收客户端请求并 获取信息
router.get("/login", loginController);
router.get("/adminLogin", adminLoginController);
router.get("/user/all", getUserInfo);
router.get("/admin/all", getadminInfo);
router.get("/product/all", getProductInfo);
router.get("/product", getProductPrices);
router.get("/product/pricesAll", getProductPricesAll);
router.get("/supplier/all", getSupplierInfo);
router.get("/order/all", getOrderInfo);
router.get("/sale/all", getSaleInfo);
router.get("/sale", getSomeSaleInfo);
router.get("/warehouse", getwarehouseInfo);
router.get("/seacherUser", getSomeUserInfo); 
router.get("/getShoppingCar", getShoppingCarInfo);

//新增信息
router.post("/register", insertUserInfoToDatabase);
router.post("/registerAdmin", insertAdminInfoToDatabase);
router.post("/registerSupplier", insertSupplierInfoToDatabase);
router.post("/registerProduct", insertProductInfoToDatabase);
router.post("/registerOrder", insertOrderInfoToDatabase);
router.post("/registerSale", insertSaleInfoToDatabase);
router.post("/registerWarehouse", insertWarehouseInfoToDatabase); 
router.post("/registerShoppingcar", insertrShoppingcarInfoToDatabase);

//删除信息
router.post("/delete", deleteData);
router.post("/deleteproduct", deleteProductData);
router.post("/deleteSupplier", deleteSupplierData);
router.post("/deleteOrder", deleteOrderData);
router.post("/deleteAdmin", deleteAdmin);
router.post("/deleteSale", deleteSale);
router.post("/deleteWarehouse", deleteWarehouse); 
router.post("/deleteShoppingCar", deleteShoppingCar); 
router.post("/deleteAllCar", deleteAllCar);

//更新信息
router.post("/update", updateData);
router.post("/updateAdmin", updateAdminData);
router.post("/updateOrder", updateOrderData);
router.post("/updateSupplier", updateSupplierData);
router.post("/updateSale", updateSaleData);
router.post("/updateWarehouse", updateWarehouseData);
router.post("/updateSendData", updateSendData);

//商品的购买
router.post("/payproduct", payProductInfo);
router.post("/buyproduct", buyproductInfo);

module.exports = {
  router,
};
