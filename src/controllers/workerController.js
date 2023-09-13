import workerService from "../services/workerService";
let handleCreateNewWorker = async (req, res) => {
  let data = await workerService.createNewWorker(req.body);

  return res.status(200).json(data);
};

module.exports = {
  handleCreateNewWorker: handleCreateNewWorker,
};
