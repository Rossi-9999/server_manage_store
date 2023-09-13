import statusService from "../services/statusService";
let handleCreateNewStatus = async (req, res) => {
  let data = await statusService.createNewStatus(req.body);
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't create status",
    });
  }
};

module.exports = {
  handleCreateNewStatus: handleCreateNewStatus,
};
