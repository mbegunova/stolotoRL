import {Carousel} from "../carousel/Carousel";
import {WinnerItem} from "./WinnerItem";
import {useState} from "react";

export function Winners({bg, list, title, iconNav}) {
    const [activeSlide, setActive] = useState(0);
    const [swiper, setSwiper] = useState(null);
    return (<div className={"winners"}>
        <img className={"winners__bg"} src={bg} alt={"bg"}/>
        <h1 className={"winners__title"}>{title}</h1>
        <Carousel data={list} element={WinnerItem} className={"winners__carousel"} settings={{
            onInit: (swiper) => {
                setSwiper(swiper);
            },
            onSlideChange: (swiper) => {
                setActive(swiper.activeIndex)
            }
        }}/>
        <div className={"winners__nav"}>
            <div className={"winners__nav-el winners__nav-next swiper-button-next"}>
                <img src={iconNav}/>
            </div>
            <div className={"winners__nav-text"}>{`${activeSlide + 1}................${list.length}`}</div>
            <div className={"winners__nav-el winners__nav-prev swiper-button-prev"}>
                <img src={iconNav}/>
            </div>
        </div>
    </div>)
}