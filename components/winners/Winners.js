import {Carousel} from "../carousel/Carousel";
import {WinnerItem} from "./WinnerItem";
import {useState} from "react";
import classNames from "classnames"
import Title from "../title/Title";

export function Winners({bg, list, title, iconNav, sign, icons, decoration, bg2}) {
    const [activeSlide, setActive] = useState(0);
    const [swiper, setSwiper] = useState(null);


    function Icons() {
        return icons.map((img, i) => (<img className={"winners__icon"} src={img} alt={"social"} key={i}/>))
    }

    function Decorations() {
        return decoration.map((img, i) => (
            <img className={classNames(`winners__decoration`, {
                [`winners__decoration_${i + 1}`]: true
            })} src={img} alt={"social"} key={i}/>))
    }

    return (<div className={"winners"}>
        <Title title={title} className={"title-winners"}/>
        <Carousel data={list} element={WinnerItem} className={"winners__carousel"} settings={{
            slidesPerView: 3,
            onInit: (swiper) => {
                setSwiper(swiper);
            },
            onSlideChange: (swiper) => {
                setActive(swiper.activeIndex)
            }
        }}/>
        <div className={"winners__nav"}>
            <div className={"winners__nav-el winners__nav-prev swiper-button-prev"}>
                <img src={iconNav}/>
            </div>
            <div className={"winners__nav-text"}>{`${activeSlide + 1}................${list.length}`}</div>
            <div className={"winners__nav-el winners__nav-next swiper-button-next"}>
                <img src={iconNav}/>
            </div>
        </div>
        <div className={"winners__sign"}>{sign}</div>
        <div className={"winners__icons"}> {Icons()}</div>
    </div>)
}