import { CreateConversationModal } from "./createConversationModal.js"

class SideBar {
    $container;
    $btnCreateConversation;
    $conversationList;
    $createConversationModal;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.style.width = '200px';

        this.$btnCreateConversation = document.createElement('button');
        this.$btnCreateConversation.innerHTML = '+ New';
        this.$btnCreateConversation.addEventListener('click', this.handleCreateConversation)

        this.$createConversationModal = new CreateConversationModal()
    }

    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true)
    }
    render() {
        this.$container.appendChild(this.$btnCreateConversation)
        this.$container.appendChild(this.$createConversationModal.render())
        return this.$container
    }
}

export { SideBar }