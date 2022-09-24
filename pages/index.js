import {Main} from "/components/main/Main";
import {infoContent, mainContent, rulesContent, winnersContent} from "../constants/copyright";
import {Winners} from "../components/winners/Winners";
import {Rules} from "../components/rules/Rules";
import {Info} from "../components/info/Info";

export default function Home() {
    return (
        <div className={"container"}>
            <div className={"container__content"}>
                <Main {...mainContent}/>
                <Winners {...winnersContent}/>
                <Rules {...rulesContent}/>
                <Info {...infoContent}/>
            </div>
        </div>
    )
}
