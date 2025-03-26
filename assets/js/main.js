// Основные скрипты для главной страницы
document.addEventListener('DOMContentLoaded', function() {
    // Динамическое обновление года в подвале
    const footer = document.querySelector('#main-footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('2023', currentYear);
    }

    // Эффект параллакса для заголовка
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Интерактивная таблица
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(70, 130, 180, 0.1)';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});
