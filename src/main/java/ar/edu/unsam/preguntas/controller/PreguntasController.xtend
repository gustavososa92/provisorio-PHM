package ar.edu.unsam.preguntas.controller

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus

@RestController
class PreguntasController {

	@GetMapping('/smoke')
	def repoRecetas() {
		try {
			ResponseEntity.ok("OK")
		} catch (Exception e) {
			ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.message)
		}
	}

}
