const data = [
    {
        id: 1,
        ques: "What kind of payment do u support?",
        ans: "We support credit card"
    },
    {
        id: 2,
        ques: "Do you support free delivery?",
        ans: "Yep, absolutely"
    },
    {
        id: 3,
        ques: "What's warranty policy?",
        ans: "Nah warranty policy"
    },

]



class FAQ {
    $container;
    $block;
    $question;
    $answer;
    $iconBlock
    $icon

    constructor(ques, ans) {
        this.$container = document.createElement('div')
        this.$container.classList.add('block');
        this.$container.addEventListener('click', this.open)


        this.$block = document.createElement('div');


        this.$question = document.createElement('h2');
        this.$question.innerHTML = ques;
        this.$question.style.fontWeight = '400'

        this.$answer = document.createElement('h3');
        this.$answer.innerHTML = ans;
        this.$answer.style.marginTop = '16px'
        this.$answer.style.display = 'none'


        this.$iconBlock = document.createElement('div');
        this.$iconBlock.classList.add('iconBlock');

        this.$icon = document.createElement('span');
        this.$icon.innerHTML = '+';
        this.$icon.classList.add('icon')

    }

    open = () => {
        if (this.$answer.style.display == 'none') {
            this.$answer.style.display = 'block';
            this.$icon.innerHTML = '-';
        }
        else {
            this.$answer.style.display = 'none';
            this.$icon.innerHTML = '+';
        }

    }

    render() {
        this.$container.appendChild(this.$block);
        this.$container.appendChild(this.$iconBlock);
        this.$iconBlock.appendChild(this.$icon)
        this.$block.appendChild(this.$question);
        this.$block.appendChild(this.$answer);

        return this.$container
    }
}