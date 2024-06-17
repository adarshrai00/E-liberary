

function readBook() {
    alert("Google Api is connecting please wait....");
}

function downloadBook() {
    alert("Downloading the book...");
}
function searchBooks() {
    const input = document.getElementById('search-input').value.toLowerCase(); 
    const bookCards = document.querySelectorAll('#book-cards .book-card'); 
    bookCards.forEach(card => {
        const bookName = card.getAttribute('data-book-name').toLowerCase(); 
        if (bookName.includes(input)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
}
