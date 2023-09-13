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

let checkPhoneNumber = async (phoneNumber) => {
  try {
    let storeOwner = await db.Worker.findOne({
      where: { phoneNumber: phoneNumber },
    });
    if (storeOwner) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

let createNewWorker = async (data) => {
  let check = await checkPhoneNumber(data.phoneNumber);
  let hash_Password = await hashPassword(data.password);
  if (check) {
    return {
      errCode: 1,
      errMessage: "Your phone number already exists, please try other",
    };
  } else {
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

      return {
        errCode: 0,
        errMessage: "Successful!",
        data: newWoker,
      };
    } catch (error) {
      console.log("error", error);
      return {
        errCode: 2,
        errMessage: "Can't create ",
      };
    }
  }
};

module.exports = { createNewWorker: createNewWorker };
