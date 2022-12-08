import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import P_18R from '../../../style/paragraph/P_18R';

const DoubleCheckModal = ({
  isVisible,
  firstInfoText,
  secondInfoText,
  pressBtnCancel,
  pressBtnConfirm,
}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.modalTextBox}>
            <P_18R style={styles.modalText}>{firstInfoText}</P_18R>
          </View>
          {secondInfoText ? (
            <View style={styles.modalTextBox}>
              <P_18R style={styles.modalTextBottom}>{secondInfoText}</P_18R>
            </View>
          ) : null}
          <View style={styles.modalBtnBox}>
            <Pressable onPress={pressBtnCancel}>
              <View style={styles.modalBtnWhite}>
                <Text style={styles.modalBtnTextBlue}>취소</Text>
              </View>
            </Pressable>
            <Pressable onPress={pressBtnConfirm}>
              <View style={styles.modalBtnBlue}>
                <Text style={styles.modalBtnTextWhite}>확인</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DoubleCheckModal;

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
    padding: 24,
  },
  modalTextBox: {
    alignItems: 'center',
  },
  modalText: {
    color: '#000000',
    textAlign: 'center',
  },
  modalTextBottom: {
    color: '#666666',
    textAlign: 'center',
  },
  modalBtnBox: {
    flexDirection: 'row',
    marginTop: 16,
  },
  modalBtnBlue: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D63E2',
    paddingHorizontal: 50,
    paddingVertical: 17,
    borderRadius: 8,
  },
  modalBtnWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 50,
    paddingVertical: 17,
    borderRadius: 8,
  },
  modalBtnTextWhite: {
    includeFontPadding: false,
    fontFamily: 'Noto500',
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalBtnTextBlue: {
    includeFontPadding: false,
    fontFamily: 'Noto500',
    color: '#2D63E2',
    fontSize: 16,
  },
});
