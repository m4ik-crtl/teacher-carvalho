// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Aqui você pode adicionar scripts adicionais, se necessário.
});
// Seleciona o modal e o conteúdo
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// Seleciona todas as imagens dentro do container polaroid
const polaroidImages = document.querySelectorAll('.polaroid img');

// Função para abrir o modal ao passar o mouse na imagem
polaroidImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";  // Exibe o modal
        modalImg.src = this.src;  // Define a imagem no modal
    });
});

// Função para fechar o modal ao clicar no "X"
closeModal.onclick = function() {
    modal.style.display = "none";  // Fecha o modal
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
