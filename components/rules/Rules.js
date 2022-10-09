import { useState } from "react";
import Title from "../title/Title";
import Carousel from "../baseComponents/gui/carousel/Carousel";
import Button from "../baseComponents/gui/button/Button";

export function Rules({ list, title, iconNav, button, mButton }) {
  const [active, setActive] = useState(null);

  function RulesItem({ title, text, num, image }) {
    return (<div className={"rules__item"}>
      <div className={"rules__item-num"}>{num}</div>
      <hr className={"rules__item-hr"} />
      <div className={"rules__item-title"}>{title}</div>
      <div className={"rules__item-text"}>{text}</div>
      <div className={"rules__item-image"}>
        <img src={image} /></div>
    </div>);
  }


  return (
    <div className={"rules"}>
      <Title title={title} className={"title-rules"} />
      <Carousel itemsData={list} item={RulesItem} settings={{
        onSlideChange: (swiper) => {
          setActive(swiper.activeIndex);
        },
        className: "rules__carousel",
        // navigation: {
        //   nextEl: ".rules__nav-next",
        //   prevEl: ".rules__nav-prev"
        // },
        breakpoints: {
          320: {
            centeredSlides: true,
            slidesPerView: 1.3
          },
          640: {
            // slidesPerView: 1.5
            slidesPerView: 1.5
          }
        }
      }} />
      <div className={"rules__nav"}>
        <div className={"rules__nav-el rules__nav-prev"}>
          <img src={iconNav} />
        </div>
        <div className={"rules__nav-text"}>{`${active + 1}................${list.length}`}</div>
        <div className={"rules__nav-el rules__nav-next"}>
          <img src={iconNav} />
        </div>
      </div>
      <Button {...button} className={"rules__button"} />
    </div>
  );
}
