import firebase from "firebase/app";
import { useEffect } from "react";

export default function Firebase() {
  useEffect(() => {
    async function getMessageToken() {
      const token = await getToken();
      console.log(token);
    }
    void getMessageToken();
  }, []);

  async function getToken() {
    const messaging = firebase.messaging();
    const token = await messaging.getToken({
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
    });

    return token;
  }
}
