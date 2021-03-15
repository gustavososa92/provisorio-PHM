import { Button, ListGroup } from "react-bootstrap"
import "./busqueda.css"

export const Busqueda = () => {
  return (
    <div className="busqueda-container">
      <div className="seccion-busqueda">
        <h2>Búsqueda de Preguntas</h2>
        <div>
          <input style={{ marginRight: "1rem", width: "70%" }} type="text" placeholder="..." />
          <Button size="sm">Buscar</Button>
        </div>
        <input id="pregunta" style={{ marginTop: "1rem", marginRight: "1rem" }} type="checkbox" label="Sólo activas" />
        <label htmlFor="pregunta">Sólo activas</label>
      </div>
      <div className="seccion-resultados">
        <h4>Resultados de la búsqueda</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Button>Nueva Pregunta</Button>
      </div>
    </div>
  )
}
