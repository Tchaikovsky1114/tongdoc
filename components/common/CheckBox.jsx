import { StyleSheet, Image,View,Pressable } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'


export default function CheckBox({type,style,onPress,totalCheck,setTotalCheck}) {
  const [isSelected,setIsSelected] = useState(false)

  const toggleCheckBoxHandler = () => {
    if(totalCheck){
      setTotalCheck(false);
      setIsSelected(prev => !prev)
      return;
    }
    setIsSelected(prev => !prev)
    
    }

  useEffect(() => {
    setIsSelected(totalCheck);
    console.log(isSelected);
  },[totalCheck])
  


  
  if(type === 'full')
  return ( 
    <View style={style}>
      {totalCheck
      ? <View><Pressable onPress={onPress}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_checked.png')} /></View></Pressable></View>
      : <View><Pressable onPress={onPress}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_noncheck.png')} /></View></Pressable></View>
      }
    </View>
  )
  if(type ==='non-outline'){
    return ( 
      <View style={style}>
        {isSelected
        ? <View><Pressable onPress={toggleCheckBoxHandler}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_checked_nonoutline.png')} /></View></Pressable></View>
        : <View><Pressable onPress={toggleCheckBoxHandler}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_noncheck_nonoutline.png')} /></View></Pressable></View>
        }
      </View>
    )
  }
  if(type ==='outline'){
    return ( 
      <View style={style}>
        {isSelected
        ? <View><Pressable onPress={toggleCheckBoxHandler}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_checked_outline.png')} /></View></Pressable></View>
        : <View><Pressable onPress={toggleCheckBoxHandler}><View><Image style={styles.image} source={require('../../assets/common/tongdoc_noncheck_outline.png')} /></View></Pressable></View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width:26,
    height:26
  }
})