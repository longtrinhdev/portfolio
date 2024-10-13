// menu: button
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const btnOne = document.querySelector("#project_one");
const btnTwo = document.querySelector("#project_two");
const btnThree = document.querySelector("#project_three");
const btnFour = document.querySelector("#project_four");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const iconClose = document.querySelector(".modal__close");
const btnClose = document.querySelector(".modal__footer");

const iframe = document.querySelector("#modal__body--mp4");

const title = document.querySelector("#modal__title");
const desc = document.querySelector("#modal__body--desc-p");
const con = document.querySelector("#modal__body--con-p");
const tech = document.querySelector("#modal__body--tech-p");

// init
let arrTitles = [
  "Student Management",
  "Schedule",
  "WiFi Scanner",
  "Concert Ticket Website",
];
let arrDescs = [
  " This project is a major project of the subject Major Project of" +
    "Computer Engineering. In this project, I developed a student" +
    "management application with the goal of creating a user-friendly" +
    "and easy-to-use platform. The application allows teachers to" +
    "manage student lists effectively, from updating scores, viewing " +
    "class file export schedules to tracking the progress of each" +
    "student. Using Firebase, I implemented a user login management" +
    "system and stored data on Firebase. In addition, I also focused on" +
    "developing a number of other user features, to optimize the" +
    "management process as well as increase user experience.",
  "This project is designed to help users easily manage and organize their daily work. With a friendly and intuitive interface, users can flexibly track and organize their tasks effectively. In particular, the application supports offline mode, bringing convenience and speed to users, no matter where they are.",
  "I designed this application to collect Wi-Fi data for our group's scientific research project. The application helps users easily collect information about Wi-Fi, including name, SSID, signal strength, and sensor values. After collection, the data will be fed into a machine-learning model for processing, thereby effectively determining location and accuracy.",
  "This project is part of the F8 FullStack Basic HTML/CSS course. After completing the course, I designed the interface for a concert ticketing website. The project helped me get familiar with HTML and CSS tags and create an intuitive and user-friendly interface. I focused on the user experience, making sure that people could easily find and book tickets to their favorite music events.",
];

let arrCons = [
  "In this project, I took on the role of interface designer and application developer. I designed the soft copy on Figma and then implemented this design in Android Studio. I used Firebase to manage the user login system and also performed data manipulation on Firebase to retrieve information and display it in the application. To enhance the user experience, I combined animations and custom views, creating a flexible and friendly interface, making it easy for users to manipulate.",
  "In this project, I took on the role of user interface designer, with the goal of creating an intuitive and friendly user experience. I used the Room Database to store user input tasks, ensuring high availability and performance. Besides, I also integrated animation effects to enhance the user experience, bringing liveliness and appeal to the application.",
  "In this project, I was responsible for designing the user interface, ensuring that the user experience was intuitive and easy to understand. I also handled the necessary permissions, ensuring that the application ran smoothly. Additionally, I took measurements and recorded the data to files, storing them securely in the device's internal memory.",
  "In this project, I took on the role of interface designer, focusing on creating intuitive and user-friendly interfaces. I used HTML, CSS, and JavaScript technologies to build smooth and interactive user experiences.",
];

let arrTechs = [
  "Android Studio, Java, Firebase.",
  "Android Studio, Java, Room Database.",
  "Android Studio, Java.",
  "HTML/CSS, JavaSCript.",
];

// open menu
menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// open modal
function showModal(urls, arrTitle, arrDesc, arrCon, arrTech) {
  setTimeout(() => {
    iframe.src = urls;
  }, 300);

  title.textContent = arrTitle;
  desc.textContent = arrDesc;
  con.textContent = arrCon;
  tech.textContent = arrTech;

  modal.classList.add("open");
}

function hideModal() {
  modal.classList.remove("open");
}

btnOne.addEventListener("click", function () {
  showModal(
    "https://youtube.com/embed/IkcxpQcly5Q",
    arrTitles[0],
    arrDescs[0],
    arrCons[0],
    arrTechs[0]
  );
});
btnTwo.addEventListener("click", function () {
  showModal(
    "https://youtube.com/embed/a5LHfVUqdtg",
    arrTitles[1],
    arrDescs[1],
    arrCons[1],
    arrTechs[1]
  );
});
btnThree.addEventListener("click", function () {
  showModal(
    "https://youtube.com/embed/L_M59SkpQsY",
    arrTitles[2],
    arrDescs[2],
    arrCons[2],
    arrTechs[2]
  );
});
btnFour.addEventListener("click", function () {
  showModal(
    "https://youtube.com/embed/_p4AesD7EmY",
    arrTitles[3],
    arrDescs[3],
    arrCons[3],
    arrTechs[3]
  );
});
iconClose.addEventListener("click", hideModal);
btnClose.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation(); // ngừng nổi bọt
});
