import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import P_14R from '../../style/paragraph/P_14R';
import P_18R from '../../style/paragraph/P_18R';

const ConfirmModal = ({
  isVisible,
  firstInfoText,
  secondInfoText,
  buttonText,
  pressBtn,
}) => {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.modalTextBox}>
            <P_18R style={styles.modalText}>{firstInfoText}</P_18R>
          </View>
          {secondInfoText ? (
            <View style={styles.modalTextBox}>
              <P_14R style={styles.modalTextBottom}>{secondInfoText}</P_14R>
            </View>
          ) : null}
          <Pressable onPress={pressBtn}>
            <View style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>{buttonText || '확인'}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;

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
    marginBottom: 16,
  },
  modalText: {
    color: '#000000',
    textAlign: 'center',
  },
  modalTextBottom: {
    color: '#666666',
    textAlign: 'center',
  },
  modalBtn: {
    backgroundColor: '#2D63E2',
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  modalBtnText: {
    fontFamily: 'Noto500',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
