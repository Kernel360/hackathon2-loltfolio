// 내 스탯을 가져오는 함수.
const getUserStatus = (matchInfo, userPuuid) => {
  let myStatusIndex = -1;
  const puuidList = matchInfo.metadata.participants;

  puuidList.forEach((puuid, index) => {
    if (puuid === userPuuid) {
      myStatusIndex = index;
    }
  });

  const status = matchInfo.info.participants[myStatusIndex];
  const teamId = status.teamId;

  return { teamId, status };
};

// 내 팀의 정보를 반환하는 함수.
const getUserTeamStatus = (matchInfo, teamId) => {
  const teamStatusList = [];
  const participantList = matchInfo.info.participants;

  participantList.forEach(participant => {
    if (participant.teamId === teamId) {
      teamStatusList.push(participant);
    }
  });

  return { teamStatusList };
};

export { getUserStatus, getUserTeamStatus };
