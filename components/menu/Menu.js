export function Menu({list}) {
    return (
        <div className={"menu"}>
            {list.map(({title}, index) => (<div className={"menu__item"} key={index}>{title}</div>))}
        </div>
    )
}