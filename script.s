// 🧳 Hide splash screen after a few seconds and show content
window.addEventListener("load", function () {
  // Add 'loaded' class to show content after splash screen
  setTimeout(function () {
    document.getElementById("splash-screen").style.display = "none";
    document.body.classList.add("loaded");
  }, 3000); // Splash screen stays for 3 seconds
});
