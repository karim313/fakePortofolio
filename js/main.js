// Preloader functionality
window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 1500);
  }
});

let countersStarted = false;
let progressBarsAnimated = false;

function startAllCounters() {
  const elements = document.querySelectorAll(".num-element");
  elements.forEach(counter => {
    let count = 0;
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 15);

    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        counter.innerText = count;
      }
    }, stepTime);
  });
}

function animateProgressBars() {
  const bars = document.querySelectorAll('.about .progress-bar');
  bars.forEach((bar, index) => {
    const target = bar.getAttribute('style').match(/width:\s*(\d+%)/);
    if (target) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = target[1];
      }, 100 + index * 150);
    }
  });
}

// Scroll reveal observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade').forEach(el => {
  revealObserver.observe(el);
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Blue-layer counters & progress bars on scroll
window.addEventListener("scroll", () => {
  const blueLayer = document.querySelector(".blue-layer");
  if (blueLayer) {
    const sectionTop = blueLayer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !countersStarted) {
      countersStarted = true;
      startAllCounters();
    }
  }

  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (aboutTop < windowHeight - 100 && !progressBarsAnimated) {
      progressBarsAnimated = true;
      animateProgressBars();
    }
  }
});

// Bootstrap carousel swipe
const carousel = document.querySelector('#myCarousel');
if (carousel) {
  let startX;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    const instance = bootstrap.Carousel.getInstance(carousel);
    if (!instance) return;
    if (startX - endX > 50) {
      instance.next();
    } else if (endX - startX > 50) {
      instance.prev();
    }
  });

  carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  carousel.addEventListener('mouseup', (e) => {
    let endX = e.clientX;
    const instance = bootstrap.Carousel.getInstance(carousel);
    if (!instance) return;
    if (startX - endX > 50) {
      instance.next();
    } else if (endX - startX > 50) {
      instance.prev();
    }
  });
}

function noborder(element) {
  element.style.border = "none";
}

// Back to top button
let mybutton = document.getElementById("myBtn");
if (mybutton) {
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  });
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Support backToTopBtn on see_more.html
window.addEventListener('scroll', function () {
  var btn = document.getElementById('backToTopBtn');
  if (btn) {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
});

document.addEventListener('click', function (e) {
  var btn = e.target.closest('#backToTopBtn');
  if (btn) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});