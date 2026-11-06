class Persona()
{
	#nombre;
	#musica;
	#deporte;

	constructor()//colocar parametros
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

const raulito = new Persona(); //mandar valores
console.log(raulito.presentarse())