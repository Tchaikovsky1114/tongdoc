import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import P_16M from '../../../style/paragraph/P_16M';

const internet = [
  { internet: 'SKT(SKB)', id: '1' },
  { internet: 'KT', id: '2' },
  { internet: 'LG U+', id: '3' },
  { internet: '기타/지역케이블', id: '4' },
];

const InternetSelectModal = ({ isVisible, modalHandler, onChange }) => {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.modalTextBox}>
            <P_16M>통신사 선택하기</P_16M>
            <Pressable onPress={modalHandler}>
              <Image
                style={styles.modalCloseBtn}
                source={require('../../../assets/xBtn.png')}
              />
            </Pressable>
          </View>
          <View>
            <FlatList
              data={internet}
              renderItem={(data) => {
                return (
                  <View>
                    <Pressable
                      onPress={onChange.bind(this, data.item.internet)}
                    >
                      <P_14R style={styles.internetText}>
                        {data.item.internet}
                      </P_14R>
                    </Pressable>
                  </View>
                );
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InternetSelectModal;

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
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  modalTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalText: {
    color: '#000000',
    textAlign: 'center',
  },
  modalCloseBtn: {
    width: 16,
    height: 16,
  },
  internetText: {
    color: '#333333',
    marginBottom: 8,
  },
});
