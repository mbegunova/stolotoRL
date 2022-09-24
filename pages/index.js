import {Main} from "/components/main/Main";
import {
    bgContent,
    downloadListContent,
    footerContent,
    infoContent,
    mainContent, prizesContent,
    rulesContent,
    winnersContent
} from "../constants/copyright";
import {Winners} from "../components/winners/Winners";
import {Rules} from "../components/rules/Rules";
import {Info} from "../components/info/Info";
import {DownloadList} from "../components/downloadList/DownloadList";
import {Footer} from "../components/footer/Footer";
import Bg from "../components/bg/Bg";
import Prizes from "../components/prizes/Prizes";

export default function Home() {
    return (
        <div className={"container"}>
            <Bg {...bgContent}/>
            <div className={"container__content"}>
                <Main {...mainContent}/>
                <Winners {...winnersContent}/>
                <Rules {...rulesContent}/>
                <Info {...infoContent}/>
                <DownloadList {...downloadListContent}/>
                <Prizes {...prizesContent}/>
                <Footer {...footerContent}/>
            </div>
        </div>
    )
}
