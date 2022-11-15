import SendingBills from '../modalView/SendingBills';

const PAGES_ONCE = [
  {
    num: 1,
    titleTop: '마이케이티 앱 실행',
    titleBottom: '검색창에 ‘요금명세서 재발송’ 입력',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_1.png'),
  },
  {
    num: 2,
    titleTop: '케이톡 대화창에 ‘요금명세서 재발송’ 선택',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_2.png'),
  },
  {
    num: 3,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_3.png'),
  },
  {
    num: 4,
    titleTop: '최근 청구월 선택 후 우측 ‘재발송’ 클릭',
    imageUrl: require('../../../assets/sendingBills/KT/billSendOnce_4.png'),
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
const PAGES_MONTH = [
  {
    num: 1,
    titleTop: '마이케이티 앱 실행',
    titleBottom: '검색창에 ‘명세서 유형변경’ 입력',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_1.png'),
  },
  {
    num: 2,
    titleTop: '‘이메일 명세서(무료)’ 선택',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_2.png'),
  },
  {
    num: 3,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_3.png'),
  },
  {
    num: 4,
    titleTop: '‘예’ 클릭 시',
    titleBottom: '이메일 요금 청구서 변경 완료!',
    imageUrl: require('../../../assets/sendingBills/KT/billSendMonth_4.png'),
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

const SendingBillsKT = () => {
  return <SendingBills PAGES_ONCE={PAGES_ONCE} PAGES_MONTH={PAGES_MONTH} />;
};

export default SendingBillsKT;
