interface Props {
  open: boolean;
  onToggleOpen: () => void;
}

const HamburgerMenu = ({ open, onToggleOpen }: Props) => {
  return (
    <button onClick={onToggleOpen} className="col-[2] text-gray-600 w-10 h-10 relative focus:outline-none">
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`${
            !open ? "rotate-45" : "-translate-y-1.5"
          } block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            !open && "opacity-0"
          } block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            !open ? "-rotate-45" : "translate-y-1.5"
          } block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
