import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import P_18M from '../../style/paragraph/P_18M';
import P_14M from '../../style/paragraph/P_14M';

export default function Banner({ mainConfiguringData, diagnosisResultData }) {
  const { phone, month, total_save: totalSave } = diagnosisResultData;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.diagnosisResultTitleBox}>
          <P_18M>{month}월 통신비 진단 결과 </P_18M>
          <Image
            style={{ width: 23, height: 24 }}
            source={require('../../assets/common/graynextarrow.png')}
          />
        </View>
        <View style={styles.diagnosisStatusBox}>
          {phone && phone[0].state === 0 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status0.png`)}
              />
              <View>
                <P_14M>{phone[0].user_name}님의 휴대폰 요금 청구서가</P_14M>
                <P_14M>아직 통닥에 도착하지 않았어요</P_14M>
              </View>
            </>
          )}
          {phone && phone[0].state === 1 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status1.png`)}
              />
              <View>
                <P_14M>{phone[0].user_name}님의 11월 통신비 진단 결과,</P_14M>
                <P_14M style={{ color: '#2D63E2' }}>
                  {totalSave}원 절감 가능하네요!
                </P_14M>
              </View>
            </>
          )}
          {phone && phone[0].state === 2 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status2.png`)}
              />
              <View>
                <P_14M>{phone[0].user_name}님의 11월 통신비 진단 결과,</P_14M>
                <P_14M style={{ color: '#2D63E2' }}>
                  {totalSave}원 절감 가능하네요!
                </P_14M>
              </View>
            </>
          )}
          {phone && phone[0].state === 3 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status3.png`)}
              />
              <View>
                <P_14M>{phone[0].user_name}님의 11월 통신비 진단 결과,</P_14M>
                <P_14M style={{ color: '#2D63E2' }}>
                  {totalSave}원 절감 가능하네요!
                </P_14M>
              </View>
            </>
          )}
          {phone && phone[0].state === 4 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status4.png`)}
              />
              <View>
                <P_14M>{phone[0].user_name}님의 11월 통신비 진단 결과,</P_14M>
                <P_14M style={{ color: '#2D63E2' }}>
                  {totalSave}원 절감 가능하네요!
                </P_14M>
              </View>
            </>
          )}
          {phone && phone[0].state === 5 && (
            <>
              <Image
                style={{ width: 52, height: 52, marginRight: 24 }}
                source={require(`../../assets/diagnosis/status5.png`)}
              />
              <View>
                <P_14M>휴대폰 요금 청구서 분석중입니다.</P_14M>
                <P_14M>완료 즉시 알려드릴게요.</P_14M>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 2,
    shadowColor: '#ccc',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 16,
    elevation: 5,
  },
  inner: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    maxHeight: 142,
  },
  diagnosisResultTitleBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  diagnosisStatusBox: {
    flexDirection: 'row',
    marginTop: 16,
  },
});
