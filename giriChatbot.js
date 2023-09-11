let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let userInputEl = document.getElementById('userInput');
let chatContainerEl = document.getElementById('chatContainer');
let buttonEl = document.getElementById('sendMsgBtn');
buttonEl.onclick = function sendtobot() {
    let userEl = userInputEl.value;
    let msgContainerEl = document.createElement('div');
    msgContainerEl.classList.add('msg-to-chatbot-container');
    chatContainerEl.appendChild(msgContainerEl);
    let spanEl = document.createElement('span');
    spanEl.classList.add('msg-to-chatbot');
    spanEl.textContent = userEl;
    msgContainerEl.appendChild(spanEl);
    userInputEl.value = "";
    getreplyFrombot();
}

function getreplyFrombot() {
    let length = chatbotMsgList.length;
    let text = chatbotMsgList[Math.ceil(Math.random() * length) - 1];
    let msgContainer = document.createElement('div');
    msgContainer.classList.add('msg-from-chatbot-container')
    chatContainerEl.appendChild(msgContainer);
    let spanElement = document.createElement('span');
    spanElement.classList.add('msg-from-chatbot');
    spanElement.textContent = text;
    msgContainer.appendChild(spanElement)
}