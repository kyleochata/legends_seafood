import style from '@/styles/Location.module.css'
import { mapLink } from '@/utils/helper'
import {
  ClockIcon,
  DrawingPinFilledIcon,
  HomeIcon,
} from '@radix-ui/react-icons'
const Location = () => {
  return (
    <section className={style.location} id="location">
      <div className={style.lo_title_container}>
        <h4 className={style.lo_h_sub_title}>Discover</h4>
        <h2 className={style.lo_title}>
          Honolulu's Chinese
          <br /> Cultural Plaza
        </h2>
      </div>
      <div className={style.lo_content}>
        <div className={style.lo_c_t_container}>
          <HomeIcon className={style.lo_pin} />
          <h3 className={style.lo_c_sub_title}>Discover a piece of China</h3>
        </div>

        <p className={style.lo_para}>
          {' '}
          Nestled in the charm of Honolulu's Chinese Cultural Plaza, we provide
          an authentic taste of China. Surrounded by vibrant cultural heritage,
          our dining spot offers a dining retreat where tradition and cuisine
          blend seamlessly. We generously welcome you to let us host your next
          dining experience or offer pick-up to enjoy elsewhere.
        </p>
        <div className={style.lo_c_t_container}>
          <DrawingPinFilledIcon className={style.lo_pin} />
          <h3 className={style.lo_c_sub_title}>Address </h3>
        </div>
        <a className={style.lo_address} href={mapLink} target="_blank">
          Chinatown Cultural Plaza, 1st Floor <br />
          100 N. Beretania Street <br />
          Honolulu, HI 96817
        </a>
        <div className={style.lo_c_t_container}>
          <ClockIcon className={style.lo_pin} />
          <h3 className={style.lo_c_sub_title}>
            Hours<span className="super">*</span>
          </h3>
        </div>
        <ul className={style.lo_hrs}>
          <li>Lunch: 11:00am - 3:00pm </li>
          <li>Dinner: 5:00pm - 10:00pm</li>
        </ul>
      </div>
    </section>
  )
}
export default Location
