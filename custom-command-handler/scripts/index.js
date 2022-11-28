import { world } from '@minecraft/server'
import * as config from './config'
import { commands } from './modules/commands'
import { tellraw } from './modules/tellraw'

world.events.tick.subscribe(data => {
    const players = Array.from(world.getPlayers())
    players.forEach((player) => {
        if (player.hasTag(config.normal)) return
        else player.addTag(config.normal)
    })
})

world.events.beforeChat.subscribe((data) => {
    if (!data.message.startsWith(`${config.prefix}`)) return;

    data.cancel = true
    const player = data.sender
    const args = `${data.message.replace(`${config.prefix}`, ``).trim().toLowerCase()}`.split(" ")
    const cmd = args[0]
    const help = args[1]
    const keys = Object.keys(commands);

    if (data.message.startsWith(`${config.prefix}help`) && args[1]) {
        keys.forEach(command => {
            if (help == commands[command].name) {
                let helpForTrue = false
                player.getTags().forEach((tag) => {
                    if (!commands[command].perms) {
                        helpForTrue = true
                    } else if (commands[command].perms.includes(tag)) {
                        helpForTrue = true
                    }
                })
                if (helpForTrue === true) {
                    tellraw(1, player, true, commands[command].help)
                    return;
                } else {
                    tellraw(1, player, true, config.invalid)
                    return;
                }
            } else if (!commands[command].aliases) {
                tellraw(1, player, true, config.invalid)
                return;
            } else if (commands[command].aliases.includes(help)) {
                let helpForTrue = false
                player.getTags().forEach((tag) => {
                    if (!commands[command].perms) {
                        helpForTrue = true
                    } else if (commands[command].perms.includes(tag)) {
                        helpForTrue = true
                    }
                })
                if (helpForTrue === true) {
                    tellraw(1, player, true, commands[command].help)
                    return;
                } else {
                    tellraw(1, player, true, config.invalid)
                    return;
                }
            } else {
                tellraw(1, player, true, config.invalid)
                return;
            }
        })
        return;
    }
    else if (data.message.startsWith(`${config.prefix}help`) && !args[1]) {
        tellraw(1, player, true, `\n§a§l---------------§r\n${keys.map(command => `§6${commands[command].name} §g=> ${commands[command].help}.\n`)}§r§r§a§l---------------§r`);
        return;
    }
    else {
        keys.forEach(command => {
            //const [] = command
            if (cmd == commands[command].name) {
                let runForTrue = false
                player.getTags().forEach((tag) => {
                    if (!commands[command].perms) {
                        runForTrue = true
                    } else if (commands[command].perms.includes(tag)) {
                        runForTrue = true
                    }
                })
                if (runForTrue == true) {
                    commands[command].execute(data, args, player);
                    return;
                } else {
                    tellraw(1, player, true, config.invalid);
                    return;
                }
            } else if (!commands[command].aliases) {
                tellraw(1, player, true, config.invalid)
                return;
            } else if (commands[command].aliases.includes(cmd)) {
                let runForTrue = false
                player.getTags().forEach((tag) => {
                    if (!commands[command].perms) {
                        runForTrue = true
                    } else if (commands[command].perms.includes(tag)) {
                        runForTrue = true
                    }
                })
                if (runForTrue == true) {
                    commands[command].execute(data, args, player);
                    return;
                }
                else {
                    tellraw(1, player, true, config.invalid)
                    return;
                }
            } else {
                tellraw(1, player, true, config.invalid)
                return;
            }
        })
    }
})
