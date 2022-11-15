import { useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import ModalCarousel from '../modalCarousel/ModalCarousel';
const { width } = Dimensions.get('window');
const SendingBills = ({ PAGES_ONCE, PAGES_MONTH }) => {
  const [selectBill, setSelectBill] = useState(true);
  const selectBillHandler = () => {
    setSelectBill((prev) => !prev);
  };
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.titleBtnBox}>
            <Pressable
              style={selectBill ? styles.titleLeftBtnSelect : styles.titleBtn}
              onPress={selectBill ? null : selectBillHandler}
            >
              <P_14M style={selectBill ? styles.titleTextSelect : ''}>
                청구서 즉시 전송
              </P_14M>
            </Pressable>
            <Pressable
              style={selectBill ? styles.titleBtn : styles.titleRightBtnSelect}
              onPress={selectBill ? selectBillHandler : null}
            >
              <P_14M style={selectBill ? '' : styles.titleTextSelect}>
                청구서 매달 자동 전송
              </P_14M>
            </Pressable>
          </View>
          <View style={styles.modalCarousel}>
            {selectBill ? (
              <ModalCarousel PAGES={PAGES_ONCE} selectBill={selectBill} />
            ) : (
              <ModalCarousel PAGES={PAGES_MONTH} selectBill={selectBill} />
            )}
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

export default SendingBills;

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
    width: width - 80,
  },
  BottomBtnBox: {
    width: '100%',
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
