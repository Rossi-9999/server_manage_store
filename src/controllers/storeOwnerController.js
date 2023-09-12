import storeOwnerService from "../services/storeOwnerService";
let handleCreateNewStoreOwner = async (req, res) => {
  let data = await storeOwnerService.createNewStoreOwner(req.body);
  console.log("data", data);
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Success",
      data: data,
    });
  } else {
    return res.status(404).json({
      errCode: 1,
      message: "Can't create user",
    });
  }
};

module.exports = {
  handleCreateNewStoreOwner: handleCreateNewStoreOwner,
};
