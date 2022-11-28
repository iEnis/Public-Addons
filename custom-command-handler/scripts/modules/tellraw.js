import * as config from "../config";

/**
 * @remarks
 * Sends a tellraw
 * @param {number} type the type of the Tellraw;
 * 1 => self;
 * 2 => all;
 * 3 => all but self;
 * @param {any} player the player that gets executed;
 * @param {boolean} prefix if the ServerPrefix gets displayed or not;
 * @param {string} msg the message that gets send;
 */
export function tellraw(type, player, prefix, msg) {
    if (!(type > 0 && type < 4)) {
        console.error(`The type can only be between 1 or 3 => Your Type: ${type}`)
        return;
    }
    else if (!typeof prefix === "boolean") {
        console.error(`The Prefix needs to be a boolean (true or false)`)
        return;
    } else if (!typeof msg === "string") {
        console.error(`The Message needs to be a string`)
        return;
    }
    
    let preflx;
    if (prefix === true) {
        preflx = config.serverPrefix
    }
    else { preflx = "" }

    if (type == 0) {
        player.runCommand(`tellraw @s {"rawtext":[{"text":"${preflx}${msg}"}]}`)
    }
    else if (type == 1) {
        player.runCommand(`tellraw @a {"rawtext":[{"text":"${preflx}${msg}"}]}`)
    }
    else if (type == 2) {
        player.runCommand(`tellraw @a[name=!${player.name}] {"rawtext":[{"text":"${preflx}${msg}"}]}`)
    }
}