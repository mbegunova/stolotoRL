import classNames from "classnames";

export function Footer({text, logo, icons, list}) {

    function iconList() {
        return icons && icons.map((img, index) => (<div className={"footer__icon"} key={index}>
            <img src={img}/>
        </div>))
    }

    function imageList(list) {
        return list.map(({image}, index) => (<div className={"footer__image"} key={index}>
            <img src={image}/>
        </div>))
    }

    function content() {
        return list.map(({images, text, mod}, index) => (<div className={classNames("", {
            "footer__text": !!text,
            "footer__images": !!images,
            [`footer__${text && "text" || images && "images"}_${mod}`]: !!mod
        })} key={index}>
            {!!text && text}
            {!!images && imageList(images)}
        </div>))
    }

    return (<div className={"footer"}>
        <div className={"footer__logo"}>
            <img src={logo}/>
        </div>
        <div className={"footer__main-text"}>{text}</div>
        <div className={"footer__icons"}>
            {iconList()}
        </div>
        <div className={"footer__content"}>
            {content()}
        </div>
    </div>)
}