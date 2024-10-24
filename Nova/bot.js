const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#text-input");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

// press enter to send message
textInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessageEle(userInput);
    textInput.value = "";
    renderChatbotResponse(userInput);
};

// RENDER CHATBOT RESPONSES 
const renderChatbotResponse = (userInput) =>{
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
};

const renderMessageEle = (txt) => {
    const messageEle = document.createElement("div");
    const textNode = document.createTextNode(txt);
    messageEle.classList.add("user-message");
    messageEle.append(textNode);
    chatBody.append(messageEle);
};

// GETTING BOT RESPONSES, and if user input is empty
const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined ? "Please try something else" : responseObj[userInput];
};