import classNames from "classnames";

export default function Title(props) {

    return (
        <div className={classNames("title", {
            [props.className]: props.className
        })}
        >
            {props.title ?? ""}
        </div>)
}