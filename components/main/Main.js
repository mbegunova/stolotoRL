import {Menu} from "../Menu/Menu";

export function Main({bg, list, menu, prize, home, title, logo}) {
    return (
        <div className={"main"}>
            <img className={"main__bg"} src={bg}/>
            <div className={"main__title"}>{title}</div>
            <img className={"main__prize"} src={prize} alt={"prize"}/>
            <img className={"main__logo"} src={logo} alt={"logo"}/>
            <Menu list={menu}/>
        </div>
    )
}