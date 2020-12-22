# FYStock
코스닥, 코스피에 상장된 회사의 재무제표를 사용자의 설정에 따라 필터링한 결과를 제공한다.

## FYStock 사이트
링크: <https://www.fystock.ml/> // 현재는 서버를 닫아두었습니다.

## 프로젝트 구성 환경
    * client
    - react
    - redux
    - axios
    - @emotion.js

    * server
    Python v2.7
    - scrapy

    Nodejs v12.18.3
    - express
    - mongoose

    Mongo DB
    
    ## 빌드 방법

```bash
# client
cd client
yarn or npm install
yarn start or npm start

#server
cd server
node server
```

## 기능 및 사용법

1. 재무재표 조회  
   1.1. 특정 회사를 선택한다.  
   1.2. 특정 회사의 모든 정보를 조회한다.
2. 사용자 설정에 따른 필터링 목록 조회  
   2.1. 필터 항목, 수치, 이상/이하를 선택한다.  
   2.2. 정보가 없는 항목은 어떤 필터에도 성립한다.  
   2.3. 데이터의 조건이 모든 해에 만족하는 목록을 출력 한다.  

## License

MIT License
