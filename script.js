const text = "Full Stack Developer";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (!typingElement) return;
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent = document.body.classList.contains("light-mode")
      ? "🌙"
      : "☀";
  });
}

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

function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.style.boxShadow = "0 0 15px rgba(0, 245, 255, 0.35)";
  } else {
    navbar.classList.remove("scrolled");
    navbar.style.boxShadow = "none";
  }
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "";
    } else {
      project.style.display = "none";
    }
  });
}

function openModal(title, description) {
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDescription");
  const modalEl = document.getElementById("projectModal");

  if (!titleEl || !descEl || !modalEl) return;

  titleEl.textContent = title;
  descEl.textContent = description;
  modalEl.style.display = "block";
}

const closeModal = document.getElementById("closeModal");
const projectModal = document.getElementById("projectModal");

if (closeModal && projectModal) {
  closeModal.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      projectModal.style.display = "none";
    }
  });
}

const cursor = document.querySelector(".cursor");
const isTouchDevice = window.matchMedia(
  "(hover: none), (pointer: coarse)",
).matches;

if (!isTouchDevice && cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const cards = document.querySelectorAll(".card-3d");

if (!isTouchDevice) {
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
}

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

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("closeChatbot");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotInput = document.getElementById("chatbotInput");
const sendChat = document.getElementById("sendChat");

if (chatbotToggle && chatbot) {
  chatbotToggle.addEventListener("click", () => {
    chatbot.style.display =
      chatbot.style.display === "block" ? "none" : "block";
  });
}

if (closeChatbot && chatbot) {
  closeChatbot.addEventListener("click", () => {
    chatbot.style.display = "none";
  });
}

function addMessage(text, type) {
  if (!chatbotBody) return;

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
  if (!chatbotInput) return;

  const message = chatbotInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  chatbotInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 350);
}

if (sendChat) {
  sendChat.addEventListener("click", sendMessage);
}

if (chatbotInput) {
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

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
