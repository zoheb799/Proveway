
  function toggleCard(cardNumber) {
    const content = document.getElementById(`content${cardNumber}`);
    const allContents = document.querySelectorAll('.card-content');
    const allCards = document.querySelectorAll('.card');
  
    // Hide all other card contents and reset borders
    allContents.forEach((el) => {
      if (el !== content) {
        el.style.display = 'none';
      }
    });
  
    allCards.forEach((card, index) => {
      if (index + 1 === cardNumber) {
        // Activate the clicked card
        card.classList.add('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      } else {
        // Deactivate all other cards
        card.classList.remove('active');
      }
    });
  }
  

function calculateTotalValue() {
    const cards = document.querySelectorAll('.card');
    let totalValue = 0;
  
    cards.forEach((card) => {
      const isChecked = card.querySelector('input[type="radio"]').checked;
      if (isChecked) {
        const price = parseFloat(
          card.querySelector('.discounted-price').textContent.replace('$', '')
        );
        totalValue += price;
      }
    });
  
    document.querySelector('.total-value').textContent = `Total: $${totalValue.toFixed(2)} USD`;
  }
  
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', calculateTotalValue);
  });
  
  calculateTotalValue();
  