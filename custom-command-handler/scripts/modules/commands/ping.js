import {tellraw} from '../tellraw'
export const ping = {
    name: 'ping',   // The name of the Command (Must be Lowercase)
    help: 'Responds with \'Pong!\'', // The Message that gets displayed when you type !help <command>
    aliases: [ // Alternative names for the Command
        'pong',
        'test' // To remove the Aliases just delete this Array
    ],
    perms: [    // The Ranks/Tags that can use this Command
        "Admin",
        "Staff"// To remove the Permissions just delete this Array
    ],
    execute(data, args, player) { // The Stuff that gets Executed
        tellraw(1, player, true, 'Pong!')
    }
}