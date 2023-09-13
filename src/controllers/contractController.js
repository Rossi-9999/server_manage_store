import contractService from "../services/contractService";
let handleCreateNewContract = async (req, res) => {
  let data = await contractService.createNewContract(req.body);
  if (data) {
    return res.status(200).json({
      errCode: 0,
      message: "Successful!",
      data: data,
    });
  } else {
    return res.status(500).json({
      errCode: 1,
      message: "Can't create contract",
    });
  }
};

module.exports = {
  handleCreateNewContract: handleCreateNewContract,
};
