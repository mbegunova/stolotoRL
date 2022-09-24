import Title from "../title/Title";
import Button from "../button/Button";

export default function Prizes({bg, title, button}) {

    return (
        <div className={"prizes"}>
            <img src={bg} className={"prizes__image"}/>
            <Button {...button} className={"prizes__button"}/>
            <Title title={title} className={"title-prizes"}/>
        </div>)
}