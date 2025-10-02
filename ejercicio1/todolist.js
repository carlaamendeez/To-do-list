const tareasIniciales = [
  "aprender Next.js",
  "aprender React",
  "aprender Bootstrap",
  "repasar Javascript",
  "repasar CSS",
  "repasar HTML"
];

const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");
const nuevaTareaInput = document.getElementById("nuevaTarea");

// función que crea un <li> con botones
function crearTarea(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "Eliminar";
  eliminarBtn.addEventListener("click", () => li.remove());

  const completarBtn = document.createElement("button");
  completarBtn.textContent = "Completar";
  completarBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.appendChild(eliminarBtn);
  li.appendChild(completarBtn);
  listaTareas.appendChild(li);
}

// cargar lista inicial
tareasIniciales.forEach(tarea => crearTarea(tarea));

// evento del botón agregar
agregarBtn.addEventListener("click", () => {
  const tareaTexto = nuevaTareaInput.value.trim();
  if (tareaTexto === "") return;
  crearTarea(tareaTexto);
  nuevaTareaInput.value = "";
});
