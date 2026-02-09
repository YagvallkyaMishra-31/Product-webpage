import figlet from "figlet";
figlet("my app", (err, data) => {
    if (err) {
        console.log("Error");
        return;
    }
    console.log(data);
})
