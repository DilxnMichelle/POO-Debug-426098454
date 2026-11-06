class Persona
{
	// declarar los 2 atributos privados que faltan
	#nombre
	#
	#	

	constructor(nombre, musica, deporte)
	{
		this.#nombre = nombre;
		this.#musica = musica;
		this.#deporte = deporte;
	}

	presentarse()
	{
		console.log(`Hola soy ${this.#nombre}`);
		console.log(`Me gusta escuchar ${this.#musica}`);
		console.log(`Y soy muy bueno en ${this.#deporte}`);
	}
}

const mikol = new Persona(); //mandar parametros
console.log(mikol.presentarse())