
const path = require('path');
//get os type then return path of respective platform library 
const temp_files = function (extra_path) {

    if ((process.platform === 'darwin' || process.platform === 'linux' || process.arch === 'x64') && extra_path) {
        return extra_path;
    }

    if (process.platform === 'darwin') {

        return "/tmp/";//return osx library path

    } else if (process.platform === 'linux') {
        return "/tmp/";//return linux library path
    } else if (process.platform === 'win32') {

        if (process.arch === 'x64') {
            return "/tmp";//return windows 64bit library path
        } else {
            console.log('Unsupported platform:', process.platform, process.arch);//show unsupported platform message
        }

    } else {
        console.log('Unsupported platform:', process.platform, process.arch);//show unsupported platform message 
    }
};
module.exports = temp_files