import classNames from "classnames";

export function Footer({text, logo, icons, list, iconsMob}) {

    function iconList(list) {
        return list && list.map((img, index) => (
            <div className={"footer__icon"} key={index}>
                <a href={'#'}>
                    <img src={img}/>
                </a>
            </div>))
    }

    function imageList(list) {
        return list.map(({image}, index) => (<div className={`footer__image footer__image_${index + 1}`} key={index}>
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
        <hr className={"footer__hr"}/>
        <div className={"footer__icons"}>
            {iconList(icons)}
        </div>
        <div className={"footer__content"}>
            {content()}
        </div>
        <div className={"footer__icons footer__icons_mob"}>
            {iconList(iconsMob)}
        </div>
    </div>)
}