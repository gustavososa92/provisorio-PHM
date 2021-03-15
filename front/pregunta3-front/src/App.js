import logo from "./logo.svg"
import "./App.css"
import { Footer } from "./componentes/footer/footer"
import { Routes } from "./routes"

function App() {
  return (
    <div>
      <Routes />
      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    //   <Footer />
    // </div>
  )
}

export default App
