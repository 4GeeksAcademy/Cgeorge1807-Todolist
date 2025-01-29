import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lista, setLista] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"])
	const [tareas, setTareas] = useState("")

	const agregar = (evento) => {
		evento.preventDefault()
		console.log(evento.key)
		if (evento.key === "Enter") {
			console.log(tareas)
			setLista([...lista, tareas])
		}
	}

	return (
		<div className="container text-center">
			<h1 className="text-center mt-5">TodoList</h1>
			<form className="row g-3 d-flex justify-content-center">
				<div className="">
					<input
						value={tareas}
						onChange={(evento) => setTareas(evento.target.value)}
						onKeyDown={agregar}
						type="text"
						className="form-control border border-secondary"
						placeholder="add a task" />
				</div>
			</form>
			<ul className="list-group border-secondary">
				{
					lista.map((tarea, index) => (
						<li key={index} className="list-group-item border border-secondary">
							{tarea}
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Home;
