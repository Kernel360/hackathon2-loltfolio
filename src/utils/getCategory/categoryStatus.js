import { CHARACTER_CATEGORY } from './characterCategory';
import { getUserStatus, getUserTeamStatus } from '../getStatus';

const createCategoryStat = ({
  assists = '',
  damageDealtToBuildings = '',
  damageSelfMitigated = '',
  detectorWardsPlaced = '',
  goldEarned = '',
  longestTimeSpentLiving = '',
  neutralMinionsKilled = '', // 애도 함으로 나누면 안됨.
  objectivesStolen = '', // 애도 함으로 나누면 안됨.
  timeCCingOthers = '',
  totalAllyJungleMinionsKilled = '',
  totalDamageDealtToChampions = '',
  totalDamageTaken = '',
  totalEnemyJungleMinionsKilled = '',
  totalHeal = '',
  totalTimeSpentDead = '',
  challenges: {
    bountyGold = '', // 더 깊게
    killingSprees = '', // 더 깊게 연속 킬수라 합으로 나누면 안됨. boolean
  },
}) => {
  return {
    assists,
    damageDealtToBuildings,
    damageSelfMitigated,
    detectorWardsPlaced,
    goldEarned,
    longestTimeSpentLiving,
    neutralMinionsKilled,
    objectivesStolen,
    timeCCingOthers,
    totalAllyJungleMinionsKilled, // 합이 0일수도 있음.
    totalDamageDealtToChampions,
    totalDamageTaken,
    totalEnemyJungleMinionsKilled,
    totalHeal,
    totalTimeSpentDead,
    bountyGold,
    killingSprees,
  };
};

const addCategoryStatus = (obj1 = {}, obj2 = {}) => {
  return {
    assists: (obj1.assists || 0) + (obj2.assists || 0),
    damageDealtToBuildings:
      (obj1.damageDealtToBuildings || 0) + (obj2.damageDealtToBuildings || 0),
    damageSelfMitigated:
      (obj1.damageSelfMitigated || 0) + (obj2.damageSelfMitigated || 0),
    detectorWardsPlaced:
      (obj1.detectorWardsPlaced || 0) + (obj2.detectorWardsPlaced || 0),
    goldEarned: (obj1.goldEarned || 0) + (obj2.goldEarned || 0),
    longestTimeSpentLiving:
      (obj1.longestTimeSpentLiving || 0) + (obj2.longestTimeSpentLiving || 0),
    neutralMinionsKilled:
      (obj1.neutralMinionsKilled || 0) + (obj2.neutralMinionsKilled || 0),
    objectivesStolen:
      (obj1.objectivesStolen || 0) + (obj2.objectivesStolen || 0),
    timeCCingOthers: (obj1.timeCCingOthers || 0) + (obj2.timeCCingOthers || 0),
    totalAllyJungleMinionsKilled:
      (obj1.totalAllyJungleMinionsKilled || 0) +
      (obj2.totalAllyJungleMinionsKilled || 0),
    totalDamageDealtToChampions:
      (obj1.totalDamageDealtToChampions || 0) +
      (obj2.totalDamageDealtToChampions || 0),
    totalDamageTaken:
      (obj1.totalDamageTaken || 0) + (obj2.totalDamageTaken || 0),
    totalEnemyJungleMinionsKilled:
      (obj1.totalEnemyJungleMinionsKilled || 0) +
      (obj2.totalEnemyJungleMinionsKilled || 0),
    totalHeal: (obj1.totalHeal || 0) + (obj2.totalHeal || 0),
    totalTimeSpentDead:
      (obj1.totalTimeSpentDead || 0) + (obj2.totalTimeSpentDead || 0),
    bountyGold: (obj1.bountyGold || 0) + (obj2.bountyGold || 0),
    killingSprees: (obj1.killingSprees || 0) + (obj2.killingSprees || 0),
  };
};

const divideCategoryStatus = (obj1 = {}, obj2 = {}) => {
  const divide = (a, b) => (b ? a / b : a);

  return {
    assists: divide(obj1.assists || 0, obj2.assists || 1),
    damageDealtToBuildings: divide(
      obj1.damageDealtToBuildings || 0,
      obj2.damageDealtToBuildings || 1,
    ),
    damageSelfMitigated: divide(
      obj1.damageSelfMitigated || 0,
      obj2.damageSelfMitigated || 1,
    ),
    detectorWardsPlaced: divide(
      obj1.detectorWardsPlaced || 0,
      obj2.detectorWardsPlaced || 1,
    ),
    goldEarned: divide(obj1.goldEarned || 0, obj2.goldEarned || 1),
    longestTimeSpentLiving: divide(
      obj1.longestTimeSpentLiving || 0,
      obj2.longestTimeSpentLiving || 1,
    ),
    neutralMinionsKilled: divide(
      obj1.neutralMinionsKilled || 0,
      obj2.neutralMinionsKilled || 1,
    ),
    objectivesStolen: divide(
      obj1.objectivesStolen || 0,
      obj2.objectivesStolen || 1,
    ),
    timeCCingOthers: divide(
      obj1.timeCCingOthers || 0,
      obj2.timeCCingOthers || 1,
    ),
    totalAllyJungleMinionsKilled: divide(
      obj1.totalAllyJungleMinionsKilled || 0,
      obj2.totalAllyJungleMinionsKilled || 1,
    ),
    totalDamageDealtToChampions: divide(
      obj1.totalDamageDealtToChampions || 0,
      obj2.totalDamageDealtToChampions || 1,
    ),
    totalDamageTaken: divide(
      obj1.totalDamageTaken || 0,
      obj2.totalDamageTaken || 1,
    ),
    totalEnemyJungleMinionsKilled: divide(
      obj1.totalEnemyJungleMinionsKilled || 0,
      obj2.totalEnemyJungleMinionsKilled || 1,
    ),
    totalHeal: divide(obj1.totalHeal || 0, obj2.totalHeal || 1),
    totalTimeSpentDead: divide(
      obj1.totalTimeSpentDead || 0,
      obj2.totalTimeSpentDead || 1,
    ),
    bountyGold: divide(obj1.bountyGold || 0, obj2.bountyGold || 1),
    killingSprees: divide(obj1.killingSprees || 0, obj2.killingSprees || 1),
  };
};

const findMaxStatAndCategory = (stats, categories) => {
  let maxStat = -Infinity;
  let maxStatKey = '';

  for (const [key, value] of Object.entries(stats)) {
    if (value > maxStat) {
      maxStat = value;
      maxStatKey = key;
    }
  }

  const category = categories.find(category => {
    const categoryMap = {
      assists: 1,
      bountyGold: 2,
      damageDealtToBuildings: 3,
      damageSelfMitigated: 4,
      detectorWardsPlaced: 5,
      goldEarned: 6,
      killingSprees: 7,
      longestTimeSpentLiving: 8,
      neutralMinionsKilled: 9,
      objectivesStolen: 10,
      timeCCingOthers: 11,
      totalAllyJungleMinionsKilled: 12,
      totalDamageDealtToChampions: 13,
      totalDamageTaken: 14,
      totalEnemyJungleMinionsKilled: 15,
      totalHeal: 16,
      totalTimeSpentDead: 17,
    };

    return category.id === categoryMap[maxStatKey];
  });

  return category;
};

const getRatioStatus = (matchInfo, puuid) => {
  // 1단계 해당하는 값들을 추출하기.(내 값, 팀 값)
  const { teamId, status } = getUserStatus(matchInfo, puuid);
  const coreStatus = createCategoryStat(status);

  // 1단계 해당하는 값들을 추출하기.(팀 값)
  const { teamStatusList } = getUserTeamStatus(matchInfo, teamId);
  let totalTeamStatus = {};
  for (const teamStatus of teamStatusList) {
    const coreTeamStatus = createCategoryStat(teamStatus);
    totalTeamStatus = addCategoryStatus(totalTeamStatus, coreTeamStatus);
  }

  // 2단계. 내 값/ 팀 값으로 비율 구하기.
  const ratioStatus = divideCategoryStatus(coreStatus, totalTeamStatus);
  return ratioStatus;
};

const getCharacter = (matchInfoList, puuid) => {
  let userTotalMatchStatus = {};

  for (const matchInfo of matchInfoList) {
    const ratioStatus = getRatioStatus(matchInfo, puuid);
    userTotalMatchStatus = addCategoryStatus(userTotalMatchStatus, ratioStatus);
  }

  const result = findMaxStatAndCategory(
    userTotalMatchStatus,
    CHARACTER_CATEGORY,
  );

  return result;
};

export { getCharacter };
