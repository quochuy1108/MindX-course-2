class Chat {
    $container
    constructor() {
        this.$container = document.createElement('div');
        this.$btnLogout = document.createElement('button');
        this.$btnLogout.innerHTML = 'Logout'
        this.$btnLogout.addEventListener('click', this.handleLogout)
    }

    handleLogout = () => {
        firebase.auth().signOut()
    }

    render() {
        this.$container.innerHTML = 'Chat';
        this.$container.appendChild(this.$btnLogout)
        return this.$container
    }
}

export { Chat }