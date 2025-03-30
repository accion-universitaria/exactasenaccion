document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropdown-button').addEventListener('click', function() {
         const dropdown = document.querySelector('.dropdown');
         dropdown.classList.toggle('active');
     });
 });
 