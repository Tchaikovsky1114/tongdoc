import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
const PAGES = [
  {
    num: 1,
    title: '상단의 가입상품 클릭 후, 홈(인터넷) 선택',
    imageUrl: require('../../../assets/sendingBills/test.png'),
  },
  {
    num: 2,
    title: '이것은 테스트입니다.',
    imageUrl: require('../../../assets/sendingBills/test2.png'),
  },
  {
    num: 3,
    title: '이것은 테스트입니다.',
    imageUrl: require('../../../assets/sendingBills/test2.png'),
  },
  {
    num: 4,
    title: '이것은 테스트입니다.',
    imageUrl: require('../../../assets/sendingBills/test2.png'),
  },
];
const SendingBillsKT = () => {
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.closeBtnBox}>
            <Image
              style={styles.closeBtn}
              source={require('../../../assets/sendingBills/xBtn.png')}
            />
          </View>
          <View style={styles.titleBox}>
            <P_16M style={styles.titleTop}>
              {'통신사 홈페이지에서 요금 청구서를 보내세요.'}
            </P_16M>
            <P_14M style={styles.titleBottom}>{'매달 자동 전송 설정'}</P_14M>
          </View>
          <View style={styles.flatListBox}>
            <ScrollView
              data={PAGES}
              horizontal
              keyExtractor={(item) => item.num}
              renderItem={(itemData) => {
                return (
                  <View style={styles.flatListItemBox}>
                    <Text style={styles.flatListItemTitle}>
                      {itemData.item.title}
                    </Text>
                  </View>
                );
              }}
            ></ScrollView>
          </View>
          <View style={styles.test}>
            <Text>점점점점점</Text>
          </View>
          <View style={styles.sendBtnBox}>
            <Text>버튼</Text>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  closeBtnBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 8,
  },
  closeBtn: {
    width: 16,
    height: 16,
  },
  titleBox: {
    width: '100%',
    backgroundColor: 'blue',
    marginBottom: 8,
  },
  titleTop: {
    marginBottom: 8,
  },
  titleBottom: {
    color: '#2D63E2',
  },
  flatListBox: {
    backgroundColor: 'red',
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListItemBox: {
    flex: 1,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  flatListItemTitle: {
    width: '100%',
    backgroundColor: 'green',
  },

  test: {
    // flex: 1,
  },
  sendBtnBox: {
    // flex: 1,
  },
});
