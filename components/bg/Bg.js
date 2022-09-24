export default function Bg() {

    function circles() {
        const arr = [];
        const N = 9;
        for (let i = 0; i < N; i++) {
            arr.push(<div className={`bg__circle_${i + 1}`}/>)
        }
        return arr;
    }

    return (
        <div className={"bg"}>
            {circles()}
        </div>);
}