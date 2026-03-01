document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentIndex = 0;
    let isAnimating = false;

    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;

        // Remove classes ativas
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Ativa novo slide
        items[index].classList.add('active');
        dots[index].classList.add('active');

        // Reseta trava de animação
        setTimeout(() => {
            isAnimating = false;
        }, 800);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    });

    // Permitir clicar nos dots diretamente
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });
});