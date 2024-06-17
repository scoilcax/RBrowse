<img src="https://github.com/scoilcax/RBrowse/assets/102550814/5d54540a-0369-452e-a023-84a2c6d372e2" alt="drawing" width="200"/><br>
# RBrowse [Pre Alpha]
Lightweight browser written in HTML 
![image](https://github.com/scoilcax/RBrowse/assets/102550814/2a2f528b-5397-4f8e-9b79-82954f5e5e55)
[Web Demo](https://scoilcax.github.io/RBrowse/) (Websites will not load)

Only tested in Windows 11 x64
## Feature that need to be added
- Tabs
- Saved tabs
- Saved logins (may be difficult due to the nature of this project)
- Fix keyboard shortcuts

## Known Issues
- Some login pages will not work natively so to bypass this hold shift when clicking a login link to open a new electron window

## [Windows Executable (Recommended)](https://github.com/scoilcax/RBrowse/releases)

  
# Build to run on Mac/Linux/Windows
## Prerequisites
1. [NodeJS](https://nodejs.org/en/download/package-manager) and [Git](https://git-scm.com/downloads)
1. Run in terminal
```
npm install electron-builder
``` 
## Steps
1. Open your prefered terminal in the install location and run
```
git clone https://github.com/scoilcax/RBrowse.git
```
  2.<br>
Mac
```
npx electron-builder build -m
```
Windows
```
npx electron-builder build -w
```
Linux
```
npx electron-builder build -l
```




