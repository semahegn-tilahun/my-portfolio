// Typing Effect
const text = "Full Stack Developer";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

// Theme Toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode")
    ? "🌙"
    : "☀";
});

// Scroll Reveal
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.style.boxShadow = "0 0 15px rgba(0, 245, 255, 0.35)";
  } else {
    navbar.classList.remove("scrolled");
    navbar.style.boxShadow = "none";
  }
}

// Project Filter
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Modal
function openModal(title, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("projectModal").style.display = "block";
}

const closeModal = document.getElementById("closeModal");
const projectModal = document.getElementById("projectModal");

closeModal.addEventListener("click", () => {
  projectModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    projectModal.style.display = "none";
  }
});

// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  }
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 3D Card Effect
const cards = document.querySelectorAll(".card-3d");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

// GitHub Contribution Grid Generator
function generateGitHubGrid() {
  const githubGrid = document.getElementById("githubGrid");
  if (!githubGrid) return;

  githubGrid.innerHTML = "";

  for (let i = 0; i < 168; i++) {
    const cell = document.createElement("div");
    const level = Math.floor(Math.random() * 5);
    cell.classList.add("github-cell", `level-${level}`);
    githubGrid.appendChild(cell);
  }
}

// Chatbot Assistant
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("closeChatbot");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotInput = document.getElementById("chatbotInput");
const sendChat = document.getElementById("sendChat");

chatbotToggle.addEventListener("click", () => {
  chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
});

closeChatbot.addEventListener("click", () => {
  chatbot.style.display = "none";
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.classList.add(type === "user" ? "user-message" : "bot-message");
  message.textContent = text;
  chatbotBody.appendChild(message);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("skill") || msg.includes("tech")) {
    return "My core stack includes HTML, CSS, JavaScript, Node.js, Express, APIs, databases, Git, and responsive web development.";
  }

  if (msg.includes("project")) {
    return "Featured projects include a Full Stack Task Manager, an E-commerce Interface, and a REST API Backend.";
  }

  if (msg.includes("contact") || msg.includes("email")) {
    return "You can contact me through email, GitHub, or LinkedIn in the contact section.";
  }

  if (msg.includes("resume") || msg.includes("cv")) {
    return "You can connect the Download Resume button to your actual CV file.";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello. Ask me about skills, projects, or how this portfolio was built.";
  }

  return "I can help with portfolio info like skills, projects, GitHub, contact details, and resume.";
}

function sendMessage() {
  const message = chatbotInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  chatbotInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 500);
}

sendChat.addEventListener("click", sendMessage);

chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Init
window.addEventListener("load", () => {
  type();
  reveal();
  handleNavbarScroll();
  generateGitHubGrid();
});

window.addEventListener("scroll", () => {
  reveal();
  handleNavbarScroll();
});
