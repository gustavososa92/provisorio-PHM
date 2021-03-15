import { Form, FormGroup, Button } from "react-bootstrap"
import { Footer } from "../footer/footer"
import "./login.css"

export const Login = () => {
  return (
    <div className="login-container">
      <Form className="login">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Pregunta3!</h2>
        <FormGroup>
          <Form.Label>Usuario</Form.Label>
          <Form.Control size="lg" placeholder="Ingrese usuario..." />
        </FormGroup>
        <FormGroup>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" size="lg" placeholder="Ingrese contraseña..." />
        </FormGroup>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button variant="info">Ingresar</Button>
        </div>
      </Form>
    </div>
  )
}
