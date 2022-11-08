import { StyleSheet, Text, TextInput } from 'react-native'
import React,{useRef,useState,useEffect,forwardRef} from 'react'

const SignupInput = forwardRef(({type,style,value,clearButtonMode,autoCapitalize,placeholder,keyboardType,onChange,errorText,clearTextOnFocus,secureTextEntry,maxLength},ref) => {

  const [isError,setIsError] = useState(false)
  const [startValidation,setStartValidation] = useState(false)
  


  const startValidationHandler = () => { 
    setStartValidation(true)
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  useEffect(() => {
    if(!ref) return;
    const timer = setTimeout(() => {ref.current.focus()},100)  
    return () => clearTimeout(timer)
    },[])

    
  useEffect(() => {
    if(type ==='email'){
      if(!isValidEmail(value)){
        setIsError(true)
      }else{
        setIsError(false)
      }
    }
  },[value])

  return (
    <>
    <TextInput style={[styles.input,style]} ref={ref ? ref : null} value={value} clearButtonMode={clearButtonMode ? clearButtonMode : 'never'} maxLength={maxLength ? maxLength : 30 } secureTextEntry={secureTextEntry ? secureTextEntry : false} clearTextOnFocus={clearTextOnFocus ? true : false} autoCapitalize={autoCapitalize} placeholder={placeholder} cursorColor={(isError && startValidation) ? 'red' : '#2D63E2'} keyboardType={keyboardType} onChange={onChange} onBlur={startValidationHandler}  />
      {(isError && startValidation) && <Text style={[styles.errorText,{color:isError ? 'red' : '#2D63E2'}]}>{errorText}</Text>}
    </>
  )
})
export default SignupInput;

const styles = StyleSheet.create({
  errorText:{
    marginTop:-30,
    fontFamily:'Noto400',
    fontSize:12,
    marginBottom:8
  },
  input:{
    fontFamily:'Noto400',
    fontSize:14,
    borderBottom:1,
    borderBottomWidth:1,
    height:30,
    borderColor: '#ddd',
    marginBottom:24,
    color:'#666',
    includeFontPadding:false
  },
})