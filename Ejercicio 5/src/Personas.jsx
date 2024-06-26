import { useState, useEffect } from "react"

function Personas() {
  const [personas, setPersonas] = useState([]);
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null);

  const handleMostrarPersonas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      console.log("Llegaron los datos");
      const nuevasPersonas = await res.json();
      setPersonas(nuevasPersonas);
    } else {
      console.error("Error: no llegaron los datos");
    }
  };

  const handleTareas = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    setUserId(userId);
  };

  useEffect(() => {
    handleMostrarPersonas();
  }, []);

  return (
    <>
      <h1>Listado de Personas</h1>
      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>
            {persona.id} - {persona.name} - {persona.name} - {persona.email} - {persona.website}
            <button onClick={() => handleTareas(persona.id)}>Cargar tareas</button>
            {userId === persona.id && (
              <ul>
                {todos.map((todo) => (
                  <li key={todo.id} style={{color: todo.completed ? "green" : "red"}}>{todo.title} {todo.completed ? "✔":"❌"}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Personas;
