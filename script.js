const sections = [

  `<h1>WHY NOT ME.</h1>
   <p>Wasn’t it a great brand that once said,<br>
   “Don’t ask if your dreams are crazy. Ask if they’re crazy enough.”</p>
   <p>I did.<br>And here we are.</p>`,

  `<h2>This Wasn’t Supposed To Be Sent Here</h2>
   <p>This was supposed to be sent to adidas.<br>It isn’t.</p>
   <p>Because I think Nike is cooler.</p>
   <p>Also because if you’re going to take a swing,<br>
   you might as well aim properly.</p>`,

  `<h2>So What About Me</h2>
   <p>I don’t have the “required” years.</p>
   <p>What I do have is:</p>
   <p>• Pattern recognition<br>
   • Marketplace instinct<br>
   • Commercial accountability<br>
   • Enough audacity to build a website instead of writing another cover letter</p>
   <p>Years are a proxy.<br>I optimise for signal.</p>`,

  `<h2>My Tech Capabilities</h2>
   <p>My tech experience includes doomscrolling, UPI payments, adding to cart, and online shopping.</p>
   <p>And yet here I am.<br>Building a website from scratch.</p>
   <p>Initiative beats comfort zones.</p>`,

  `<h2>I Love Stories</h2>
   <p>Books.<br>Reddit threads at 2am.<br>
   People explaining why they bought something they did not need.</p>
   <p class="red">Marketplace is storytelling with checkout buttons.</p>`,

  `<h2>Basic But Self Aware</h2>
   <p>I like dogs. Yes, I am basic.</p>
   <p>Specifically the slightly derpy, tongue-out, no-thoughts-just-vibes kind.</p>`,

  `<h2>I Plan Things Aggressively Well</h2>
   <p>Budget.<br>Experience map.<br>Contingencies.<br>Backup airport snacks.</p>
   <p class="blue">Execution is attractive.</p>
   <p class="red">Chaos is overrated.</p>`,

  `<h2>What I Bring To The Table</h2>
   <p>Marketplace thinking beyond listings.<br>
   Comfort owning revenue, not just reach.<br>
   Drop and launch sensitivity with commercial discipline.<br>
   Paid and platform integration instinct.<br>
   Ability to zoom out and zoom in.<br>
   Structured experimentation muscle.<br>
   Cross functional fluency.<br>
   Calm under commercial pressure</p>
   <p>And yes, audacity.</p>`,

  `<h2>The Lines That Matter</h2>
   <p>Don’t ask if I have enough years.<br>Ask if I think big enough.</p>
   <p>Don’t ask if it’s safe.<br>Ask if it scales.</p>
   <p>Don’t ask if I fit the mould.<br>Ask if the mould is outdated.</p>`,

  `<h2>Let’s build something worth lining up for.</h2>
   <p><a href="mailto:sharmayushi31@gmail.com" style="color:#fff;">sharmayushi31@gmail.com</a></p>
   <p class="blue"><a href="https://www.linkedin.com/in/ayushi-s/" target="_blank" style="color:#3fa9ff;">LinkedIn</a></p>`
];

let current = 0;
const content = document.getElementById("content");
const runner = document.getElementById("runner");
const flag = document.getElementById("flag");

function render() {
  content.innerHTML = sections[current];
  const progress = (current / (sections.length - 1)) * 90;
  runner.style.left = progress + "%";
  flag.style.opacity = current === sections.length - 1 ? 1 : 0;
}

document.getElementById("nextBtn").onclick = () => {
  if(current < sections.length - 1) {
    current++;
    render();
  }
};

document.getElementById("backBtn").onclick = () => {
  if(current > 0) {
    current--;
    render();
  }
};

render();
