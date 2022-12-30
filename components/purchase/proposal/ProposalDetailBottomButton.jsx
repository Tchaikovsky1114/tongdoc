import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import P_16R from '../../../style/paragraph/P_16R'

const ProposalDetailBottomButton = ({style,pressedBackgroundColor,defaultBackgroundColor,text,textColor}) => {
  return (
    <Pressable style={({pressed}) => [styles.commonButton,style,{backgroundColor: pressed ? pressedBackgroundColor : defaultBackgroundColor}]}>
      <P_16R style={textColor}>{text}</P_16R>
    </Pressable>
  )
}

export default React.memo(ProposalDetailBottomButton);

const styles = StyleSheet.create({
  commonButton:{
    alignItems:'center',
    justifyContent:'center',
    height:50
  }
})