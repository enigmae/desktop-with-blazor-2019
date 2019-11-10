const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadFile('index.html');

	win.on('closed', () => {
		win = null
	});
}

app.on('ready', createWindow);

//#region OSX Integrations

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if (win === null) createWindow();
});

//#endregion