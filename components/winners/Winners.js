import { WinnerItem } from "./WinnerItem";
import { useState } from "react";
import Title from "../title/Title";
import Carousel from "../baseComponents/gui/carousel/Carousel";

export function Winners({ list, title, iconNav, sign, icons }) {
  const [activeSlide, setActive] = useState(0);


  function Icons() {
    return icons.map((img, i) => (
      <a href={"#"} target={"_blank"} key={i}>
        <img className={"winners__icon"} src={img} alt={"social"} key={i} />
      </a>));
  }

  return (<div className={"winners"}>
    <Title title={title} className={"title-winners"} />
    <Carousel itemsData={list} item={WinnerItem} settings={{
      onSlideChange: (swiper) => {
        setActive(swiper.activeIndex);
      },
      className: "winners__carousel",
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          centeredSlides: true
          // spaceBetween: 20
        },
        1024: {
          slidesPerView: 3
        }
      }
    }} />
    <div className={"winners__nav"}>
      <div className={"winners__nav-el winners__nav-prev swiper-button-prev"}>
        <img src={iconNav} />
      </div>
      <div className={"winners__nav-text"}>{`${activeSlide + 1}................${list.length}`}</div>
      <div className={"winners__nav-el winners__nav-next swiper-button-next"}>
        <img src={iconNav} />
      </div>
    </div>
    <div className={"winners__sign"}>
      <div className={"winners__sign-text"}>{sign}</div>
      <div className={"winners__icons"}> {Icons()}</div>
    </div>
  </div>);
}
