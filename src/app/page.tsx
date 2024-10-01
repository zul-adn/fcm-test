"use client";
import firebaseapp from "@/utils/firebase";
import useFCM from "@/utils/hooks/useFCM";
import { getMessaging, onMessage } from "firebase/messaging";
import { useEffect } from "react";

export default function Home() {
  const { messages, fcmToken } = useFCM();

 
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="container p-20">
      <h1>FCM</h1>
      <p className="mt-6 text-sm mb-6">FCM Token: {fcmToken}</p>
      <div
  className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th>index</th>
            <th>from</th>
            <th>title</th>
            <th>body</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {messages.reverse().map((message, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{message.from}</td>
              <td>{message.notification?.title}</td>
              <td>{message.notification?.body}</td>
              <td>
                <pre>{JSON.stringify(message.data, null, 2)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}