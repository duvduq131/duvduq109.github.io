function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Lấy tin nhắn đầu tiên
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementsByClassName("content-span").innerHTML = '<div class="body-chat-mess-content"><span class="content-span">' + firstMessage + '</span></div>';

    let time = getTime();

    $(".date-time").append(time);
    document.getElementsByClassName("body-main").scrollIntoView(false);
}

firstBotMessage();

// Truy xuất phản hồi
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<div class="body-chat-mess-content"><span class="content-span">' + botResponse + '</span></div>';
    $(".body-chat").append(botHtml);
}

//Lấy văn bản từ hộp nhập liệu và xử lý nó
function getResponse() {
    let userText = $(".emojionearea-editor").val();

    if (userText == "") {
        userText = "I love 𝓟𝓔𝓣_𝓢𝓣𝓞𝓡𝓔";
    }

    let userHtml = '<div class="body-chat-mess-content"><span class="content-span">' + userText + '</span></div>';

    $(".emojionearea-editor").val("");
    $(".body-chat").append(userHtml);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Xử lý việc gửi văn bản qua nút bấm
function buttonSendText(sampleText) {
    let userHtml = '<div class="body-chat-mess-content"><span class="content-span">' + sampleText + '</span></div>';

    $(".emojionearea-editor").val("");
    $(".body-chat").append(userHtml);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$(".emojionearea-editor").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
