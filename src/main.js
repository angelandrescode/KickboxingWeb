import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay],
  slidesPerView: 2,
  spaceBetween: 40,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  loop: true,
});
