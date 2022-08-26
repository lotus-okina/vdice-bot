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
import { dotLive, vspo, aogiri } from "./lists/other.js";

export const keywords = {
  // にじさんじ
  Niji: [nijiFem, nijiMas].flat(),
  NijiFem: nijiFem,
  NijiMas: nijiMas,
  NijiEn: [nijiEnFem, nijiEnMas].flat(),
  NijiEnFem: nijiEnFem,
  NijiEnMas: nijiEnMas,
  NijiKr: [nijiKrFem, nijiKrMas].flat(),
  NijiKrFem: nijiKrFem,
  NijiKrMas: nijiKrMas,
  NijiId: [nijiIdFem, nijiIdMas].flat(),
  NijiIdFem: nijiIdFem,
  NijiIdMas: nijiIdMas,
  // ホロライブ
  Holo: hololive,
  Holostars: holostars,
  HoloId: hololiveId,
  HoloEn: [holoMyth, holoCouncil, holoEnOthers].flat(),
  Myth: holoMyth,
  Council: holoCouncil,
  // 774 inc.
  "774inc": [
    animare,
    honeyStrap,
    vApArt,
    sugarLyric,
    hiyoCro,
    nanasiOthers,
  ].flat(),
  Animare: animare,
  HoneyStrap: honeyStrap,
  VApArt: vApArt,
  SugarLyric: sugarLyric,
  HiyoCro: hiyoCro,
  // その他
  DotLive: dotLive,
  Vspo: vspo,
  Aogiri: aogiri,
} as const;
