import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Technologies} from "./layout/sections/technologies/Technologies.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <>
            <div className="App">
                <Header/>
                <Main/>
                <Projects/>
                <Technologies/>
                <Experience />
                <Footer />
                <GlobalStyles/>
            </div>
        </>
    )
}

export default App
