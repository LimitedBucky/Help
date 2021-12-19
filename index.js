module.exports = function({bot, commands}){
  commands.addGlobalCommand ('help', '', (msg, args) => {
  bot.createMessage (msg.channel.id, `**Here is a list of commands! **
**!reply <text> /!r <text>** - Send a reply to the user.
**!anonreply <text> / !ar <text>** - Send an anonymous reply to the user. Anonymous replies only show the moderator's role in the reply.
**!close** - Close the Modmail thread. 
**!close-time** <time> - Close the Modmail thread after a timer. Sending a message to the user or receiving a message from the user will cancel scheduled closing.
**!close -s / !close -s** <time> - Close the Modmail thread without notifying the user that it was closed.
**!close cancel** - Cancel a timed close.
**!logs** - List previous Modmail logs with the user.
**!block** - Block the user from using Modmail.
**!block** <time> - Block the user from using Modmail for a specified time.
**!unblock** - Unblock the user, allowing them to use Modmail again.
**!move** <category> - Move the Modmail thread to a different category. Requires allowMove to be enabled in the bot's settings.
**!suspend** - Suspend the thread. The thread will act as closed and will not receive any messages until unsuspended via !unsuspend.
**!unsuspend** - Unsuspend the thread. See !suspend above.
**!alert** - Pings you when the thread gets a new reply.
**!alert cancel** - Cancel the ping set by !alert.
**!edit** <number> <new text> - Edit your own previous reply sent with !reply.
<number> is the message number shown in front of staff replies in the thread channel.
**!delete** <number> - Delete your own previous reply sent with !reply.
<number> is the message number shown in front of staff replies in the thread channel.
**!role** - View your display role for the thread - the role that is shown in front of your name in your replies
**!role reset** - Reset your display role for the thread to the default
**!role** <role name> - Change your display role for the thread to any role you currently have
**!loglink** - Get a link to the open Modmail thread's log.
**!loglink -s** - Get a link to the open Modmail thread's log, only showing messages to/from the user (ignores mod chatter within the thread).
**!loglink -v** - Get a link to the open Modmail thread's log, showing extra details about channel and message IDs between the bot and the user. This is mainly useful when reporting messages to Discord's Trust & Safety team.
**!id** - Prints the user's ID.
**!dm_channel_id** - Prints the ID of the current DM channel with the user
**!message** <number> - Shows the DM channel ID, DM message ID, and message link of the specified user reply. <number> is the message number shown in front of staff replies in the thread channel.
**!newthread** <userID> - Open a Modmail thread with a user.
**!is_blocked <userID>** - Check if the specified user is blocked.





``
`);
  });
}
