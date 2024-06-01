# HTMLBrowse
Lightweight browser written in HTML [Pre Alpha]

## Feature that need to be added
- Tabs
- Saved tabs
- Saved logins (may be difficult due to the nature of this project)
- Fix keyboard shortcuts
- Create an icon
- Mac OS and Linux builds (I would compile them now but as it is early into the project I dont see this necessary)

## Build to run on other OS

1. Download [Electron Fiddle](https://www.electronjs.org/fiddle#downloads), [NodeJS](https://nodejs.org/en/download/package-manager) and [Git](https://git-scm.com/downloads)

1. Open your prefered terminal in the install location and run
```
git clone https://github.com/scoilcax/HTMLBrowse.git
```
3. Run Electron Fiddle
1. Press the keybind
<kbd>CTRL</kbd><kbd>O</kbd> or <kbd>CMD</kbd><kbd>O</kbd>
1. Select the project folder
1. Click  Tasks -> Make installers for Fiddle...
1. Wait for the task to finish
1. Navigate from the opened directory to  /out/make/#Platform Name/#Platform Type and move the executable file to a directory of your choice as the current directory is in temporary storage
1. Run the executable file 
