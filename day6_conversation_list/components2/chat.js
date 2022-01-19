import { MessageArea } from '../../day7_conversation_list/components2/messageArea.js';
import { SideBar } from './sideBar.js'
import { TitleBar } from './titleBar.js'
import { MessageArea } from './messageArea.js'

class Chat {
    activeConversation;
    $container
    $sideBar
    $titleBar
    $messageArea
    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('flex')

        this.$sideBar = new SideBar(this.setActiveConversation)

        this.$titleBar = new TitleBar()

        this.$messageArea = new MessageArea()

        this.activeConversation = null

    }
    // this.onSelectConversation({
    //     id: this.id,
    //     name: this.name,
    // });
    setActiveConversation = (conversation) => {
        console.log('change active conversation', conversation);
        this.activeConversation = conversation;
        this.$titleBar.setName(this.activeConversation.name)
        this.$sideBar.setConversation(this.activeConversation)
    }

    render() {
        this.$container.appendChild(this.$sideBar.render())

        const chatArea = document.createElement('div')
        chatArea.classList.add('flex-1', 'flex', 'flex-col')
        chatArea.appendChild(this.$titleBar.render())

        const messageAreaContainer = document.createElement('div')
        messageAreaContainer.appendChild(this.$messageArea.render())

        chatArea.appendChild(messageAreaContainer)

        this.$container.appendChild(chatArea)
        return this.$container
    }
}

export { Chat }