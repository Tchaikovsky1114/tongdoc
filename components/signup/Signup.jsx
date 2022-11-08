
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";

import React,{useState} from "react";
import H4_24R from "../../style/H4_24R";
import P_14R from "../../style/paragraph/P_14R";
import * as Contacts from "expo-contacts";
import * as Notifications from "expo-notifications";
import * as SMS from "expo-sms";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert:true,
//     shouldPlaySound:false,
//     shouldSetBadge:false,
//   })
// });

const { width } = Dimensions.get("window");

export default function Signup() {
  const navigation = useNavigation();
  const [isLoading,setIsLoading] = useState(false)

  const getAuthorityPressHandler = async () => {
    let allGrantedPermission = false;
    setIsLoading(true)
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        console.log("Contacts granted");

        //  if(data.length > 0) {
        //    const contact = data[1];
        //    console.log(contact); 유저 기기의 연락처를 확인할 수 있음.
        //  }
        allGrantedPermission = true;
      } else {
        allGrantedPermission = false;
      }
    } catch (err) {
      console.error(err);
      allGrantedPermission = false;
    }

    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        console.log("SMS is available");
        allGrantedPermission = true;
      } else {
        allGrantedPermission = false;
      }
    } catch (error) {
      allGrantedPermission = false;
    }

    // try {
    //   const { status: existingStatus } =
    //     await Notifications.getPermissionsAsync();
    //   let NotificationStatus = existingStatus;
    //   if (existingStatus !== "granted") {
    //     const { status } = await Notifications.requestPermissionsAsync();
    //     NotificationStatus = status;
    //     allGrantedPermission = true;
    //   }
    //   if (NotificationStatus !== "granted") {
    //     alert("푸시 알람에 대한 토큰 인증에 실패하였습니다.");
    //     allGrantedPermission = false;
    //     return;
    //   }

    //   const token = await Notifications.getExpoPushTokenAsync({
    //     experienceId: "tongdoc_app",
    //   });
    //   console.log(token);

    //   if (Platform.OS === "android") {
    //     Notifications.setNotificationChannelAsync("default", {
    //       name: "default",
    //       importance: Notifications.AndroidImportance.MAX,
    //       vibrationPattern: [0, 250, 250, 250],
    //       lightColor: "#FF231F7C",
    //     });
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});

        allGrantedPermission = true;
      } else {
        allGrantedPermission = false;
      }
    } catch (err) {
      console.error(err);
      allGrantedPermission = false;

    }finally{
      console.log('allGrantedPermission', allGrantedPermission);
      navigation.navigate('Signup/ChoiceSignMethod')
      setIsLoading(false)

    } 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.headingBox}>
          <H4_24R>앱 접근 권한을 허용해 주세요</H4_24R>
        </View>

        <View style={styles.choiceAuthorityBox}>
          <P_14R style={styles.choiceAuthorityText}>선택 권한</P_14R>
          <Image
            style={styles.choiceAuthorityImage}
            source={require("../../assets/signup/authorities.png")}
          />
        </View>

        <View style={styles.noticeBox}>
          <P_14R style={{ color: "#666666" }}>
            각 선택 권한을 허용하지 않아도 앱 사용이 가능하지만 일부 서비스
            이용은 제한될 수 있습니다.
          </P_14R>
        </View>
      </View>

      <View style={styles.buttonBox}>
        
      {isLoading ?
          <View style={[styles.button,{opacity:0.8}]}>
          <ActivityIndicator size="large" color="#00ff00" />
          </View>
          : <Pressable onPress={getAuthorityPressHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>확인</Text>
          </View> 
          </Pressable>
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headingBox: {
    marginTop: 24,
    flex: 0.1,
  },
  choiceAuthorityBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: -40,
  },
  choiceAuthorityImage: {
    width: 307,
    height: 168,
  },
  choiceAuthorityText: {
    color: "#999999",
    marginBottom: 24,
  },
  noticeBox: {
    flex: 1,
    maxWidth: 366,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonBox: {
    width,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  button: {
    flex: 1,
    backgroundColor: "#2D63E2",
    justifyContent: "center",
    alignItems: "center",
    height: 58,
  },
  buttonText: {
    fontFamily: "Noto500",
    color: "#fff",
    fontSize: 17,
  },
});
