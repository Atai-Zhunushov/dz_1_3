const emailInput = document.getElementById('email')
const passInput = document.getElementById('pass')
const passInput2 = document.getElementById('pass2')
const button = document.getElementById('button')
const button2 = document.getElementById('absolute')

const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/
const passRegExp = /\w{4,16}/

function seePassword() {
    passInput.type = 'text'
    passInput2.type = 'text'

}
button2.addEventListener('click' , (event) => {
    event.preventDefault()
   seePassword()
})


button.addEventListener('click' , () => {
    if (passRegExp.test(passInput.value) && passInput === passInput2 && emailRegExp.test(emailInput.email)) {
        alert('все правильно , вы успешно зарегестрировались!')
    } else {
        alert('перепроверьте свою запись!')
    }
    passInput.input.value = ''
    emailInput.input.value = ''
    passInput2.input.value = ''
})
const box = document.getElementById('box')
let position = 0
const move = () => {
    if (position <= 500) {
        position++
        box.style.left = `${position}px`
        move()
    }
}
move()





