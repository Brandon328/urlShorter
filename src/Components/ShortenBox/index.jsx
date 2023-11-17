import bgShortenBoxMobile from "/images/bg-shorten-mobile.svg";

function ShortenBox() {
  return (
    <div
      className="p-6 bg-primary-darkviolet
      rounded-xl flex flex-col space-y-6
      relative sm:grid sm:grid-cols-4 sm:gap-5
      w-full sm:space-y-0 sm:rounded-lg 2xl:p-9"
    >
      <img
        className="absolute top-0 right-0 h-2/3 rounded-tr-xl"
        src={bgShortenBoxMobile}
        alt="background shorten box"
      />
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="rounded-lg p-4 w-full 
        z-10 !mt-0 sm:col-span-3 sm:rounded-lg
        sm:py-3
        "
      />
      <button
        className="w-full bg-primary-cyan 
      text-white-50 text-center p-4
        font-bold tracking-wider
        rounded-lg z-10 sm:rounded-lg
        sm:py-3
      "
      >
        Shorten it!
      </button>
    </div>
  );
}

export default ShortenBox;
