// JavaScript para alternar a visibilidade das respostas
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");
    const faqAnswers = document.querySelectorAll(".faq-answer");

    // Exibe apenas a primeira resposta ao carregar a página
    if (faqAnswers.length > 0) {
        faqAnswers[0].classList.remove("hidden");
        faqAnswers[0].style.display = "block";
    }

    faqButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            faqAnswers.forEach((answer, i) => {
                if (i !== index) {
                    answer.classList.add("hidden");
                    answer.style.display = "none";
                }
            });
            const answer = button.nextElementSibling;
            answer.classList.toggle("hidden");
            answer.style.display = answer.classList.contains("hidden") ? "none" : "block";
        });
    });
});
