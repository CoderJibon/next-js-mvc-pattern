"use server";
import { DeleteUserId } from "@/controller/userController/User.js";
import { revalidatePath } from "next/cache.js";

export const UserDelete = async (id) => {
  await DeleteUserId(id);
  revalidatePath("/");
  console.log("user deleted");
};
