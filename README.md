# 통신닥터- 어플리케이션

## IOS Build 방법

### 1. EAS 설치 및 배포 환경 준비

#### 1) npm install -g eas-cli로 eas를 설치

#### 2) eas login을 통해

※ 전용 아이디 비밀번호 있음

#### 3) eas build:configure

참고 : https://docs.expo.dev/build/setup/

### 2. Run a build

#### 1) app.json에서 expo.version과 ios.buildNumber 변경

※ 에러 수정 같은 큰 변화가 없을 경우 1.0.0 -> 1.0.1
※ 어느정도 변경이 된 경우 1.0.0 -> 1.1.0
※ 리뉴얼 같이 큰 변화가 있을 경우 1.0.0 -> 2.0.0

#### 2) eas build --platform ios

※ 애플 개발자 로그인 필요(소유자 계정)
※ ios에서 필요한 인증서는 eas에서 관리함
※ 만약에 인증서가 모두 만료 되었거나 에러가 발생한 경우
가. expo-credentials-ios 삭제
나. developer.apple.com - 계정 - Certificates, Identifiers & Profiles - 인증서(영문) - Certificates - Profiles - Keys(Expo Push Notifications Key) 삭제
다. https://appstoreconnect.apple.com/access/api 에서 활성화된 app store Connect API 전부 삭제 후 재생성
라. expo-credentials-ios Bundle Identifier 생성 후 하단 App Store Connect API Key 작성
※ Issuer ID, Key ID는 다.에서 확인 가능
※ 이후 다시 eas build --platform ios 진행해서 expo가 인증서 관리하도록 모두 yes로 진행

#### 3) eas submit -p ios

※ 방금 빌드한 버전 제출
※ 완료 후 애플 개발자 - testFlight에서 확인
