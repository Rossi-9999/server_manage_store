import express from "express";

import storeOwnerController from "../controllers/storeOwnerController";
import storeController from "../controllers/storeController";
import statusController from "../controllers/statusController";
import workerController from "../controllers/workerController";
import contractController from "../controllers/contractController";

let router = express.Router();
let initWebRoutes = (app) => {
  //store-owner API

  router.post(
    "/api/store-owner/create",
    storeOwnerController.handleCreateNewStoreOwner
  );
  router.get(
    "/api/store-owner/get-all",
    storeOwnerController.handleGetAllStoreOwner
  );
  router.get(
    "/api/store-owner/get-all-with-stores",
    storeOwnerController.handleGetAllStoreOwnerWithStores
  );
  router.get(
    "/api/store-owner/get-by-identifyId",
    storeOwnerController.handleGeStoreOwnerByIdentifyId
  );
  router.get(
    "/api/store-owner/get-by-identifyId-with-stores",
    storeOwnerController.handleGeStoreOwnerByIdentifyIdWithStore
  );
  router.put(
    "/api/store-owner/edit",
    storeOwnerController.handleEditStoreOwner
  );
  router.delete(
    "/api/store-owner/delete",
    storeOwnerController.handleDeleteStoreOwner
  );

  // store API

  router.post("/api/store/create", storeController.handleCreateNewStore);

  // status API
  router.post("/api/status/create", statusController.handleCreateNewStatus);

  // worker API

  router.post("/api/worker/create", workerController.handleCreateNewWorker);

  // contract API
  router.post(
    "/api/contract/create",
    contractController.handleCreateNewContract
  );

  return app.use("/", router);
};
module.exports = initWebRoutes;
