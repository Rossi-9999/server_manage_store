import workerService from "../services/workerService";
let handleCreateNewWorker = async (req, res) => {
  let data = await workerService.createNewWorker(req.body);

  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't create new worker",
    });
  }
};

module.exports = {
  handleCreateNewWorker: handleCreateNewWorker,
};
