// Find the highest number of times one player has been dismissed by another player

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const deliveries = readFile("./src/data/deliveries.json");

function getDismissed() {
  const dismissed = deliveries.reduce(
    (players, { player_dismissed, bowler }) => {
      if (player_dismissed) {
        if (!players[player_dismissed]) {
          players[player_dismissed] = {};
        }
        players[player_dismissed][bowler] =
          (players[player_dismissed][bowler] || 0) + 1;
      }
      return players;
    },
    {}
  );

  return dismissed;
}

function playerDismissed() {
  const dismissedList = getDismissed();

  let mostDismissed = null;
  let maxCount = 0;
  let dismissedBy = null;

  Object.entries(dismissedList).forEach(([batsman, dismissRecord]) => {
    Object.entries(dismissRecord).forEach(([bowler, wickets]) => {
      if (wickets > maxCount) {
        maxCount = wickets;
        mostDismissed = batsman;
        dismissedBy = bowler;
      }
    });
  });

  const result = {
    batsman: mostDismissed,
    bowler: dismissedBy,
    count: maxCount,
  };
  return result;
}

const result = playerDismissed();
writeFile("./src/public/output/8-player-dismissed.json", result);
