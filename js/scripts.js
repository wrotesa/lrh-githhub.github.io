document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelector('.carousel-dots');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let currentIndex = 0;

    // 动态生成导航点
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('li');
        dot.setAttribute('data-index', index);
        if (index === 0) dot.classList.add('active');
        carouselDots.appendChild(dot);
    });

    // 左右切换按钮点击事件
    carouselPrev.addEventListener('click', () => navigateCarousel(-1));
    carouselNext.addEventListener('click', () => navigateCarousel(1));

    // 导航点点击事件
    carouselDots.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            const newIndex = parseInt(e.target.getAttribute('data-index'));
            navigateCarousel(newIndex - currentIndex);
        }
    });

    function navigateCarousel(step) {
        currentIndex = (currentIndex + step + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
            carouselDots.children[index].classList.toggle('active', index === currentIndex);
        });
    }

    // 初始化轮播
    setInterval(() => navigateCarousel(1), 3000);
});