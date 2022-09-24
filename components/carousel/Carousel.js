import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import 'swiper/css';
import {useMemo, useState} from "react";

const PRESETS = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}
SwiperCore.use([Navigation, Pagination]);

export function Carousel({settings = {}, element: Item = <div/>, data = [], className = "", ...props}) {
    const [swiper, setSwiper] = useState(null)
    const swiperProps = useMemo(() => {
        const props = Object.assign(PRESETS, settings);

        return ({
            ...props, className,
            onSwiper: function (swiper) {
                setSwiper(v => {
                    if (!v) {
                        if (props.navigation)
                            swiper.navigation.init();
                        return swiper;
                    }
                    return v;
                })

            }
        })
    }, []);


    return (<Swiper
        {...swiperProps}>
        {data.map((item, index) => (<SwiperSlide key={index}>
            <Item {...item}/>
        </SwiperSlide>))}
    </Swiper>);
}