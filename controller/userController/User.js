import mongoDBConnection from "@/config/mongoDBConnection.js";
import User from "@/model/userSchema.js";

//get all users
export const getAllUsers = async () => {
  try {
    await mongoDBConnection();
    const users = await User.find();
    if (!users.length > 0) throw new Error("user not found");
    return { users, message: "data load success" };
  } catch (error) {
    console.log(error.message);
  }
};
//createAUser
export const CreateUser = async (data) => {
  try {
    await mongoDBConnection();
    const users = await User.create(data);
    if (users) {
      return { message: "create data success" };
    } else {
      return { message: "Failed to create user" };
    }
  } catch (error) {
    console.log(error.message);
  }
};

//delete user
export const DeleteUserId = async (id) => {
  try {
    await mongoDBConnection();
    console.log(id);
    const users = await User.findByIdAndDelete(id);

    return { message: "user delete success" };
  } catch (error) {
    console.log(error.message);
  }
};
