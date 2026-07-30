// =====================
// Follow Buttons
// =====================
const followButtons = document.querySelectorAll(".follow-btn");

followButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "Follow") {
            button.textContent = "Following";
            button.style.background = "#28a745";
        } else {
            button.textContent = "Follow";
            button.style.background = "#ff008c";
        }
    });
});

// =====================
// Like Button
// =====================
const likeButton = document.querySelector(".like-btn");

if (likeButton) {
    let liked = false;

    likeButton.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            likeButton.textContent = "❤️ Liked";
            likeButton.style.background = "#ff3366";
        } else {
            likeButton.textContent = "❤️ Like";
            likeButton.style.background = "#444";
        }
    });
}

// =====================
// Live Chat
// =====================
const sendBtn = document.getElementById("sendBtn");
const chatMessage = document.getElementById("chatMessage");
const chatBox = document.getElementById("chatBox");

if (sendBtn && chatMessage && chatBox) {

    function sendMessage() {
        const message = chatMessage.value.trim();

        if (message === "") return;

        const p = document.createElement("p");
        p.innerHTML = "<strong>You:</strong> " + message;

        chatBox.appendChild(p);

        chatMessage.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendBtn.addEventListener("click", sendMessage);

    chatMessage.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}
// ==========================
// Login Form
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login successful!");
        window.location.href = "profile.html";
    });
}

// ==========================
// Signup Form
// ==========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Account created successfully!");
        window.location.href = "login.html";
    });
}
// ==========================
// Search Streams
// ==========================

const searchInput = document.querySelector('.search-box input');
const streamCards = document.querySelectorAll('.stream-card');

if (searchInput) {
    searchInput.addEventListener('keyup', () => {
        const search = searchInput.value.toLowerCase();

        streamCards.forEach(card => {
            const text = card.textContent.toLowerCase();

            if (text.includes(search)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}
