import express from "express";

import storeOwnerController from "../controllers/storeOwnerController";
import storeController from "../controllers/storeController";
import statusController from "../controllers/statusController";
import workerController from "../controllers/workerController";

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

  // store

  router.post("/api/store/create", storeController.handleCreateNewStore);

  // contract

  // status
  router.post("/api/status/create", statusController.handleCreateNewStatus);

  // worker

  router.post("/api/worker/create", workerController.handleCreateNewWorker);

  return app.use("/", router);
};
module.exports = initWebRoutes;
