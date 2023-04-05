import HamburgerMenu from "@/components/HamburgerMenu";
import useToggle from "@/hooks/useToggle";
import useWindowSize from "@/hooks/useWindowSize";

const Navbar = () => {
  const { state: hamburgerOpen, toggle: toggleHamburgerOpen } = useToggle(true);
  const { isSmall, loading: windowSizeLoading } = useWindowSize();

  if (windowSizeLoading) return <div className="h-[28px]"></div>;

  return isSmall ? (
    <nav
      className={`${
        !hamburgerOpen ? "absolute w-[calc(100%-4rem)] h-[calc(100%-5rem)]" : ""
      } grid grid-rows-[auto_1fr] grid-cols-[1fr_auto] font-medium bg-white animate-fade-in`}
    >
      <a href="https://www.linkedin.com/in/andrethomas5/" target="_blank">
        andre.thomas
      </a>
      <HamburgerMenu open={hamburgerOpen} onToggleOpen={toggleHamburgerOpen} />
      {!hamburgerOpen && (
        <ul
          className={`row-span-1 col-[1/-1] justify-self-center self-center flex flex-col justify-center items-center transition-opacity duration-700 animate-[slide-up-1_0.2s_ease-out]`}
        >
          <li
            className={`text-4xl text-gray-500 font-light mb-5 transition duration-300 ease cursor-pointer hover:text-rausch animate-slide-up`}
          >
            <a>About</a>
          </li>
          <li
            className={`text-4xl text-gray-500 font-light mb-5 transition duration-300 ease cursor-pointer hover:text-rausch animate-slide-up`}
          >
            <a>Portfolio</a>
          </li>
          <li
            className={`text-4xl text-gray-500 font-light mb-5 transition duration-300 ease cursor-pointer hover:text-rausch animate-slide-up`}
          >
            <a>Resume</a>
          </li>
        </ul>
      )}
    </nav>
  ) : (
    <nav className="w-full py-30 flex justify-between font-medium animate-fade-in">
      <a href="https://www.linkedin.com/in/andrethomas5/" target="_blank">
        andre.thomas
      </a>
      <ul className="md:flex">
        <li className="text-xl ml-8 transition-colors duration-300 ease cursor-pointer hover:text-rausch">
          <a>About</a>
        </li>
        <li className="text-xl ml-8 transition-colors duration-300 ease cursor-pointer hover:text-rausch">
          <a>Portfolio</a>
        </li>
        <li className="text-xl ml-8 transition-colors duration-300 ease cursor-pointer hover:text-rausch">
          <a>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
