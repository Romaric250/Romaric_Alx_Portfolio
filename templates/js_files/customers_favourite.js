function generateBurgerItem(burger, containerId) {
    const container = document.getElementById(containerId);
  
    const burgerItem = document.createElement('div');
    burgerItem.className = 'burger';
  
    const burgerImage = document.createElement('img');
    burgerImage.src = burger.image;
    burgerItem.appendChild(burgerImage);
  
    const burgerName = document.createElement('h3');
    burgerName.textContent = burger.name;
    burgerItem.appendChild(burgerName);
  
    const burgerPrice = document.createElement('p');
    burgerPrice.textContent = `Price: ${burger.price} CFA`;
    burgerItem.appendChild(burgerPrice);
  
    const descriptionButton = document.createElement('button');
    descriptionButton.className = 'button';
    descriptionButton.textContent = 'Description';
    descriptionButton.addEventListener('click', () => {
      handleDescription(burger);
    });
    burgerItem.appendChild(descriptionButton);
  
    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'button';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      handleAddToCart(burger);
    });
    burgerItem.appendChild(addToCartButton);
  
    container.appendChild(burgerItem);
  }
  
  function generateBurgerItems(containerId, burgers) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    burgers.forEach((burger) => {
      generateBurgerItem(burger, containerId);
    });
  }
  
  function handleDescription(burger) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];
  
    modal.style.display = 'block';
    modalContent.innerHTML = `
      <img class="modal__image" src="${burger.image}" alt="${burger.name}">
      <h2>${burger.name}</h2>
      <p>${burger.description}</p>
    `;
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  function handleAddToCart(burger) {
    // Redirect to the login page or display a login modal
    window.location.href = 'login.html'; // Replace with your login page URL
  }
  
  // Fetch customer favorites data
  fetch('./js_files/customer_favorites.json')
    .then((response) => response.json())
    .then((data) => {
      generateBurgerItems('customer_favorites', data);
    });
  
  // Fetch today's favorites data
  fetch('./js_files/todays_favorite.json')
    .then((response) => response.json())
    .then((data) => {
      generateBurgerItems('todays_favorites', data);
    });