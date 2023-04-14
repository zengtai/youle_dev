import { GAME_PATH, GA_ID2 } from "../lib/constants";

export default function getGameUrl(gid) {
  return GAME_PATH + `?appid=${gid}&ga=${GA_ID2}`;
}
