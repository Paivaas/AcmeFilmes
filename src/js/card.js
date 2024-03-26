const card = document.getElementById('card')
const infoCard = document.getElementById('info_card')

const mostrarInfo = (Informacoes) => {
    infoCard.classList.add('teste')
}

card.addEventListener('click', mostrarInfo)