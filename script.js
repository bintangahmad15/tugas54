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

    // Contoh sederhana untuk validasi form dan pesan sukses/error
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            const name = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('telepon').value;
            const message = document.getElementById('pesan').value;

            if (name && phone && message) { // Email dan lokasi opsional
                // Di sini Anda akan mengirim data ke backend (misal: Flask/PHP/Node.js)
                // Untuk demo ini, kita hanya menampilkan alert
                alert('Terima kasih, ' + name + '! Permintaan penawaran Anda telah kami terima dan akan segera kami proses melalui WhatsApp.');
                contactForm.reset(); // Mengosongkan form
            } else {
                alert('Mohon lengkapi kolom Nama Lengkap, Nomor Telepon (WA Aktif), dan Detail Kebutuhan Pagar Anda.');
            }
        });
    }

    // Optional: Logika untuk slider testimoni (jika ingin otomatis geser)
    // Anda bisa menggunakan library JS seperti Swiper.js atau menulis sendiri.
    // Contoh sederhana (tanpa otomatisasi atau tombol navigasi):
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });
        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });
        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });
        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2; // Kecepatan scroll
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }
});
