// script.js

// Fetch burger data from burger.json
fetch('./js_files/store.json')
  .then(response => response.json())
  .then(data => {
    const burgerContainer = document.getElementById('burgerContainer');
    const searchInput = document.getElementById('searchInput');

    // Render all burgers
    renderBurgers(data);

    // Event listener for search input
    searchInput.addEventListener('keydown', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBurgers = data.filter(burger =>
          burger.name.toLowerCase().includes(searchTerm)
        );
        renderBurgers(filteredBurgers);
      }
    });

    // Function to render burgers
    function renderBurgers(burgers) {
      burgerContainer.innerHTML = '';

      if (burgers.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found.';
        burgerContainer.appendChild(noResults);
      } else {
        burgers.forEach(burger => {
          const card = document.createElement('div');
          card.classList.add('burger-card');

          const h2 = document.createElement('h2');
          h2.textContent = burger.name;
          card.appendChild(h2);

          const img = document.createElement('img');
          img.src = burger.image;
          img.alt = burger.name;
          card.appendChild(img);

          const p = document.createElement('p');
          p.textContent = burger.description;
          card.appendChild(p);

          const orderBtn = document.createElement('button');
          orderBtn.classList.add('order-btn');
          orderBtn.textContent = 'Order';
          card.appendChild(orderBtn);

          const descriptionBtn = document.createElement('button');
          descriptionBtn.classList.add('description-btn');
          descriptionBtn.textContent = 'Description';
          card.appendChild(descriptionBtn);

          burgerContainer.appendChild(card);

          // Event listener for order button
          orderBtn.addEventListener('click', () => {
            openOrderModal(burger);
          });

          // Event listener for description button
          descriptionBtn.addEventListener('click', () => {
            openDescriptionModal(burger);
          });
        });
      }
    }
  })
  .catch(error => {
    console.log('Error fetching burger data:', error);
  });

// Open order modal
function openOrderModal(burger) {
  const modal = document.getElementById('orderModal');
  const modalBurgerName = document.getElementById('modalBurgerName');
  const modalBurgerImage = document.getElementById('modalBurgerImage');
  const modalBurgerDescription = document.getElementById('modalBurgerDescription');

  modalBurgerName.textContent = burger.name;
  modalBurgerImage.src = burger.image;
  modalBurgerDescription.textContent = burger.description;

  modal.style.display = 'block';
}

// Open description modal
function openDescriptionModal(burger) {
  const modal = document.getElementById('orderModal');
  const modalBurgerName = document.getElementById('modalBurgerName');
  const modalBurgerImage = document.getElementById('modalBurgerImage');
  const modalBurgerDescription = document.getElementById('modalBurgerDescription');

  modalBurgerName.textContent = burger.name;
  modalBurgerImage.src = burger.image;
  modalBurgerDescription.textContent = burger.description;

  modal.style.display = 'block';
}

// Close modals
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});