document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('slider');
    const body = document.body;
    const footer = document.footer;
    const header = document.header;
 
    toggleDarkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
    });
 });