export function InfoItem({title, text, image}) {

    return (<div className={" info__item"}>
        <div className={" info__item-title"}>{title}</div>
        <div className={" info__item-text"}>{text}</div>
        <div className={" info__item-image"}>
            <img src={image}/>
        </div>
    </div>)
}