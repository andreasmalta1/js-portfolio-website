const sections = document.querySelectorAll('.section')
const sectionBtns = document.querySelectorAll('.controls')
const sectionBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')
const themeBtn = document.querySelector('.theme-btn')

function pageTransitions(){

    for (let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn')
            currentBtn.classList.toggle('active-btn')
            this.classList.toggle('active-btn')

            btnId = this.dataset.id
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const activeSection = document.getElementById(btnId)
            activeSection.classList.add('active')

        })
    }

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pageTransitions()