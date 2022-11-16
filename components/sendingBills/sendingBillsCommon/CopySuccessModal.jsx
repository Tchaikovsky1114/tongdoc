import { Modal, StyleSheet, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';

const CopySuccessModal = ({ isVisible }) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <P_14M style={styles.modalText}>통닥 메일 주소를 복사했어요</P_14M>
        </View>
      </View>
    </Modal>
  );
};

export default CopySuccessModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalBox: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#333333',
    opacity: 0.9,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    top: 50,
  },
  modalText: {
    color: '#ffffff',
  },
});
