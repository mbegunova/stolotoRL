export function Menu({list}) {
    return (
        <div className={"menu"}>
            {list.map(({title}, index) => (
                <a href={'#'} target={'_blank'} key={index} className={"menu__link"}>
                    <div className={"menu__item"}>{title}</div>
                </a>))}
        </div>
    )
}
