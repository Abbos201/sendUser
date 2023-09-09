let name = document.querySelector(".name");
let number = document.querySelector(".number");
let address = document.querySelector(".address");
let year = document.querySelector(".year");
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  if (name.value == "" || number.value == "" || address.value == "" || year.value == "") {
    alert("Formani toldiring");
  } else {
    sendtelegram(`New User:\nName: ${name.value}\nNumber: ${number.value}\nAddress: ${address.value}\nYear: ${year.value}`);
  }
});

// sendtelegram
function sendtelegram(message) {
    let telegram_bot_id = "5404995545:AAGw1uMwDDyR5NIK6TN1tPG3l2XS8JgiZqk";
    let chat_id = 1889969457;
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({ chat_id: chat_id, caption: message, photo:"https://www.computerhope.com/jargon/g/guest-user.png" }),
    };
    $.ajax(settings).done(function (response) {});
  }