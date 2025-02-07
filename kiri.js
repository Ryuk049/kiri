document.addEventListener("DOMContentLoaded", function () {
    const plane = document.getElementById("plane");
    const modal = document.getElementById("letterModal");
    const closeModal = document.querySelector(".close");
    const note = document.getElementById("note");

    // When animation ends, change plane to letter and show note
    plane.addEventListener("animationend", function () {
        plane.src = "letter.png"; // Change to a letter image
        note.textContent = "📜Open up the letter Kiri!";
        plane.style.cursor = "pointer";

        plane.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
