const surpriseBtn = document.getElementById("surpriseBtn");
const happyCount = document.getElementById("happyCount");
const themeButtons = document.querySelectorAll(".color-dot");
const themeStatus = document.getElementById("themeStatus");
const previewWord = document.getElementById("previewWord");
const messageBtn = document.getElementById("messageBtn");
const goodVibesMessage = document.getElementById("goodVibesMessage");

const surprises = [
    { title: "You are made of stardust ✨", button: "Cosmic energy!" },
    { title: "BHAIII! Your ideas are awesome 🚀", button: "Let's go!" },
    { title: "Keep creating your own magic 🎨", button: "Magic activated!" },
    { title: "One small step. One big dream. 🌈", button: "Dream bigger!" },
    { title: "Today looks good on you ☀️", button: "Feeling sunny!" }
];

const themes = {
    purple: { label: "Purple mood activated ✨", word: "shine." },
    coral: { label: "Coral energy activated 🔥", word: "glow." },
    mint: { label: "Minty fresh mood 🌿", word: "grow." },
    gold: { label: "Golden-hour energy ☀️", word: "sparkle." }
};

surpriseBtn.addEventListener("click", () => {
    const surprise = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById("message")?.remove();
    // Use the hero heading area for a visible, accessible surprise message.
    let surpriseMessage = document.getElementById("surpriseMessage");
    if (!surpriseMessage) {
        surpriseMessage = document.createElement("p");
        surpriseMessage.id = "surpriseMessage";
        surpriseMessage.className = "surprise-message";
        surpriseMessage.setAttribute("aria-live", "polite");
        surpriseBtn.closest(".hero-copy").appendChild(surpriseMessage);
    }
    surpriseMessage.textContent = surprise.title;
    surpriseBtn.textContent = surprise.button;
    const count = Number(happyCount.textContent.replace(",", "")) + 1;
    happyCount.textContent = count.toLocaleString("en-US");
});

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const theme = button.dataset.theme;
        document.body.dataset.theme = theme;
        themeButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });
        themeStatus.textContent = themes[theme].label;
        previewWord.textContent = themes[theme].word;
    });
});

messageBtn.addEventListener("click", () => {
    const messages = [
        "You have got this. Keep going! 💜",
        "Your next idea might be your best one yet. 🚀",
        "A little progress is still progress. 🌱",
        "Go make something wonderful today! 🌈"
    ];
    goodVibesMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageBtn.textContent = "More good vibes ✨";
});

document.getElementById("backToTop").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
