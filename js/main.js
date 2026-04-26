let countersStarted = false;

  function startAllCounters() {
    const elements = document.querySelectorAll(".num-element");

    elements.forEach(counter => {
      let count = 0;
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000;
      const stepTime = Math.floor(duration / target);

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

  window.addEventListener("scroll", () => {
    const section = document.querySelector(".blue-layer");
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !countersStarted) {
      countersStarted = true;
      startAllCounters();
    }
  });
  
  
  
  
  
  
  // JavaScript for enabling swipe functionality on the Bootstrap carousel
  // This code allows users to swipe left or right on touch devices or drag with the mouse to navigate through the carousel items.
  
  
  
  const carousel = document.querySelector('#myCarousel');
  let startX;

  // للموبايل (اللمس)
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      bootstrap.Carousel.getInstance(carousel).next();
    } else if (endX - startX > 50) {
      bootstrap.Carousel.getInstance(carousel).prev();
    }
  });

  // للكمبيوتر (السحب بالماوس)
  carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  carousel.addEventListener('mouseup', (e) => {
    let endX = e.clientX;
    if (startX - endX > 50) {
      bootstrap.Carousel.getInstance(carousel).next();
    } else if (endX - startX > 50) {
      bootstrap.Carousel.getInstance(carousel).prev();
    }
  });

  function noborder(element){
    element.style.border = "none";
  }


  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ظهور الزر عند التمرير
window.addEventListener('scroll', function() {
    var btn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) { // يظهر بعد التمرير 300px
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// العودة للأعلى بنقرة سلسة
document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});