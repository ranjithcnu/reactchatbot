class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, What do You want to learn.")
        this.updateChatbotState(greetingMessage)
    }
    superalgo(){
        const greetingMessage = this.createChatBotMessage("Supervised learning is the types of machine learning in which machines are trained using well labelled training data, and on basis of that data, machines predict the output. The labelled data means some input data is already tagged with the correct output.")
        this.updateChatbotState(greetingMessage)
    }
    unsuperalgo(){
        const greetingMessage = this.createChatBotMessage("Unsupervised learning refers to the use of artificial intelligence (AI) algorithms to identify patterns in data sets containing data points that are neither classified nor labeled.")
        this.updateChatbotState(greetingMessage)
    }
    Machine(){
        const greetingMessage = this.createChatBotMessage("the use and development of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyse and draw inferences from patterns in data.")
        this.updateChatbotState(greetingMessage)
    }
    statistics() {
        const greetingMessage = this.createChatBotMessage("Combinatorics and basic set theory notation,Probability definitions and properties, Common discrete and continuous distributions , Bivariate distributions ,Conditional probability, Random variables, expectation, variance,Univariate and bivariate transformations.")
        this.updateChatbotState(greetingMessage)
    }
    nores(){
        const greetingMessage = this.createChatBotMessage("Sorry,Im still learning, I will get back to you.")
        this.updateChatbotState(greetingMessage)
    }

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider