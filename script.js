const btnQuestion = document.getElementById("question");
let isHidden = true;

btnQuestion.addEventListener("click", function(e) {
    const answer = document.getElementById("answer");
    const questionImg = document.getElementById("question-img");

    if (isHidden) {
        answer.classList.remove("hidden");
        questionImg.src = "./assets/img/icon-plus.svg";
        isHidden = false;
    } else {
        answer.classList.add("hidden");
        questionImg.src = "./assets/img/icon-minus.svg";
        isHidden = true;
    }
})
    