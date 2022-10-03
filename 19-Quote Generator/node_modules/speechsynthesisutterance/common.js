// 判断操作系统
function getUserSystem() { 
    const userAgent = window.navigator.userAgent.toLowerCase;
    const platform = navigator.platform.toLowerCase;

    let isWin = (platform == "win32") || (platform == "windows");
    if (isWin) return 'Windows';
    let isMac = (platform == "mac68k") || (platform == "macppc") || (platform == "macintosh") || (platform == "macintel");
    if (isMac) return "Mac";
    let isUnix = (platform == "x11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    let isLinux = (String(platform).indexOf("linux") > -1);
    if (isLinux) return "Linux";
}

module.export = {
    getUserSystem
}