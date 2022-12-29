import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import P_14M from '../../style/paragraph/P_14M';

const UserDiagnosisStatusSummaryBannerItem = ({imageURL,title,content}) => {
  return (
    <>
      <Image
        style={styles.statusImage}
        source={imageURL}
      />
      <View>
        <P_14M>{title}</P_14M>
        <P_14M style={{ color: '#2D63E2' }}>
          {content}
        </P_14M>
      </View>
    </>
  )
}

export default React.memo(UserDiagnosisStatusSummaryBannerItem);

const styles = StyleSheet.create({
  statusImage:{
    width:52,
    height:52,
    marginRight: 24
  },
})