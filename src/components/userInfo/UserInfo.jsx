import { useState, useEffect } from 'react';
import RoundPic from './RoundPic';
import * as S from '../style';
import championData from '../../../public/champion.json';
import { getCardInfoList, getUserStatus } from '../../utils';
//import * as P from '../../constants/phrases';

const UserInfo = ({ gameName, tagLine, puuid, matchInfoList }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [nickname, setNickname] = useState(''); // 이름 상태 관리
  const [mostChampionId, setMostChampionId] = useState(null);
  const [championName, setChampionName] = useState(null);
  const [modifier, setModifire] = useState(null);

  useEffect(() => {
    const fetchChampionData = async () => {
      const url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=3&api_key=${import.meta.env.VITE_RIOT_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const championIdsArr = data.map(i => i.championId);
        setMostChampionId(championIdsArr[0]);

        const championArray = Object.values(championData.data);
        const urls = championIdsArr.map(championId => {
          const champion = championArray.find(
            champion => champion.key == championId,
          );
          if (champion) {
            return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
          }
          return null;
        });

        setImageUrls(urls);
      } catch (error) {
        console.error('Failed to fetch champion data:', error);
      }
    };

    fetchChampionData();
  }, [puuid]);

  useEffect(() => {
    const getKDAstats = matchInfoList => {
      // 총합 변수 초기화
      let TOTAL_kills = 0;
      let TOTAL_deaths = 0;
      let TOTAL_assists = 0;

      // matchInfoList가 배열인지 확인하고, 배열인 경우만 forEach 실행
      if (Array.isArray(matchInfoList)) {
        matchInfoList.forEach(matchInfo => {
          const { status } = getUserStatus(matchInfo, puuid);
          TOTAL_kills = +status.kills;
          TOTAL_deaths = +status.deaths;
          TOTAL_assists = +status.assists;
        });

        // KDA 계산 후 nickname 반환
        const getRoleNickname = (kills, deaths, assists) => {
          if (deaths <= assists && assists <= kills) {
            return '원거리 딜러';
          } else if (assists <= deaths && deaths <= kills) {
            return '암살자';
          } else if (deaths <= kills && kills <= assists) {
            return '전사';
          } else if (kills <= deaths && deaths <= assists) {
            return '탱커';
          } else if (assists <= kills && kills <= deaths) {
            return '마법사';
          } else if (kills <= assists && assists <= deaths) {
            return '서포터';
          } else {
            return '해당 없음';
          }
        };

        const roleNickname = getRoleNickname(
          TOTAL_kills,
          TOTAL_deaths,
          TOTAL_assists,
        );
        setNickname(roleNickname);
      }
    };

    const cardInfoList = getCardInfoList(matchInfoList, puuid);
    console.log(cardInfoList);
    const length = cardInfoList.length;

    const getRandomInt = max => {
      return Math.floor(Math.random() * max);
    };

    const randomIndex = getRandomInt(length);
    console.log(randomIndex);
    const { cardName } = cardInfoList[randomIndex];
    setModifire(cardName);

    getKDAstats(matchInfoList);
  }, []);

  useEffect(() => {
    if (!mostChampionId) {
      return;
    }

    const championObj = Object.values(championData.data);

    for (const championInfo of championObj) {
      //console.log(championInfo.key);
      if (Number(championInfo.key) === mostChampionId) {
        const { name } = championInfo;
        console.log(name);
        setChampionName(name);
      }
    }
  }, [mostChampionId]);

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
          <S.UserNickNameP>
            {modifier} {nickname} {championName}
          </S.UserNickNameP>
        </div>
      </div>
      <S.Flex $width="500px" $justify="space-evenly">
        {imageUrls.map(
          (url, index) => url && <RoundPic key={index} picSrc={url} />,
        )}
      </S.Flex>
    </S.Flex>
  );
};

export default UserInfo;
