package ar.edu.unsam.preguntas

import ar.edu.unsam.preguntas.controller.PreguntasController
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

import static org.junit.jupiter.api.Assertions.assertEquals

@AutoConfigureJsonTesters
@ContextConfiguration(classes=PreguntasController)
@WebMvcTest
@DisplayName("Dado un controller de Preguntas")
class PreguntasControllerTest {

	@Autowired
	MockMvc mockMvc

	@BeforeEach
	def void init() {
		
	}

	@Test
	@DisplayName("Smoke Test")
	def smoke1() {
		val responseEntity = mockMvc.perform(MockMvcRequestBuilders.get('/smoke')).andReturn.response
		val response = responseEntity.contentAsString		
		assertEquals(200, responseEntity.status)
		println("**************************")
		println(response + " " + responseEntity.status)
		println("**************************")
		assertEquals("OK", response)
	}
}
