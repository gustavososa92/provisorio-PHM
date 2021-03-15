import { Navbar, Button, Nav } from "react-bootstrap"
import { withRouter } from "react-router"
import "./navbar.css"

const NavComponent = (props) => {
  const path = props.location.pathname
  return path == "/login" ? null : (
    <Navbar className="navbar" variant="dark">
      <Navbar.Brand href="#home">Pregunta3!</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Perfil</Nav.Link>
      </Nav>
      <Button variant="outline-danger">Salir</Button>
    </Navbar>
  )
}

export const NavComponentWithRouter = withRouter(NavComponent)
