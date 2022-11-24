import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import P_12R from '../../style/paragraph/P_12R';
import P_16M from '../../style/paragraph/P_16M';
import P_14R from '../../style/paragraph/P_14R';
import usePrice from '../../hooks/usePrice';

export default function SummaryBannerCard({ diagnosisResultData }) {
  const {
    total_state: totalState,
    total_charge: totalCharge,
    total_save: totalSavings,
    family_count: familyCount,
    yearly_save: annualSavings,
  } = diagnosisResultData;

  {
    /* status/state 0,1,2,3,4,5 - 분석 후 고객 통신비 상태를 나타냅니다. */
  }
  if (totalState === 0) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status0.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          요금 청구서를 기다리고 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {usePrice(totalCharge)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_16M
                style={{
                  color: '#FF3A3A',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
                <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
              </P_16M>
            </View>
          </View>
        </View>
      </>
    );
  }
  if (totalState === 1) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status1.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {totalCharge}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_16M
                style={{
                  color: '#FF3A3A',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
                <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
              </P_16M>
            </View>
          </View>
        </View>
      </>
    );
  }
  if (totalState === 2) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status2.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {usePrice(totalCharge)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            {/* <P_16M
              style={{
                color: '#FF3A3A',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Image
                style={{ width: 10, height: 10 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <View style={{ width: 4 }} />
              {usePrice(totalSavings)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M> */}
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_16M
                style={{
                  color: '#FF3A3A',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
                <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
              </P_16M>
            </View>
          </View>
        </View>
      </>
    );
  }
  if (totalState === 3) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status3.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {usePrice(totalCharge)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_16M
                style={{
                  color: '#FF3A3A',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
                <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
              </P_16M>
            </View>
          </View>
        </View>
      </>
    );
  }
  if (totalState === 4) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status4.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {usePrice(totalCharge)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_16M
                style={{
                  color: '#FF3A3A',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
                <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
              </P_16M>
            </View>
          </View>
        </View>
      </>
    );
  }
  if (totalState === 5) {
    return (
      <>
        <View style={styles.container}>
          <Image
            style={{ width: 63, height: 63 }}
            source={require('../../assets/diagnosis/status5.png')}
          />
        </View>
        <P_14R style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14R>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>
              통신비 ({familyCount}인)
            </P_12R>
            <P_16M style={{ textAlign: 'center' }}>
              {usePrice(totalCharge)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
          <View style={styles.saveChargeBox}>
            <P_12R style={{ textAlign: 'center' }}>절감 가능액 (월)</P_12R>
            <P_16M
              style={{
                color: '#FF3A3A',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Image
                style={{ width: 10, height: 10 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <View style={{ width: 4 }} />
              {usePrice(totalSavings)}{' '}
              <Text style={{ color: '#666666', fontSize: 12 }}>원</Text>
            </P_16M>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 16,
    backgroundColor: '#F6F9ff',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  familyChargeBox: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    paddingHorizontal: 26.5,
    paddingVertical: 10,
  },
  saveChargeBox: {
    paddingHorizontal: 26.5,
    paddingVertical: 10,
  },
  saveMonthChargeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
});
