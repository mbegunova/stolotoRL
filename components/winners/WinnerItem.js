export function WinnerItem({image, name, prize}) {

    return (<div className={"winners__item"}>
        <img className={"winners__item-image"} src={image}/>
        <div className={"winners__item-name"}>{name}</div>
        <div className={"winners__item-prize"}>{prize}</div>
    </div>)
}