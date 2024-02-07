document.addEventListener('DOMContentLoaded', function () {
    const ratingValueSpan = document.getElementById('rating-value');
    const urlParams = new URLSearchParams(window.location.search);
    const rating = urlParams.get('rating');
  
    if (rating) {
      ratingValueSpan.textContent = rating;
    }
  });
  