document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            if (item !== button.parentElement) {
                item.querySelector('.accordion-content').style.display = 'none';
            }
        });

        const accordionContent = button.nextElementSibling;
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    });
});

