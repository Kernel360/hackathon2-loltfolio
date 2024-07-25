import React, { useState, useEffect } from 'react';
import RoundPic from './RoundPic';
import * as S from '../style';
import championData from '../../../public/champion.json';
import { getUserStatus } from '../../utils';
import * as P from '../../constants/phrases';
import axios from 'axios';



const UserInfo = ({ gameName, tagLine, puuid ,matchInfoList}) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [nickname, setNickname] = useState(''); // 이름 상태 관리

  console.log('UserInfo: in');
  console.log(matchInfoList);

  useEffect(() => {
    const getKDAstats = (matchInfoList) => {
      // 총합 변수 초기화
      let TOTAL_kills = 0;
      let TOTAL_deaths = 0;
      let TOTAL_assists = 0;

      // matchInfoList가 배열인지 확인하고, 배열인 경우만 forEach 실행
      if (Array.isArray(matchInfoList)) {
        matchInfoList.forEach((matchInfo) => {
          const { status } = getUserStatus(matchInfo, puuid);
          TOTAL_kills =+ status.kills;
          TOTAL_deaths =+ status.deaths;
          TOTAL_assists =+ status.assists;
        });

        // KDA 계산 후 nickname 반환
        const getRoleNickname = (kills, deaths, assists) => {
          if (deaths < assists && assists < kills) {
            return '원거리 딜러';
          } else if (assists < deaths && deaths < kills) {
            return '암살자';
          } else if (deaths < kills && kills < assists) {
            return '전사';
          } else if (kills < deaths && deaths < assists) {
            return '탱커';
          } else if (assists < kills && kills < deaths) {
            return '마법사';
          } else if (kills < assists && assists < deaths) {
            return '서포터';
          } else {
            return '해당 없음';
          }
        };

        const roleNickname = getRoleNickname(TOTAL_kills, TOTAL_deaths, TOTAL_assists);
        setNickname(roleNickname);
      }
    };

    getKDAstats(matchInfoList);
  }, []);


  return (
    <S.Flex $width="100%" $justify="space-between">
      <div>
        <S.Flex>
          <div>
            <S.UserNameP>{gameName}</S.UserNameP>
          </div>
          <div>
            <S.UserTagP>{tagLine}</S.UserTagP>
          </div>
        </S.Flex>
        <div>
          <S.UserNickNameP>{nickname}</S.UserNickNameP>
        </div>
      </div>
      <S.Flex $width="500px" $justify="space-evenly">
        {imageUrls.map(
          (url, index) => url && <RoundPic key={index} picSrc={url} />
        )}
      </S.Flex>
    </S.Flex>
  );
};

export default UserInfo;