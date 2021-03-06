console.log(`hello`);

const turnOnBrightMode = () => {
  document.documentElement.style.setProperty("--main-color", "#ebecf0");
  document.documentElement.style.setProperty(
    "--gradient",
    "rgb(231, 233, 243)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "rgb(90, 97, 119)"
  );
  document.documentElement.style.setProperty("--shadow-bright", "#fff");
  document.documentElement.style.setProperty("--shadow-dark", "#babecc");
  document.documentElement.style.setProperty(
    "--main-shadow-bright",
    "rgba(255, 255, 255, 0.911)"
  );
  document.documentElement.style.setProperty(
    "--radio-shadow-dark",
    "rgba(0, 0, 0, 0.2)"
  );
  document.documentElement.style.setProperty(
    "--radio-shadow-bright",
    "rgba(255, 255, 255, 0.2)"
  );
  document.documentElement.style.setProperty("--pop-color", "#686de0");
  document.documentElement.style.setProperty("--submit-color", "#585eb8");
  document.documentElement.style.setProperty(
    "--text-shadow",
    "0 0 0 transparent"
  );
};

// const turnOnDarkMode = () => {
//     document.documentElement.style.setProperty("--main-color", "#09151a");
//     document.documentElement.style.setProperty("--gradient", "#09151a");
//     document.documentElement.style.setProperty("--text-color", "#205b62");
//     document.documentElement.style.setProperty("--shadow-bright", "#15242b");
//     document.documentElement.style.setProperty(
//       "--shadow-dark",
//       "rgba(0, 0, 0, 0.3)"
//     );
//     document.documentElement.style.setProperty("--main-shadow-bright", "#15242b");
//     document.documentElement.style.setProperty("--radio-shadow-dark", "#021211");
//     document.documentElement.style.setProperty(
//       "--radio-shadow-bright",
//       "#15242b"
//     );
//     document.documentElement.style.setProperty("--pop-color", "#06faee");
//     document.documentElement.style.setProperty("--submit-color", "#06faeecc");
//     document.documentElement.style.setProperty(
//       "--text-shadow",
//       "0 0 10px #06faeecc"
//     );
//   };

const turnOnDarkMode = () => {
  document.documentElement.style.setProperty("--main-color", "#243441");
  document.documentElement.style.setProperty("--gradient", "#1f2e38");
  document.documentElement.style.setProperty("--text-color", "#4d899b");
  document.documentElement.style.setProperty("--shadow-bright", "#34424e");
  document.documentElement.style.setProperty("--shadow-dark", "#17242d");
  document.documentElement.style.setProperty("--main-shadow-bright", "#34424e");
  document.documentElement.style.setProperty(
    "--radio-shadow-dark",
    "rgba(0, 0, 0, 0.2)"
  );
  document.documentElement.style.setProperty(
    "--radio-shadow-bright",
    "#374552"
  );
  document.documentElement.style.setProperty("--pop-color", "#5fbbbb");
  document.documentElement.style.setProperty("--submit-color", "#64cccc");
  document.documentElement.style.setProperty(
    "--text-shadow",
    "0 0 5px #64cccc"
  );
};

const disableTransition = () => {
  document.documentElement.style.setProperty(
    "--transition",
    "box-shadow 0s ease-in-out"
  );
};

const enableTransition = () => {
  document.documentElement.style.setProperty(
    "--transition",
    "box-shadow 0.2s ease-in-out"
  );
};

const modeBtn = document.querySelector(".mode-button--js");

let isDark = false;
const changeMode = () => {
  if (isDark) {
    setTimeout(disableTransition, 0);
    setTimeout(turnOnBrightMode, 100);
    setTimeout(enableTransition, 500);
    modeBtn.classList.remove("mode-button--checked");
    isDark = false;
  } else {
    setTimeout(disableTransition, 0);
    setTimeout(turnOnDarkMode, 100);
    setTimeout(enableTransition, 500);
    modeBtn.classList.add("mode-button--checked");
    isDark = true;
  }
};

modeBtn.addEventListener("click", changeMode);
