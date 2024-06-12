import style from '../../styles/Container.module.css'

const maxWContainer = ({ children }: any) => {
  return <section className={style.container}>{children}</section>
}
export default maxWContainer
