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
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </main>
    </ThemeProvider>
  )
}
export default MainLayout
