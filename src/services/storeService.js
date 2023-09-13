import db from "../models";

let createNewStore = async (data) => {
  try {
    const newStore = await db.Store.create({
      name: data.name,
      logo: data.logo,
      phoneNumber: data.phoneNumber,
      email: data.email,
      storeOwnerId: data.storeOwnerId,
    });

    return newStore;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

module.exports = { createNewStore: createNewStore };
