import db from "../models";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

let createNewWorker = async (data) => {
  let hash_Password = await hashPassword(data.password);
  try {
    const newWoker = await db.Worker.create({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: hash_Password,
      birthday: data.birthday,
      image: data.image,
      gender: data.gender,
    });

    return newWoker;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

module.exports = { createNewWorker: createNewWorker };
