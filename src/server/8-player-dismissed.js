// Find the highest number of times one player has been dismissed by another player

import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

function playerDismissed(deliveries) {
  const dismissedList = deliveries.reduce((players, over) => {
    if (over.player_dismissed != "") {
      players[over.player_dismissed] =
        (players[over.player_dismissed] || 0) + 1;
    }
    return players;
  }, {});

  let mostDismissed = null;
  let maxCount = 0;

  for (const [player, count] of Object.entries(dismissedList)) {
    if (count > maxCount) {
      maxCount = count;
      mostDismissed = player;
    }
  }

  return { [mostDismissed]: maxCount };
}

console.log(playerDismissed(deliveries));

