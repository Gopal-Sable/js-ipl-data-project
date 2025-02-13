// Find the highest number of times one player has been dismissed by another player

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const deliveries = readFile("./src/data/deliveries.json");

function getDismissed() {
  const dismissedPlayers = {};
  for (let i = 0; i < deliveries.length; i++) {
    const { player_dismissed, bowler } = deliveries[i];
    if (player_dismissed) {
      if (!dismissedPlayers[player_dismissed]) {
        dismissedPlayers[player_dismissed] = {};
      }
      dismissedPlayers[player_dismissed][bowler] =
        (dismissedPlayers[player_dismissed][bowler] || 0) + 1;
    }
  }
  return dismissedPlayers;
}

function playerDismissed() {
  const dismissedList = getDismissed();

  let mostDismissed = null;
  let maxCount = 0;
  let dismissedBy = null;

 const dismissedArr=Object.entries(dismissedList)
  for (let i = 0; i < dismissedArr.length; i++) {
    const [batsman, dismissedRecord] = dismissedArr[i];
    const dissmissedRecordArr= Object.entries(dismissedRecord)
    for (let j = 0; j < dissmissedRecordArr.length; j++) {
      const [bowler, wickets] = dissmissedRecordArr[j];
      if (wickets > maxCount) {
        maxCount = wickets;
        mostDismissed = batsman;
        dismissedBy = bowler;
      }
    }
  }

  const result = {
    batsman: mostDismissed,
    bowler: dismissedBy,
    count: maxCount,
  };
  return result;
}

const result = playerDismissed();
writeFile("./src/public/output/8-player-dismissed.json", result);
