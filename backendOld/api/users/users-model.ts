export {};
const db = require("../../data/db-config");

function getAllUsers(users: Array<object>) {
  return db("users", users);
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

const addUser = async (user_username: string, user_password: string) => {
  const newUser = await db("users").insert(user_username, user_password);
  return newUser;
};

const deleteUserById = (user_id: number) => {
  return db("users").where("user_id", user_id).del();
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
};
