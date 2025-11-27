// app/data/questions.ts
export type Axis = "L" | "E" | "X";

export interface Question {
  id: number;
  axis: Axis;
  text: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  // L: 주도성 (4문항)
  {
    id: 1,
    axis: "L",
    text: "중요한 결정을 내려야 할 때 나는?",
    options: [
      { text: "바로 의견을 말한다", score: 1 },
      { text: "다른 사람 의견을 먼저 듣는다", score: 0 },
    ],
  },
  {
    id: 2,
    axis: "L",
    text: "역할을 나눌 때 나는?",
    options: [
      { text: "먼저 선택하며 리드한다", score: 1 },
      { text: "정해진 대로 따른다", score: 0 },
    ],
  },
  {
    id: 3,
    axis: "L",
    text: "회의가 너무 길어진다고 느끼면?",
    options: [
      { text: "정리하며 결론을 내자고 한다", score: 1 },
      { text: "흐름에 맡기고 기다린다", score: 0 },
    ],
  },
  {
    id: 4,
    axis: "L",
    text: "팀 분위기가 흐트러질 때 나는?",
    options: [
      { text: "바로 분위기를 다시 잡는다", score: 1 },
      { text: "누군가 정리해주길 기다린다", score: 0 },
    ],
  },

  // E: 참여/반응 (4문항)
  {
    id: 5,
    axis: "E",
    text: "단톡방에서 나는?",
    options: [
      { text: "빠르게 답장하는 편이다", score: 1 },
      { text: "나중에 한꺼번에 읽는 편이다", score: 0 },
    ],
  },
  {
    id: 6,
    axis: "E",
    text: "새 아이디어가 나왔을 때 나는?",
    options: [
      { text: "리액션하고 의견을 덧붙인다", score: 1 },
      { text: "조용히 보고만 있는 편이다", score: 0 },
    ],
  },
  {
    id: 7,
    axis: "E",
    text: "팀원이 실수했을 때 나는?",
    options: [
      { text: "바로 피드백하거나 해결책을 제안한다", score: 1 },
      { text: "상황을 지켜보며 답답해한다", score: 0 },
    ],
  },
  {
    id: 8,
    axis: "E",
    text: "회의에서 논쟁이 생기면 나는?",
    options: [
      { text: "적극적으로 내 생각을 말한다", score: 1 },
      { text: "그냥 듣다가 정리된 쪽을 따른다", score: 0 },
    ],
  },

  // X: 표현 방식 (4문항)
  {
    id: 9,
    axis: "X",
    text: "의견을 말할 때 나는?",
    options: [
      { text: "직설적이고 솔직하게 말한다", score: 1 },
      { text: "돌려 말하거나 부드럽게 말한다", score: 0 },
    ],
  },
  {
    id: 10,
    axis: "X",
    text: "갈등 상황에서 나는?",
    options: [
      { text: "감정을 솔직하게 드러낸다", score: 1 },
      { text: "감정보다 상황 위주로 말한다", score: 0 },
    ],
  },
  {
    id: 11,
    axis: "X",
    text: "서운한 일이 생기면 나는?",
    options: [
      { text: "바로 표현하거나 티가 나는 편이다", score: 1 },
      { text: "그냥 넘기고 티를 잘 안 낸다", score: 0 },
    ],
  },
  {
    id: 12,
    axis: "X",
    text: "의견 대립이 생기면 나는?",
    options: [
      { text: "근거를 들며 강하게 주장한다", score: 1 },
      { text: "상대 의견을 받으며 조율한다", score: 0 },
    ],
  },
];
