import storeOwnerService from "../services/storeOwnerService";
let handleCreateNewStoreOwner = async (req, res) => {
  let data = await storeOwnerService.createNewStoreOwner(req.body);
  return res.status(200).json(data);
};

let handleGetAllStoreOwner = async (req, res) => {
  let data = await storeOwnerService.getAllStoreOwner();
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't get all storeOwner",
    });
  }
};

let handleGetAllStoreOwnerWithStores = async (req, res) => {
  let data = await storeOwnerService.getAllStoreOwnerWithStores();
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't get all storeOwner",
    });
  }
};

let handleGeStoreOwnerByIdentifyId = async (req, res) => {
  const identifyId = req.body.identifyId;
  let data = await storeOwnerService.getStoreOwnerByIdentifyId(identifyId);
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: `Can't get storeOwner by identifyId: ${identifyId}`,
    });
  }
};

let handleGeStoreOwnerByIdentifyIdWithStore = async (req, res) => {
  const identifyId = req.body.identifyId;
  let data = await storeOwnerService.getStoreOwnerByIdentifyIdWithStores(
    identifyId
  );
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: `Can't get storeOwner by identifyId: ${identifyId}`,
    });
  }
};
let handleEditStoreOwner = async (req, res) => {
  const newStoreOwner = req.body;
  let data = await storeOwnerService.updateStoreOwner(newStoreOwner);
  return res.status(200).json(data);
};
let handleDeleteStoreOwner = async (req, res) => {
  const storeOwnerId = req.body.id;
  if (!storeOwnerId) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing Required Parameters",
    });
  } else {
    let data = await storeOwnerService.deleteStoreOwner(storeOwnerId);
    return res.status(200).json(data);
  }
};

module.exports = {
  handleCreateNewStoreOwner: handleCreateNewStoreOwner,
  handleGetAllStoreOwner: handleGetAllStoreOwner,
  handleGeStoreOwnerByIdentifyId: handleGeStoreOwnerByIdentifyId,
  handleEditStoreOwner: handleEditStoreOwner,
  handleDeleteStoreOwner: handleDeleteStoreOwner,
  handleGetAllStoreOwnerWithStores: handleGetAllStoreOwnerWithStores,
  handleGeStoreOwnerByIdentifyIdWithStore:
    handleGeStoreOwnerByIdentifyIdWithStore,
};
