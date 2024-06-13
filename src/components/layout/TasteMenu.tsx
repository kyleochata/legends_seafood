import Image from 'next/image'
import steamedBun from '../../../public/steamed-bun.svg'

const TasteMenu = () => {
  return (
    <section className="MENUS-HOME">
      <div>
        <h4>Taste</h4>
        <h2>Menu</h2>
      </div>
      <section className="DIM-FULL-CONTAINER">
        <div className="DIM-SUM">
          <Image
            width={50}
            height={50}
            src={steamedBun}
            alt="steamed bun emoji"
          />

          <h3>Dim Sum</h3>
          <p>
            Our dim sum menu is available during lunch hours. We offer a variety
            of traditional and modern dim sum dishes that are perfect for
            sharing.
          </p>
          <section className="DIMSUM-IMG-CONTAINER">
            MAKE A FOOD CARD UI FOR THE MAIN PAGED
          </section>
          <button>View Dim Sum Menu</button>
        </div>
        <div className="FULL-MENU">
          <h3>Full Menu</h3>
          <p>
            Our full menu is available during lunch and dinner hours. We offer a
            variety of traditional and modern Chinese dishes that are perfect
            for sharing.
          </p>
          <section className="FULLMENU-IMG-CONTAINER">
            MAKE A FOOD CARD UI FOR THE MAIN PAGED
          </section>
          <button>View Full Menu</button>
        </div>
      </section>
    </section>
  )
}
export default TasteMenu
