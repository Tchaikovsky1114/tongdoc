import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import DetailTitle from "../detailCommon/DetailTitle";
import DetailSummary from "../detailCommon/DetailSummary";
import DetailTotalCharge from "../detailCommon/DetailTotalCharge";
import DetailInternetChargeTitle from "../detailCommon/DetailInternetChargeTitle";
import DetailContents from "../detailCommon/DetailContents";
import DetailBottomInfo from "../detailCommon/DetailBottomInfo";
import { StatusBar } from "expo-status-bar";
const InternetDetailModal = () => {
  return (
    <Modal visible animationType="slide">
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.screen}>
          <View style={styles.container}>
            <DetailTitle
              margin={{ marginBottom: 24 }}
              title={"오*라 님의 인터넷 진단서"}
              tong={"KT"}
              number={"010-23**-*234"}
            />
            <DetailSummary
              margin={{ marginBottom: 32 }}
              date={{
                year: "2022",
                month: "11",
              }}
              phoneReduceYear={84480}
              phoneReduceMonth={7040}
              isInternet={true}
              internetTotal={47040}
              internetReduceMonth={0}
            />
          </View>
          <DetailTotalCharge price={47040} />
          <View style={styles.contents}>
            <View style={styles.detailBox}>
              <DetailInternetChargeTitle title={"1. 인터넷"} price={16500} />
              <View>
                <DetailContents title={"기본료 등"} price={56100} />
                <DetailContents title={"약정/결합할인"} price={-39600} />
                <DetailContents title={"절감 가능액"} price={0} isLast={true} />
              </View>
            </View>
            <View style={styles.detailBox}>
              <DetailInternetChargeTitle title={"2. IPTV"} price={19140} />
              <View>
                <DetailContents title={"기본료 등"} price={49390} />
                <DetailContents title={"약정/결합할인"} price={-30250} />
                <DetailContents title={"절감 가능액"} price={0} isLast={true} />
              </View>
            </View>
            <View style={styles.detailBox}>
              <DetailInternetChargeTitle title={"3. 기타"} price={19140} />
              <View>
                <DetailContents title={"기본료 등"} price={49390} />
                <DetailContents title={"약정/결합할인"} price={-30250} />
                <DetailContents title={"절감 가능액"} price={0} isLast={true} />
              </View>
            </View>

            <DetailBottomInfo />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default InternetDetailModal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  contents: {
    paddingHorizontal: 24,
  },
  contentsBigTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
  },
  detailBox: {
    marginBottom: 30,
  },
  contentsBigTitleBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
});
