import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lista, setLista] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"])
	const [tareas, setTareas] = useState("")


	const agregar = (evento) => {

		if (evento.key === "Enter") {
			evento.preventDefault()
			setLista([...lista, tareas])
			setTareas("")
		}
	}

	const eliminar = (index) => {
		let aux = []
		aux = lista.filter((item,id)=>{
			if (index != id){
				return item
			}
		})
		setLista(aux)
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
							<button type="button" class="btn btn-outline-danger float-end hidden-icon" onClick={()=>eliminar(index)}>x</button>
						</li>
					))
				}
			</ul>
			<h4 className="mt-3">tareas pendientes: {lista.length}</h4>
		</div>
	);
};

export default Home;
