import SendingBills from '../modalView/SendingBills';

const PAGES_ONCE = [
  {
    num: 1,
    titleTop: 'U+ 고객센터 앱 실행',
    titleBottom: '우측 하단의 U봇 아이콘 클릭',
    imageUrl: require('../../../assets/sendingBills/LG/billSendOnce_1.png'),
  },
  {
    num: 2,
    titleTop: '대화창에 ‘청구서’ 입력',
    titleBottom: '‘청구서 재발행 신청하기’ 선택',
    imageUrl: require('../../../assets/sendingBills/LG/billSendOnce_2.png'),
  },
  {
    num: 3,
    titleTop: '‘이메일 청구서’ 선택',
    titleBottom: '주소에 bill@tongdoc.co.kr 입력',
    imageUrl: require('../../../assets/sendingBills/LG/billSendOnce_3.png'),
  },

  {
    num: 4,
    lastInfoTop: {
      first: '요금 청구서를',
      second: '통신닥터 메일로 전송해주세요.',
    },
    lastInfoBottom: {
      first: '통닥 메일로 요금 청구서가 도착해야',
      second: '무료진단을 시작할 수 있습니다.',
    },
  },
];
const PAGES_MONTH = [
  {
    num: 1,
    titleTop: 'U+ 고객센터 앱 실행',
    titleBottom: '우측 하단의 U봇 아이콘 클릭',
    imageUrl: require('../../../assets/sendingBills/LG/billSendMonth_1.png'),
  },
  {
    num: 2,
    titleTop: '대화창에 ‘청구서’ 입력',
    titleBottom: '‘현재 청구서 받는 방법 확인 및 변경’ 선택',
    imageUrl: require('../../../assets/sendingBills/LG/billSendMonth_2.png'),
  },
  {
    num: 3,
    titleTop: '‘청구서 받는 방법 변경하기’ 선택',
    imageUrl: require('../../../assets/sendingBills/LG/billSendMonth_3.png'),
  },
  {
    num: 4,
    titleTop: '‘이메일’ 선택',
    titleBottom: '주소에 bill@tongdoc.co.kr 입력',
    imageUrl: require('../../../assets/sendingBills/LG/billSendMonth_4.png'),
  },
  {
    num: 5,
    lastInfoTop: {
      first: '요금 청구서를',
      second: '통신닥터 메일로 전송해주세요.',
    },
    lastInfoBottom: {
      first: '통닥 메일로 요금 청구서가 도착해야',
      second: '무료진단을 시작할 수 있습니다.',
    },
  },
];

const SendingBillsLG = ({ isVisible, modalHandler }) => {
  return (
    <SendingBills
      isVisible={isVisible}
      modalHandler={modalHandler}
      PAGES_ONCE={PAGES_ONCE}
      PAGES_MONTH={PAGES_MONTH}
    />
  );
};

export default SendingBillsLG;
