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

