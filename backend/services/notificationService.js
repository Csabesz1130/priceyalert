const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.sendNotification = (token, message) => {
  admin.messaging().sendToDevice(token, message)
    .then(response => console.log('Successfully sent message:', response))
    .catch(error => console.log('Error sending message:', error));
};
