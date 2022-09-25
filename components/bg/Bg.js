
export default function Bg({bgs}) {

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
        </div>);
}