document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Blokuje domyślne przeładowanie strony
    
    // Pobranie pól
    const name = document.getElementById('name').value;
    const successMessage = document.getElementById('successMessage');
    
    // Pokazanie komunikatu sukcesu
    successMessage.textContent = `Dziękujemy, ${name}. Twój formularz trafił do naszego działu prawnego. Skontaktujemy się w ciągu 2 godzin.`;
    successMessage.classList.remove('hidden');
    
    // Czyszczenie pól formularza
    this.reset();
});
