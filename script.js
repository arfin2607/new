document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars-container');
    const modal = document.getElementById('myModal');
    const span = document.querySelector('.close');
    const modalText = document.getElementById('modal-text');

    // Messages to be displayed when stars are clicked
    const messages = [
        "If you were a vegetable, you'd be a cute-cumber! 🌚",
        "Do you have a map? I keep getting lost in your eyes! 🥰",
        "Is it will be too hard to say 'YES', if I just came to you with a ring when the sky is full of twinkle stars? 😳",
        "Aside of cooking poison 🙄, instead can you help me to make a bridge between us! 🫣",
        "You don't need keys to drive me crazy, Just make a wish.! 🙄",
        "Give God a call, because I’m seeing his angel down on earth!! 🦋",
        "I thought I knew what I wanted in life, but then I met you, and now I'm certain! 🌹🌷",
        "You're my favorite notification. Now I don't want to loose this habit being happy! 👀",
        "In a sea of people, my eyes search for you & I feel blessed when my eyes got stuck on you in that sea wave.!! 🥹",
        "The way of your cuteness melting me, even the ice can't even refuse that! 🫠",
        "Beside you is my favourite place to be. Can I just stay there forever? 🦥"
    ]

    // Create and style star elements, assign click event to display messages
    for (let i = 0; i < 11; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 300}px`; // Randomly position the star vertically
        star.style.left = `${Math.random() * window.innerWidth}px`; // Randomly position the star horizontally
        star.textContent = '★'; // Star character or could be an image

        // Closure to capture the current value of 'i'
        star.addEventListener('click', (function(index) {
            return function() {
                modal.style.display = 'block'; // Show the modal
                modalText.textContent = messages[index]; // Display the message
            };
        })(i));

        starsContainer.appendChild(star); // Add the star to the stars container
    }


    // Close modal when 'x' span is clicked
    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking anywhere outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

