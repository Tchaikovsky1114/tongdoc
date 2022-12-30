import { View } from 'react-native'
import React from 'react'
import H4_24R from '../../../style/H4_24R'
import P_14R from '../../../style/paragraph/P_14R'

const AddCommonHeader = ({title,headerStyle}) => {
  return (
    <>
    <H4_24R style={headerStyle ? headerStyle :{ marginTop: 40 }}>{title}</H4_24R>
    <View style={{ marginTop: 16 }}>
      <P_14R style={{ color: '#666' }}>
        가족 등록은 함께 거주하지 않더라도 가능합니다. (배우자, 부모, 자녀, 형제자매, 며느리, 사위 등)
      </P_14R>
    </View>
    </>
  )
}

export default React.memo(AddCommonHeader);
