import EventEmitter from "events";
// register listener for an event
// emitter.on("userRegistered", (username) => {
//     console.log("user registered successfully", username);
// })
// // emit the event
// emitter.emit("userRegistered", "yash");
// emitter.emit("userRegistered", "yash");
// const emitter2 = new EventEmitter();
// emitter2.on("sentNotif", () => {
//     console.log("Email has been sent");
// })
// emitter2.on("sentNotif", () => {
//     console.log("whatsapp has been sent");
// })
// function login() {
//     console.log("user logged in");
//     emitter2.emit("sentNotif");
// }
// // emit the event
// login();
const emitter3 = new EventEmitter();
emitter3.on("loginSuccess", () => {
    console.log("push notification sent");
})
emitter3.on("loginSuccess", () => {
    console.log("Email service down");
})
emitter3.on("loginSuccess", () => {
    console.log("whatsapp notification sent");
})
// Error listener
emitter3.on("error", (err) => {
    console.log("Handled Error", err.message);
})
function login() {
    console.log("user logged in");
    try {
        emitter3.emit("loginSuccess");
    }
    catch (err) {
        emitter3.emit("error", err);
    }
}
// emit the event
login();