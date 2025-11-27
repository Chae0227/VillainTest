export type ResultKey =
  | "000" | "001" | "010" | "011"
  | "100" | "101" | "110" | "111";

export interface ResultInfo {
  label: string;
  desc: string;
  icon: string; // ← 픽셀/ASCII 캐릭터
  theme: "yellow" | "mint" | "purple";
}

export const results: Record<ResultKey, ResultInfo> = {
  "000": {
    label: "침묵 잠수형",
    desc: "말은 적지만 관찰력은 좋은, 조용한 빌런.",
    icon: "( ˘•_•˘ ) …",
    theme: "purple",
  },
  "001": {
    label: "조용 팩트형",
    desc: "필요할 때만 팩트를 던지는 한 방 빌런.",
    icon: "( •̀ᴗ•́ )۶",
    theme: "mint",
  },
  "010": {
    label: "과한 배려형",
    desc: "배려가 너무 많아 자신이 지치는 착한 빌런.",
    icon: "(｡•́︿•̀｡)",
    theme: "yellow",
  },
  "011": {
    label: "과몰입 반응형",
    desc: "감정과 리액션의 화신, 열정 빌런.",
    icon: "(੭˙ᗜ˙)੭",
    theme: "purple",
  },
  "100": {
    label: "조용 독주형",
    desc: "말 없이 혼자 빠르게 진행하는 독주 빌런.",
    icon: "( •_•)ノ",
    theme: "mint",
  },
  "101": {
    label: "단독 직진형",
    desc: "생각나면 바로 실행하는 돌직구 빌런.",
    icon: "(ง •̀_•́)ง",
    theme: "yellow",
  },
  "110": {
    label: "고집 조율형",
    desc: "사람은 챙기지만 방향성은 확실한 조율 빌런.",
    icon: "(｀・ω・´)ゞ",
    theme: "mint",
  },
  "111": {
    label: "직설 주도형",
    desc: "리드, 표현, 참여 모두 강한 주도 빌런.",
    icon: "( •̀ω•́ )︻デ═一",
    theme: "purple",
  },
};
