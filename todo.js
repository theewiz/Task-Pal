"use strict";

const appInfo = document.querySelector(".app-info");
const modal = document.querySelector(".app-info-modal");
const appBtn = document.querySelector(".app-btn");
const menuIcon = document.querySelector(".icon");
const themeChanger = document.querySelector(".theme-changer");
const body = document.querySelector(".body");
const theme = document.querySelector(".themes");

const welcome = document.getElementById("welcome");

const tasks = document.getElementById("taskList");
const task = document.querySelector(".task");
const circles = document.querySelectorAll(".circle");
const check = document.querySelectorAll(".check");
const delBtn = document.querySelectorAll(".delete");

const footerInput = document.getElementById("footer-input");
const addTask = document.querySelector(".input-text");
const footCircle = document.querySelector(".cir");
const plusText = document.querySelector(".text-plus");
const placeholder = document.querySelector("footer #footer-input input");
const input = document.querySelector("#footer-input input[type='text']");

const headerDate = document.querySelector(".header-date");

// -----------

appInfo.addEventListener("click", function (e) {
  modal.classList.remove("active");
});

appBtn.addEventListener("click", function () {
  modal.classList.add("active");
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("active");
  }
});

menuIcon.addEventListener("click", function () {
  themeChanger.classList.toggle("active");
});

body.addEventListener("click", function (e) {
  if (e.target === body) {
    themeChanger.classList.add("active");
  }
});

// Loop over circle & add check
for (let i = 0; i < circles.length; i++) {
  const cir = circles[i];
  const checks = check[i];
  const del = delBtn[i];

  if (cir.classList) {
    cir.addEventListener("click", function () {
      cir.classList.add("active");
      checks.classList.remove("active");
      del.style.opacity = 1;
    });
  }
}

// Loop over check & add circle
for (let i = 0; i < check.length; i++) {
  const cir = circles[i];
  const checks = check[i];
  const del = delBtn[i];

  if (checks.classList) {
    checks.addEventListener("click", function () {
      cir.classList.remove("active");
      checks.classList.add("active");
      del.style.opacity = 0;
    });
  }
}

// Change Footer 'Add Task' to Placeholder
footerInput.addEventListener("click", function () {
  plusText.classList.add("active");
  footCircle.classList.remove("active");
  placeholder.placeholder = `Try typing 'Going to the market'`;
});

// Reset Input
const resetInput = function () {
  input.value = "";
};

// Create a Task
const createTask = function (inputValue) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
        <div class="task-title-icon">
            <i class="fa-regular fa-circle circle"></i>
            <i class="fa-solid fa-circle-check check active"></i>
            <span class="task-text">${inputValue}</span>
          </div>

          <i class="fa-solid fa-trash delete"></i>
      `;

  tasks.appendChild(newTask);
  // console.log(newTask);

  if (newTask.firstElementChild) {
    welcome.classList.add("active");
  }
  return createTask;
};

// Delete a Task
tasks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className == "fa-solid fa-trash delete") {
    const rem = e.target.parentElement;
    tasks.removeChild(rem);
    // console.log("del clicked");
  }

  welcome.classList.remove("active");
});

// Add a Task
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    const inputValue = input.value;

    // createElement(inputValue);
    createTask(inputValue);
    // console.log(inputValue);
    resetInput();
  }
});

// Create Date
const date = new Date();

const getDay = function (dayNumber) {
  if (dayNumber === 0) {
    return "Sunday";
  } else if (dayNumber === 1) {
    return "Monday";
  } else if (dayNumber === 2) {
    return "Tuesday";
  } else if (dayNumber === 3) {
    return "Wednesday";
  } else if (dayNumber === 4) {
    return "Thursday";
  } else if (dayNumber === 5) {
    return "Friday";
  } else if (dayNumber === 6) {
    return "Saturday";
  } else {
    return "This is not a day of the week";
  }
};

const getMonth = function (monthNumber) {
  if (monthNumber === 0) {
    return "January";
  } else if (monthNumber === 1) {
    return "Febuary";
  } else if (monthNumber === 2) {
    return "March";
  } else if (monthNumber === 3) {
    return "April";
  } else if (monthNumber === 4) {
    return "May";
  } else if (monthNumber === 5) {
    return "June";
  } else if (monthNumber === 6) {
    return "July";
  } else if (monthNumber === 7) {
    return "August";
  } else if (monthNumber === 8) {
    return "September";
  } else if (monthNumber === 9) {
    return "October";
  } else if (monthNumber === 10) {
    return "November";
  } else if (monthNumber === 11) {
    return "December";
  } else {
    return "This is not a month of the year";
  }
};

const weekdayName = getDay(date.getDay());
const monthName = getMonth(date.getMonth());
const newDate = date.getDate();

headerDate.innerHTML = `${weekdayName}, ${monthName} ${newDate}`;

// Change Color Themes
const firstColor = document.querySelector(".color-1");
const secondColor = document.querySelector(".color-2");
const thirdColor = document.querySelector(".color-3");
const fourthColor = document.querySelector(".color-4");
const fifthColor = document.querySelector(".color-5");
const sixthColor = document.querySelector(".color-6");
const seventhColor = document.querySelector(".color-7");

firstColor.addEventListener("click", function () {
  body.style.backgroundColor = "hsl(227, 42%, 57%)";
});

secondColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgb(8, 166, 8)";
});

thirdColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgba(8, 126, 166, 0.718)";
});

fourthColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgba(166, 8, 100, 0.718)";
});

fifthColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgba(166, 148, 8, 0.718)";
});

sixthColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgba(8, 166, 158, 0.718)";
  console.log("Sixth clicked");
});

seventhColor.addEventListener("click", function () {
  body.style.backgroundColor = "rgba(166, 47, 8, 0.718)";
});
