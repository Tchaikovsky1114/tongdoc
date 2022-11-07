// 김민영 테스트용 페이지

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const TestKim = () => {
  const navigation = useNavigation();

  const testLoginPage = () => {
    navigation.navigate("Signin");
  };

  return (
    <View>
      <Pressable onPress={testLoginPage}>
        <Text>하이</Text>
      </Pressable>
    </View>
  );
};

export default TestKim;
