class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        else if (lowerCaseMessage.includes("supervised learning")) {
            this.actionProvider.superalgo()
        }
        else if (lowerCaseMessage.includes("unsupervised learning ")) {
            this.actionProvider.unsuperalgo()
        }
        else if (lowerCaseMessage.includes("machine learning")) {
            this.actionProvider.Machine()
        }
        else if (lowerCaseMessage.includes("statistics")) {
            this.actionProvider.statistics()
        }
        else {
            this.actionProvider.nores()
        }
    }
}

export default MessageParser