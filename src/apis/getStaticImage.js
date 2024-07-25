const getStaticChampionImageUrl = championId => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;
};

const getStaticItemImageUrl = itemId => {
  return `https://ddragon.leagueoflegends.com/cdn/14.14.1/img/item/${itemId}.png`;
};

export { getStaticChampionImageUrl, getStaticItemImageUrl };
