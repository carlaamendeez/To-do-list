document.getElementById("btnDescargar").addEventListener("click", async () => {
  try {
    // Hacer fetch al API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    // Tomar solo los 10 primeros
    const primerosDiez = todos.slice(0, 10);

    // Seleccionar la lista
    const ul = document.getElementById("lista");
    ul.innerHTML = ""; // Limpiar lista antes de cargar

    // Insertar cada ítem en <li>
    primerosDiez.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Error al descargar:", error);
  }
});
