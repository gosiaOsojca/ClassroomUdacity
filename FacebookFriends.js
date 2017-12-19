/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Gosia",
    friends: 255,
    messages: ["Message1", "Message2", "Message3", "Message4"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    },
};
