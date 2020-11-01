const fetch = require('node-fetch');
const fs = require('fs');

/** @returns {Promise} */
module.exports = async (version) => {
  return fetch("https://api.github.com/repos/AykutSarac/Growtopia-RPC/tags")
  .then(res => res.json())
  .then(data => {
    if (!data || !data[0]) return false;
    if (data[0].name !== version) {
      return true;
    } else {
      return false;
    }
  }).catch(e => {
    fs.appendFileSync('errorlog.txt', e.stack);
  });
}
