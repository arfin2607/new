document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector('.stars-container');
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById("modal-text");

    // Assuming you have defined your messages array correctly
    const messages = [
        "If you were a vegetable, you'd be a cute-cumber.",
        "Do you have a map? I keep getting lost in your eyes.",
        "Is it hot in here, or is it just you?",
        "Aside from being sexy, what do you do for a living?",
        "If we were stars, we'd form the most radiant constellation.",
        //... more messages as needed
    ];


// Now, when creating stars, make sure to use a closure to capture the current index i
    for (let i = 0; i < messages.length; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 300}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;

        // Closure to capture the value of 'i'
        star.addEventListener('click', (function(index) {
            return function() {
                modal.style.display = 'block';
                modalText.textContent = messages[index];
            };
        })(i));

        starsContainer.appendChild(star);
    }

    document.addEventListener ( 'DOMContentLoaded',  function() {
// ... Your existing code for stars ...

        var moonContainer = document.querySelector(' •moon-container');
        moonContainer.addEventListener('click', function () {
// Your logic for what happens when the moon is clicked
            alert("You clicked the moon's text!");
        });
    })


    for (let i = 0; i <= 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 300}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;

        star.onclick = function() {
            modal.style.display = "block";
            modalText.textContent = messages[i];
        }

        starsContainer.appendChild(star);
    }

    span.onclick =
        function() {
            modal.style.display = "none";
        }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
