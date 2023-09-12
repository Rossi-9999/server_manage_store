import express from "express";

import storeOwnerController from "../controllers/storeOwnerController";

let router = express.Router();
let initWebRoutes = (app) => {
  //storeOwnerAPI

  router.post(
    "/api/store-owner/create",
    storeOwnerController.handleCreateNewStoreOwner
  );
  router.get(
    "/api/store-owner/get-all",
    storeOwnerController.handleGetAllStoreOwner
  );
  router.get(
    "/api/store-owner/get-by-identifyId",
    storeOwnerController.handleGeStoreOwnerByIdentifyId
  );
  router.put(
    "/api/store-owner/edit",
    storeOwnerController.handleEditStoreOwner
  );
  router.delete(
    "/api/store-owner/delete",
    storeOwnerController.handleDeleteStoreOwner
  );

  return app.use("/", router);
};
module.exports = initWebRoutes;
