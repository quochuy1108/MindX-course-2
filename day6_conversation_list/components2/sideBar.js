import { CreateConversationModal } from "./createConversationModal.js"
import { ConversationItem } from './conversationItem.js'


class SideBar {
    $container;
    $btnCreateConversation;
    $conversationList;
    $createConversationModal;
    setActiveConversation
    $listConversationItem


    constructor(setActiveConversation) {

        this.$container = document.createElement('div');
        this.$container.style.width = '200px';
        this.$container.style.borderRight = '2px solid black'

        this.$btnCreateConversation = document.createElement('button');
        this.$btnCreateConversation.innerHTML = '+ New';
        this.$btnCreateConversation.addEventListener('click', this.handleCreateConversation)

        this.$createConversationModal = new CreateConversationModal()

        this.$conversationList = document.createElement('div')
        this.$conversationList.innerHTML = 'Conversation List'
        this.$conversationList.classList.add('flex', 'flex-col', 'items-center', 'item-stretch')

        this.setActiveConversation = setActiveConversation;

        this.$listConversationItem = []

        db.collection('conversations').onSnapshot(this.conservationListener)
        // console.log(this)
    }



    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true)
    }

    conservationListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const conversation = change.doc.data()
            const id = change.doc.id
            console.log(conversation);
            const $conversationItem = new ConversationItem(
                id,
                conversation.name,
                conversation.users.length,
                this.setActiveConversation
            )

            this.$listConversationItem.push($conversationItem)

            this.$conversationList.appendChild($conversationItem.render())
        })
    }

    setConversation = (conversation) => {
        this.$listConversationItem.forEach(item => {
            if (item.id === conversation.id) {
                item.setActive(true)
            } else {
                item.setActive(false)
            }
        })
    }

    render() {
        this.$container.appendChild(this.$btnCreateConversation)
        this.$container.appendChild(this.$conversationList)
        this.$container.appendChild(this.$createConversationModal.render())
        return this.$container
    }
}

export { SideBar }