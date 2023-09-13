import db from "../models";

let createNewContract = async (data) => {
  try {
    const newContract = await db.Contract.create({
      name: data.name,
      description: data.description,
      isActive: data.isActive,
      storeOwnerId: data.storeOwnerId,
      workerId: data.workerId,
      storeId: data.storeId,
    });

    return newContract;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

module.exports = { createNewContract: createNewContract };
