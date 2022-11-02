import {useEffect,useState,useCallback} from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const useLoadFonts = () => {
  const [appIsReady,setAppIsReady] = useState(false)

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Noto900':require('../assets/fonts/NotoSansKR-Black.otf'),
          'Noto700':require('../assets/fonts/NotoSansKR-Bold.otf'),
          'Noto500':require('../assets/fonts/NotoSansKR-Medium.otf'),
          'Noto400':require('../assets/fonts/NotoSansKR-Regular.otf'),
          'Noto300':require('../assets/fonts/NotoSansKR-Thin.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  
},[])


  return {onLayoutRootView,appIsReady}
};

export default useLoadFonts;