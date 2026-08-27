console.log("🔥 AK Portfolio JavaScript is connected!");



/* =========================================================
   EXPERIENCE — SCROLL REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const experienceItems =
        document.querySelectorAll(".experience-item");

    if (!experienceItems.length) return;


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    experienceItems.forEach((item) => {
        observer.observe(item);
    });

});



const downloadCV = document.getElementById("download-cv");

downloadCV.addEventListener("click", function (event) {
    event.preventDefault();

    const cvPath = "assets/Alkhair-Makeen-Ahmed-CV.pdf";

    const link = document.createElement("a");

    link.href = cvPath;
    link.download = "Alkhair-Makeen-Ahmed-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});