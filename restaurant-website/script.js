// ✅ ORDER NOW ALERT
document.querySelectorAll(".menu-item button").forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Your order has been placed! Thank you for choosing BurgerBliss 🍔");
    });
});

// ✅ SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, {
    threshold: 0.1 // Animate when 10% is visible
});

// ✅ Apply animation to each fade-target section
document.querySelectorAll(".fade-target").forEach(section => {
    observer.observe(section);
});
