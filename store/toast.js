import { atom } from "recoil";


  // 토스트 목록에서 삭제할 때 식별할 id
  // id: string;
  // type: 'success' | 'warning' | 'failed' | 'complete'
  // 화면에 보여줄 메세지
  // message: string
  // 토스트의 위치
  // position: 'bottom' | 'top'
  // 보여 주는 시간
  // timer: number


export const toastState = atom({
  key: 'toastState',
  default: []
})