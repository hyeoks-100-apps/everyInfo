export type MarathonEvent = {
  name: string;
  date: string;
  location: string;
  distances: string[];
  link: string;
  note: string;
};

export const marathonEvents2026: MarathonEvent[] = [
  {
    name: '서울 스프링 마라톤',
    date: '2026-03-15',
    location: '서울',
    distances: ['하프', '풀'],
    link: '#',
    note: '하프/풀 코스 운영',
  },
  {
    name: '부산 오션 마라톤',
    date: '2026-05-10',
    location: '부산',
    distances: ['풀', '10K'],
    link: '#',
    note: '바다 전망 코스',
  },
  {
    name: '제주 러너스 페스티벌',
    date: '2026-10-04',
    location: '제주',
    distances: ['하프', '축제'],
    link: '#',
    note: '여행 패키지 연계',
  },
];
