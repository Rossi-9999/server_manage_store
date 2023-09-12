import express from "express";

import storeOwnerController from "../controllers/storeOwnerController";

let router = express.Router();
let initWebRoutes = (app) => {
  //storeOwnerAPI

  router.post(
    "/api/store-owner/create",
    storeOwnerController.handleCreateNewStoreOwner
  );

  return app.use("/", router);
};
module.exports = initWebRoutes;
