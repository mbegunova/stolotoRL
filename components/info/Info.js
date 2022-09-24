import {InfoItem} from "./InfoItem";
import Title from "../title/Title";

export function Info({list, title, link}) {

    function items() {
        return list.map((data, index) => (<InfoItem {...data} key={index}/>))
    }

    return (<div className={"info"}>
        <Title title={title} className={"title-info"}/>
        <div>
            {items()}
        </div>
        <div>
            <div>{link.text}</div>
            <img src={link.icon}/>
        </div>
    </div>)
}