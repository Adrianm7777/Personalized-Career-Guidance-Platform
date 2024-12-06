import Link from "next/link";
import UserIcon from "../assets/UserIcon";
import HomeIcon from "../assets/HomeIcon";

const Header = () => {
  return (
    <div className="w-screen h-16 fixed top-0 bg-gray-900 text-white shadow-lg flex justify-between items-center px-4 sm:px-6 md:px-8">
      <div className="flex justify-center items-center">
        <Link href="/">
          <div className="p-2 hover:bg-gray-700 rounded-full transition ease-in-out duration-200">
            <HomeIcon />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <Link href="/registration">
          <div className="p-2 hover:bg-gray-700 rounded-full transition ease-in-out duration-200">
            <UserIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
