import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_14M from '../../../style/paragraph/P_14M'
import P_12M from '../../../style/paragraph/P_12M'

const ProposalOrderCardTextLine = ({title,content,titleStyle,contentStyle,cardStyle,fontSize}) => {
  return (
    <View style={[{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},cardStyle ? cardStyle : {marginTop:5}]}>
      {!fontSize && (
        <>
      <P_12M style={titleStyle ? titleStyle : {color:'#666'}}>{title}</P_12M>
      <P_12M style={contentStyle}>{content}</P_12M>
      </>
      )}
      {fontSize === 14 && (
        <>
      <P_14M style={titleStyle ? titleStyle : {color:'#666'}}>{title}</P_14M>
      <P_14M style={contentStyle}>{content}</P_14M>
      </>
      )}
      </View>
  )
}

export default React.memo(ProposalOrderCardTextLine);
