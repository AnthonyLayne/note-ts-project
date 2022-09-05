import db from "data/db-config";
import { User } from "./types";

// **** Functions **** //

function getAllUsers() {
  return db("users");
}

async function getUserById(user_id: number) {
  const userData = await db("users").where("user_id", user_id);
  const firstRow = userData[0];
  if (!firstRow) return null;
  const user = {
    user_id: firstRow.user_id,
    user_username: firstRow.user_username,
    user_password: firstRow.user_password,
  };
  return user;
}

// const insertUserData = (userData: Partial<User>, returnVals?: (keyof Partial<User>)[]) =>
//   db("users").insert(userData, returnVals || ["*"]);

// insertUserData({ email: "" }, ["email"]);

const addUser = (user_username: string, user_password: string) => {
  console.log("inside addUser", user_username, user_password);
  return db("users").insert({ user_username, user_password }, ["user_id"]);
};

const deleteUserById = (user_id: number) => {
  return db("users").where("user_id", user_id).del();
};

// **** Export default **** //

const userService = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
} as const;

export default userService;
