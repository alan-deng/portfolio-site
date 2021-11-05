// Navbar Scroll
const headerOffset = 65;
const offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
};
const bindNavOnClicks = () => {
  const allButtons = document.querySelectorAll("#nav-buttons a");
  for (let i = 0; i < allButtons.length; i++) {
    let buttonEl = allButtons[i];
    let elToFind = buttonEl.id.slice(0, buttonEl.id.indexOf("-"));
    let element = document.getElementById(elToFind);
    if (buttonEl.id !== "resume-button") {
      buttonEl.addEventListener("click", () =>
        scrollTo({
          top: offset(element) - headerOffset,
          behavior: "smooth",
        })
      );
    }
  }
};
bindNavOnClicks();

const bindNavOnClicks2 = () => {
  const allButtons = document.querySelectorAll("#nav-buttons-2 li a");
  for (let i = 0; i < allButtons.length; i++) {
    let buttonEl = allButtons[i];
    let elToFind = buttonEl.id.slice(0, buttonEl.id.indexOf("-"));
    let element = document.getElementById(elToFind);
    buttonEl.addEventListener("click", () => {
      document.querySelectorAll(".navbar-close")[0].click();
      scrollTo({
        top: offset(element) - headerOffset,
        behavior: "smooth",
      });
    });
  }
};

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

bindNavOnClicks2();

//Auto Tour functionality
const giveTour = () => {
  // When changing project to highlight, change favProject below, and link to favProject at bottom of giveTour
  const favProject = "project-property-manager";
  const displayText = document.getElementById("tour-text");
  let currTimeout;

  const cancelTour = () => {
    clearTimeout(currTimeout);
    changeClass(["tour-container", "tour-shadow"], "hidden", "add");
    changeClass(
      [
        "hero-text",
        "tour-shadow",
        "tour-container",
        "skill-word",
        "skill-icons",
        "projects-container",
        "about-header",
        "about-text",
        "contact-header",
        "contact-form",
        "github-logo",
        "linkedin-logo",
        "email-logo",
        favProject,
      ],
      "z-50"
    );
    changeClass(
      ["about-text", "email-logo", "skill-icons", "hero-text"],
      "bg-white"
    );
    changeClass(
      ["about-highlight-1", "about-highlight-2", "about-highlight-3"],
      "shadow-md"
    );
    displayText.innerHTML = `Tour not initiated. Click the button!`;
  };

  document
    .getElementById("cancel-button")
    .addEventListener("click", cancelTour);

  const changeClass = (elArr, className, action = "remove") => {
    if (action === "add") {
      for (el of elArr) {
        document.getElementById(el).classList.add(className);
      }
    } else {
      for (el of elArr) {
        document.getElementById(el).classList.remove(className);
      }
    }
  };

  const initializeTour = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    changeClass(["tour-container", "tour-shadow"], "hidden");
    changeClass(["hero-text", "tour-shadow", "tour-container"], "z-50", "add");
    changeClass(["hero-text"], "bg-white", "add");
    displayText.innerHTML =
      "Welcome to Alan's portfolio tour! Just sit back, and enjoy the show.";

    currTimeout = setTimeout(showSkills, 8000);
  };

  const showSkills = () => {
    document.getElementById("skills-button").click();
    changeClass(["hero-text"], "bg-white");
    changeClass(["hero-text"], "z-50");
    changeClass(["skill-word", "skill-icons"], "z-50", "add");
    changeClass(["skill-icons"], "bg-white", "add");
    displayText.innerHTML = "Here we have skills. So many!";
    currTimeout = setTimeout(showProjects, 10000);
  };

  const showProjects = () => {
    document.getElementById("projects-button").click();
    changeClass(["skill-word", "skill-icons"], "z-50");
    changeClass(["skill-icons"], "bg-white");
    changeClass(["projects-container"], "z-50", "add");
    displayText.innerHTML = `Some projects I've done. We'll come back to this later`;
    currTimeout = setTimeout(showAboutAndContact, 5000);
  };

  const showAboutAndContact = () => {
    document.getElementById("about-button").click();
    changeClass(["projects-container"], "z-50");
    changeClass(
      [
        "about-header",
        "about-text",
        "contact-header",
        "contact-form",
        "github-logo",
        "linkedin-logo",
        "email-logo",
      ],
      "z-50",
      "add"
    );
    changeClass(
      ["about-text", "email-logo", "linkedin-logo", "github-logo"],
      "bg-white",
      "add"
    );
    changeClass(
      ["about-highlight-1", "about-highlight-2", "about-highlight-3"],
      "shadow-md",
      "add"
    );
    displayText.innerHTML = `A little summary of myself. Feel free to reach out to me!`;
    currTimeout = setTimeout(tourWrapup, 10000);
  };

  const tourWrapup = () => {
    document.getElementById("projects-button").click();
    changeClass(
      [
        "about-header",
        "about-text",
        "contact-header",
        "contact-form",
        "github-logo",
        "linkedin-logo",
        "email-logo",
      ],
      "z-50"
    );
    changeClass(
      ["about-text", "email-logo", "linkedin-logo", "github-logo"],
      "bg-white"
    );
    changeClass(
      ["about-highlight-1", "about-highlight-2", "about-highlight-3"],
      "shadow-md"
    );
    changeClass(["projects-container"], "z-50", "add");
    displayText.innerHTML = `Back to projects. Each project has a list of skills, and links to the project.`;
    currTimeout = setTimeout(openProject, 10000);
  };

  const openProject = () => {
    changeClass(["projects-container"], "z-50");
    changeClass([favProject], "z-50", "add");
    window.scrollTo({
      top: offset(document.getElementById(favProject)) - headerOffset - 5,
      behavior: "smooth",
    });
    displayText.innerHTML = `This one's my favorite. Check it out!`;
    // Currently not going to auto-open project website (still highlighting fav proj for 10 sec)
    // currTimeout = setTimeout(() => {
    //   window.open("https://www.w3schools.com");
    // }, 4000);
    setTimeout(() => {
      changeClass([favProject, "tour-shadow", "tour-container"], "z-50");
      changeClass(["tour-container", "tour-shadow"], "hidden", "add");
      displayText.innerHTML = `Tour not initiated. Click the button!`;
    }, 5000);
  };

  initializeTour();
};

document.getElementById("tour-button").addEventListener("click", giveTour);

// ParticlesJS Config
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#CACACA",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 80,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
