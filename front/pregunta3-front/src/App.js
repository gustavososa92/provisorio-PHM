import "./App.css"
import { Footer } from "./componentes/footer/footer"
import { Routes } from "./routes"
import { NavPosta } from "./componentes/navbar/navbar"

function App() {
  return (
    <div>
      <NavPosta />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
