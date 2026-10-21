document.getElementById('fileSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const files = document.querySelectorAll('.file-card');
    
    files.forEach(file => {
        const fileName = file.querySelector('h4').textContent.toLowerCase();
        file.style.display = fileName.includes(searchTerm) ? 'flex' : 'none';
    });
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.dataset.category;
        const files = document.querySelectorAll('.file-card');
        
        files.forEach(file => {
            if(category === 'all' || file.dataset.category === category) {
                file.style.display = 'flex';
            } else {
                file.style.display = 'none';
            }
        });
        
        document.querySelector('.tab-btn.active').classList.remove('active');
        this.classList.add('active');
    });
});

document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const fileCard = this.closest('.file-card');
        const fileName = fileCard.querySelector('h4').textContent;
        
        showShareModal(fileName);
    });
}); 