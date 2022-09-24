import {Main} from "/components/main/Main";
import {
    downloadListContent,
    footerContent,
    infoContent,
    mainContent,
    rulesContent,
    winnersContent
} from "../constants/copyright";
import {Winners} from "../components/winners/Winners";
import {Rules} from "../components/rules/Rules";
import {Info} from "../components/info/Info";
import {DownloadList} from "../components/downloadList/DownloadList";
import {Footer} from "../components/footer/Footer";

export default function Home() {
    return (
        <div className={"container"}>
            <div className={"container__content"}>
                <Main {...mainContent}/>
                <Winners {...winnersContent}/>
                <Rules {...rulesContent}/>
                <Info {...infoContent}/>
                <DownloadList {...downloadListContent}/>
                <Footer {...footerContent}/>
            </div>
        </div>
    )
}
