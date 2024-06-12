import ImageLinkCard from '../ui/img-link-card'

const MainCards = () => {
  return (
    <section className="cardContainer">
      <ImageLinkCard
        src="/images/seafood.jpg"
        alt="seafood"
        width={400}
        height={300}
        title="Seafood"
        content="Fresh seafood from the ocean"
        href="/menu"
        button="View More"
      />
    </section>
  )
}
export default MainCards
