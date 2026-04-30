(function () {
  const CONFIG = {
    agentName: "Ammu",
    ownerName: "Farook Mohammad",
    role: "IBM Integration Developer",
    email: "farookroman786@gmail.com",
    whatsappNumber: "916301244261",
    inactivityLimitMs: 120000,
    resumeKeywords: ["resume", "cv", "curriculum vitae", "download resume", "download cv", "view resume", "view cv", "show resume", "show cv", "open resume", "open cv", "get resume", "get cv", "share resume", "share cv", "profile", "professional profile", "work profile"],

  };

  const PROFILE = {
    summary:
      "Farook is a results-driven IBM Integration Developer with 3+ years of experience building secure, scalable, and high-performance integration solutions using IIB/ACE, IBM MQ, and enterprise middleware technologies.",

    about:
      "He specializes in migration projects, SOAP-to-REST modernization, TLS/SSL certificate configuration, MFT automations, and reliable message flows for mission-critical business systems. Known for zero-escalation deployments, strong debugging skills, shell scripting, API validation, and award-winning delivery excellence.",
    skills: [
  "IIB 10",
  "IBM ACE 12/13",
  "IBM MQ",
  "SOAP to REST transformations",
  "Linux",
  "Shell Scripting",
  "Cron Jobs",
  "SQL Server",
  "Database Operations",
  "SQL Joins",
  "TLS/SSL",
  "Keystore/Truststore",
  "MQ Security",
  "Postman",
  "SoapUI",
  "Logging and Debugging",
    ],
projects: [
  {
    name: "CentOS Migration",
    description:
      "Led the migration of IBM IIB servers from Ubuntu to CentOS with zero downtime across multiple business units. Built environments from scratch, configured MQ Queue Managers, WS-Security, SSL/TLS certificates, Global Cache, Policy Sets, and cron-based automation. Supported deployment, unit testing, integration testing, validation, and troubleshooting for mission-critical applications, delivering with zero escalations.",
  },
  {
    name: "myEngage Automation",
    description:
      "Developed enterprise-grade automation flows for PwC's client engagement lifecycle using IIB and IBM MQ. Supported 9 core business processes integrating with 5+ downstream applications, performed testing using SOAP UI, Postman, WinSCP, and PuTTY, and improved stability through IIB log analysis, debugging, and issue resolution.",
  },
  {
    name: "SOAP to REST Migration",
    description:
      "Modernized legacy SOAP APIs into lightweight REST services, improving integration flexibility, API usability, and maintainability for enterprise systems.",
  },
  {
    name: "MFT Automation",
    description:
      "Automated secure file transfer processes using shell scripts and SFTP, reducing manual effort and improving reliability for recurring file movement tasks.",
  },
],

    experience: [
  "Technology Analyst at Infosys, May 2022 - Present, Hyderabad, India.",
  "Designed, developed, and maintained enterprise-grade integration flows using IBM IIB, ACE, and IBM MQ across high-impact business domains.",
  "Implemented ESQL transformations, routing logic, reusable subflows, SOAP-to-REST integrations, message enrichment, validation, and mapping.",
  "Automated MFT/SFTP file transfer and environment activities using Linux shell scripting.",
  "Managed deployments, TLS/SSL configurations, MQ setup, and environment preparation across DEV, QA, Pre-Prod, and Production.",
  "Performed deep log analysis, payload debugging, system monitoring, issue triage, and long-term incident fixes.",
  "Recognized for delivery excellence, customer focus, leadership, and zero production escalations.",
],

    achievements: [
  "Maintained a strong track record of zero production escalations.",
  "Recognized for delivery excellence, customer focus, leadership, and cross-team collaboration.",
  "Led critical CentOS migration activities with zero downtime.",
  "Delivered secure and scalable enterprise integrations using IBM IIB, ACE, and IBM MQ.",
  "Improved automation and operational efficiency through shell scripting, MFT/SFTP automation, and debugging ownership.",
],

    strengths: [
  "Strong ownership in end-to-end integration delivery, from design and development to deployment and production support.",
  "Deep debugging and troubleshooting skills across IIB/ACE message flows, MQ, logs, payloads, and environment issues.",
  "Hands-on expertise in secure enterprise integrations using TLS/SSL, certificates, MQ security, and WS-Security.",
  "Proven ability to handle critical migrations and production activities with zero downtime and zero escalations.",
  "Strong collaboration with QA, onshore SMEs, product teams, and cross-functional stakeholders.",
  "Automation mindset using Linux shell scripting, cron jobs, MFT/SFTP, and reusable operational scripts.",
  "Good understanding of SOAP, REST, ESQL transformations, routing, validation, mapping, and message enrichment.",
],
    confidential:
      "I can share Farook's public portfolio details such as resume, skills, projects, experience, and contact options. I cannot share private details like passwords, private documents, personal address, salary details, private phone numbers, tokens, or anything not intentionally published on this portfolio.",
  };

  const styles = `
    .pf-chat-toggle {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 86px;
  height: 96px;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 9999;
  padding: 0;
  animation: pf-float 3s ease-in-out infinite;
}
.pf-chat-toggle::before {
  content: "Chat!";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  padding: 4px 9px;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(0,0,0,.16);
}

.pf-avatar-hair {
  position: absolute;
  top: 23px;
  left: 50%;
  transform: translateX(-50%);
  width: 66px;
  height: 34px;
  border-radius: 34px 34px 12px 12px;
  background: #111827;
  z-index: 1;
}

.pf-avatar-face {
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #ffd8b5;
  z-index: 2;
  box-shadow: 0 12px 28px rgba(0,0,0,.24);
}

.pf-avatar-face::before,
.pf-avatar-face::after {
  content: "";
  position: absolute;
  top: 23px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #111827;
  animation: pf-blink 4s infinite;
}

.pf-avatar-face::before { left: 17px; }
.pf-avatar-face::after { right: 17px; }

.pf-avatar-smile {
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  width: 22px;
  height: 11px;
  border-bottom: 4px solid #b91c1c;
  border-radius: 0 0 999px 999px;
  z-index: 3;
}

@keyframes pf-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes pf-blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(.12); }
}

    .pf-chat-window {
      position: fixed;
      right: 20px;
      bottom: 92px;
      width: min(390px, calc(100vw - 32px));
      height: min(590px, calc(100vh - 124px));
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      background: white;
      box-shadow: 0 18px 60px rgba(0,0,0,.24);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 9999;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .pf-chat-window.open { display: flex; }
    .pf-chat-header {
      padding: 14px 16px;
      background: #111827;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pf-chat-title { font-weight: 800; font-size: 15px; }
    .pf-chat-close {
      border: 0;
      background: transparent;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }
    .pf-chat-messages {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      background: #f9fafb;
    }
    .pf-msg {
      max-width: 88%;
      padding: 10px 12px;
      margin: 8px 0;
      border-radius: 12px;
      line-height: 1.45;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .pf-bot { background: white; border: 1px solid #e5e7eb; color: #111827; }
    .pf-user { margin-left: auto; background: #2563eb; color: white; }
    .pf-typing { color: #6b7280; font-style: italic; }
    .pf-quick-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      padding: 10px 14px;
      border-top: 1px solid #e5e7eb;
      background: white;
    }
    .pf-chip {
  border: 1px solid #9ca3af !important;
  background: #ffffff !important;
  color: #111827 !important;
  border-radius: 999px !important;
  padding: 7px 10px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  line-height: 1.2 !important;
  min-height: 34px !important;
}

    .pf-chip:hover {
  border-color: #111827 !important;
  background: #f3f4f6 !important;
  color: #111827 !important;
}

    .pf-chat-input {
      display: flex;
      gap: 8px;
      padding: 12px;
      border-top: 1px solid #e5e7eb;
      background: white;
    }
    .pf-chat-input input {
      flex: 1;
      border: 1px solid #d1d5db;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      min-width: 0;
    }
    .pf-send {
      border: 0;
      border-radius: 10px;
      padding: 0 14px;
      background: #111827;
      color: white;
      cursor: pointer;
      font-weight: 700;
    }
    .pf-link {
      color: #2563eb;
      font-weight: 700;
      text-decoration: underline;
    }
  `;

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function greeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }

  function sanitize(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function findResumeLink() {
    const anchors = Array.from(document.querySelectorAll("a"));
    const match = anchors.find((anchor) => {
      const text = (anchor.textContent || "").toLowerCase();
      const href = (anchor.href || "").toLowerCase();
      return text.includes("download cv") || text.includes("resume") || href.includes("resume") || href.includes("cv");
    });
    return match ? match.href : "";
  }

  function pageText() {
    return (document.body.innerText || "").replace(/\s+/g, " ").trim();
  }

  function openWhatsApp(message) {
    const number = CONFIG.whatsappNumber.replace(/\D/g, "");
    if (!number || number === "919999999999") {
      return "WhatsApp is not configured yet. Farook needs to add his WhatsApp number in portfolio-chatbot.js under CONFIG.whatsappNumber.";
    }
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return "Opening WhatsApp, please wait.. ";
  }

function hasAny(text, words) {
  return words.some((word) => {
    if (word.length <= 3) {
      return new RegExp(`\\b${word}\\b`, "i").test(text);
    }
    return text.includes(word);
  });
}


  function confidentialAnswer() {
    return `${PROFILE.confidential}\n\nIf you are a recruiter or collaborator, I can help you contact Farook through email or WhatsApp.`;
  }

  function greetingMessage() {
    return `${greeting()}. I am ${CONFIG.agentName}, an AI agent. How can I help you today with Farook's information? You can ask about his resume, projects, skills, achievements, experience, or contact options.\n\nFor privacy, this chat clears automatically after 2 minutes of inactivity.`;
  }

  function answer(input) {

    const text = input.toLowerCase();
    const resumeLink = findResumeLink();
    if (hasAny(text, ["what can you do", "what all you can do", "whats all you can do", "what you can do", "help", "capabilities", "features", "how can you help"])) {
  return `I am ${CONFIG.agentName}, Farook's portfolio AI agent.

I can help you with:
- Explaining who Farook is
- Showing Farook's resume or CV
- Summarizing his skills
- Explaining his projects
- Sharing his work experience
- Highlighting his achievements and strengths
- Helping recruiters understand his profile
- Opening WhatsApp with a prefilled message
- Sharing public contact options

I only share public portfolio information and do not share confidential or private details.`;
}


    if (hasAny(text, ["confidential", "private", "password", "secret", "token", "address", "salary", "personal phone"])) {
      return confidentialAnswer();
    }

    if (hasAny(text, ["thank", "thanks", "thank you", "done", "enough", "that's all", "that is all", "got it"])) {
      return "You're welcome. I am glad I could help. Is this enough, or can I help you with Farook's resume, skills, projects, achievements, experience, email, or WhatsApp contact?";
    }

    if (hasAny(text, ["who are you", "your name", "about you", "ai agent", "ammu"])) {
      return `I am ${CONFIG.agentName}, an AI agent on Farook's portfolio. I can help visitors understand Farook's public profile, resume, skills, projects, experience, achievements, and contact options. I do not share confidential or private information.`;
    }

    if (hasAny(text, ["what do you know", "know about farook", "tell me about farook", "who is farook", "about farook"])) {
      return `${PROFILE.summary}\n\n${PROFILE.about}\n\nKey strengths:\n- ${PROFILE.strengths.join("\n- ")}`;
    }

    if (CONFIG.resumeKeywords.some((keyword) => text.includes(keyword))) {
  const detail =
    "Farook's resume highlights 3+ years of experience as an IBM Integration Developer, with expertise in IIB/ACE, IBM MQ, SOAP-to-REST modernization, TLS/SSL certificate configuration, MFT/SFTP automation, shell scripting, API validation, debugging, deployments, and zero-escalation delivery.";

  if (resumeLink) {
    return `${detail}\n\nYou can view or download his resume here:\n${resumeLink}`;
  }

  return `${detail}\n\nI could not find the resume link on this page. Please make sure the Resume or Download CV button links to the resume file.`;
}


    if (hasAny(text, ["whatsapp", "message", "ping", "contact"])) {
      return openWhatsApp("Hi Farook, I visited your portfolio and would like to connect with you.");
    }

    if (hasAny(text, ["email", "mail"])) {
      return `You can email Farook at ${CONFIG.email}.`;
    }

    if (hasAny(text, ["skill", "skills", "technology", "stack", "tools"])) {
      return `Farook's main skills include integration platforms, API development, automation, database integration, security, and testing:\n- ${PROFILE.skills.join("\n- ")}`;
    }

    if (hasAny(text, ["project", "projects", "built", "work sample"])) {
      return PROFILE.projects.map((project) => `${project.name}\n${project.description}`).join("\n\n");
    }

    if (hasAny(text, ["experience", "internship", "training"])) {
      return `Farook's experience includes:\n- ${PROFILE.experience.join("\n- ")}`;
    }

    if (hasAny(text, ["achievement", "achievements", "achieve", "achieved", "accomplishment", "accomplishments", "award", "awards", "recognition", "recognized"])) {
  return `Farook's key achievements include:
- ${PROFILE.achievements.join("\n- ")}`;
}

    if (hasAny(text, ["hire", "job", "available", "recruiter"])) {
      return `Farook is currently looking for a full-time React.js developer role. He would be a fit for frontend roles involving React.js, Next.js, Tailwind CSS, Firebase, and responsive UI development. You can contact him at ${CONFIG.email} or ask me to open WhatsApp.`;
    }

    if (hasAny(text, ["hello", "hi", "hey", "good morning", "good evening", "good afternoon"])) {
      return `${greeting()}. I am ${CONFIG.agentName}, Farook's portfolio AI agent. How can I help you today? You can ask about his resume, skills, projects, experience, achievements, or contact options.`;
    }

    const content = pageText().toLowerCase();
    const words = text.split(/\s+/).filter((word) => word.length > 3);
    const found = words.find((word) => content.includes(word));
    if (found) {
      return `I found something related to "${found}" on this portfolio. Ask me more specifically about Farook's resume, skills, projects, experience, achievements, email, or WhatsApp contact.`;
    }

    return `I am ${CONFIG.agentName}, Farook's portfolio AI agent. I can help with Farook's resume, skills, projects, experience, achievements, strengths, email, and WhatsApp contact. You can also ask: "Who are you?" or "What can you do?"`;
  }
  function createMessage(container, text, type) {
    const message = document.createElement("div");
    message.className = `pf-msg ${type === "user" ? "pf-user" : "pf-bot"}`;
    const safeText = sanitize(text);
    const urlPattern = /(https?:\/\/[^\s<]+)/g;
    message.innerHTML = safeText.replace(urlPattern, (url) => {
      return `<a class="pf-link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
    return message;
  }

  function createTyping(container) {
    return createMessage(container, `${CONFIG.agentName} is typing...`, "bot");
  }

  function ask(messages, question, resetInactivityTimer) {
  resetInactivityTimer();

  createMessage(messages, question, "user");
  const typing = createTyping(messages);

  window.setTimeout(() => {
    typing.remove();

    let reply = "";

    try {
      reply = answer(question);
    } catch (error) {
      console.error("Ammu chatbot error:", error);
      reply = "Sorry, I had trouble understanding that. You can ask me about Farook's resume, skills, projects, experience, achievements, or contact options.";
    }

    createMessage(messages, reply, "bot");
    resetInactivityTimer();
  }, 450);
}


  function init() {
    addStyles();

    const toggle = document.createElement("button");
    toggle.className = "pf-chat-toggle";
    toggle.setAttribute("aria-label", "Open portfolio chatbot");
    toggle.innerHTML = '<span class="pf-avatar-hair"></span><span class="pf-avatar-face"></span><span class="pf-avatar-smile"></span>';


    const chat = document.createElement("section");
    chat.className = "pf-chat-window";
    chat.innerHTML = `
      <div class="pf-chat-header">
        <div>
          <div class="pf-chat-title">${CONFIG.agentName} - Portfolio AI Agent</div>
          <div style="font-size:12px; opacity:.78;">Ask about Farook</div>
        </div>
        <button class="pf-chat-close" aria-label="Close chatbot">x</button>
      </div>
      <div class="pf-chat-messages"></div>
      <div class="pf-quick-actions">
        <button class="pf-chip" data-question="Who are you?">Who are you?</button>
        <button class="pf-chip" data-question="Who is Farook?">Who is Farook?</button>
        <button class="pf-chip" data-question="Show resume">Resume</button>
        <button class="pf-chip" data-question="What did he achieve?">Achievements</button>
        <button class="pf-chip" data-question="Show projects">Projects</button>
        <button class="pf-chip" data-question="Contact on WhatsApp">WhatsApp</button>
      </div>
      <form class="pf-chat-input">
        <input type="text" placeholder="Ask Ammu about Farook..." />
        <button class="pf-send" type="submit">Send</button>
      </form>
    `;

    document.body.appendChild(chat);
    document.body.appendChild(toggle);

    const messages = chat.querySelector(".pf-chat-messages");
    const input = chat.querySelector("input");
    const form = chat.querySelector("form");
    let inactivityTimer = null;
    let chatStarted = false;

    function startChat() {
      chatStarted = true;
      messages.innerHTML = "";
      createMessage(messages, greetingMessage(), "bot");
      resetInactivityTimer();
    }

    function endChatDueToInactivity() {
      if (!chatStarted) return;
      messages.innerHTML = "";
      createMessage(
        messages,
        "This chat was cleared after 2 minutes of inactivity. Thank you for visiting Farook's portfolio. You can start a new chat anytime.",
        "bot"
      );
      chatStarted = false;
      window.clearTimeout(inactivityTimer);
      inactivityTimer = null;
    }

    function resetInactivityTimer() {
      window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(endChatDueToInactivity, CONFIG.inactivityLimitMs);
    }

    startChat();

    toggle.addEventListener("click", () => {
  chat.classList.toggle("open");

  if (chat.classList.contains("open")) {
    toggle.style.display = "none";
    if (typeof startChat === "function" && !chatStarted) startChat();
    input.focus();
  } else {
    toggle.style.display = "block";
  }
});

    chat.querySelector(".pf-chat-close").addEventListener("click", () => {
  chat.classList.remove("open");
  toggle.style.display = "block";
});


    chat.querySelectorAll(".pf-chip").forEach((chip) => {
      chip.addEventListener("click", () => ask(messages, chip.dataset.question, resetInactivityTimer));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      input.value = "";
      ask(messages, question, resetInactivityTimer);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
