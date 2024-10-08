import { useEffect, useState } from "react";
import useFCMToken from "./useFCMToken";
import { messaging } from "../firebase";
import { MessagePayload, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";

const useFCM = () => {
  const fcmToken = useFCMToken();
  const fcmmessaging = messaging();
  const [messages, setMessages] = useState<MessagePayload[]>([]);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      
      const unsubscribe = onMessage(fcmmessaging, (payload) => {
        toast.dark(payload.notification?.title);
        setMessages((messages) => [...messages, payload]);
      });
      return () => unsubscribe();
    }
  }, [fcmToken, fcmmessaging]);
  return { fcmToken, messages };
};

export default useFCM;