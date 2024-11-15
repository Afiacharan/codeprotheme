  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,  // Set the number of items to display to 5
      loop: true,  // Loop the carousel
      margin: 10,  // Space between items
      nav: true,  // Show next/prev navigation buttons
      autoplay: true,  // Enable auto-play
      autoplayTimeout: 5000,  // Time between slides (5 seconds)
      autoplayHoverPause: true,  // Pause autoplay on hover
      responsive: {
        0: {
          items: 1  // Show 1 item on small screens (mobile)
        },
        600: {
          items: 3  // Show 3 items on medium screens (tablets)
        },
        1000: {
          items: 5  // Show 5 items on large screens (desktop)
        }
      }
    });
  });

















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
