import classNames from "classnames";

export default function Bg({decoration, bgs}) {

    function Decorations() {
        return decoration.map((img, i) => (
            <img className={classNames(`bg__decoration`, {
                [`bg__decoration_${i + 1}`]: true
            })} src={img} alt={"social"} key={i}/>))
    }

    function images() {
        return bgs.map(({image, name}, index) => (<img className={`bg__${name}`} src={image} key={index}/>))
    }

    function circles() {
        const arr = [];
        const N = 9;
        for (let i = 0; i < N; i++) {
            arr.push(<div className={`bg__circle_${i + 1}`} key={i}/>)
        }
        return arr;
    }

    return (
        <div className={"bg"}>
            <div className={"bg__circles"}>
                {circles()}
            </div>
            {images()}
            {Decorations()}
        </div>);
}