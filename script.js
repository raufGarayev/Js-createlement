const myBtn = document.querySelector('button')
const myBody = document.querySelector('body')
const audio = new Audio("gameover.wav");

let clicks = 0
myBtn.addEventListener('click', addboxes)

function addboxes(e) {
    clicks++
    e.preventDefault()

    const addDiv = document.createElement('div')
    myBody.appendChild(addDiv)
    const addH2 = document.createElement('h2')
    addDiv.appendChild(addH2)
    if(clicks == 1) {
        addDiv.classList.add('first_box')
        addH2.innerText = 'Javascript'
    }
    if(clicks == 2) {
        addDiv.classList.add('second_box')
        addH2.innerText = 'is'
    }
    else if (clicks == 3)
    {
        addDiv.classList.add('third_box')
        addH2.innerText = 'the'
    }
    else if (clicks == 4)
    {
        addDiv.classList.add('fourth_box')
        addH2.innerText = 'best'
    }
    else if (clicks == 5)
    {
        addDiv.classList.add('fifth_box')
        addH2.innerText = 'CSS'
    }
    else if (clicks == 6)
    {
        addDiv.classList.add('sixth_box')
        addH2.innerText = 'is'
    }
    else if (clicks == 7)
    {
        addDiv.classList.add('seventh_box')
        addH2.innerText = 'for'
    }
    else if (clicks == 8)
    {
        addDiv.classList.add('eighth_box')
        addH2.innerText = 'noobs'
    }
    else if(clicks == 9)
    {
        audio.play();
        const getDivs = document.querySelectorAll('div:not(.btn)')

        for (let index = 0; index < getDivs.length; index++) {
            getDivs[index].parentNode.removeChild(getDivs[index])
            clicks = 0
        }
    }
}
