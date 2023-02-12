AOS.init();

// SLIDES

// ADD HERE THE REVIEWS
const images = [
  {
    id: "1",
    url: "./img/works/scu-screen.png",
    text: "Giudizio assolutamente positivo. Competenza, precisione e velocità nella creazione di siti sono i suoi punti di forza ",
    from: '"My Chance"'
  },
  {
    id: "2",
    url: "./img/works/mar-screen.png",
    text: "Ottimo servizio. Ho richiesto la creazione del mio sito e sono rimasto estremamente soddisfatto del risultato che ho ottenuto.",
    from: '"Martin Branchesi"'
  }
]

const right = document.querySelector('.slides__rightarrow')
const left = document.querySelector('.slides__leftarrow')
const image = document.querySelector('.slides__image')
const title = document.querySelector(".slides__title")
const from = document.querySelector(".slides__span")
const slidesdetails = document.querySelector(".slides__details")

let cont = 0

right.addEventListener('click', () => {
  if (cont === images.length - 1) {
    cont = 0
  } else {
    cont++
  }

  image.classList.remove("animate__fadeIn")
  slidesdetails.classList.remove("animate__fadeIn")

  image.dataset.tilt

  setTimeout(() => {
    image.classList.add("animate__fadeIn")
    slidesdetails.classList.add("animate__fadeIn")
    image.src = images[cont].url
    title.textContent = images[cont].text
    from.textContent = images[cont].from
  }, 20)
})

left.addEventListener('click', () => {
  if (cont === 0) {
    cont = images.length - 1
  } else {
    cont--
  }

  image.classList.remove("animate__fadeIn")
  slidesdetails.classList.remove("animate__fadeIn")

  image.dataset.tilt

  setTimeout(() => {
    image.classList.add("animate__fadeIn")
    slidesdetails.classList.add("animate__fadeIn")
    image.src = images[cont].url
    title.textContent = images[cont].text
    from.textContent = images[cont].from
  }, 20)
})


// FORM ANIMATION

const budgetInput = document.getElementById("budget")
const budgetOutput = document.getElementById("budget-output")
const labels = document.getElementsByClassName("label")

for (let i = 0; i < labels.length; i++) {
  const label = labels[i];
  label.addEventListener("focus", () => {
    if (label.className === "hidden-label") {
      label.classList.add("shown-label")
      label.classList.remove("hidden-label")
    } else if (label.className === "shown-label") {
      label.classList.add("hidden-label")
      label.classList.remove("shown-label")
    }

  })
}


// Budget range
budgetInput.addEventListener("input", () => {
  budgetOutput.value = `€${budgetInput.value}`
})

//  SCROLL SNAP
if (window.innerHeight >= 600) {
  window.addEventListener("load", function () {
    const sections = document.querySelectorAll("section");
    let currentSection = 0;
    let scrollCounter = 0;

    for (let i = 0; i < sections.length; i++) {
      sections[i].style.scrollSnapType = "proximity";
      sections[i].style.scrollBehavior = "smooth";
    }

    function scrollToSection(index) {
      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    document.addEventListener("wheel", function (event) {
      event.preventDefault();
      scrollCounter++;

      if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {

      if (scrollCounter >= 1) {
        
        if (event.deltaY > 0) {
          if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
            scrollCounter = 0;
          }
        } else {
          if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
            scrollCounter = 0;
          }
        }

      }
    }else{

      if (event.deltaY > 0) {
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
          scrollCounter = 0;
        }
      } else {
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
          scrollCounter = 0;
        }
      }
    }
    }, { passive: false });

    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else if (event.key === "ArrowUp") {
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    });

    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", function (event) {
      touchStartY = event.touches[0].clientY;
    });

    document.addEventListener("touchend", function (event) {
      touchEndY = event.changedTouches[0].clientY;

      if (touchStartY > touchEndY) {
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else {
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    });
  });
}
