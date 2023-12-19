import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#252529] border-b-2 text-white border-[#FF9628] w-full flex justify-between px-6 py-2 items-center min-h-[60px]">
      <Link
        to="/"
        className="max-sm:text-lg sm:text-2xl lg:text-3xl  flex items-center gap-5 font-semibold tracking-loose"
      >
        <img
          src="/images/logo.jpg"
          className="max-sm:w-[30px] sm:w-[50px]"
          alt=""
        />
        <p className="text-white whitespace-nowrap max-sm:hidden ">
          Online <span className="text-[#FF9628]">Store</span>
        </p>
      </Link>
      <div>
        <ul className=" max-sm:text-base sm:text-base md:text-xl font-semibold whitespace-nowrap ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Home
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
