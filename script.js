
            const header = document.getElementById('header');
            const navbar = document.getElementById('navbar');
            let prevScrollPos = window.pageYOffset;

            window.onscroll = function() {
                let currentScrollPos = window.pageYOffset;

                // Atur margin-top header saat scroll ke bawah atau ke atas
                if (currentScrollPos > 50) {
                    header.classList.remove('mt-20');
                    header.classList.add('mt-0');
                    header.classList.remove('bg-transparent');
                    header.classList.add('bg-coklattua');
                } else {
                    header.classList.remove('mt-0');
                    header.classList.add('mt-20');
                    header.classList.add('bg-transparent');
                    header.classList.remove('bg-coklattua');
                }

                // Sembunyikan navbar jika scroll ke bawah, tampilkan jika scroll ke atas
                if (prevScrollPos > currentScrollPos) {
                    navbar.classList.remove('hidden');
                } else {
                    navbar.classList.add('hidden');
                }

                prevScrollPos = currentScrollPos;
            };

// biar tombol burger bisa diklik
const menuBtn = document.querySelector('.menu-btn')
const navlinks =document.querySelector('.nav-links')
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

menuBtn.addEventListener('click',()=>{
            navlinks.classList.toggle('mobile-menu')
        })

// counting
// Fungsi untuk menghitung naik dari 0 ke angka target
function countUp() {
    const counters = document.querySelectorAll('.counter'); // Mengambil semua elemen .counter

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        let count = 0;

        const updateCount = () => {
            const increment = target / 200; // Mengatur kecepatan hitung

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 10); // Ulangi setiap 10ms
            } else {
                counter.innerText = target;
            }
        };

        updateCount(); // Mulai animasi untuk setiap counter
    });
}

window.onload = countUp; // Memulai counting saat halaman dimuat


