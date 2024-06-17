/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// URL Bar
const URLInput = document.getElementById('url');
URLInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log(URLInput.value);
        document.getElementById('url_src').src = URLInput.value
        document.getElementById('url_src').httpreferrer = URLInput.value
    }})

// Webview Command Initializer
const WebView = document.querySelector('webview')
WebView.addEventListener('dom-ready', () => {
  
});


// Buttons
const BackButton = document.getElementById('back_btn');
BackButton.addEventListener('click', (event) =>{
    console.log("Back")
    WebView.goBack()
});

const FwdButton = document.getElementById('fwd_btn');
FwdButton.addEventListener('click', (event) =>{
    console.log("Forward")
    WebView.goForward()
});

const DevButton = document.getElementById('dev_btn');
DDevButton.addEventListener('click', (event) =>{
    console.log("Open Dev Tools")
    WebView.openDevTools()
});



