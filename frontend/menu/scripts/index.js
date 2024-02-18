// Темплейт карточки
const cardsContainer = document.querySelector('.places__list');
const card = document.querySelector('#card-template').content;

// DOM узлы
function createCard (cardData, deleteCard) {
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    const cardElement = card.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
        deleteCard(cardElement)
    })
    return cardElement;
}
// Функция создания карточки
function addCard (cardData) {
    cardsContainer.append(createCard(cardData, deleteCard))
}
// Функция удаления карточки
function deleteCard (cardElement) {
    cardElement.remove()
}
//  Вывести карточки на страницу
initialCards.forEach(elem =>addCard(elem))