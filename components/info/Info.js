import { InfoItem } from "./InfoItem";
import Title from "../title/Title";
import Carousel from "../baseComponents/gui/carousel/Carousel";

export function Info({ list, title, link }) {

  function items() {
    return list.map((data, index) => (<InfoItem {...data} key={index} />));
  }

  return (<section className={"info"}>
    <Title title={title} className={"title-info"} />
    <div className={"info__list"}>
      {items()}
    </div>
    <Carousel itemsData={list} item={InfoItem} settings={{
      className: "info__carousel",
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 14
    }} />
    <a className={"info__link"} href={'#'}>
      <div className={"info__link-text"}>{link.text}</div>
      <img className={"info__link-image"} src={link.icon} />
    </a>
  </section>);
}
