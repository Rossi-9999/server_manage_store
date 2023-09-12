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

    return newStoreOwner;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

let getAllStoreOwner = async () => {
  try {
    let listStoreOwner = await db.StoreOwner.findAll({
      attributes: { exclude: ["password"] },
    });
    return listStoreOwner;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

let getStoreOwnerByIdentifyId = async (id) => {
  try {
    let storeOwner = await db.StoreOwner.findOne({
      where: { identifyId: id },
      attributes: { exclude: ["password"] },
    });
    return storeOwner;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

let updateStoreOwner = async (data) => {
  try {
    if (!data.id) {
      return {
        errCode: 1,
        errMessage: "Missing required parameters",
      };
    } else {
      let storeOwner = await db.StoreOwner.findOne({
        where: { id: data.id },
      });

      if (storeOwner) {
        storeOwner.fullName = data.fullName;
        storeOwner.email = data.email;
        storeOwner.birthday = data.birthday;
        storeOwner.image = data.image;
        storeOwner.gender = data.gender;

        await storeOwner.save();

        return {
          errCode: 0,
          message: "update the user success",
        };
      }
    }
  } catch (error) {
    console.log(error);
    return {
      errCode: 2,
      errMessage: "storeOwner not found ",
    };
  }
};
let deleteStoreOwner = async (storeOwnerId) => {
  try {
    let storeOwner = await db.StoreOwner.findOne({
      where: { id: storeOwnerId },
    });

    if (storeOwner) {
      await db.StoreOwner.destroy({
        where: { id: storeOwnerId },
      });

      return {
        errCode: 0,
        errMessage: "The storeOwner already deleted",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      errCode: 2,
      errMessage: "The storeOwner isn't exist",
    };
  }
};

module.exports = {
  createNewStoreOwner: createNewStoreOwner,
  getAllStoreOwner: getAllStoreOwner,
  getStoreOwnerByIdentifyId: getStoreOwnerByIdentifyId,
  updateStoreOwner: updateStoreOwner,
  deleteStoreOwner: deleteStoreOwner,
};
