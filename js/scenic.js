document.addEventListener('DOMContentLoaded', function() {
  
    var cardTextElements = document.querySelectorAll('.card-text');

  
    cardTextElements.forEach(function(cardText) {
        cardText.addEventListener('mouseover', function() {
            
            var descriptionElement = this.parentNode.querySelector('.description');
            if (descriptionElement) {
                descriptionElement.classList.add('show-description');
            }
        });

        cardText.addEventListener('mouseout', function() {
            
            var descriptionElement = this.parentNode.querySelector('.description');
            if (descriptionElement) {
                descriptionElement.classList.remove('show-description');
            }
        });
    });
	
	
});