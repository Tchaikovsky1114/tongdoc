import { View, Text } from 'react-native'
import React from 'react'
import P_16M from '../../style/paragraph/P_16M'

const PurchaseHeadingBox = ({text}) => {
  return <P_16M style={{marginBottom:16}}>{text}</P_16M>
}

export default React.memo(PurchaseHeadingBox);