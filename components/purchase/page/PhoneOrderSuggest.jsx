import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
import {
  SUGGEST_CHANGE_TELECOM,
  SUGGEST_ONE_MORE_PHONE,
  SUGGEST_WITH_INTERNET,
} from '../constants/Constants';
import PurchaseSuggestBox from '../purchaseCommon/PurchaseSuggestBox';
import PurchaseSuggestCheck from '../purchaseCommon/PurchaseSuggestCheck';

const PhoneOrderSuggest = ({ route }) => {
  const { params } = route;

  const [url, setUrl] = useState('');

  // 웹뷰로 진행시 필요 없는 항목
  // [---start---]
  // const [showTopInfo, setShowTopInfo] = useState(true);
  // const [selectOption, setSelectOption] = useState({
  //   withInternet: '',
  //   changeTelecom: '',
  //   oneMorePhone: '',
  // });
  // const changeOption = (num, option) => {
  //   setSelectOption({
  //     ...selectOption,
  //     [option]: num,
  //   });
  // };
  // const changeOneMorePhone = (num, option) => {
  //   if (selectOption.oneMorePhone !== '') {
  //     setSelectOption({
  //       ...selectOption,
  //       oneMorePhone: '',
  //     });
  //   } else {
  //     setSelectOption({
  //       ...selectOption,
  //       [option]: num,
  //     });
  //   }
  // };

  // const hideTopInfoHandler = () => {
  //   setShowTopInfo(false);
  // };
  // [---end---]

  useEffect(() => {
    if (params.gubun === 0) {
      setUrl(
        `https://api.tongdoc.co.kr/web/buy/recommend?buyer_id=${params.id}&buyer_type=family&choice_spec=${params.spec}&choice_com=${params.company}`
      );
    } else {
      setUrl(
        `https://api.tongdoc.co.kr/web/buy/recommend?buyer_id=${params.id}&buyer_type=family&phone_id=${params.phoneId}`
      );
    }
  }, []);

  return (
    <>
      {url ? (
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              uri: url,
              headers: {
                Authorization: `Bearer ${params.token}`,
              },
            }}
            originWhitelist={[
              'https://*',
              'http://*',
              'file://*',
              'sms://*',
              'intent://*',
            ]}
            style={{ flex: 1 }}
          />
        </View>
      ) : // <ScrollView style={{ flex: 1 }}>
      //   <View style={styles.container}>
      //     {showTopInfo && (
      //       <View style={styles.topInfoBox}>
      //         <View style={styles.topInfoTitleBox}>
      //           <P_14M>최적 구매 조건 제시 기준</P_14M>
      //           <Pressable onPress={hideTopInfoHandler}>
      //             <Image
      //               style={styles.closeImage}
      //               source={require('../../../assets/common/grayclose.png')}
      //             />
      //           </Pressable>
      //         </View>
      //         <View style={{ paddingLeft: 3 }}>
      //           <P_12M style={{ color: '#666666' }}>
      //             1. 요금제 추천 (불필요한 고가 요금제 가입 방지)
      //           </P_12M>
      //           <P_12M style={{ color: '#666666' }}>
      //             2. 통신사, 인터넷 가입 추천 (가계통신비 최대 절감 방법)
      //           </P_12M>
      //           <P_12M style={{ color: '#666666' }}>
      //             3. 공시지원금, 선택약정 등 사용 패턴에 유리한 조건 추천
      //           </P_12M>
      //         </View>
      //       </View>
      //     )}

      //     <PurchaseSuggestBox
      //       titleNumber={1}
      //       suggestTitle={'인터넷도 함께 가입하기를 추천합니다.'}
      //       userStatusTitle={'유무선 결합 현황'}
      //       userStatusContents={'인터넷(SKT)과 결합 할인중'}
      //       recommendTip={
      //         '기존 가입하신 인터넷 약정 만료가 얼마 남지 않았어요. 새 인터넷 가입과 함께 휴대폰을 구매하시면 수십만 원 상당의 추가 오퍼를 받으실 수 있어요!'
      //       }
      //       style={{ marginBottom: 24 }}
      //     />
      //     <View style={{ marginBottom: 24 }}>
      //       {SUGGEST_WITH_INTERNET.map((item) => (
      //         <PurchaseSuggestCheck
      //           key={item.id}
      //           item={item}
      //           option={'withInternet'}
      //           selected={selectOption.withInternet}
      //           checkHandler={changeOption}
      //         />
      //       ))}
      //     </View>
      //     <PurchaseSuggestBox
      //       titleNumber={2}
      //       suggestTitle={'LG U+로 통신사 변경을 추천합니다.'}
      //       userStatusTitle={'이용 통신사 현황'}
      //       userStatusContents={'KT'}
      //       recommendTip={
      //         '통신사 변경 시 가계 통신비가 훨씬 절감되고, 휴대폰 구매 시 추가 오퍼를 더 받으실 수 있어요!'
      //       }
      //       style={{ marginBottom: 24 }}
      //     />
      //     <View style={{ marginBottom: 24 }}>
      //       {SUGGEST_CHANGE_TELECOM.map((item) => (
      //         <PurchaseSuggestCheck
      //           key={item.id}
      //           item={item}
      //           option={'changeTelecom'}
      //           selected={selectOption.changeTelecom}
      //           checkHandler={changeOption}
      //         />
      //       ))}
      //       {SUGGEST_ONE_MORE_PHONE.map((item) => (
      //         <PurchaseSuggestCheck
      //           key={item.id}
      //           item={item}
      //           option={'oneMorePhone'}
      //           selected={selectOption.oneMorePhone}
      //           checkHandler={changeOneMorePhone}
      //         />
      //       ))}
      //     </View>
      //     <PurchaseSuggestBox
      //       titleNumber={3}
      //       suggestTitle={'***요금제(월 ***원)를 추천합니다.'}
      //       userStatusTitle={'이용 요금제 현황'}
      //       userStatusContents={'***요금제 (월 55,000원)'}
      //       recommendTip={`고객님의 최근 3개월 데이터 사용량 등을 분석한 최적의 요금제입니다.${'\n'}※ 주의 : 매장 구매 시 고가 요금제를 가입해야 휴대폰을 싸게 구입할 수 있다고 권유하는 경우가 많습니다.`}
      //       style={{ marginBottom: 40 }}
      //     />
      //   </View>
      //   <View style={styles.selectLocation}>
      //     <View style={styles.locationImgBox}>
      //       <Image
      //         style={styles.locationImg}
      //         source={require('../../../assets/purchase/purchaseLocation.png')}
      //       />
      //     </View>
      //     <View style={styles.locationSelectTitleBox}>
      //       <P_16M style={{ marginBottom: 8 }}>
      //         제안받을 매장 위치를 선택해 주세요.
      //       </P_16M>
      //       <P_12R style={{ color: '#666666' }}>
      //         지역은 최대 2개까지 설정이 가능합니다.
      //       </P_12R>
      //     </View>
      //   </View>
      // </ScrollView>
      null}
    </>
  );
};

export default PhoneOrderSuggest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: '#ffffff',
  },
  topInfoBox: {
    borderRadius: 16,
    backgroundColor: '#F6F9FF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
  },
  topInfoTitleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  closeImage: {
    width: 16,
    height: 16,
  },
  selectLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  locationImgBox: {
    marginBottom: 8,
  },
  locationImg: {
    width: 30,
    height: 30,
  },
  locationSelectTitleBox: {
    alignItems: 'center',
    marginBottom: 24,
  },
});
