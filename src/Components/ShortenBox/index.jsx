import bgShortenBoxMobile from '../../assets/images/bg-shorten-mobile.svg'

function ShortenBox() {
  return (
    <div className="p-6 bg-primary-darkviolet
      rounded-xl flex flex-col space-y-6
      relative
    ">
      <img
        className='absolute top-0 right-0 h-2/3'
        src={bgShortenBoxMobile}
        alt="background shorten box" />
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="rounded-lg p-4 w-full z-10 !mt-0"
      />
      <button className="w-full bg-primary-cyan 
      text-white-50 text-center p-4
        font-bold tracking-wider
        rounded-lg z-10
      ">
        Shorten it!
      </button>
    </div>
  )
}

export default ShortenBox