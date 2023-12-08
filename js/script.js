// Create a timeline with ScrollTrigger
let scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 70%",
    end: "top 10%",
    scrub: 1, // Enable scrubbing for smooth animation
  },
});

// Select all elements with the class ".img-footer"
const imgFooters = gsap.utils.toArray(".img-footer");

// Iterate through each image and add animations
imgFooters.forEach((img, index) => {
  const startVertical = index % 2 === 0 ? 21 : -21;

  // Use the `fromTo` method for more control
  scrollTl.fromTo(
    img,
    { opacity: 0, y: startVertical, scale: 1.5 }, // Start with a scale of 1.5
    { opacity: 1, y: 0, scale: 1, duration: 3 }, // Scale down to 1 at the end
    index * 0.5 // Stagger the animations
  );
});

//done
