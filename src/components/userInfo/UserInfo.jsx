import React, { useState, useEffect } from 'react';
import RoundPic from './RoundPic';
import * as S from '../style';
import championData from '../../../public/champion.json';

const UserInfo = ({ gameName, tagLine, puuid }) => {
  const [imageUrls, setImageUrls] = useState([]);

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
          <S.UserNickNameP>{/* 닉네임 추가할 수 있음 */}</S.UserNickNameP>
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
