// Settings

import settings from 'electron-settings';

await settings.set('color', {
  name: 'cerulean',
  code: {
    rgb: [0, 179, 230],
    hex: '#003BE6'
  }
});

await settings.get('color.name');
// => "cerulean"

await settings.get('color.code.rgb[1]');
// => 179


// Open Settings
const OptButton = document.getElementById('options_btn');
OptButton.addEventListener('click', (event) =>{
    console.log("Open Options")
    new BrowserWindow({
  webPreferences: {
    enableRemoteModule: true // <-- Add me
  }
});
});

