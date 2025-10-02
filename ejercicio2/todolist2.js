document.getElementById("btnDescargar").addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    const primerosDiez = todos.slice(0, 10);

    const ul = document.getElementById("lista");
    ul.innerHTML = ""; // Limpiar lista antes de cargar

    primerosDiez.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Error al descargar:", error);
  }
});
