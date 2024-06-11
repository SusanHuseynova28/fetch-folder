document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.btn1');
    const deleteButton = document.querySelector('.btn2');
    const cardContainer = document.querySelector('.card');

    addButton.addEventListener('click', () => {
        const newCard = document.createElement('div');
        newCard.classList.add('card-image');
      
        
        newCard.innerHTML += `
            <img class="img" src="https://html.creativegigstf.com/homy/homy/images/agent/img_01.jpg" alt="">
            <div class="image-word">
                <h2>Mark Filo</h2>
                <h3>Ceo</h3>
            </div>
           
        `;

        cardContainer.appendChild(newCard);
    });

    deleteButton.addEventListener('click', () => {
        if (cardContainer.lastElementChild) {
            cardContainer.removeChild(cardContainer.lastElementChild);
}
});
});
