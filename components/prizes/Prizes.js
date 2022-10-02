import Title from "../title/Title";
import Button from "../baseComponents/gui/button/Button";

export default function Prizes({title, button}) {

    return (
        <div className={"prizes"}>
            <Button {...button} className={"prizes__button"}/>
            <Title title={title} className={"title-prizes"}/>
        </div>)
}
