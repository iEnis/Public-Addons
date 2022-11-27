import { world } from '@minecraft/server'
import * as config from './config'

world.events.tick.subscribe(() => {
    try { world.getDimension("overworld").runCommand(`scoreboard objectives add ${config.x} dummy`) } catch (e) {}
    try { world.getDimension("overworld").runCommand(`scoreboard objectives add ${config.y} dummy`) } catch (e) {}
    try { world.getDimension("overworld").runCommand(`scoreboard objectives add ${config.z} dummy`) } catch (e) {}

    const players = Array.from(world.getPlayers())
    players.forEach((player) => {
        let x = parseInt(`${player.location.x}`.split(".")[0])
        if (player.location.x < 0) { x = x - 1 }
        let y = parseInt(`${player.location.y}`.split(".")[0])
        if (y < 0) { y = y - 1 }
        let z = parseInt(`${player.location.z}`.split(".")[0])
        if (player.location.z < 0) { z = z - 1 }

        player.runCommand(`scoreboard players set @s ${config.x} ${x}`)
        player.runCommand(`scoreboard players set @s ${config.y} ${y}`)
        player.runCommand(`scoreboard players set @s ${config.z} ${z}`)
    })
})
