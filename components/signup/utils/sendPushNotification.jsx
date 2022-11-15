
import * as Notifications from 'expo-notifications'


export default async function sendPushNotification(username = '',title,body,data) {
    await Notifications.scheduleNotificationAsync({
      content: {
        titletitle,
        body,
        data,
      },
      trigger: { seconds: 2 },
    });
  }