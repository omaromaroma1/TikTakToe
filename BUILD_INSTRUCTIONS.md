Building Tic Tac Toe Desktop App
This guide will help you create .exe (Windows) and .dmg (macOS) installers for distribution.
Prerequisites
Make sure you have installed:

Node.js (download from https://nodejs.org/)
Git (already on your system)

Step 1: Install Dependencies
Open Command Prompt/PowerShell in this folder and run:
bashnpm install
This will install Electron and Electron Builder.
Step 2: Test the App Locally
Before building, test that the app works:
bashnpm start
The game should launch in a desktop window. Close it when you're done.
Step 3: Build the Installers
To build both Windows (.exe) and macOS (.dmg) installers:
bashnpm run build
Note: Building .dmg files for macOS requires running this command on a Mac computer. If you're on Windows, you can build the .exe installer, and you'll need a Mac to build the .dmg.
The built files will be in the dist/ folder:

dist/TicTacToe-1.0.0.exe (Windows installer)
dist/TicTacToe-1.0.0.dmg (macOS installer)

Step 4: Upload to GitHub Releases

Go to your GitHub repository: https://github.com/omaromaroma1/TikTakToe
Click on "Releases" (or "Create a new release" if no releases exist)
Click "Draft a new release"
Create a new tag (e.g., v1.0.0)
Add a title: "Tic Tac Toe v1.0.0"
Add release notes describing the features
Upload the .exe file(s) from the dist/ folder
Click "Publish release"

Adding Custom Icons (Optional)
If you want custom icons:

Create a build/ folder in your project
Add these files:

icon.ico (256x256 for Windows)
icon.icns (for macOS)
icon.png (512x512 for Linux)



You can generate icons from PNG using online tools like:

https://icoconvert.com/ (for .ico files)
https://cloudconvert.com/ (for .icns files)

Troubleshooting
"npm: command not found"

Install Node.js from https://nodejs.org/

Build fails on macOS icons

You can build the .exe on Windows, but .dmg requires macOS
Consider using a Mac VM or asking a friend with a Mac to build it

Icon not showing

Make sure icon files are in the build/ folder with correct names
Rebuild after adding icons: npm run build

For Automatic Builds (Advanced)
You can use GitHub Actions to automatically build and release installers when you push code. Create a .github/workflows/build.yml file for automated builds.
