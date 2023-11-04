import './App.css'
import logo from '../../assets/images/logo.svg'
import iWorking from '../../assets/images/illustration-working.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import GetStartBtn from '../../Components/GetStartedBtn'
import ShortenBox from '../../Components/ShortenBox'
import NavBarMenu from '../../Components/NavBarMenu'

function App() {
  return (
    <>
      <header className='flex justify-between'>
        <img src={logo} alt="logo" />
        <NavBarMenu></NavBarMenu>
        <RxHamburgerMenu className='text-[30px] text-neutral-grayishviolet'/>
      </header>
      <section className='mt-5 mb-12'>
        <div className='w-[100%]'>
          <img
            className='w-[150%] max-w-none mb-7'
            src={iWorking}
            alt="Illustration working" />
        </div>
        <div className='text-center'>
          <h2
            className='text-4xl font-bold text-neutral-darkblue mb-3'
          >
            Mora than just shorter links</h2>
          <p className='text-neutral-grayishviolet mb-6'>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <GetStartBtn/>
        </div>
      </section>
      <section>
        <ShortenBox />
      </section>
      <section>

      </section>
    </>
  )
}

export default App
