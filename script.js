const botao = document.querySelector(".btn");
const DivMsn = document.querySelector(".mensagem");

botao.addEventListener('click', () => {
    DivMsn.textContent = "Bem-vinda à minha primeira página web!";
});
