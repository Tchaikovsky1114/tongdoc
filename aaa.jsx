import React, { useEffect, useState } from 'react'
import goodsJSON from './goods.json'
import membersJSON from './members.json'


// - 제공된 goods.json, member.json 사용
// - 중복 없이 한사람이 한번만 당첨
// - 사회자가 순서별로 상품을 노출하고 추첨할 상품을 관객에게 공유
// - 관객에게 노출된 상품을 '추첨 버튼'을 조작하여 추첨 진행
// array[Math.round(Math.random() * array.length)]로 당첨자 출력
// 당첨자 출력 후 membersList에
// - 추첨이 완료 되면 당첨자를 화면에 노출
// - 관객이 당첨자를 인지 하였다면 사회자가 다음 상품으로 넘김




export default function aaa() {
  const [winnerList,setWinnerList] = useState([]);
  const [membersList,setMembersList] = useState(goodsJSON);
  const [goodsList,setGoodsList] = useState(membersJSON);
  const [remainGoodsList,setRemainGoodsList] = useState([]);

// flow 1. 연말 분위기나는 배경에 모달이 출력되어 있음.
// 모달에 행사 시작 버튼 클릭 시 행사 진행
// 상품은 goods의 id 순서대로 나와있음.

const storeWinner = () => {
  const winner =
    {
      name:string,
      image:string,
      company:string,
      productname:string,
      productimage:string,
      description:string
    }
  localStorage.setItem('winner',JSON.stringify(winner));
  setWinnerList((prev) => [...prev,winner] )
}

useEffect(() => {
  // localstorage에 등록된 당첨자의 아이디를 필터링하여 다시 진행
  // 비상 상황에 대비할 수 있게 함(갑자기 종료되는 상황 대비)
  const winners = localStorage.getItem('winner');
  if(!winners) return;
},[])


  return (
    <div></div>
  )
}
