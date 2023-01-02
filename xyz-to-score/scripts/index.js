import { world, system } from '@minecraft/server'
import * as config from './config'

world.events.worldInitialize.subscribe(() => {
    try { world.scoreboard.addObjective(config.x, config.x) } catch (e) {}
    try { world.scoreboard.addObjective(config.y, config.y) } catch (e) {}
    try { world.scoreboard.addObjective(config.z, config.z) } catch (e) {}
})

world.events.tick.subscribe(() => {
    Array.from(world.getPlayers()).forEach((player) => {
        let {x, y, z} = player.location
        player.runCommandAsync(`scoreboard players set @s ${config.x} ${Math.floor(x)}`)
        player.runCommandAsync(`scoreboard players set @s ${config.y} ${Math.floor(y)}`)
        player.runCommandAsync(`scoreboard players set @s ${config.z} ${Math.floor(z)}`)
    })
})
