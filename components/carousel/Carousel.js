import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import 'swiper/css';
import {useMemo} from "react";

const PRESETS = {
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}
SwiperCore.use([Navigation, Pagination]);

export function Carousel({settings = {}, element: Item = <div/>, data = [], className = "", ...props}) {

    const swiperProps = useMemo(() => ({
        ...PRESETS,
        ...settings,
        className,
        onSwiper: function (swiper) {
            swiper.navigation.init();
        },

    }), []);

    return (
        <Swiper
            {...swiperProps}
        >
            {
                data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Item {...item}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}