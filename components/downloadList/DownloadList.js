import Title from "../title/Title";
import Button from "../button/Button";

export function DownloadList({list, title, button, loadButton, image}) {

    function items() {
        return list.map(({icon, text}, index) => (<div key={index} className={"download-list__item"}>
            <div className={"download-list__item-img"}>
                <img src={icon}/>
            </div>
            <div className={"download-list__item-text"}>{text}</div>
        </div>))
    }

    function icons({icons}) {
        return icons && icons.map((img, index) => (<div className={"download-list__icon"} key={index}>
            <img src={img}/>
        </div>))
    }

    return (<div className={"download-list"}>
        <Title title={title}/>
        <div className={"download-list__list"}>
            {items()}
            <button className={"download-list__load-button"}>
                <div className={"download-list__load-text"}>{loadButton.text}</div>
                {icons(loadButton)}
            </button>
        </div>
        <div className={"download-list__image"}>
            <img src={image}/>
        </div>
        <Button {...button} className={"download-list__button"}/>
    </div>)
}