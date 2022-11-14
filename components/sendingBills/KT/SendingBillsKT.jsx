import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import ModalCarousel from '../modalCarousel/ModalCarousel';
const PAGES_ONCE = [
  {
    num: 1,
    titleTop: '마이케이티 앱 실행',
    titleBottom: '검색창에 ‘요금명세서 재발송’ 입력',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_1.png'),
  },
  {
    num: 2,
    titleTop: '케이톡 대화창에 ‘요금명세서 재발송’ 선택',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_2.png'),
  },
  {
    num: 3,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_3.png'),
  },
  {
    num: 4,
    titleTop: '최근 청구월 선택 후 우측 ‘재발송’ 클릭',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_4.png'),
  },
  {
    num: 5,
    lastInfoTop: {
      first: '요금 청구서를',
      second: '통신닥터 메일로 전송해주세요.',
    },
    lastInfoBottom: {
      first: '통닥 메일로 요금 청구서가 도착해야',
      second: '무료진단을 시작할 수 있습니다.',
    },
  },
];
const PAGES_MONTH = [
  {
    num: 1,
    titleTop: '마이케이티 앱 실행',
    titleBottom: '검색창에 ‘명세서 유형변경’ 입력',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_1.png'),
  },
  {
    num: 2,
    titleTop: '‘이메일 명세서(무료)’ 선택',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_2.png'),
  },
  {
    num: 3,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_3.png'),
  },
  {
    num: 4,
    titleTop: '‘예’ 클릭 시',
    titleBottom: '이메일 요금 청구서 변경 완료!',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_4.png'),
  },
  {
    num: 5,
    lastInfoTop: {
      first: '요금 청구서를',
      second: '통신닥터 메일로 전송해주세요.',
    },
    lastInfoBottom: {
      first: '통닥 메일로 요금 청구서가 도착해야',
      second: '무료진단을 시작할 수 있습니다.',
    },
  },
];
const SendingBillsKT = () => {
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.titleBtnBox}>
            <Pressable style={styles.titleLeftBtnSelect}>
              <P_14M style={styles.titleTextSelect}>청구서 즉시 전송</P_14M>
            </Pressable>
            <Pressable style={styles.titleBtn}>
              <P_14M>청구서 매달 자동 전송</P_14M>
            </Pressable>
          </View>
          <View style={styles.modalCarousel}>
            <ModalCarousel PAGES_ONCE={PAGES_ONCE} />
          </View>

          <View style={styles.BottomBtnBox}>
            <Pressable style={styles.BottomCloseBtn}>
              <Text style={styles.CloseBtnText}>다음에 전송</Text>
            </Pressable>
            <Pressable style={styles.BottomAppBtn}>
              <Text style={styles.AppBtnText}>KT앱 실행</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SendingBillsKT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33333380',
    paddingHorizontal: 24,
  },
  modalBox: {
    flex: 1,
    height: 602,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  titleBtnBox: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#2D63E2',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  titleLeftBtnSelect: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#2D63E2',
    flex: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  titleRightBtnSelect: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#2D63E2',
    flex: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  titleBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    flex: 1,
  },
  titleTextSelect: {
    color: '#ffffff',
  },

  modalCarousel: {
    flex: 25,
    marginBottom: 32,
  },
  BottomBtnBox: {
    width: '100%',
    // flex: 3,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BottomCloseBtn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CloseBtnText: {
    fontFamily: 'Noto500',
    color: '#2D63E2',
    fontSize: 16,
  },
  BottomAppBtn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D63E2',
    borderRadius: 8,
  },
  AppBtnText: {
    fontFamily: 'Noto500',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
