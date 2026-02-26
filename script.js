const contentData = [

  {
    title: "WHY NOT ME",
    icon: "fa-question",
    lines: [
      "WHY NOT ME.",
      "Wasn’t it a great brand that once said,",
      "Don’t ask if your dreams are crazy. Ask if they’re crazy enough.",
      "I did.",
      "And here we are."
    ]
  },

  {
    title: "THIS WASN’T SUPPOSED TO BE SENT HERE",
    icon: "fa-bullseye",
    lines: [
      "This was supposed to be sent to adidas.",
      "It isn’t.",
      "Because I think Nike is cooler.",
      "If you’re going to take a swing, you might as well aim properly."
    ]
  },

  {
    title: "SO WHAT ABOUT ME?",
    icon: "fa-user",
    lines: [
      "I don’t have the required years.",
      "What I do have is:",
      "Pattern recognition.",
      "Marketplace instinct.",
      "Commercial accountability.",
      "Enough audacity to build a website instead of writing another cover letter.",
      "Years are a proxy.",
      "I optimise for signal."
    ]
  },

  {
    title: "MY TECH CAPABILITIES",
    icon: "fa-mobile-screen",
    lines: [
      "Doomscrolling.",
      "UPI.",
      "Add to cart.",
      "Checkout.",
      "And yet here I am building this.",
      "Understanding how people browse, hesitate, compare, abandon and checkout is half the job."
    ]
  },

  {
    title: "I LOVE STORIES",
    icon: "fa-book",
    lines: [
      "Books.",
      "Reddit at 2am.",
      "Buying behaviour breakdowns.",
      "Marketplace is storytelling with checkout buttons.",
      "The best products do not just sell.",
      "They signal."
    ]
  },

  {
    title: "BASIC BUT SELF AWARE",
    icon: "fa-dog",
    lines: [
      "I like dogs. Yes, I am basic.",
      "Specifically the slightly derpy, tongue-out, no-thoughts-just-vibes kind.",
      "I notice emotional signals.",
      "I value loyalty.",
      "I believe consistency builds trust.",
      "Also, they are just great."
    ]
  },

  {
    title: "I PLAN THINGS AGGRESSIVELY WELL",
    icon: "fa-calendar-check",
    lines: [
      "I plan holidays like product launches.",
      "Budget.",
      "Experience map.",
      "Contingencies.",
      "Backup airport snacks.",
      "Execution is attractive.",
      "Chaos is overrated."
    ]
  },

  {
    title: "WHAT I BRING TO THE TABLE",
    icon: "fa-fire",
    type: "grid",
    items: [
      { icon: "fa-chart-line", text: "Marketplace thinking beyond listings." },
      { icon: "fa-coins", text: "Comfort owning revenue, not just reach." },
      { icon: "fa-bolt", text: "Drop and launch sensitivity with commercial discipline." },
      { icon: "fa-layer-group", text: "Paid and platform integration instinct." },
      { icon: "fa-magnifying-glass", text: "Ability to zoom out and zoom in." },
      { icon: "fa-flask", text: "Structured experimentation muscle." },
      { icon: "fa-people-group", text: "Cross functional fluency." },
      { icon: "fa-shield-halved", text: "Calm under commercial pressure." },
      { icon: "fa-star", text: "Audacity." }
    ]
  },

  {
    title: "MANIFESTO",
    icon: "fa-bolt",
    lines: [
      "Don’t ask if I have enough years.",
      "Ask if I think big enough."
    ]
  },

  {
    title: "MANIFESTO",
    icon: "fa-bolt",
    lines: [
      "Don’t ask if it’s safe.",
      "Ask if it scales."
    ]
  },

  {
    title: "MANIFESTO",
    icon: "fa-bolt",
    lines: [
      "Don’t ask if I fit the mould.",
      "Ask if the mould is outdated."
    ]
  },

  {
    title: "IF YOU’RE STILL READING",
    icon: "fa-flag-checkered",
    lines: [
      "Let’s build something people line up for.",
      "The kind that moves inventory.",
      "And moves conversations."
    ]
  }

];

let currentIndex = 0;
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function renderSection() {
  content.innerHTML = "";
  const section = contentData[currentIndex];

  const icon = document.createElement("div");
  icon.className = "top-icon";
  icon.innerHTML = `<i class="fa-solid ${section.icon}"></i>`;
  content.appendChild(icon);

  const title = document.createElement("div");
  title.className = "section-title";
  title.innerText = section.title;
  content.appendChild(title);

  if (section.type === "grid") {
    const grid = document.createElement("div");
    grid.className = "grid";

    section.items.forEach(item => {
      const box = document.createElement("div");
      box.className = "grid-box";
      box.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.text}`;
      grid.appendChild(box);
    });

    content.appendChild(grid);
  } else {
    section.lines.forEach((text, index) => {
      const line = document.createElement("div");
      line.className = "line";
      if (index === section.lines.length - 1) {
        line.classList.add("highlight");
      }
      line.innerText = text;
      content.appendChild(line);
    });
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
