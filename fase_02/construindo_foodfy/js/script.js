const modalOverlay = document.querySelector('.modal-overlay');
const pratos = document.querySelectorAll('.prato');

for (let prato of pratos) {
    prato.addEventListener('click', function () {
        const pratoImagem = prato.querySelector('.prato img').src;
        const pratoTitulo = prato.querySelector('.prato-titulo').innerHTML;
        const pratoChefe = prato.querySelector('.prato-chef').innerHTML;
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = pratoImagem;
        modalOverlay.querySelector('h1').innerHTML = pratoTitulo;
        modalOverlay.querySelector('h2').innerHTML = pratoChefe;
    });
}

const closeModal = document.querySelector('.fecha-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});