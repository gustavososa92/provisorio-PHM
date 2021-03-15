import { useState } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import "./login.css"

export const Login = () => {
  const [usuario, setUsuario] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className="login-container">
      <Form className="login">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Pregunta3!</h2>
        <FormGroup>
          <Form.Label>Usuario</Form.Label>
          <Form.Control size="lg" placeholder="Ingrese usuario..." value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" size="lg" placeholder="Ingrese contraseña..." value={pass} onChange={(e) => setPass(e.target.value)} />
        </FormGroup>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button variant="info" onClick={() => console.log(usuario, pass)}>
            Ingresar
          </Button>
        </div>
      </Form>
    </div>
  )
}
