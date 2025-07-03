document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-button");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  if (window.location.pathname.includes("quotes")) {
    getRandomQuote();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function getRandomQuote() {
  const quotes = ["You're doing better than you think.", "It's okay to take a break.", "Someone out there believes in you.", "You're allowed to feel everything you're feeling.", "Small steps are still progress.", "You matter.", "You're stronger than you realize.", "Every day is a fresh start.", "Rest is part of the process.", "You're not behind; you're on your path.", "It's okay to ask for help.", "You are enough, just as you are.", "Progress, not perfection.", "Be gentle with yourself today.", "You're not alone in this.", "You’ve made it through tough things before.", "It’s brave to keep going.", "Let yourself feel joy.", "You deserve kindness — especially from yourself.", "Your pace is the right pace.", "Believe in the power of yet.", "You don’t need to have it all figured out.", "Even slow progress is progress.", "You're doing your best, and that's enough.", "Keep showing up.", "Your feelings are valid.", "You’re more capable than you know.", "It’s okay to have bad days.", "Taking care of yourself is productive.", "You’re not a burden.", "You’re allowed to rest without guilt.", "Your existence makes a difference.", "It’s okay not to be okay.", "You're learning and growing every day.", "You are a work in progress, and that’s beautiful.", "Kindness starts with yourself.", "You’re allowed to change your mind.", "Being yourself is more than enough.", "You’ve survived every hard day so far.", "It’s okay to go at your own speed.", "You’re doing the best you can with what you have.", "Don’t compare your chapter 1 to someone else’s chapter 20.", "Celebrate your small victories.", "It’s okay to need space.", "Your worth isn’t defined by productivity.", "Your story isn’t over yet.", "You are worthy of love and peace.", "Be proud of how far you've come.", "You bring something unique to the world.", "You can start again anytime.", "You're allowed to outgrow things that no longer fit you.", "You don't have to prove your pain.", "You are resilient.", "Peace is progress too.", "Trust your timing.", "Your presence matters.", "You’re doing the brave thing by continuing.", "It’s okay to feel lost sometimes.", "You’re allowed to take up space.", "It’s okay to be soft.", "Your journey is your own.", "You have the right to heal.", "Even on hard days, you are loved.", "Give yourself the same grace you give others.", "You are not your mistakes.", "You don’t have to be perfect to be worthy.", "It’s enough to just exist today.", "You’re growing through what you’re going through.", "You are still worthy on your worst days.", "Trust yourself — you’re figuring it out.", "You’re allowed to feel proud of yourself.", "Not everything has to be fixed right away.", "Let today be enough.", "You're healing, even when you can't see it.", "You are worthy of rest.", "You're allowed to dream new dreams.", "You don’t need to earn your rest.", "You bring light just by being here.", "Your softness is strength.", "It’s okay to feel everything deeply.", "You are enough, always.", "You’re not too much.", "Don’t forget how far you’ve come.", "It’s okay to change direction.", "You’re allowed to honor your needs.", "Your feelings don’t make you weak.", "You deserve peace in your mind and heart.", "You don’t have to do it all today.", "You are allowed to take it one step at a time.", "You are more than your bad days.", "You’re worthy of good things.", "Taking a break doesn’t mean giving up.", "You don’t have to carry it all alone.", "Hope can start small.", "You can be proud of surviving.", "You have a beautiful resilience.", "You are not broken.", "You’re allowed to be a masterpiece and a work in progress.", "You matter more than you know.", "You’re growing in ways you can’t yet see.", "Keep going — there’s more ahead for you.", "You are loved. Right now. As you are."];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

function saveFavoriteQuote() {
  const quote = document.getElementById("quote").innerText;
  localStorage.setItem("savedQuote", quote);
  alert("Saved your favorite quote!");
}

function showSavedQuote() {
  const saved = localStorage.getItem("savedQuote");
  if (saved) {
    document.getElementById("quote").innerText = saved;
  } else {
    alert("No saved quotes found.");
  }
}
