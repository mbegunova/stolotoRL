import classNames from "classnames";

export default function Button(props) {

    return (
        <div className={classNames("button", {
            [props.className]: props.className
        })}
        >
            {props.text ?? ""}
        </div>)
}