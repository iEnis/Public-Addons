const fs = require("fs")
const commands = []

try {
    fs.unlinkSync("./scripts/modules/commands.js")
    console.log('\x1b[32m File Deleted Succesfully \x1b[0m')
} catch (e) {
    console.error('\x1b[31m The File Could not be Deleted or allready was, Please contact me on Discord at https://discord.gg/kNpn82bfkg for help \x1b[0m\n' + e)
}

try {
    fs.openSync("./scripts/modules/commands.js", 'w')
    console.log('\x1b[32m Created File Successfully')
} catch (e) {
    console.error('\x1b[31m The File could not be Created, Please contact me on Discord at https://discord.gg/kNpn82bfkg for help \x1b[0m\n' + e)
}

try {
    const cCommands = fs.readdirSync("./scripts/modules/commands/").filter(file => file.endsWith('.js'));
    for (const file of cCommands) {
        const name = file.replace(".js", "")
        commands.push(name)
    }
    console.log('\x1b[32m Pushed all Files Successfully \x1b[0m')
} catch (e) {
    console.error('\x1b[31m 1. An unkown error Accured, Please contact me on Discord at https://discord.gg/kNpn82bfkg for help \x1b[0m\n' + e)
}


try {
    const cmdString = `${commands.map(command => `import {${command}} from './commands/${command}';`)}export const commands = {${commands.map(command => `${command}:${command},`)}};`
    fs.writeFileSync("./scripts/modules/commands.js", cmdString)
    console.log('\x1b[32m Send all Commands Successfully \x1b[0m')
} catch (e) {
    console.error('\x1b[31m 2. An unkown error Accured, Please contact me on Discord at https://discord.gg/kNpn82bfkg for help \x1b[0m\n' + e)
}
