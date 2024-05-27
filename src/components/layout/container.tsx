const maxWContainer = ({ children }: any) => {
  return (
    <section
      style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid red',
      }}
    >
      {children}
    </section>
  )
}
export default maxWContainer
