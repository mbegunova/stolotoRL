import {InfoItem} from "./InfoItem";
import Title from "../title/Title";

export function Info({list, title, link}) {

    function items() {
        return list.map((data, index) => (<InfoItem {...data} key={index}/>))
    }

    return (<div className={"info"}>
        <Title title={title} className={"title-info"}/>
        <div className={"info__list"}>
            {items()}
        </div>
        <a className={"info__link"}>
            <div>{link.text}</div>
            <img className={"info__link-image"} src={link.icon}/>
        </a>
    </div>)
}