import storeService from "../services/storeService";
let handleCreateNewStore = async (req, res) => {
  let data = await storeService.createNewStore(req.body);
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't create store",
    });
  }
};

module.exports = {
  handleCreateNewStore: handleCreateNewStore,
};
