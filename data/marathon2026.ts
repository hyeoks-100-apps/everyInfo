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
    name: '2026 대구마라톤 (Daegu Marathon 2026)',
    date: '2026-02-22',
    location: '대구',
    distances: ['풀', '10.9K', '5K'],
    link: 'https://daegumarathon.daegu.go.kr/outline.php',
    note: '총 4만 명 선착순(풀/10.9K/건강달리기).',
  },
  {
    name: '2026 성주 참외 전국 마라톤 대회',
    date: '2026-03-08',
    location: '경북 성주',
    distances: ['30K', '하프', '10K', '5K'],
    link: 'https://sjmelon.kr/sub1_1.php',
    note: '30K 종목이 있는 지역 테마 대회(6,000명 선착순).',
  },
  {
    name: '2026 서울마라톤 겸 제96회 동아마라톤',
    date: '2026-03-15',
    location: '서울',
    distances: ['풀', '10K'],
    link: 'https://seoul-marathon.com/96',
    note: '도심 코스. 출발지 주차 불가(대중교통 권장).',
  },
  {
    name: '제26회 인천국제하프마라톤대회',
    date: '2026-03-22',
    location: '인천',
    distances: ['하프', '10K', '5K'],
    link: 'https://www.incheonmarathon.co.kr/',
    note: '지급물품에 기록칩/온라인기록증 포함(5km 제외).',
  },
  {
    name: '제24회 성우하이텍배 KNN 환경마라톤',
    date: '2026-03-22',
    location: '부산',
    distances: ['10K', '5K'],
    link: 'https://marathon.knn.co.kr/',
    note: '얼리버드 접수(1/23 10:00) 안내, 10K만 기록칩 적용.',
  },
  {
    name: '제33회 경주벚꽃마라톤대회',
    date: '2026-04-04',
    location: '경북 경주',
    distances: ['하프', '10K', '5K'],
    link: 'https://cherrymarathon.co.kr/info/index01.php',
    note: '벚꽃 시즌 대표 대회(하프/10K/5K).',
  },
  {
    name: '2026 군산 새만금 마라톤 대회',
    date: '2026-04-05',
    location: '전북 군산',
    distances: ['풀', '하프&하프', '10K', '5K'],
    link: 'https://www.gunsanmarathon.com/',
    note: '접수 2026-01-05 10:00 시작(선착순). 5K 참가비 25,000원.',
  },
  {
    name: '2026 DMZ 평화마라톤',
    date: '2026-04-19',
    location: '경기 파주',
    distances: ['하프', '10K', '5K'],
    link: 'https://dmzmarathon.newstomato.com/',
    note: '민통구역 구간 촬영 제한, 작전 상황에 따라 코스 조정 가능.',
  },
  {
    name: '2026 서울하프마라톤',
    date: '2026-04-26',
    location: '서울',
    distances: ['하프', '10K'],
    link: 'https://www.seoulhalfmarathon.com/rally/info.html',
    note: '공식 참가신청 페이지에 마감 안내 표시.',
  },
  {
    name: '2026 제26회 여성마라톤대회',
    date: '2026-05-02',
    location: '서울',
    distances: ['10K', '5K', '3K', '랜선'],
    link: 'https://www.womenmarathon.co.kr/dorun/info.php',
    note: '공지사항 기준 10K는 마감된 것으로 표시됨.',
  },
];
