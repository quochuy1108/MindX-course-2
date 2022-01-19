import { InputGroup } from "./input-group.js"

class Register {

    $container;
    $title;

    $formRegister

    $inputGroupEmail
    $inputGroupDisplayName
    $inputGroupPassword
    $inputGroupConfirmPassword

    $feedbackMessage;

    $btnSubmit

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col')

        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Register';


        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit)


        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');

        this.$inputGroupDisplayName = new InputGroup('text', 'Display name', 'displayName')


        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password')


        this.$inputGroupConfirmPassword = new InputGroup('password', 'Comfirm Password', 'confirmPassword')

        this.$feedbackMessage = document.createElement('div');


        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register'


    }

    handleSubmit = (e) => {
        e.preventDefault()

        // validate form
        //     console.log(this.$inputGroupEmail.$input.value);
        //     console.log(this.$inputGroupEmail.getInputValue());
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupEmail.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupConfirmPassword.setError(null);
        this.$inputGroupDisplayName.setError(null);

        if (!email) {
            this.$inputGroupEmail.setError('Email cannot be empty!')
        }


        if (!displayName) {
            this.$inputGroupDisplayName.setError('Display name cannot be empty')
        }


        if (password.length < 6) {
            this.$inputGroupPassword.setError('Password length must be greater or equal 6')
        }


        if (confirmPassword !== password) {
            this.$inputGroupConfirmPassword.setError('Comfirm password not match')
        }


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.$feedbackMessage.innerHTML = 'Register successfully! please check your inbox'
                firebase.auth().currentUser.sendEmailVerification()


            })
            .catch((error) => {
                this.$feedbackMessage.innerHTML = error.toString()
                console.log(error);
            })
    }

    render() {
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$feedbackMessage);
        this.$container.appendChild(this.$formRegister);

        return this.$container;
    }
}

export { Register };