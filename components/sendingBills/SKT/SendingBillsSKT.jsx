import SendingBills from '../modalView/SendingBills';

const PAGES_ONCE = [
  {
    num: 1,
    titleTop: '좌측 상단 메뉴 클릭',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_1.png'),
  },
  {
    num: 2,
    titleTop: '‘정보변경’ 클릭',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_2.png'),
  },
  {
    num: 3,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_3.png'),
  },
  {
    num: 4,
    titleTop: '이메일 청구서 변경 완료',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_4.png'),
  },
  {
    num: 5,
    titleTop: '하단의 ‘재발행’ 선택',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_5.png'),
  },
  {
    num: 6,
    titleTop: '최근 월 선택',
    titleBottom: '‘신청하기’ 클릭',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_6.png'),
  },
  {
    num: 7,
    titleTop: '이메일 청구서 재발행 완료',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendOnce_7.png'),
  },
  {
    num: 8,
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
    titleTop: '좌측 상단 메뉴 클릭',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_1.png'),
  },
  {
    num: 2,
    titleTop: '‘나의 요금’ 선택',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_2.png'),
  },
  {
    num: 3,
    titleTop: '‘요금안내서 설정’ 선택',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_3.png'),
  },
  {
    num: 4,
    titleTop: '다른 요금안내서로 받기 → 유형 이메일로',
    titleBottom: '(현재 이메일로 받고 있는 경우)',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_4.png'),
  },
  {
    num: 5,
    titleTop: '통닥 요금분석 메일주소 입력',
    titleBottom: '(bill@tongdoc.co.kr)',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_5.png'),
  },
  {
    num: 6,
    titleTop: '이메일 청구서 변경 완료',
    imageUrl: require('../../../assets/sendingBills/SKT/billSendMonth_6.png'),
  },
  {
    num: 7,
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

const SendingBillsSKT = () => {
  return <SendingBills PAGES_ONCE={PAGES_ONCE} PAGES_MONTH={PAGES_MONTH} />;
};

export default SendingBillsSKT;
