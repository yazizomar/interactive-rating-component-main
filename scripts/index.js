document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.rating-button');
    const submitButton = document.querySelector('.submit-button');
    let selectedRating = 0;
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active')); // remove active from all
        this.classList.add('active'); // add to clicked button
        selectedRating = this.dataset.rating;
      });
    });
  
    submitButton.addEventListener('click', function () {
      if (selectedRating) {
        window.location.href = `thank-you.html?rating=${selectedRating}`;
      } else {
        alert('Please select a rating.');
      }
    });
  });
  