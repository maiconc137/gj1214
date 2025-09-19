const blocos = document.querySelectorAll(".bloco");
const nextBtns = document.querySelectorAll(".nextBtn");

// Cada clique revela o próximo bloco e mantém os anteriores visíveis
nextBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index + 1 < blocos.length) {
      blocos[index + 1].classList.remove("hidden");
      btn.style.display = "none"; // esconde o botão já clicado
    }
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

// Botão NÃO foge (desktop + celular)
const noBtn = document.querySelector(".no");
let attempts = 0;

function moveNoBtn() {
  attempts++;
  const maxWidth = window.innerWidth * 0.8;
  const maxHeight = window.innerHeight * 0.8;

  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * maxHeight + "px";
  noBtn.style.left = Math.random() * maxWidth + "px";

  // diminui o botão a cada tentativa
  const scale = Math.max(0.6, 1 - attempts * 0.1);
  noBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoBtn();
});
