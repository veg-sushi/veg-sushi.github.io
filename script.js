const content = [
  { title: "Why Not Me",
    lines: [
      "WHY NOT ME.",
      "Wasn’t it a great brand that once said,",
      "Don’t ask if your dreams are crazy. Ask if they’re crazy enough.",
      "I did.",
      "And here we are."
    ]
  },
  { title: "This Wasn’t Supposed To Be Sent Here",
    lines: [
      "This was supposed to be sent to adidas. It isn’t.",
      "Because I think Nike is cooler.",
      "If you’re going to take a swing, you might as well aim properly."
    ]
  },
  { title: "So What About Me?",
    lines: [
      "I don’t have the required years.",
      "What I do have is pattern recognition.",
      "Marketplace instinct.",
      "Commercial accountability.",
      "Enough audacity to build a website instead of writing another cover letter.",
      "Years are a proxy.",
      "I optimise for signal."
    ]
  },
  { title: "My Tech Capabilities",
    lines: [
      "Doomscrolling.",
      "UPI.",
      "Add to cart.",
      "Checkout.",
      "And yet here I am building this.",
      "Understanding how people browse, hesitate, compare, abandon and checkout is half the job."
    ]
  },
  { title: "I Love Stories",
    lines: [
      "Books.",
      "Reddit at 2am.",
      "Buying behaviour breakdowns.",
      "Marketplace is storytelling with checkout buttons.",
      "The best products do not just sell.",
      "They signal."
    ]
  },
  { title: "Basic But Self Aware",
    lines: [
      "I like dogs. Yes, I am basic.",
      "Specifically the slightly derpy, tongue-out, no-thoughts-just-vibes kind.",
      "I notice emotional signals.",
      "I value loyalty.",
      "I believe consistency builds trust.",
      "Also, they are just great."
    ]
  },
  { title: "I Plan Things Aggressively Well",
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
  { title: "What I Bring To The Table",
    lines: [
      "Marketplace thinking beyond listings.",
      "Comfort owning revenue, not just reach.",
      "Drop and launch sensitivity with commercial discipline.",
      "Paid and platform integration instinct.",
      "Ability to zoom out and zoom in.",
      "Structured experimentation muscle.",
      "Cross functional fluency.",
      "Calm under commercial pressure.",
      "Audacity.",
      "I do not just launch campaigns.",
      "I think about second order effects."
    ]
  },
  { title: "Manifesto",
    lines: [
      "Don’t ask if I have enough years.",
      "Ask if I think big enough."
    ]
  },
  { title: "Manifesto",
    lines: [
      "Don’t ask if it’s safe.",
      "Ask if it scales."
    ]
  },
  { title: "Manifesto",
    lines: [
      "Don’t ask if I fit the mould.",
      "Ask if the mould is outdated."
    ]
  },
  { title: "If You’re Still Reading",
    lines: [
      "Let’s build something people line up for.",
      "The kind that moves inventory.",
      "And moves conversations."
    ]
  }
];

let sectionIndex = 0;
let lineIndex = 0;

const stack = document.getElementById("stack");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function render() {
  stack.innerHTML = "";

  const section = content[sectionIndex];

  const title = document.createElement("div");
  title.className = "section-title";
  title.innerText = section.title;
  stack.appendChild(title);

  for (let i = 0; i <= lineIndex; i++) {
    const line = document.createElement("div");
    line.className = "line " + (i === lineIndex ? "current" : "previous");
    line.innerText = section.lines[i];
    stack.appendChild(line);
  }

  backBtn.style.visibility = (sectionIndex === 0 && lineIndex === 0) ? "hidden" : "visible";
}

nextBtn.onclick = () => {
  const section = content[sectionIndex];
  if (lineIndex < section.lines.length - 1) {
    lineIndex++;
  } else if (sectionIndex < content.length - 1) {
    sectionIndex++;
    lineIndex = 0;
  }
  render();
};

backBtn.onclick = () => {
  if (lineIndex > 0) {
    lineIndex--;
  } else if (sectionIndex > 0) {
    sectionIndex--;
    lineIndex = content[sectionIndex].lines.length - 1;
  }
  render();
};

render();
