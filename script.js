const questionHeader = document.getElementsByClassName("question-header");

Array.prototype.forEach.call(questionHeader, (item) => {
    item.addEventListener("click", function(e) {
        const answers = document.getElementsByClassName("answer");
        const questionImg = document.getElementsByClassName("question-img");

        let id = item.id;
        let isHidden = answers[id].classList.contains("hidden")
        
        if (isHidden) {
            answers[id].classList.remove("hidden")
            questionImg[id].src = "./assets/img/icon-minus.svg"
        } else {
            answers[id].classList.add("hidden")
            questionImg[id].src = "./assets/img/icon-plus.svg"
        }
    })
})
