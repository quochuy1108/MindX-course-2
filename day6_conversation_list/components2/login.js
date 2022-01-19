import { InputGroup } from './input-group.js'
import { Register } from './register.js'
import { setScreen } from '../app.js'

class Login {
    $container
    $title
    $inputGroupEmail
    $inputGroupPassword
    $form
    $button
    $linkToRegister

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-100', 'flex-col')


        this.$title = document.createElement('h1')
        this.$title.innerHTML = 'Login'

        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email')


        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password')


        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.handleSubmit)



        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';
        this.$btnSubmit.classList.add('btn')

        this.$linkToRegister = document.createElement('span')
        this.$linkToRegister.innerHTML = '>>>>> Register <<<<<'
        this.$linkToRegister.classList.add('btn', 'btn-link')
        this.$linkToRegister.addEventListener('click', this.moveToRegister)

        // this.$feedbackMessage = document.createElement('div')
    }

    moveToRegister = () => {
        const register = new Register();
        setScreen(register)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const email = this.$inputGroupEmail.getInputValue()
        const password = this.$inputGroupPassword.getInputValue()

        // validation

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userInfo) => {
                console.log(userInfo);

            })
            .catch((error) => {

                console.log(error);
            });
    }
    render() {
        this.$form.appendChild(this.$inputGroupEmail.render());
        this.$form.appendChild(this.$inputGroupPassword.render())
        this.$form.appendChild(this.$btnSubmit)

        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$form)
        this.$container.appendChild(this.$linkToRegister)
        return this.$container
    }
}

export { Login }