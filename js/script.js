document.addEventListener('DOMContentLoaded', function() {
    var section = document.querySelector('.section-four-background');
    section.style.borderRadius = '15px';  // Adjust the radius as needed
    section.style.overflow = 'hidden';  // Ensure content doesn't spill out
});


    // Number of dots to generate
    const numDots = 40;

    // Array of 20 colors
    const colors = [
        'rgb(187, 107, 217)',   // Color 1 (Purple)
        'rgb(255, 0, 0)',       // Color 2 (Red)
        'rgb(0, 255, 0)',       // Color 3 (Green)
        'rgb(0, 0, 255)',       // Color 4 (Blue)
        'rgb(255, 255, 0)',     // Color 5 (Yellow)
        'rgb(255, 165, 0)',     // Color 6 (Orange)
        'rgb(75, 0, 130)',      // Color 7 (Indigo)
        'rgb(238, 130, 238)',   // Color 8 (Violet)
        'rgb(173, 216, 230)',   // Color 9 (Light Blue)
        'rgb(255, 105, 180)',   // Color 10 (Hot Pink)
        'rgb(255, 20, 147)',    // Color 11 (Deep Pink)
        'rgb(255, 140, 0)',     // Color 12 (Dark Orange)
        'rgb(0, 255, 255)',     // Color 13 (Aqua)
        'rgb(0, 128, 128)',     // Color 14 (Teal)
        'rgb(255, 192, 203)',   // Color 15 (Pink)
        'rgb(60, 179, 113)',    // Color 16 (Medium Sea Green)
        'rgb(32, 178, 170)',    // Color 17 (Light Sea Green)
        'rgb(210, 105, 30)',    // Color 18 (Chocolate)
        'rgb(244, 164, 96)',    // Color 19 (Sandy Brown)
        'rgb(139, 69, 19)'      // Color 20 (Saddle Brown)
    ];

    // Function to generate and style balls
    for (let i = 0; i < numDots; i++) {
        // Create a ball element
        const ball = document.createElement("div");
        ball.classList.add("ball");

        // Randomize position (full viewport)
        ball.style.left = Math.random() * 100 + "vw";  // Random horizontal position
        ball.style.top = Math.random() * 100 + "vh";   // Random vertical position
        
        // Random size between 2px and 6px for smaller balls
        ball.style.width = ball.style.height = (Math.random() * 4 + 2) + "px"; 

        // Random color from the colors array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        ball.style.backgroundColor = randomColor;

        // Add the ball to the body
        document.body.appendChild(ball);
    }













    // Function to animate counter
function animateCounter(element, target) {
    let count = 0;
    const interval = setInterval(function () {
        if (count < target) {
            count++;
            element.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 50); // adjust speed of counting
}

// IntersectionObserver to detect when the counter is in view
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start counting when the element is in view
            const counter = entry.target;
            const target = parseInt(counter.textContent === '0' ? '100' : '100'); // Adjust target value as needed
            animateCounter(counter, target);
            observer.unobserve(counter); // Stop observing after animation
        }
    });
}, { threshold: 0.5 }); // Trigger animation when 50% of the element is visible

// Observe each counter element
counters.forEach(counter => {
    observer.observe(counter);
});

















// section-nine.......................
        
const testimonials = [
    { name: "Mr. Robey Alexa", position: "CEO, Gerow Agency", text: "“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture." },
    { name: "Samuel Peters", position: "COO, Gerow Agency", text: "“ Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta." },
    { name: "Robert Fox", position: "CTO, Gerow Agency", text: "“ Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros." }
];

let currentTestimonial = 0;

function updateTestimonial() {
    document.getElementById("testimonial-name").textContent = testimonials[currentTestimonial].name;
    document.getElementById("testimonial-position").textContent = testimonials[currentTestimonial].position;
    document.getElementById("testimonial-text").textContent = testimonials[currentTestimonial].text;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}
