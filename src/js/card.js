const card = document.getElementById('card')
const infoCard = document.getElementById('info_card')

const mostrarInfo = () => {
    infoCard.classList.remove('teste')
}
const sumirInfo = () => {
    infoCard.classList.add('teste')
}

card.addEventListener('click', mostrarInfo)

infoCard.addEventListener('click', sumirInfo)