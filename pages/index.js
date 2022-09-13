import {Main} from "/components/main/Main";
import {mainContent, winnersContent} from "../constants/copyright";
import {Winners} from "../components/winners/Winners";

export default function Home() {
    return (
        <div className={"container"}>
            <div className={"container__content"}>
                <Main {...mainContent}/>
                <Winners {...winnersContent}/>
            </div>
        </div>
    )
}
