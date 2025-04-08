import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/main.tsx";
import {Projects} from "./layout/sections/projects/projects.tsx";
import {Technologies} from "./layout/sections/technologies/technologies.tsx";
import {Experience} from "./layout/sections/experience/experience.tsx";
import {Footer} from "./layout/footer/footer.tsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Projects />
        <Technologies />
        <Experience />
        <Footer />
      </div>
    </>
  )
}

export default App
