import {Menu} from "../menu/Menu";
import Title from "../title/Title";
import Carousel from "../baseComponents/gui/carousel/Carousel";
import Button from "../baseComponents/gui/button/Button";

export function Main({bg, list, menu, imageList, title, images, chanel, button, burger}) {
  function Card({order, title, subtitle, date}, index) {
    const id = typeof index === "number" ? index + 1 : "";
    return (
      <div className={`main__card main__card_${id}`} key={index}>
        <div className={"main__card-order"}>{order}</div>
        <div className={"main__card-title"}>{title}</div>
        <div className={"main__card-subtitle"}>{subtitle}</div>
        <div className={"main__card-date"}>{date}</div>
      </div>
    )
  }

  function cards() {
    return list.map((data, index) => Card(data, index))
  }

  function decorations() {
    return images.map(({type, image}, index) => <img src={image} key={index}
                                                     className={`main__decoration main__decoration_${type}`}/>)
  }

  function ImageList() {
    return imageList.map(({image, name}, index) => (<img src={image} className={`main__${name}`} key={index}/>))
  }

  return (<section className={"main"}>
    <Title title={title} className={"title-main"}/>
    {ImageList()}
    <Menu list={menu}/>
    <Carousel itemsData={list} item={Card}
              settings={{
                className: "main__carousel",
                slidesPerView: 1.3,
                centeredSlides: true,
                spaceBetween: 10,
              }}/>
    <div className={"main__cards"}>
      {cards()}
    </div>
    <div className={"main__chanel"}>
      <img src={chanel.image}/>
      <div className={"main__chanel-text"}>{chanel.text}</div>
    </div>
    <Button className={"main__button"}>
      <div className={"main__button-text"}>
        {button.text}
      </div>
    </Button>
    <div className={"main__burger"}>
      <img src={burger}/>
    </div>
  </section>)
}
