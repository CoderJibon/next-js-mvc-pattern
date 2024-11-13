import DeleteUser from "@/components/DeleteUser.jsx";
import { CreateUser, getAllUsers } from "@/controller/userController/User.js";
import { revalidatePath } from "next/cache.js";

export default async function Home() {
  const user = await getAllUsers();
  const createhandleForm = async (fromData) => {
    "use server";
    const name = fromData.get("name");
    const email = fromData.get("email");
    const phone = fromData.get("phone");
    const location = fromData.get("location");

    await CreateUser({ name, email, phone, location });
    revalidatePath("/");
  };

  return (
    <div>
      <form className="ml-5 mb-5 " action={createhandleForm}>
        <div className="block">
          <input
            placeholder="name"
            className="border"
            type="text"
            name="name"
          />
        </div>
        <div>
          <input
            placeholder="email"
            className="border"
            type="email"
            name="email"
          />
        </div>
        <div>
          <input
            placeholder="phone"
            className="border"
            type="text"
            name="phone"
          />
        </div>
        <div>
          <input
            placeholder="location"
            className="border"
            type="text"
            name="location"
          />
        </div>
        <button className="px-5 py-2 mt-2 text-white rounded-md bg-green-700">
          submit
        </button>
      </form>

      <div className="h-1 w-full bg-black"></div>
      <div className="mt-5">
        <ul>
          {user &&
            user.users.map((item) => (
              <li key={item._id}>
                {item.name},{item.email},{item.phone},{item.location}{" "}
                <DeleteUser deleteid={item._id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
