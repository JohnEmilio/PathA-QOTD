const answerBtns = document.querySelectorAll('input[name="qotdAnswer"]')
const answerResp = document.querySelector('.answerResp')
const answerWrapper = document.querySelector('.slideWrapper')
const correctAns = document.querySelector('#correct').innerText

document.querySelector("#correct").remove()

document.querySelector('.inputBtn').addEventListener('click', checkAnswer)
function checkAnswer(e){
    for(const answer of answerBtns){
        if(answer.checked){
            const selectedAnswer = answer.nextElementSibling.innerText
            if(selectedAnswer == correctAns){

                answerWrapper.style.display = 'flex'
                answerResp.innerHTML = "<p>That's Correct!</p>"

                setTimeout(()=>{
                    answerResp.classList.add('answerAnimation')
                }, 0)
                answerWrapper.addEventListener('click', ()=>{
                    answerWrapper.style.display = 'none'
                    answerResp.classList.remove('answerAnimation')
                })
            }
            else{
                answerWrapper.style.display = 'flex'
                answerResp.innerHTML = "<p>That's Incorrect. Please try again</p>"
                setTimeout(()=>{
                    answerResp.classList.add('answerAnimation')
                }, 0)
                
                answerWrapper.addEventListener('click', ()=>{
                    answerWrapper.style.display = 'none'
                    answerResp.classList.remove('answerAnimation')
                })
        }

        }
    }
}
