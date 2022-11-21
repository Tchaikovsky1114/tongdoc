import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import P_16M from '../../style/paragraph/P_16M';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import 'intl';
import 'intl/locale-data/jsonp/en';
import PhoneDetailModal from './detailModal/PhoneDetailModal';

export default function FamilyCard({ item, index }) {
  const {
    id,
    user_name: name,
    phone_number: phoneNumber,
    tcom: telecom,
    state,
    bill_id: billId,
    check_y: checkYear,
    check_m: checkMonth,
    charge,
    save: savings,
  } = item;
  const [isVisible, setIsVisible] = useState(false);
  const modalHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <Pressable onPress={modalHandler}>
        <View
          style={[
            styles.container,
            {
              borderColor: index === 0 ? '#2D63E2' : '#ddd',
              borderWidth: index === 0 ? 2 : 1,
            },
          ]}
        >
          <View>
            <P_16M>
              {name} {index === 0 ? <Text>(나)</Text> : null}
            </P_16M>
            <View style={{ flexDirection: 'row' }}>
              <P_12R style={{ color: '#666666', paddingRight: 8 }}>
                {telecom}
              </P_12R>
              <P_12R style={{ color: '#666666' }}>{phoneNumber}</P_12R>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <P_14M>{parseInt(savings).toLocaleString()}원</P_14M>
            <P_14M style={{ color: '#2d63e2' }}>
              ({' '}
              <Image
                style={{ width: 4.4, height: 3.6 }}
                source={require('../../assets/diagnosis/bluereversetriangle.png')}
              />{' '}
              {parseInt(savings).toLocaleString()} )
            </P_14M>
          </View>
        </View>
      </Pressable>
      <PhoneDetailModal isVisible={isVisible} modalHandler={modalHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 64,
  },
});
