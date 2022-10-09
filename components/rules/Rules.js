import { useRef, useState } from "react";
import Title from "../title/Title";
import Carousel from "../baseComponents/gui/carousel/Carousel";
import Button from "../baseComponents/gui/button/Button";

export function Rules({ list, title, iconNav, button, mButton }) {
  const [active, setActive] = useState(null);
  const prevRefNavigation = useRef();
  const nextRefNavigation = useRef();

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
      <Carousel itemsData={list} item={RulesItem}
                prevRefNavigation={prevRefNavigation}
                nextRefNavigation={nextRefNavigation}
                settings={{
                  onSlideChange: (swiper) => {
                    setActive(swiper.activeIndex);
                  },
                  className: "rules__carousel",
                  breakpoints: {
                    320: {
                      centeredSlides: true,
                      slidesPerView: 1.3
                    },
                    721: {
                      slidesPerView: 1.5
                    }
                  }
                }} />
      <div className={"rules__nav"}>
        <div className={"rules__nav-el rules__nav-prev"} ref={prevRefNavigation}>
          <img src={iconNav} />
        </div>
        <div className={"rules__nav-text"}>{`${active + 1}................${list.length}`}</div>
        <div className={"rules__nav-el rules__nav-next"} ref={nextRefNavigation}>
          <img src={iconNav} />
        </div>
      </div>
      <Button className={"rules__button"}>
        <div className={"rules__button-text"}>{button.text} </div>
      </Button>
    </div>
  );
}
