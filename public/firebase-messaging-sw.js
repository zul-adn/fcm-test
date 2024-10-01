// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAWOYZ0-qysKLRDYDzZ8Oekit-3KUyDSsg",
  authDomain: "push-notification-8e535.firebaseapp.com",
  projectId: "push-notification-8e535",
  storageBucket: "push-notification-8e535.appspot.com",
  messagingSenderId: "1079318576323",
  appId: "1:1079318576323:web:a8aaa6035c4fb81ae9b676",
  measurementId: "your_keys",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});