import PropTypes from "prop-types";

function NavBarMenu({ className }) {
  return (
    <div
      id="navMenu"
      className={`absolute w-[80%]
    bg-primary-darkviolet text-white-0
    left-1/2 max-w-xs -translate-x-1/2
    py-8 px-6 text-center font-bold
    space-y-14 rounded-lg top-5

    after:content-[''] after:block 
    after:w-full after:h-[0.5px] after:bg-neutral-grayishviolet
    after:left-0 after:relative after:bottom-[126px]
    
    lg:after:hidden lg:relative 
    lg:bg-white-0 lg:text-neutral-grayishviolet 
    lg:w-full lg:left-0 lg:max-w-none lg:-translate-x-0
    lg:p-0 lg:text-start lg:rounded-none
    lg:flex lg:flex-row lg:justify-between
    lg:space-y-0 lg:items-center lg:top-0 ${className}`}
    >
      <nav
        className="space-y-6 lg:space-y-0 
      lg:flex lg:flex-row lg:space-x-6 lg:ml-12
      
      "
      >
        <p
          className="hover:text-neutral-darkviolet 
        cursor-pointer"
        >
          Features
        </p>
        <p
          className="hover:text-neutral-darkviolet 
        cursor-pointer"
        >
          Pricing
        </p>
        <p
          className="hover:text-neutral-darkviolet 
        cursor-pointer"
        >
          Resources
        </p>
      </nav>
      <div
        className="flex flex-col 
      space-y-6 lg:flex-row lg:space-y-0
      lg:space-x-6
      
      "
      >
        <button className="hover:text-neutral-darkviolet">Login</button>
        <button
          className="rounded-full 
        bg-primary-cyan p-3 text-white-0 px-8
          hover:opacity-60
        "
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
NavBarMenu.propTypes = {
  className: PropTypes.string,
};

export default NavBarMenu;
