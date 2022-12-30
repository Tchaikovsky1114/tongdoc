import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import P_18M from '../../style/paragraph/P_18M';
import UserDiagnosisStatusSummaryBannerItem from './UserDiagnosisStatusSummaryBannerItem';


/**
 * 메인페이지의 통신비 진단 결과 베너입니다.
 * 누르면 통신비 진단 페이지로 이동합니다.
 * 청구서의 분석 상태에 따라 다른 UI로 랜더링됩니다.
 */
export default function Banner({ diagnosisResultData,onPress }) {
  const { phone, month, total_save: totalSave } = diagnosisResultData;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.diagnosisResultTitleBox}>
          <P_18M>{month}월 우리집 통신비 진단 결과 </P_18M>
          <Image
            style={{ width: 23, height: 24 }}
            source={require('../../assets/common/graynextarrow.png')}
          />
        </View>

        <View style={styles.diagnosisStatusBox}>
          {phone && phone[0].state === 0 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status0.png`)}
            title={`${phone[0].user_name}님의 휴대폰 요금 청구서가 `}
            content="아직 통닥에 도착하지 않았어요" 
            />)
          }
          {phone && phone[0].state === 1 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status1.png`)}
            title={`${phone[0].user_name}님의 ${month}월 통신비 진단 결과, `}
            content={`${parseInt(totalSave).toLocaleString()}원 절감 가능하네요!`} 
            />
          )}
          {phone && phone[0].state === 2 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status2.png`)}
            title={`${phone[0].user_name}님의 ${month}월 통신비 진단 결과, `}
            content={`${parseInt(totalSave).toLocaleString()}원 절감 가능하네요!`} 
            />
          )}
          {phone && phone[0].state === 3 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status3.png`)}
            title={`${phone[0].user_name}님의 ${month}월 통신비 진단 결과, `}
            content={`${parseInt(totalSave).toLocaleString()}원 절감 가능하네요!`} 
            />
          )}
          {phone && phone[0].state === 4 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status4.png`)}
            title={`${phone[0].user_name}님의 ${month}월 통신비 진단 결과, `}
            content={`${parseInt(totalSave).toLocaleString()}원 절감 가능하네요!`} 
            />
          )}
          {phone && phone[0].state === 5 && (
            <UserDiagnosisStatusSummaryBannerItem
            imageURL={require(`../../assets/diagnosis/status5.png`)}
            title="휴대폰 요금 청구서 분석중입니다."
            content="완료 즉시 알려드릴게요."
            />
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 2,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
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
