import os from "os";
console.log("OS Type: ", os.type());
console.log("OS Platform: ", os.platform());
console.log("OS Architecture: ", os.arch());
const cpus = os.cpus();
console.log("CPU Cores: ", cpus.length);
console.log("CPU Model: ", cpus[1].model);
console.log("CPU Speed: ", cpus[1].speed);
console.log("Total Memory: ", os.totalmem());
console.log("Free Memory: ", os.freemem());
console.log("Uptime: ", os.uptime());
console.log("Hostname: ", os.hostname());
console.log("User Info: ", os.userInfo());

