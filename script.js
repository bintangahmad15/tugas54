document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contoh sederhana untuk validasi form (bisa dikembangkan lebih lanjut)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            const name = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('pesan').value;

            if (name && email && message) {
                alert('Terima kasih, ' + name + '! Pesan Anda telah kami terima dan akan segera kami proses.');
                contactForm.reset(); // Mengosongkan form
            } else {
                alert('Mohon lengkapi semua kolom yang wajib diisi (Nama, Email, Pesan).');
            }
        });
    }

    // Jika Anda ingin membuat slider testimoni, JavaScript akan lebih kompleks di sini.
    // Ini hanyalah placeholder untuk menunjukkan di mana kode JavaScript bisa ditempatkan.
});