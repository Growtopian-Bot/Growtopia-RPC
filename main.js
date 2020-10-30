const app = require('./src/bundle');
const rpc = require("discord-rpc");
const exec = require('child_process').execFile;
const { ErrorHandler } = require('./src/lib/functionFactory');


rpc.register(app.AppID);

const client = new rpc.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    
    //  Run Growtopia.exe
    exec(app.dataPath + 'Growtopia.exe');


    console.log('Growtopia Presence is running now!\nMade by Phemus --> https://github.com/AykutSarac/Growtopia-RPC');
    app.versionCheck().then(data => console.log("\n" + data));

    //  Create timestamp
    const now = new Date();

    setInterval(() => {

        app.data().then(data => {
            client.setActivity({
                details: "GrowID: " + data.growid,
                state: "In World: " + data.world,
                largeImageKey: "1_grow_icon_1513191167",
                largeImageText: "Growtopia",
                startTimestamp: now
            }).catch(e => {
                ErrorHandler(e);
            });
        }).catch(e => {
            ErrorHandler(e);
        });
    }, 3000);
});


// Make Connection with API
client.login({
    clientId: app.AppID
}).catch(() => {
    console.log("Couldn't make connection. If discord is not running, start discord and run the Growtopia-RPC again.");
});