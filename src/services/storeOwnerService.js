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
    let storeOwner = await db.StoreOwner.findOne({
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
let createNewStoreOwner = async (data) => {
  let hash_Password = await hashPassword(data.password);
  let check = await checkPhoneNumber(data.phoneNumber);
  if (check) {
    return {
      errCode: 1,
      errMessage: "Your phone number already exists, please try other",
    };
  } else {
    try {
      const newStoreOwner = await db.StoreOwner.create({
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
        data: newStoreOwner,
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

let getAllStoreOwnerWithStores = async () => {
  try {
    let listStoreOwner = await db.StoreOwner.findAll({
      attributes: { exclude: ["password"] },
      include: db.Store,
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

let getStoreOwnerByIdentifyIdWithStores = async (id) => {
  try {
    let storeOwner = await db.StoreOwner.findOne({
      where: { identifyId: id },
      attributes: { exclude: ["password"] },
      include: db.Store,
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
  getAllStoreOwnerWithStores: getAllStoreOwnerWithStores,
  getStoreOwnerByIdentifyIdWithStores: getStoreOwnerByIdentifyIdWithStores,
};
