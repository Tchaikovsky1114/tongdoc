
import * as Notifications from 'expo-notifications'


export default async function sendPushNotification(username = '',title,body,data) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: { seconds: 2 },
    });
  }