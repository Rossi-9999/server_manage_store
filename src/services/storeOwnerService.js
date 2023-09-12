import db from "../models";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);

let createNewStoreOwner = async (data) => {
  try {
    // check email  is exist ??
    const newStoreOwner = await db.StoreOwner.create({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      birthday: data.birthday,
      image: data.image,
      gender: data.gender,
    });
    console.log("newStoreOwner", newStoreOwner);
    return newStoreOwner;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

let getAllStoreOwner = async () => {
  let listStoreOwner = await db.User.findAll({
    attributes: { exclude: ["password"] },
    raw: true,
  });
};

module.exports = {
  createNewStoreOwner: createNewStoreOwner,
};
