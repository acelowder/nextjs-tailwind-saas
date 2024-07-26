import Image from "next/image";

// .menu-item {
//   cursor: pointer;
//   color: #454545;
//   transition: color 0.3s ease;
// }
// .menu-item:hover {
//   color: #a7a7a7;
// }

// .pill {
//   padding: 10px 32px;
//   border-radius: 24px;
//   background-color: #eeeeee;
//   color: #454545;
// }
// .pill:hover {
//   background-color: #c2c2c2;
//   color: #454545;
// }

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full flex items-center justify-between h-[72px] px-8">
      <a href="/" className="flex items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-3xl py-6 mr-8 font-bold tracking-wide">
          EXPAND
          <span className="text-gray-800 opacity-50">IT</span>
        </span>
      </a>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="/transformations/add/fill"
            className="py-6 px-3 text-gray-800 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Expand
          </a>
        </li>
        <li>
          <a
            href="/pricing"
            className="py-6 px-3 text-gray-800 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Pricing
          </a>
        </li>
      </ul>
      <ul className="flex items-center ml-auto gap-4">
        <li>
          <a
            href="/sign-in"
            className="py-6 px-3 text-gray-800 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Log in
          </a>
        </li>
        <li>
          <a
            href="/sign-up"
            className="py-2 px-4 text-gray-800 rounded-3xl bg-gray-100 hover:bg-gray-200"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
