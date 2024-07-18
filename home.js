// Function to handle the buy button click
function buyGame(gameName) {
    alert(`You bought ${gameName}!`);
    // You can add further functionality here, such as updating a shopping cart or navigating to a checkout page.
  }
  
  // Example of adding further functionality:
  // If you want to dynamically load more games or fetch data from a server, you can simulate it like this:
  document.addEventListener('DOMContentLoaded', function() {
  
    // Selecting the games container
    const gamesContainer = document.querySelector('.games');
  
    // Generating game cards dynamically
    gamesData.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game');
  
      // Constructing the game card HTML
      gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h2>${game.name}</h2>
        <p>${game.price}</p>
        <button onclick="buyGame('${game.name}')">Buy Now</button>
      `;
  
      // Appending the game card to the games container
      gamesContainer.appendChild(gameCard);
    });
  });
  