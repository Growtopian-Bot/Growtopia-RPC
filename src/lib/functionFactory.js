module.exports._sortAscii = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        try {
            str = str.toString();
            return str.replace(/[^\x20-\x7E]/g, ' ');
        } catch (error) {
            return "Unknown"
        }
}

module.exports.ErrorHandler = (error) => {
    const { appendFileSync } = require('fs');
    appendFileSync('errorlog.txt', error.stack);
    console.error("An error occured, please notify the developer at here: https://github.com/AykutSarac/Growtopia-RPC/issues");
    process.exit(0);
}