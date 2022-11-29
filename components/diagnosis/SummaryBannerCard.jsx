import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import P_12R from '../../style/paragraph/P_12R';
import P_16M from '../../style/paragraph/P_16M';
import P_14M from '../../style/paragraph/P_14M';
import usePrice from '../../hooks/usePrice';
import P_22M from '../../style/paragraph/P_22M';

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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          요금 청구서를 기다리고 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
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
        <P_14M style={{ textAlign: 'center', paddingVertical: 4.5 }}>
          1년간 총{' '}
          <Text style={{ fontSize: 15, color: '#2d63e2' }}>
            {usePrice(annualSavings)} 원을 절약
          </Text>
          할 수 있어요!
        </P_14M>

        <View style={styles.summaryBox}>
          <View style={styles.familyChargeBox}>
            <P_14M>통신비 ({familyCount}인)</P_14M>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}
            >
              <P_22M>{usePrice(totalCharge)} </P_22M>
              <P_12R style={{ color: '#666666', bottom: 4 }}>원</P_12R>
            </View>
          </View>
          <View style={styles.saveChargeBox}>
            <P_14M>절감 가능액 (월)</P_14M>
            <View style={styles.saveMonthChargeBox}>
              <Image
                style={{ width: 10, height: 10, marginRight: 4, bottom: 2 }}
                source={require('../../assets/common/redreversetriangle.png')}
              />
              <P_22M
                style={{
                  color: '#FF3A3A',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {usePrice(totalSavings)}{' '}
              </P_22M>
              <P_12R
                style={{
                  color: '#666666',
                  top: 2,
                }}
              >
                원
              </P_12R>
            </View>
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
    marginTop: 16,
    backgroundColor: '#F6F9ff',
    borderRadius: 16,
    paddingVertical: 12,
  },
  familyChargeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    paddingVertical: 10,
    width: '50%',
  },
  saveChargeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '50%',
  },
  saveMonthChargeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
