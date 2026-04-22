const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
 
let mainWindow;
 
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 900,
    icon: path.join(__dirname, 'build/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  });
 
  mainWindow.loadFile('index.html');
 
  // Uncomment to open dev tools
  // mainWindow.webContents.openDevTools();
 
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
 
  // Create application menu
  createMenu();
}
 
function createMenu() {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Exit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About Tic Tac Toe',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About Tic Tac Toe - Power Edition',
              message: 'Tic Tac Toe - Power Edition',
              detail: 'A modern twist on classic tic tac toe with power moves!\n\nVersion 1.0.0\n\nFeatures:\n• 3x3, 4x4, and 6x6 grids\n• Customizable power move frequency\n• Strategic gameplay'
            });
          }
        }
      ]
    }
  ];
 
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
 
app.on('ready', createWindow);
 
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
 
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
