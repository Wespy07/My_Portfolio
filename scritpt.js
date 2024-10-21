const darkModeBtn = document.querySelector('.theme-switch')
const body = document.querySelector('body')
const moon = document.querySelector('.fa-moon')
const sun = document.querySelector('.fa-sun')

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        moon.style.display = 'none'
        sun.style.display = 'inline'
    } else {
        moon.style.display = 'inline'
        sun.style.display = 'none'
    }
})


// const webDevBox = document.querySelector('.webdev')
// const webdevArrow = document.querySelector('.web-dev-arrow')
// const webDevDetails = document.querySelector('.web-dev-skill-section')

// webDevBox.addEventListener('click', () => {
//     webDevDetails.classList.toggle('hidden') 
//     webdevArrow.classList.toggle('rotate')  
// })



// const cyberSecBox = document.querySelector('.cyber_security')
// const cyberSecArrow = document.querySelector('.csec-arrow')
// const cyberSecDetails = document.querySelector('.csec')

// cyberSecBox.addEventListener('click', () => {
//     cyberSecDetails.classList.toggle('hidden') 
//     cyberSecArrow.classList.toggle('rotate')  
// })



// const dataAnalysisBox = document.querySelector('.data_analysis')
// const dataAnalysisArrow = document.querySelector('.data-analysis-arrow')
// const dataAnalysisDetails = document.querySelector('.da')

// dataAnalysisBox.addEventListener('click', () => {
//     dataAnalysisDetails.classList.toggle('hidden') 
//     dataAnalysisArrow.classList.toggle('rotate')  
// })



// const financeBox = document.querySelector('.finance')
// const financeArrow = document.querySelector('.finance-arrow')
// const financeDetails = document.querySelector('.fin')

// financeBox.addEventListener('click', () => {
//     financeDetails.classList.toggle('hidden') 
//     financeArrow.classList.toggle('rotate')  
// })


const workBox = document.querySelector('.work-box')
const workBoxArrow = document.querySelector('.workbox-arrow')
const workBoxDetails = document.querySelector('.hide-edu-box')

workBox.addEventListener('click', () => {
    workBoxDetails.classList.toggle('hide-edu-box')
    workBoxArrow.classList.toggle('rotate-up')
})



const eduBox = document.querySelector('.edu-box-sec')
const eduBoxArrow = document.querySelector('.edu-box-arrow')
const eduBoxDetails = document.querySelector('.Edu_box')

eduBox.addEventListener('click', () => {
    eduBoxDetails.classList.toggle('hide-edu-box')
    eduBoxArrow.classList.toggle('rotate-up')
})


// hamburger

const hamburgerToggle = document.querySelector('.hamburger')

hamburgerToggle.addEventListener('click', () => {
    console.log('hamburger clicked');
})