const Pusher = require('pusher');

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */

 var APP_KEY=
 var APP_SECRET=
 var APP_ID=
 var CLUSTER="us2"

 const config = {APP_ID, APP_KEY, APP_SECRET, CLUSTER };
 const pusher = new Pusher({
   appId: config.APP_ID,
   key: config.APP_KEY,
   secret: config.APP_SECRET,
   cluster: config.CLUSTER,
 });

exports.actionChat = (req, res) => {
    const socketId = req.body.socket_id;
    const channelName = req.body.channel_name;

    var auth = pusher.authenticate(socketId, channelName);

    res.set({
      "Content-Type": "application/javascript"
    });

    res.send(auth);
};
