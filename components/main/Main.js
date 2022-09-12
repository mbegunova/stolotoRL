import {Menu} from "../Menu/Menu";

export function Main({bg, list, menu, prize, home, title, logo, images, chanel, button}) {

    function cards() {
        return list.map(({order, title, subtitle, date}, index) => (
            <div className={`main__card main__card_${index + 1}`} key={index}>
                <div className={"main__card-order"}>{order}</div>
                <div className={"main__card-title"}>{title}</div>
                <div className={"main__card-subtitle"}>{subtitle}</div>
                <div className={"main__card-date"}>{date}</div>
            </div>))
    }

    function decorations() {
        return images.map(({type, image}, index) => <img src={image} key={index}
                                                         className={`main__decoration main__decoration_${type}`}/>)
    }

    return (<div className={"main"}>
        <img className={"main__bg"} src={bg}/>
        <div className={"main__title"}>{title}</div>
        <img className={"main__prize"} src={prize} alt={"prize"}/>
        <img className={"main__logo"} src={logo} alt={"logo"}/>
        <img className={"main__home"} src={home} alt={"home"}/>
        <Menu list={menu}/>
        <div className={"main__cards"}>
            {cards()}
        </div>
        <div>
            {decorations()}
        </div>
        <div className={"main__chanel"}>
            <img src={chanel.image}/>
            <div className={"main__chanel-text"}>{chanel.text}</div>
        </div>
        <button className={"main__button"}>{button.text}</button>
    </div>)
}