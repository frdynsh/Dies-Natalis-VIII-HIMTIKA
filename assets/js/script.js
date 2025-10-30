// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
    if (
        (event.ctrlKey &&
        (event.key === "u" ||
            event.key === "i" ||
            event.key === "j" ||
            event.key === "s")) ||
        (event.ctrlKey &&
        event.shiftKey &&
        (event.key === "I" || event.key === "J" || event.key === "C")) ||
        event.key === "F12"
    ) {
        event.preventDefault();
        console.log("Inspect Element telah dinonaktifkan!"); // Debugging
    }
});
// Mencegah Klik Kanan
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
// Mencegah Drag & Drop pada Semua Gambar
document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});
// Mencegah Klik Kanan pada Gambar Secara Spesifik
document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (event) => event.preventDefault());
});

// HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
    let getStartedBtn = document.querySelector(".button");
    let aboutSection = document.getElementById("about");

  // Ketika tombol Get Started diklik, scroll ke bagian About
    getStartedBtn.addEventListener("click", function () {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

// ### NAVBAR
// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('#navbar');
    const fixedNav = header.offsetTop;
    console.log(fixedNav);

    // if (window.pageYOffset > fixedNav) {
    //     header.classList.add('navbar-fixed');
    //     header.classList.remove('navbar-absolute');
    // } 
    // else {
    //     header.classList.remove('navbar-fixed');
    //     header.classList.add('navbar-absolute');
    // }
    if (scrollY <= 500) {
        // TAMPILKAN navbar absolute
        header.classList.remove('navbar-fixed');
        header.classList.add('navbar-absolute');
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
    } 
    else if (scrollY > 500 && scrollY <= 650) {
        // SEMBUNYIKAN NAVBAR
        header.style.transform = "translateY(-10px)";
        header.style.opacity = "0";
        document.body.classList.remove('nav-open');
        navMenu.classList.remove('dropdown-appear');
        navMenu.classList.add("hidden");
    } 
    else {
        // TAMPILKAN navbar fixed
        header.classList.add('navbar-fixed');
        header.classList.remove('navbar-absolute');
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click' , function() {
    // hamburger.classList.toggle('hamburger-active');
    // navMenu.classList.toggle('hidden');
    const isMobile = window.innerWidth < 1024; // Tailwind 'lg' = 1024px

    if (navMenu.classList.contains("hidden")){
        document.body.classList.toggle('nav-open');
        navMenu.classList.remove("hidden");
        navMenu.classList.add('dropdown-appear');
        navMenu.style.transform = "translateY(-10px)";
        navMenu.style.opacity = "0";

        setTimeout(() => {
            navMenu.style.transform = "translateY(0)";
            navMenu.style.opacity = "1";
        }, 10);
    } else {
        if (isMobile) {
            navMenu.style.transform = "translateY(-10px)";
            navMenu.style.opacity = "0";
            document.body.classList.remove('nav-open');
            navMenu.classList.remove('dropdown-appear');
            setTimeout(() => {
                navMenu.classList.add("hidden");
            }, 300);
        }
    }
});

function updateNavMenuDisplay() {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
        // Hanya tambahkan hidden jika menu belum dibuka (misalnya user belum klik hamburger)
        if (!document.body.classList.contains('nav-open')) {
            navMenu.classList.add("hidden");
        } else {
            navMenu.classList.remove('dropdown-appear');
            navMenu.classList.add("hidden");
            document.body.classList.remove('nav-open');
        }
    } else {
        navMenu.classList.remove('dropdown-appear');
        navMenu.classList.remove("hidden");
        navMenu.style.opacity = "1";
        navMenu.style.transform = "translateY(0)";
    }
}

// Jalankan saat halaman pertama kali dimuat
updateNavMenuDisplay();

// Jalankan juga saat ukuran layar berubah
window.addEventListener('resize', updateNavMenuDisplay);
// ### NAVBAR

// function createStars() {
//     const container = document.querySelector('#about .stars-container');
//     const numberOfStars = 300;

//     for (let i = 0; i < numberOfStars; i++) {
//         const star = document.createElement('div');
//         star.classList.add('star');

//         const size = Math.random() * 3 + 1;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;

//         // posisi acak di dalam container
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.top = `${Math.random() * 100}%`;

//         // kecepatan twinkle acak
//         star.style.animationDuration = `${Math.random() * 2 + 1}s`;

//         container.appendChild(star);
//     }
// }
function createStars() {
    const container = document.querySelector("#about .stars-container");
    const numberOfStars = 400;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 2 + 2; // ukuran kecil biar gak numpuk
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // posisi acak
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;

        // durasi gerak acak biar gak serentak
        const moveDuration = Math.random() * 40 + 20; // 30–70 detik
        const twinkleDuration = Math.random() * 2 + 1; // 1–3 detik

        star.style.animation = `twinkle ${twinkleDuration}s infinite ease-in-out, moveStars ${moveDuration}s linear infinite`;

        // tiap kali selesai animasi, reset posisi ke kiri biar langit tetap penuh
        star.addEventListener("animationiteration", (e) => {
        if (e.animationName === "moveStars") {
            star.style.left = `-${Math.random() * 5}vw`; // muncul dari kiri
            star.style.top = `${Math.random() * 100}%`; // posisi vertikal acak
        }
        });

        container.appendChild(star);
    }
}

createStars();

// ### MAKE A WISH SECTION
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".wish-slide");
    const dots = document.querySelectorAll(".wish-dot");
    const prevBtn = document.getElementById("wish-prev");
    const nextBtn = document.getElementById("wish-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".wish-slide");
    const dots = document.querySelectorAll(".wish-dot");
    const prevBtn = document.getElementById("wish-prev");
    const nextBtn = document.getElementById("wish-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(20px)"; // Efek geser ke bawah
            setTimeout(() => {
            slides.forEach((s) => s.classList.remove("wish-active")); // Hapus active di semua
            slide.classList.add("wish-active");
            slide.style.opacity = "1";
            slide.style.transform = "translateY(0)";
            }, 200); // Delay agar tidak langsung muncul
        } else {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(-20px)"; // Efek geser ke atas saat pindah
        }
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("wish-active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});
// ### MAKE A WISH SECTION

// ### lOGO SECTION
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".logo-slide");
    const dots = document.querySelectorAll(".logo-dot");
    const prevBtn = document.getElementById("logo-prev");
    const nextBtn = document.getElementById("logo-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        slide.classList.toggle("logo-active", i === index);
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("logo-active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".logo-slide");
    const dots = document.querySelectorAll(".logo-dot");
    const prevBtn = document.getElementById("logo-prev");
    const nextBtn = document.getElementById("logo-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(20px)"; // Efek geser ke bawah
            setTimeout(() => {
            slides.forEach((s) => s.classList.remove("logo-active")); // Hapus active di semua
            slide.classList.add("logo-active");
            slide.style.opacity = "1";
            slide.style.transform = "translateY(0)";
            }, 200); // Delay agar tidak langsung muncul
        } else {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(-20px)"; // Efek geser ke atas saat pindah
        }
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("logo-active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});
// ### lOGO SECTION

// ### MASKOT SECTION
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".maskot-slide");
    const dots = document.querySelectorAll(".maskot-dot");
    const prevBtn = document.getElementById("maskot-prev");
    const nextBtn = document.getElementById("maskot-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        slide.classList.toggle("maskot-active", i === index);
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("maskot-active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".maskot-slide");
    const dots = document.querySelectorAll(".maskot-dot");
    const prevBtn = document.getElementById("maskot-prev");
    const nextBtn = document.getElementById("maskot-next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(20px)"; // Efek geser ke bawah
            setTimeout(() => {
            slides.forEach((s) => s.classList.remove("maskot-active")); // Hapus active di semua
            slide.classList.add("maskot-active");
            slide.style.opacity = "1";
            slide.style.transform = "translateY(0)";
            }, 200); // Delay agar tidak langsung muncul
        } else {
            slide.style.opacity = "0";
            slide.style.transform = "translateY(-20px)"; // Efek geser ke atas saat pindah
        }
        });

        dots.forEach((dot, i) => {
        dot.classList.toggle("maskot-active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
        currentIndex = i;
        showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});
// ### MASKOT SECTION


// ## GALLERY SECTION
// POP UP DOKUMENTASI
const images = [...document.querySelectorAll('.image')];

// popup
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
// const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

// Popup Image Agate 1
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})
const updateImage = (i) => {
    // let path = `assets/images/logo/logo-diesnat-gallery-${i+1}.png`;
    let path = `assets/images/logo/logo-diesnat-gallery.png`;
    largeImage.src = path;
    // imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    } else {
        // balik ke akhir
        updateImage(images.length - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    } else {
        // balik ke awal
        updateImage(0);
    }
})
// ## GALLERY SECTION
