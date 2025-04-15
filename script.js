const btn = document.getElementById("enviar");
const textarea = document.getElementById("mensagem");
const saida = document.getElementById("saida");

btn.addEventListener("click", () => {
  const texto = textarea.value.trim();

  if (texto === "") return;

  const div = document.createElement("div");
  div.className = "desabafo";
  div.innerText = texto;

  saida.appendChild(div);
  textarea.value = "";

  // Tempo até desaparecer (em milissegundos)
  setTimeout(() => {
    div.classList.add("desaparecendo");
  }, 2000);

  // Tempo até ser removido do DOM
  setTimeout(() => {
    saida.removeChild(div);
  }, 3500);
});
