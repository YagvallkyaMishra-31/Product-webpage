import EventEmitter from "events";
const emitter = new EventEmitter();
emitter.on("login", (isOtpValid) => {
    console.log("enter email and password");
    if (isOtpValid) {
        console.log("otp verified successfully");
        console.log("user logged in successfully");
    }
    else {
        console.log("Something went wrong or OTP invalid");
    }
})
emitter.on("login", () => {
    console.log("otp sent on your email");
})
function login() {
    console.log("user logged in");
    try {
        emitter.emit("login", isOtpValid);
    }
    catch (err) {
        emitter.emit("Something went wrong or OTP invalid");
    }
}
login(true);
