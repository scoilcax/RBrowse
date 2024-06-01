/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const URLInput = document.getElementById('url');
URLInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log(URLInput.value);
        // Perform desired actions here
        document.getElementById('url_src').src = URLInput.value
        document.getElementById('url_src').httpreferrer = URLInput.value
    }})
URLSource = document.getElementById('url_src');
URLSource.addEventListener('change', (event) => {
        console.log(document.getElementById('url_src').src);
        // Perform desired actions here
        document.getElementById('url').value = document.getElementById('url_src').src
    });
const WebView = document.querySelector('webview')
WebView.addEventListener('dom-ready', () => {
  WebVIew.openDevTools()
});

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

