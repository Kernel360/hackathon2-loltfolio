const createCharacterCategory = ({
  id = 0,
  line = '',
  categoryDescription = '',
  characterId,
}) => {
  return {
    id,
    line,
    categoryDescription,
    characterId,
  };
};

const CHARACTER_CATEGORY = [
  createCharacterCategory({
    id: 1,
    line: '녀석들의 고통으로 우린 더 강해진다.',
    categoryDescription:
      '이 유형은 팀원들을 도와주는 데 특화되어 있습니다. 높은 어시스트 수는 협동심과 팀 플레이의 중요성을 나타내며, 팀 전투에서 중요한 역할을 맡고 있습니다.',
    characterId: 'Thresh',
  }),
  createCharacterCategory({
    id: 2,
    line: '감수할 위험이 클수록 현상금도 많다.',
    categoryDescription:
      '이 유형은 적에게 위협적인 존재로 인식됩니다. 높은 현상금은 상대에게 많은 피해를 주거나 중요한 역할을 수행하고 있음을 의미합니다.',
    characterId: 'MissFortune',
  }),
  createCharacterCategory({
    id: 3,
    line: '내 이론에 따르면 당신의 패배예요!',
    categoryDescription:
      '이 유형은 목표물을 파괴하는 데 강점이 있습니다. 타워나 억제기와 같은 구조물을 빠르게 파괴하여 팀의 승리에 기여합니다.',
    characterId: 'Heimerdinger',
  }),
  createCharacterCategory({
    id: 4,
    line: '가장 듬직한 심장이 되어드리지.',
    categoryDescription:
      '이 유형은 피해를 흡수하고 생존하는 데 강점이 있습니다. 높은 생존력과 방어 능력으로 팀 전투에서 중요한 역할을 합니다.',
    characterId: 'Braum',
  }),
  createCharacterCategory({
    id: 5,
    line: '정찰 다녀오겠습니다!',
    categoryDescription:
      '이 유형은 시야 장악에 뛰어납니다. 제어 와드를 많이 설치하여 팀에게 중요한 정보와 안전을 제공합니다.',
    characterId: 'Teemo',
  }),
  createCharacterCategory({
    id: 6,
    line: '진정한 식욕은 사그라들지 않는 법.',
    categoryDescription:
      '이 유형은 많은 골드를 획득하여 아이템을 빠르게 구매할 수 있습니다. 이는 게임 중 강력한 영향력을 발휘하는 데 중요한 역할을 합니다.',
    characterId: 'TahmKench',
  }),
  createCharacterCategory({
    id: 7,
    line: '학살의 현장에서 난, 피어오른다. 붉은 여명에 피어나는... 꽃처럼.',
    categoryDescription:
      '이 유형은 연속으로 적을 처치하는 데 강점이 있습니다. 높은 공격력과 정확한 플레이로 전투에서 큰 영향을 미칩니다.',
    characterId: 'Jhin',
  }),
  createCharacterCategory({
    id: 8,
    line: '나 여깄지롱!”, “행운? 어... 실력이야.“',
    categoryDescription:
      '이 유형은 살아남는 것에 강점이 있습니다. 적에게 죽음을 당하지 않고 살아남아서 할 일을 하는 데 최적화되어 있죠!',
    characterId: 'Ezreal',
  }),
  createCharacterCategory({
    id: 9,
    line: '피 흘릴 시간도 없어.',
    categoryDescription:
      '이 유형은 정글에서의 영향력이 큽니다. 중립 미니언을 많이 처치하여 팀에 중요한 자원을 제공합니다.',
    characterId: 'Graves',
  }),
  createCharacterCategory({
    id: 10,
    line: '마술 하나 보여줄까!',
    categoryDescription:
      '이 유형은 중요한 오브젝트를 훔치는 데 특화되어 있습니다. 기습적인 플레이로 상대의 중요한 자원을 빼앗아옵니다.',
    characterId: 'Shaco',
  }),
  createCharacterCategory({
    id: 11,
    line: '바위처럼 단단하게!',
    categoryDescription:
      '이 유형은 적에게 군중 제어(CC)를 가하는 데 뛰어납니다. 상대의 움직임을 제한하여 팀 전투에서 큰 영향을 미칩니다.',
    characterId: 'Malphite',
  }),
  createCharacterCategory({
    id: 12,
    line: '자연은, 언제나 자신이 받은 것 이상으로 베푼다네.',
    categoryDescription:
      '이 유형은 아군 정글에서 미니언을 처치하여 팀 자원을 적극적으로 활용하는 플레이 스타일을 의미합니다. 이 유형은 안정적인 성장과 게임의 리소스를 최대한 활용하여 팀의 전반적인 골드와 경험치를 증가시키는 전략을 사용합니다.',
    characterId: 'Ivern',
  }),
  createCharacterCategory({
    id: 13,
    line: '가만히 좀 있어봐, 총 좀 쏘게!',
    categoryDescription:
      '이 유형은 적 챔피언에게 큰 피해를 가하는 데 강점이 있습니다. 높은 공격력으로 전투에서 중요한 역할을 합니다.',
    characterId: 'Jinx',
  }),
  createCharacterCategory({
    id: 14,
    line: '문도 머리에 메스 꽂혔는지 봐줄 사람?',
    categoryDescription:
      '이 유형은 많은 피해를 흡수하는 데 특화되어 있습니다. 팀 전투에서 적의 공격을 막아내며 팀원을 보호합니다.',
    characterId: 'DrMundo',
  }),
  createCharacterCategory({
    id: 15,
    line: '날 두려워 하는게 당연해.',
    categoryDescription:
      '이 유형은 상대 정글에 대한 압박이 뛰어납니다. 적 정글 미니언을 처치하여 상대의 자원을 빼앗고 억제합니다.',
    characterId: 'Nidalee',
  }),
  createCharacterCategory({
    id: 16,
    line: '당신을 치유하고 지켜드리겠어요.',
    categoryDescription:
      '이 유형은 팀원들을 치유하는 데 특화되어 있습니다. 높은 치유량으로 팀의 생존력을 크게 향상시킵니다.',
    characterId: 'Soraka',
  }),
  createCharacterCategory({
    id: 17,
    line: '죽음은 바람과 같지. 늘 내 곁에 있으니.',
    categoryDescription:
      '이 유형은 상대적으로 죽음의 빈도가 높습니다. 이는 공격적인 플레이 스타일이나 높은 리스크를 감수하는 플레이를 의미할 수 있습니다.',
    characterId: 'Yasuo',
  }),
];

export { CHARACTER_CATEGORY };
