import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-9 h-9",
      userButtonAvatarImage: "w-9 h-9",
    },
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full flex items-center justify-between h-[72px] px-8">
      <a href="/" className="flex items-center  mr-8">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-3xl py-3 font-bold tracking-wide">
          EXPAND
          <span className="text-gray-800 opacity-50">IT</span>
        </span>
      </a>

      <ul className="flex items-center flex-grow gap-4">
        <li>
          <a
            href="/expand"
            className="py-6 px-3 text-gray-800 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Expand
          </a>
        </li>
        <li>
          <a
            href="/transformations/add/fill"
            className="py-6 px-3 text-gray-800 hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Pricing
          </a>
        </li>
      </ul>

      <SignedIn>
        <UserButton appearance={userButtonAppearance} />
      </SignedIn>

      <SignedOut>
        <ul className="flex items-center gap-4">
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
      </SignedOut>
    </nav>
  );
};

export default Navbar;
