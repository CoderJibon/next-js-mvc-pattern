"use client";
import { UserDelete } from "@/Actions/UserDelete.js";

const DeleteUser = ({ deleteid }) => {
  const deleteUser = async (id) => {
    UserDelete(id);
  };

  return (
    <>
      <span
        onClick={() => deleteUser(deleteid)}
        className="px-3 py-1 bg-red-600 text-white cursor-pointer "
      >
        x
      </span>
    </>
  );
};

export default DeleteUser;
