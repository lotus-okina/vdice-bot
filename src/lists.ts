import { nijiFem } from "./lists/niji_jp_fem.js";
import { nijiMas } from "./lists/niji_jp_mas.js";
import { hololive } from "./lists/hololive_jp.js";
import {
  animare,
  honeyStrap,
  vApArt,
  sugarLyric,
  hiyoCro,
  nanasiOthers,
} from "./lists/nanasi.js";
import {
  nijiEnFem,
  nijiEnMas,
  nijiKrFem,
  nijiKrMas,
  nijiIdMas,
  nijiIdFem,
} from "./lists/niji_other.js";
import {
  hololiveId,
  holoMyth,
  holoCouncil,
  holostars,
  holoEnOthers,
} from "./lists/holo_other.js";
import { dotLive, vspo } from "./lists/other.js";

export const keywords = {
  // にじさんじ
  NijiFem: nijiFem,
  NijiMas: nijiMas,
  Niji: [nijiFem, nijiMas].flat(),
  NijiEnFem: nijiEnFem,
  NijiEnMas: nijiEnMas,
  NijiEn: [nijiEnFem, nijiEnMas].flat(),
  NijiKrFem: nijiKrFem,
  NijiKrMas: nijiKrMas,
  NijiKr: [nijiKrFem, nijiKrMas].flat(),
  NijiIdFem: nijiIdFem,
  NijiIdMas: nijiIdMas,
  NijiId: [nijiIdFem, nijiIdMas].flat(),
  // ホロライブ
  Holo: hololive,
  HoloId: hololiveId,
  Myth: holoMyth,
  Council: holoCouncil,
  HoloEn: [holoMyth, holoCouncil, holoEnOthers].flat(),
  Holostars: holostars,
  // 774 inc.
  Animare: animare,
  HoneyStrap: honeyStrap,
  VApArt: vApArt,
  SugarLyric: sugarLyric,
  HiyoCro: hiyoCro,
  "774inc": [
    animare,
    honeyStrap,
    vApArt,
    sugarLyric,
    hiyoCro,
    nanasiOthers,
  ].flat(),
  // その他
  DotLive: dotLive,
  Vspo: vspo,
} as const;
