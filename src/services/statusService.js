import db from "../models";

let createNewStatus = async (data) => {
  try {
    const newStatus = await db.Status.create({
      name: data.name,
      type: data.type,
    });

    return newStatus;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

module.exports = { createNewStatus: createNewStatus };
