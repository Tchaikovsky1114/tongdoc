import { Pressable, StyleSheet, Text, View } from 'react-native';

const HandlerBtn = ({ borderStyle, textStyle, children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.border, { ...borderStyle }]}>
        <Text style={[styles.text, { ...textStyle }]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default HandlerBtn;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Noto500',
    fontSize: 12,
    includeFontPadding: false,
    textAlign: 'center',
  },
  border: {
    width: 59,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
});
