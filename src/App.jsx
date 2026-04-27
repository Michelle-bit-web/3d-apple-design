import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/Productviewer"

import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      < NavBar />
      < Hero />
      < ProductViewer />
    </main>
  )
}

export default App
