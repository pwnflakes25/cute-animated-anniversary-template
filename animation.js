import { animate, scroll, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

// Helper function to check if an element is in view
const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to animate letters
const animateLetters = () => {
    const letters = document.querySelectorAll('.letter');

    letters.forEach((letter, index) => {
        if (isInView(letter)) {
            setTimeout(() => {
                letter.toggleAttribute('data-active', true);
            }, index * 100); // Stagger the animation
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', animateLetters);

// Trigger the animation on page load
animateLetters();

const card = document.querySelector('#card');
const cardPageOne = document.querySelector('#pageOne');
const cardPageTwo = document.querySelector('#pageTwo');


const sequence = [
    [card, { top: ['200%', '10%'] }, { duration: 0.01, }],
    [cardPageOne, { transform: ['rotateY(80deg)', 'rotateY(0deg)'] }],
    [cardPageTwo, { transform: ['rotateY(280deg)', 'rotateY(360deg)'] }, { at: "-0.3" }],
];

scroll(animate(sequence), {});

const photoGallery = document.querySelector('#photoGallery');
const audio = document.querySelector('#audio');

inView(photoGallery, (el) => {
    animate("img", { transform: ['translateY(200%)', 'translateY(-500%)'] }, { repeat: Infinity, duration: 60 });
    audio.currentTime = 20;
    audio.play();
});