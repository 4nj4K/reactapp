
const darkmodeSwitch = document.querySelector('#darkmode-switch')
const questions = document.querySelectorAll('.question')

darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})

function enableDarkMode(){
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode(){
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}

questions.forEach(question => {
    question.addEventListener('click', e => {
        const parent = question.parentElement;
        if (parent.classList.contains('open')) {
            parent.classList.remove('open')

            return
        }



        document.querySelectorAll('.questions-card').forEach(answer => {
            answer.classList.remove('open')
        })
        
        parent.classList.toggle('open')
    })
}) 