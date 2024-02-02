import { FaUsersGear } from "react-icons/fa6";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-5">
        <FaUsersGear className="text-6xl text-title-color" />
        <TbError404 className="text-6xl text-title-color" />
      </div>

      <h1 className="text-title-color text-4xl font-extrabold">
        Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
