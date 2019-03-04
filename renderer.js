// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const TabGroup = require("electron-tabs");
console.log("jigjig");
let tabGroup = new TabGroup(
   // tabContainerSelector:
);
let tab = tabGroup.addTab({
    title: "",
    src: "http://web.whatsapp.com",
    visible: true,
    closable:false,
    icon:'fab fa-lg fa-facebook ',
    iconURL:'https://img.icons8.com/color/36/000000/whatsapp.png'
});

let tab2 = tabGroup.addTab({
    title: "",
    src: "https://web.telegram.org/#/login",
    visible: true,
    closable:false,
    icon:'fab fa-lg fa-facebook ',
    iconURL:'https://img.icons8.com/color/36/000000/facebook.png'
});
