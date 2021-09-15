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
    buttonEl.addEventListener("click", () =>
      scrollTo({
        top: offset(element) - headerOffset,
        behavior: "smooth",
      })
    );
  }
};
bindNavOnClicks();

//Auto Tour functionality
const giveTour = () => {
  const favProject = "project-2";
  const displayText = document.getElementById("tour-words").firstElementChild;

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
    changeClass(["tour-words", "tour-shadow"], "hidden");
    changeClass(["hero-text", "tour-shadow", "tour-container"], "z-50", "add");
    displayText.innerHTML =
      "Thanks for joining Alan portfolio tours! I'll be your guide";

    setTimeout(showSkills, 2000);
  };

  const showSkills = () => {
    document.getElementById("skills-button").click();
    changeClass(["hero-text"], "z-50");
    changeClass(["skill-word", "skill-icons"], "z-50", "add");
    displayText.innerHTML = "Here we have skills. So many!";
    setTimeout(showProjects, 2000);
  };

  const showProjects = () => {
    document.getElementById("projects-button").click();
    changeClass(["skill-word", "skill-icons"], "z-50");
    changeClass(["projects-container"], "z-50", "add");
    displayText.innerHTML = `Some projects I've done. We'll come back to this later`;
    setTimeout(showAboutAndContact, 2000);
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
    changeClass(["about-text", "email-logo"], "bg-white", "add");
    displayText.innerHTML = `A little summary of myself. Feel free to reach out to me!`;
    setTimeout(tourWrapup, 2000);
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
    changeClass(["about-text", "email-logo"], "bg-white");
    changeClass(["projects-container"], "z-50", "add");
    displayText.innerHTML = `Back to projects. Each project has links to them at the bottom`;
    setTimeout(openProject, 2000);
  };

  const openProject = () => {
    changeClass(["projects-container"], "z-50");
    changeClass([favProject], "z-50", "add");
    window.scrollTo({
      top: offset(document.getElementById(favProject)) - headerOffset - 5,
      behavior: "smooth",
    });
    displayText.innerHTML = `This one's my favorite. Let's check it out!`;

    setTimeout(() => {
      changeClass([favProject, "tour-shadow", "tour-container"], "z-50");
      changeClass(["tour-words", "tour-shadow"], "hidden", "add");
      displayText.innerHTML = `Tour not initiated. Click the button!`;
      window.open("https://www.w3schools.com");
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
