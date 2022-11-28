/*  How to Edit the Config:

    Default Prefix is "."
Default: export const prefix = "."

    Custom Prefix is "-"
Edited: export const prefix = "-"
*/

/**
 * Custom Command Prefix
 */
export const prefix = "."

/**
 * A Tag that every Player has(This fixes a bug, please do net remove this)
 */
export const normal = "default"

/**
 * Server Prefix
 * @remarks
 * The Prefix that gets shown before every Custom Command
 */
export const serverPrefix = "§6[§gCC§6]" + " §7"
// The >> + " §7" << makes it so there is Space
// between the serverPrefix and the Message and
// that the message after gets displayed in gray (§7)

/**
 * The message that gets send when a player does
 * not have permission for it or the command does
 * not exist!
 */
export const invalid = `Invalid Command: type ${prefix}help for a list of all commands you can use`