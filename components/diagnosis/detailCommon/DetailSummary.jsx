import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import usePrice from '../../../hooks/usePrice';
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';
import P_14M from '../../../style/paragraph/P_14M';
import P_14R from '../../../style/paragraph/P_14R';
import P_16M from '../../../style/paragraph/P_16M';
import P_22M from '../../../style/paragraph/P_22M';
const { width } = Dimensions.get('window');
const DetailSummary = ({
  margin,
  detail,
  isVisible,
  fetchGetDiagnosisDetail,
  modalHandler,
  isInternet,
  internetTotal,
  internetReduceMonth,
}) => {
  return (
    <>
      <View style={[styles.summaryBox, { ...margin }]}>
        <View style={styles.summaryYearBox}>
          <Pressable onPress={modalHandler}>
            <P_12M style={styles.yearText}>
              {detail?.year}년 {detail?.month}월
            </P_12M>
          </Pressable>
          <Image
            style={styles.downIcon}
            source={require('../../../assets/common/bluearrowdown.png')}
          />
        </View>
        <View style={styles.statusImgBox}>
          {detail?.bill.state === 0 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status0.png')}
            />
          )}
          {detail?.bill.state === 1 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status1.png')}
            />
          )}
          {detail?.bill.state === 2 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status2.png')}
            />
          )}
          {detail?.bill.state === 3 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status3.png')}
            />
          )}
          {detail?.bill.state === 4 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status4.png')}
            />
          )}
          {detail?.bill.state === 5 && (
            <Image
              style={styles.statusImg}
              source={require('../../../assets/diagnosis/status5.png')}
            />
          )}
        </View>
        <View style={styles.summaryTextBox}>
          {detail?.doctor_comment.map((el, idx) => (
            <P_14M key={idx}>{el}</P_14M>
          ))}
        </View>
        <View style={styles.summaryBillBox}>
          <View style={styles.summaryBillLeftBox}>
            <View style={styles.flexRow}>
              {isInternet ? (
                <>
                  <P_14M>인터넷 총 통신비</P_14M>
                </>
              ) : (
                <>
                  <P_14M style={styles.textBlue}>년간 </P_14M>
                  <P_14M>절감 가능액</P_14M>
                </>
              )}
            </View>
            <View style={styles.flexRow}>
              {isInternet ? (
                <View style={[styles.flexRow, styles.summaryCharge]}>
                  <P_22M style={styles.billTextBlack}>
                    {usePrice(internetTotal)}
                  </P_22M>
                </View>
              ) : (
                <View style={[styles.flexRow, styles.summaryCharge]}>
                  <Image
                    style={styles.redTriangleImg}
                    source={require('../../../assets/common/redreversetriangle.png')}
                  />
                  <P_22M style={styles.billTextRed}>
                    {usePrice(detail?.yearly_save)}
                  </P_22M>
                </View>
              )}

              <View style={styles.billUnitBox}>
                <P_12R style={styles.billUnitText}>원</P_12R>
              </View>
            </View>
          </View>
          <View style={styles.summaryBillRightBox}>
            <View style={styles.flexRow}>
              <P_14M style={styles.textBlue}>월간 </P_14M>
              <P_14M>절감 가능액</P_14M>
            </View>
            <View style={styles.flexRow}>
              <View style={[styles.flexRow, styles.summaryCharge]}>
                <Image
                  style={styles.redTriangleImg}
                  source={require('../../../assets/common/redreversetriangle.png')}
                />
                <P_22M style={styles.billTextRed}>
                  {isInternet
                    ? usePrice(internetReduceMonth)
                    : usePrice(detail?.monthly_save)}
                </P_22M>
              </View>
              <View style={styles.billUnitBox}>
                <P_12R style={styles.billUnitText}>원</P_12R>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal visible={isVisible} transparent={true} animationType="fade">
        <StatusBar style="dark" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInner}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: 16,
                }}
              >
                <P_16M>월 선택하기</P_16M>
                <Pressable onPress={modalHandler}>
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require('../../../assets/common/close.png')}
                  />
                </Pressable>
              </View>
              <ScrollView style={styles.modalInnerScroll}>
                <View style={{ alignItems: 'flex-start', width: '100%' }}>
                  {detail?.dates.map((item) => (
                    <Pressable
                      key={item.text}
                      style={({ pressed }) => [
                        {
                          marginVertical: 4,
                          paddingVertical: 2,
                          width: '100%',
                        },
                        {
                          backgroundColor: pressed
                            ? 'rgba(0,0,255,0.2)'
                            : '#fff',
                        },
                      ]}
                      onPress={() => {
                        fetchGetDiagnosisDetail(item.year, item.month);
                      }}
                    >
                      <P_14R>{item.text}</P_14R>
                    </Pressable>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default DetailSummary;

const styles = StyleSheet.create({
  summaryBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  summaryYearBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  yearText: {
    color: '#2D63E2',
    marginRight: -2,
  },
  downIcon: {
    width: 23.18,
    height: 22.58,
    top: 1,
  },
  statusImgBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statusImg: {
    width: 63.16,
    height: 63.16,
  },
  summaryTextBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryBillBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F9FF',
    borderRadius: 16,
    paddingVertical: 18,
  },

  summaryBillLeftBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
  },
  summaryBillRightBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
  },
  textBlue: {
    color: '#2D63E2',
  },

  summaryCharge: {
    alignItems: 'center',
  },
  redTriangleImg: {
    width: 12,
    height: 12,
    marginRight: 4,
    bottom: 3,
  },
  billTextRed: {
    color: '#FF3A3A',
    marginRight: 2,
  },
  billTextBlack: {
    color: '#000000',
    marginRight: 2,
  },
  billUnitBox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  billUnitText: {
    color: '#666666',
    bottom: 2,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },
  modalInner: {
    width: width - 48,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalInnerScroll: {
    width: '100%',
  },
});
