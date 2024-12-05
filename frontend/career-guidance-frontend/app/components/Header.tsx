import Link from "next/link";
import UserIcon from "../assets/UserIcon";
import HomeIcon from "../assets/HomeIcon";

const Header = () => {
  return (
    <div className="w-screen h-14 fixed top-0 bg-gray-200 shadow-md flex justify-between items-center">
      <div className="flex justify-center ml-3">
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="flex justify-center items-center mr-3">
        <Link href="/registration">
          <UserIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
