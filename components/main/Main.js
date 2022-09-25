import {Menu} from "../menu/Menu";
import Button from "../button/Button";
import Title from "../title/Title";
import {Carousel} from "../carousel/Carousel";

export function Main({bg, list, menu, imageList, title, images, chanel, button, burger}) {
    function Card({order, title, subtitle, date}, index) {
        const id = typeof index === "number" ? index + 1 : "";
        return (
            <div className={`main__card main__card_${id}`} key={index}>
                <div className={"main__card-order"}>{order}</div>
                <div className={"main__card-title"}>{title}</div>
                <div className={"main__card-subtitle"}>{subtitle}</div>
                <div className={"main__card-date"}>{date}</div>
            </div>
        )
    }

    function cards() {
        return list.map((data, index) => Card(data, index))
    }

    function decorations() {
        return images.map(({type, image}, index) => <img src={image} key={index}
                                                         className={`main__decoration main__decoration_${type}`}/>)
    }

    function ImageList() {
        return imageList.map(({image, name}, index) => (<img src={image} className={`main__${name}`} key={index}/>))
    }

    return (<div className={"main"}>
        <Title title={title} className={"title-main"}/>
        {ImageList()}
        <Menu list={menu}/>
        <div className={"main__cards"}>
            {cards()}
        </div>
        <Carousel data={list} element={Card} className={"main__carousel"} settings={{slidesPerView: 1}}/>

        <div className={"main__chanel"}>
            <img src={chanel.image}/>
            <div className={"main__chanel-text"}>{chanel.text}</div>
        </div>
        <Button {...button} className={"main__button"}/>
        <div className={"main__burger"}>
            <img src={burger}/>
        </div>
    </div>)
}