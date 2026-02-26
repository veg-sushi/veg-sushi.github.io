

const contentData = [

  {
    id: "why",
    icon: "fa-question",
    title: "WHY NOT ME",
    lines: [
      "Because I don’t have enough years of experience?",
      "Wasn’t it a great brand that once said,",
      { text: "“Don’t ask if your dreams are crazy. Ask if they’re crazy enough.”", class: "quote" },
      "So here we are."
    ]
  },

  {
    id: "redirect",
    icon: "fa-bullseye",
    title: "THIS WASN’T SUPPOSED TO BE SENT HERE",
    lines: [
      "This was meant for three stripes.",
      "It chose motion instead.",
      "If I’m taking the swing,",
      "I’m taking it where it counts."
    ]
  },

  {
    id: "about",
    icon: "fa-user",
    title: "SO WHAT ABOUT ME?",
    type: "experience"
  },

  {
    id: "tech",
    icon: "fa-mobile-screen",
    title: "MY TECH CAPABILITIES",
    type: "tech"
  },

  {
    id: "stories",
    icon: "fa-book",
    title: "I LOVE STORIES",
    lines: [
      "Books.",
      "Reddit at 2am.",
      "Buying behaviour breakdowns.",
      "Marketplace is storytelling with checkout buttons.",
      "The best products don’t just sell.",
      "They signal."
    ]
  },

  {
  id: "dogs",
  icon: "fa-dog",
  title: "BASIC. BUT DISCERNING.",
  lines: [
    "I love dogs. Yes, I am basic like that.",
    "They get excited about small wins.",
    "They commit immediately.",
    "They do not overthink.",
    "Not big on pouncing felines",
    "(If you know what I mean.)",
    "Too much lurking.",
    "Too much plotting.",
    "I respect enthusiasm."
  ]
},

  {
    id: "planner",
    icon: "fa-calendar-check",
    title: "I PLAN THINGS AGGRESSIVELY WELL",
    lines: [
      "I plan holidays like product launches.",
      { text: "Budget.", class: "micro" },
      { text: "Experience map.", class: "micro" },
      { text: "Contingencies.", class: "micro" },
      "Execution is attractive.",
      "Chaos is overrated."
    ]
  },

  {
    id: "table",
    icon: "fa-fire",
    title: "WHAT I BRING TO THE TABLE",
    type: "grid"
  },

  {
    id: "manifesto1",
    icon: "fa-brain",
    title: "MANIFESTO",
    lines: [
      "Don’t ask if I have enough years.",
      "Ask if I think big enough."
    ]
  },

  {
    id: "manifesto2",
    icon: "fa-rocket",
    title: "MANIFESTO",
    lines: [
      "Don’t ask if it’s safe.",
      "Ask if it scales."
    ]
  },

  {
    id: "manifesto3",
    icon: "fa-arrows-rotate",
    title: "MANIFESTO",
    lines: [
      "Don’t ask if I fit the mould.",
      "Ask if the mould is outdated."
    ]
  },

  {
    id: "final",
    icon: "fa-flag-checkered",
    title: "LET’S BUILD",
    lines: [
      "Let’s build something people line up for.",
      "The kind that moves inventory.",
      "And moves conversations."
    ],
    contact: true
  }

];

let currentIndex = 0;
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function renderSection() {

  content.innerHTML = "";
  const section = contentData[currentIndex];

  addIcon(section.icon);
  addTitle(section.title);

  if (section.type === "experience") {

    addLine("I don’t have the required years of work experience.");
    addLine("But what I do have is");

    addGrid([
      { icon: "fa-brain", text: "Pattern recognition" },
      { icon: "fa-store", text: "Marketplace instinct" },
      { icon: "fa-coins", text: "Commercial accountability" },
      { icon: "fa-bolt", text: "Enough audacity to build this website instead of writing another cover letter" }
    ]);

    addHighlight("Years are a proxy. I optimise for signal.");
  }

  else if (section.type === "tech") {

    addLine("Doomscrolling.", "tech-small");
    addLine("UPI.", "tech-small");
    addLine("Add to cart.", "tech-small");
    addLine("Checkout.", "tech-small");

    addLine("And yet here I am building this website from scratch.", "tech-pause");
    addLine("Why?");

    addHTMLLine("<strong>Just</strong> because I can <strong>do</strong> <strong>it</strong>", "tech-strong");
    addHTMLLine("Struggle, but still, <strong>do it</strong>", "tech-strong");

    addLine("Initiative > comfort zones.", "tech-reflect");
    addLine("Also, if we’re being honest", "tech-reflect");
    addLine("knowing how people browse, hesitate, compare, abandon and finally checkout", "tech-reflect");

    addHighlight("is half the job.", "tech-final");
  }

  else if (section.type === "grid") {

    addGrid([
      { icon: "fa-chart-line", text: "Marketplace thinking beyond listings." },
      { icon: "fa-coins", text: "Comfort owning revenue, not just reach." },
      { icon: "fa-bolt", text: "Drop and launch sensitivity with commercial discipline." },
      { icon: "fa-layer-group", text: "Paid and platform integration instinct." },
      { icon: "fa-magnifying-glass", text: "Ability to zoom out and zoom in." },
      { icon: "fa-flask", text: "Structured experimentation muscle." },
      { icon: "fa-people-group", text: "Cross functional fluency." },
      { icon: "fa-shield-halved", text: "Calm under commercial pressure." },
      { icon: "fa-star", text: "Audacity." }
    ]);
  }

  else {

    section.lines.forEach((lineData, index) => {

      if (typeof lineData === "object") {
        const line = document.createElement("div");
        line.className = `line ${lineData.class || ""}`;
        line.innerText = lineData.text;
        content.appendChild(line);
      } 
      else {
        if (index === section.lines.length - 1) {
          addHighlight(lineData);
        } else {
          addLine(lineData);
        }
      }
    });
  }

  if (section.contact) {
    const contact = document.createElement("div");
    contact.className = "contact";
    contact.innerHTML = `
      <p><a href="mailto:sharmayushi31@gmail.com">sharmayushi31@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/ayushi-s/" target="_blank">LinkedIn</a></p>
    `;
    content.appendChild(contact);
  }

  backBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentIndex === contentData.length - 1 ? "hidden" : "visible";
}

function addIcon(iconClass) {
  const icon = document.createElement("div");
  icon.className = "top-icon";
  icon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
  content.appendChild(icon);
}

function addTitle(text) {
  const title = document.createElement("div");
  title.className = "section-title";
  title.innerText = text;
  content.appendChild(title);
}

function addLine(text, extraClass = "") {
  const line = document.createElement("div");
  line.className = `line ${extraClass}`;
  line.innerText = text;
  content.appendChild(line);
}

function addHTMLLine(html, extraClass = "") {
  const line = document.createElement("div");
  line.className = `line ${extraClass}`;
  line.innerHTML = html;
  content.appendChild(line);
}

function addHighlight(text, extraClass = "") {
  const highlight = document.createElement("div");
  highlight.className = `highlight ${extraClass}`;
  highlight.innerText = text;
  content.appendChild(highlight);
}

function addGrid(items) {

  const grid = document.createElement("div");
  grid.className = "grid";

  items.forEach((item, index) => {

    const box = document.createElement("div");
    box.className = "grid-box";

    if (items.length % 2 !== 0 && index === items.length - 1) {
      box.classList.add("full-width");
    }

    box.innerHTML = `
      <div class="icon-wrap"><i class="fa-solid ${item.icon}"></i></div>
      <div class="text-wrap">${item.text}</div>
    `;

    grid.appendChild(box);
  });

  content.appendChild(grid);
}

nextBtn.onclick = () => {
  if (currentIndex < contentData.length - 1) {
    currentIndex++;
    renderSection();
  }
};

backBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderSection();
  }
};

renderSection();
