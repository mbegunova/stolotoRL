import classNames from "classnames";

export function InfoItem({title, text, image, mod}) {

    return (<div className={classNames("info__item", {
        [`info__item_${mod}`]: mod
    })}>
        <div className={" info__item-title"}>{title}</div>
        <div className={" info__item-text"}>{text}</div>
        <div className={" info__item-image"}>
            <img src={image}/>
        </div>
    </div>)
}