import Title from "../title/Title";
import Button from "../button/Button";

export default function Prizes({bg, title, button, mBg}) {

    return (
        <div className={"prizes"}>
            <img src={bg} className={"prizes__image"}/>
            <img src={mBg} className={"prizes__image_mob"}/>
            <Button {...button} className={"prizes__button"}/>
            <Title title={title} className={"title-prizes"}/>
        </div>)
}