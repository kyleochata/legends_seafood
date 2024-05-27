import { ReactNode } from 'react'
import Header from './Header'
import { ThemeProvider } from './ThemeProvider'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      <Header />
      {children}
    </ThemeProvider>
  )
}
export default MainLayout
