const blocos = document.querySelectorAll(".bloco");
const nextBtns = document.querySelectorAll(".nextBtn");

// Cada clique revela o próximo, mas mantém os anteriores
nextBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    blocos[index + 1].classList.remove("hidden");
    btn.style.display = "none"; // esconde o botão já clicado
  });
});

// Pedido final
const pedidoBtn = document.getElementById("pedidoBtn");
const overlay = document.getElementById("overlay");

pedidoBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

// Resposta SIM
document.querySelector(".yes").addEventListener("click", () => {
  overlay.innerHTML = `<div class="popup">
    <h2>Então é oficial 💍</h2>
    <p>Agora somos dois, lado a lado.<br>O começo de algo memorável.</p>
  </div>`;
});

// Botão NÃO foge
document.querySelector(".no").addEventListener("mouseover", (e) => {
  e.target.style.position = "absolute";
  e.target.style.top = Math.random() * window.innerHeight * 0.7 + "px";
  e.target.style.left = Math.random() * window.innerWidth * 0.7 + "px";
});
