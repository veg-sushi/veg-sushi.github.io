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
    ],
    swoosh: true
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
    lines: [
      "Doomscrolling.",
      "UPI.",
      "Add to cart.",
      "Checkout.",
      "And yet here I am building this website from scratch.",
      "Why?",
      "Because I can do it.",
      "(Struggle. But do it.)",
      "Understanding behaviour is half the job."
    ]
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
    title: "BASIC BUT SELF AWARE",
    lines: [
      "I like dogs. Yes, I am basic.",
      "Specifically the slightly derpy kind.",
      "I notice emotional signals.",
      "I value loyalty.",
      "Consistency builds trust."
    ]
  },

  {
    id: "planner",
    icon: "fa-calendar-check",
    title: "I PLAN THINGS AGGRESSIVELY WELL",
    lines: [
      "I plan holidays like product launches.",
      "Budget.",
      "Experience map.",
      "Contingencies.",
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
  content.className = "fade";

  const section = contentData[currentIndex];

  const icon = document.createElement("div");
  icon.className = "top-icon";
  icon.innerHTML = `<i class="fa-solid ${section.icon}"></i>`;
  content.appendChild(icon);

  const title = document.createElement("div");
  title.className = "section-title";
  title.innerText = section.title;
  content.appendChild(title);

  if (section.type === "experience") {

    const intro = document.createElement("div");
    intro.className = "line";
    intro.innerText = "I don’t have the required years of work experience.";
    content.appendChild(intro);

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = [
      { icon: "fa-brain", text: "Pattern recognition" },
      { icon: "fa-store", text: "Marketplace instinct" },
      { icon: "fa-coins", text: "Commercial accountability" },
      { icon: "fa-bolt", text: "Enough audacity to build this website instead of writing another cover letter" }
    ];

    items.forEach(item => {
      const box = document.createElement("div");
      box.className = "grid-box";
      box.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.text}`;
      grid.appendChild(box);
    });

    content.appendChild(grid);

    const closing = document.createElement("div");
    closing.className = "highlight";
    closing.innerText = "Years are a proxy. I optimise for signal.";
    content.appendChild(closing);

  } else if (section.type === "grid") {

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = [
      { icon: "fa-chart-line", text: "Marketplace thinking beyond listings." },
      { icon: "fa-coins", text: "Comfort owning revenue, not just reach." },
      { icon: "fa-bolt", text: "Drop and launch sensitivity with commercial discipline." },
      { icon: "fa-layer-group", text: "Paid and platform integration instinct." },
      { icon: "fa-magnifying-glass", text: "Ability to zoom out and zoom in." },
      { icon: "fa-flask", text: "Structured experimentation muscle." },
      { icon: "fa-people-group", text: "Cross functional fluency." },
      { icon: "fa-shield-halved", text: "Calm under commercial pressure." },
      { icon: "fa-star", text: "Audacity." }
    ];

    items.forEach(item => {
      const box = document.createElement("div");
      box.className = "grid-box";
      box.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.text}`;
      grid.appendChild(box);
    });

    content.appendChild(grid);

  } else {

    section.lines.forEach((lineData, index) => {
      const line = document.createElement("div");
      line.className = "line";

      if (typeof lineData === "object") {
        line.innerText = lineData.text;
        line.classList.add(lineData.class);
      } else {
        line.innerText = lineData;
      }

      if (index === section.lines.length - 1) {
        line.classList.add("highlight");
      }

      content.appendChild(line);
    });
  }

  if (section.swoosh) {
    const swoosh = document.createElement("div");
    swoosh.className = "highlight";
    swoosh.innerHTML = "&#8767;";
    content.appendChild(swoosh);
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
