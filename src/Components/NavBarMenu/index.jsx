function NavBarMenu() {
  return (
    <div
      className="absolute w-[80%]
    bg-primary-darkviolet text-white-0
    left-1/2 max-w-xs -translate-x-1/2
    py-8 px-6 text-center font-bold
    space-y-14 rounded-lg top-5 hidden

    after:content-[''] after:block 
    after:w-full after:h-[0.5px] after:bg-neutral-grayishviolet
    after:left-0 after:relative after:bottom-[126px]
    
    lg:block lg:after:hidden lg:relative 
    lg:bg-white-0 lg:text-neutral-grayishviolet 
    lg:w-full lg:left-0 lg:max-w-none lg:-translate-x-0
    lg:p-0 lg:text-start lg:rounded-none
    lg:flex lg:flex-row lg:justify-between
    lg:space-y-0 lg:items-center lg:top-0
    "
    >
      <nav
        className="space-y-6 lg:space-y-0 
      lg:flex lg:flex-row lg:space-x-6 lg:ml-12"
      >
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </nav>
      <div
        className="flex flex-col 
      space-y-6 lg:flex-row lg:space-y-0
      lg:space-x-6
      
      "
      >
        <button>Login</button>
        <button
          className="rounded-full 
        bg-primary-cyan p-3 text-white-0 px-8
        "
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default NavBarMenu;
