import '../styles/main.sass'

function MyApp({Component, pageProps}) {
    return (<div className={"container"}>
        <Component {...pageProps} />
    </div>)
}

export default MyApp
