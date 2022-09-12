import {Main} from "/components/main/Main";
import {mainContent} from "../constants/copyright";

export default function Home() {
    return (
        <div className={"container"}>
            <div className={"container__content"}>
            <Main {...mainContent}/>
            </div>
        </div>
    )
}
