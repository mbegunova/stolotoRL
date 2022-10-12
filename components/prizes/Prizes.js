import Title from "../title/Title";
import Button from "../baseComponents/gui/button/Button";

export default function Prizes({ title, button }) {

  return (
    <section className={"prizes"}>
      <Button className={"prizes__button"}>
        <div className={"prizes__button-text"}>{button.text}</div>
      </Button>
      <Title title={title} className={"title-prizes"} />
    </section>);
}
