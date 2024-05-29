import { Button } from '../ui/moving-border'
import Container from './container'
import Image from 'next/image'
import LegendsLogo from '../../../public/images/sm_legends_seafood_logo.jpg'
import { MoonIcon, SunIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="flex justify-center items-center w-full sticky">
      <Container>
        <div className="flex justify-between items-center py-4 w-full">
          <Image
            src={LegendsLogo}
            alt="Legend Seafood Restaurant Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold dark:text-yellow-500">
            Legends Seafood Restaurant
          </h1>
          <div className="flex flex-nowrap justify-between gap-5 items-center">
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              borderRadius="0.5rem"
              className="dark:bg-black dark:text-white dark:border-slate-800 bg-white text-black border-neutral-200"
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <button className="w-1/2 h-full">
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header
