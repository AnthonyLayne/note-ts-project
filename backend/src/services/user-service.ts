import db from "data/db-config";

// **** Functions **** //

function getAllUsers() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return db("users");
}

// async function getUserById(user_id: number) {
//   const userData = await db("users").where("user_id", user_id);
//   const firstRow = userData[0];
//   if (!firstRow) return null;
//   const user = {
//     user_id: firstRow.user_id,
//     user_username: firstRow.user_username,
//     user_password: firstRow.user_password,
//   };
//   return user;
// }

// const addUser = (user_username: string, user_password: string) => {
//   return db("users").insert(user_username, user_password);
// };

// const deleteUserById = (user_id: number) => {
//   return db("users").where("user_id", user_id).del();
// };

// **** Export default **** //

const userService = {
  getAllUsers,
  // getUserById,
  // addUser,
  // deleteUserById,
} as const;

export default userService;
