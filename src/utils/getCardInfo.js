import { getUserStatus } from './getStatus';

const createCardInfo = ({
  cardName = '',
  cardDescription = '',
  condition = () => false,
  itemId = 1000,
}) => {
  return {
    cardName,
    cardDescription,
    condition,
    itemId,
  };
};

const TOTAL_CARD_INFO_LIST = [
  createCardInfo({
    cardName: '팀원을 잘 돕는',
    cardDescription: '12 연속 어시스트를 했습니다.',
    condition: data => data.assistStreakCount >= 12,
    itemId: 3222,
  }),
  createCardInfo({
    cardName: '바론과',
    cardDescription: '바론 버프를 통한 골드 이득이 임계값을 초과한 횟수입니다.',
    condition: data => data.baronBuffGoldAdvantageOverThreshold > 0,
    itemId: 1083,
  }),
  createCardInfo({
    cardName: '바론을 잡아먹은',
    cardDescription: '바론을 처치했습니다.',
    condition: data => data.baronTakedowns > 0,
    itemId: 3135,
  }),
  createCardInfo({
    cardName: '버프를 도난당한',
    cardDescription: '버프를 도난당했습니다.',
    condition: data => data.buffsStolen > 0,
    itemId: 2140,
  }),
  createCardInfo({
    cardName: '나노 무빙을 하는',
    cardDescription: '짧은 시간동안 많은 스킬샷을 피했습니다.',
    condition: data => data.dodgeSkillShotsSmallWindow > 0,
    itemId: 3009,
  }),
  createCardInfo({
    cardName: '드래곤을 먹은',
    cardDescription: '드래곤 처치했습니다.',
    condition: data => data.dragonTakedowns > 0,
    itemId: 3033,
  }),
  createCardInfo({
    cardName: '에픽몹을 순삭한',
    cardDescription: '에픽 몬스터 스폰 후 30초 이내에 처치했습니다.',
    condition: data => data.epicMonsterKillsWithin30SecondsOfSpawn > 0,
    itemId: 1102,
  }),
  createCardInfo({
    cardName: '귀한 걸 도난당한',
    cardDescription: '에픽 몬스터를 도난당했습니다.',
    condition: data => data.epicMonsterSteals > 0,
    itemId: 3916,
  }),
  createCardInfo({
    cardName: '인간 폭탄인',
    cardDescription: '최대 딜량을 기록했습니다.',
    condition: data => data.highestChampionDamage > 0,
    itemId: 3089,
  }),
  createCardInfo({
    cardName: '움직임을 멈추는',
    cardDescription: '가장 높은 군중 제어(CC) 점수를 기록했습니다.',
    condition: data => data.highestCrowdControlScore > 0,
    itemId: 3110,
  }),
  createCardInfo({
    cardName: '시야를 가리는',
    cardDescription: '가장 많은 와드 처치 수를 기록했습니다.',
    condition: data => data.highestWardKills > 0,
    itemId: 3364,
  }),
  createCardInfo({
    cardName: '바위게를 먹은',
    cardDescription: '초반에 바위게를 처치했습니다.',
    condition: data => data.initialCrabCount > 0,
    itemId: 1103,
  }),
  createCardInfo({
    cardName: '기습을 즐겨하는',
    cardDescription: '아군과 함께 숨은 후 상대를 처치했습니다.',
    condition: data => data.killAfterHiddenWithAlly > 0,
    itemId: 6695,
  }),
  createCardInfo({
    cardName: '갱값을 받는',
    cardDescription: '다른 라인에서 초반 정글러로서 적을 처치했습니다.',
    condition: data => data.killsOnOtherLanesEarlyJungleAsLaner > 0,
    itemId: 3123,
  }),
  createCardInfo({
    cardName: '다이브를 막은',
    cardDescription: '자신의 타워 아래에서 적을 처치했습니다.',
    condition: data => data.killsUnderOwnTurret > 0,
    itemId: 2420,
  }),
  createCardInfo({
    cardName: '꼬리를 잘 흔드는',
    cardDescription: '적을 팀원에게 밀어넣고 처치했습니다.',
    condition: data => data.knockEnemyIntoTeamAndKill > 0,
    itemId: 6690,
  }),
  createCardInfo({
    cardName: '독서를 즐겨한',
    cardDescription: '메자이 전부 풀 스택을 획득 했습니다.',
    condition: data => data.mejaisFullStackInTime > 0,
    itemId: 3041,
  }),
  createCardInfo({
    cardName: '일타이피를 해본',
    cardDescription: '하나의 스킬로 멀티킬을 기록했습니다.',
    condition: data => data.multiKillOneSpell > 0,
    itemId: 6655,
  }),
  createCardInfo({
    cardName: '라인 갭을 낸',
    cardDescription: '10분 전에 바깥 타워를 파괴했습니다.',
    condition: data => data.outerTurretExecutesBefore10Minutes > 0,
    itemId: 3181,
  }),
  createCardInfo({
    cardName: '용의 영혼을 가진',
    cardDescription: '완벽하게 드래곤 소울을 확보했습니다.',
    condition: data => data.perfectDragonSoulsTaken > 0,
    itemId: 6698,
  }),
  createCardInfo({
    cardName: '칼 정화를 쓴',
    cardDescription: '신속하게 클렌징을 했습니디.',
    condition: data => data.quickCleanse > 0,
    itemId: 3139,
  }),
  createCardInfo({
    cardName: '신속하게 죽이는',
    cardDescription: '신속하게 혼자서 적을 처치했습니다.',
    condition: data => data.quickSoloKills > 0,
    itemId: 3179,
  }),
  createCardInfo({
    cardName: '아군을 구원한',
    cardDescription: '아군을 죽음에서 구했습니다.',
    condition: data => data.saveAllyFromDeath > 0,
    itemId: 3107,
  }),
  createCardInfo({
    cardName: '바론과 일대일한',
    cardDescription: '혼자서 바론을 처치했습니다.',
    condition: data => data.soloBaronKills > 0,
    itemId: 6672,
  }),
  createCardInfo({
    cardName: '솔로킬을 낸',
    cardDescription: '혼자서 적을 처치했습니다.',
    condition: data => data.soloKills > 0,
    itemId: 3133,
  }),
  createCardInfo({
    cardName: '삶의 의지가 강한',
    cardDescription: '단일 자리 수의 체력으로 생존했습니다.',
    condition: data => data.survivedSingleDigitHpCount > 0,
    itemId: 1006,
  }),
  createCardInfo({
    cardName: '마지막 학살을 한',
    cardDescription: '적 넥서스 앞에서의 적을 처치했습니다.',
    condition: data => data.takedownsInEnemyFountain > 0,
    itemId: 3036,
  }),
  createCardInfo({
    cardName: '장로용을 죽인',
    cardDescription: '엘더 드래곤을 처치했습니다.',
    condition: data => data.teamElderDragonKills > 0,
    itemId: 6665,
  }),
  createCardInfo({
    cardName: '텔레포트 하는',
    cardDescription: '텔레포트로 적을 처치헸습니다.',
    condition: data => data.teleportTakedowns > 0,
    itemId: 3742,
  }),
  createCardInfo({
    cardName: '죽일 수 없는',
    cardDescription: '큰 피해를 받고 생존했습니다.',
    condition: data => data.tookLargeDamageSurvived > 0,
    itemId: 3157,
  }),
  createCardInfo({
    cardName: '아웃싸이더인',
    cardDescription: '적에게 발견되지 않고 리콜했습니다',
    condition: data => data.unseenRecalls > 0,
    itemId: 3142,
  }),
];

const createCardInfoStatusFormChallenges = challenges => {
  const {
    '12AssistStreakCount': assistStreakCount = 0,
    baronBuffGoldAdvantageOverThreshold = 0,
    highestChampionDamage = 0,
    highestCrowdControlScore = 0,
    highestWardKills = 0,
    knockEnemyIntoTeamAndKill = 0,
    initialCrabCount = 0,
    killAfterHiddenWithAlly = 0,
    killsOnOtherLanesEarlyJungleAsLaner = 0,
    epicMonsterKillsWithin30SecondsOfSpawn = 0,
    epicMonsterSteals = 0,
    dodgeSkillShotsSmallWindow = 0,
    dragonTakedowns = 0,
    baronTakedowns = 0,
    teleportTakedowns = 0,
    buffsStolen = 0,
    killsUnderOwnTurret = 0,
    mejaisFullStackInTime = 0,
    multiKillOneSpell = 0,
    outerTurretExecutesBefore10Minutes = 0,
    perfectDragonSoulsTaken = 0,
    quickCleanse = 0,
    quickSoloKills = 0,
    saveAllyFromDeath = 0,
    soloBaronKills = 0,
    soloKills = 0,
    survivedSingleDigitHpCount = 0,
    takedownsInEnemyFountain = 0,
    teamElderDragonKills = 0,
    tookLargeDamageSurvived = 0,
    unseenRecalls = 0,
  } = challenges;

  return {
    assistStreakCount,
    baronBuffGoldAdvantageOverThreshold,
    highestChampionDamage,
    highestCrowdControlScore,
    highestWardKills,
    knockEnemyIntoTeamAndKill,
    initialCrabCount,
    killAfterHiddenWithAlly,
    killsOnOtherLanesEarlyJungleAsLaner,
    epicMonsterKillsWithin30SecondsOfSpawn,
    epicMonsterSteals,
    dodgeSkillShotsSmallWindow,
    dragonTakedowns,
    baronTakedowns,
    teleportTakedowns,
    buffsStolen,
    killsUnderOwnTurret,
    mejaisFullStackInTime,
    multiKillOneSpell,
    outerTurretExecutesBefore10Minutes,
    perfectDragonSoulsTaken,
    quickCleanse,
    quickSoloKills,
    saveAllyFromDeath,
    soloBaronKills,
    soloKills,
    survivedSingleDigitHpCount,
    takedownsInEnemyFountain,
    teamElderDragonKills,
    tookLargeDamageSurvived,
    unseenRecalls,
  };
};

const addCardStatus = (obj1 = {}, obj2 = {}) => {
  const result = {};

  // 모든 키를 가져와서 합산
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  allKeys.forEach(key => {
    result[key] = (obj1[key] || 0) + (obj2[key] || 0);
  });

  return result;
};

const getMatchingCardInfo = data => {
  return TOTAL_CARD_INFO_LIST.filter(card => card.condition(data));
};

const getCardInfoList = (matchInfoList, puuid) => {
  console.log('getCardInfoList in');
  let coreStatus = {};

  for (const matchInfo of matchInfoList) {
    const { status } = getUserStatus(matchInfo, puuid);
    const curStatus = createCardInfoStatusFormChallenges(status.challenges);
    coreStatus = addCardStatus(coreStatus, curStatus);
  }

  // 그리고 있는 값만 TOTAL_CARD_INFO_LIST와 매칭하자.
  // 해당되는 매칭값을 만들어서 return;
  const resultStatus = getMatchingCardInfo(coreStatus);
  return resultStatus;
};

export { getCardInfoList, TOTAL_CARD_INFO_LIST };
