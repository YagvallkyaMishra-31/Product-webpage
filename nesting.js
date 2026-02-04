function getComments(callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback();
    }, 1000);
}

getUser(() => {

});