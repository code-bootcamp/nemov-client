// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCn7igxfkagyXifh20ymKHPDIX25icsPms",
  // authDomain: "nemov-pwa.firebaseapp.com",
  projectId: "nemov-pwa",
  // storageBucket: "nemov-pwa.appspot.com",
  messagingSenderId: "827972698103",
  appId: "1:827972698103:web:0119b791be16f49521b8f2",
  // measurementId: "G-SXJ96EC1YE",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  // const notificationTitle = "Background Message Title";
  const notificationTitle = payload.notificationTitle;

  const notificationOptions = {
    // body: "Background Message body.",
    body: payload.notificationOptions.body,
    // icon: "/firebase-logo.png",
    // icon: "/pwa/icon-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
