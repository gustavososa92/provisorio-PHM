import { Navbar, Button, Nav } from "react-bootstrap"
import "./navbar.css"

export const NavPosta = () => {
  return (
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
