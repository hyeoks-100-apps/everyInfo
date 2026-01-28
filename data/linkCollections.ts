export type LinkItem = {
  name: string;
  url: string;
  description: string;
  tags: string[];
  isPopular?: boolean;
};

export type LinkCategory = {
  id: string;
  title: string;
  description: string;
  links: LinkItem[];
};

export const linkCollections: LinkCategory[] = [
  {
    id: 'webtoon',
    title: '웹툰 · 웹소설',
    description: '주요 플랫폼에서 인기 연재작과 신작을 손쉽게 확인하세요.',
    links: [
      {
        name: '네이버웹툰',
        url: 'https://comic.naver.com/webtoon',
        description: '요일별 인기 웹툰과 완결작을 한 번에 모아봅니다.',
        tags: ['국내', '인기', '요일별'],
        isPopular: true,
      },
      {
        name: '카카오페이지',
        url: 'https://page.kakao.com/',
        description: '웹툰, 웹소설, 드라마 원작을 아우르는 종합 플랫폼.',
        tags: ['웹소설', '드라마 원작'],
        isPopular: true,
      },
      {
        name: '레진코믹스',
        url: 'https://www.lezhin.com/ko',
        description: '성인 타깃 장르와 오리지널 작품을 빠르게 확인합니다.',
        tags: ['오리지널', '성인'],
      },
      {
        name: '리디북스',
        url: 'https://ridibooks.com/',
        description: '웹소설과 만화, 전자책까지 통합해서 검색할 수 있습니다.',
        tags: ['웹소설', '전자책'],
      },
      {
        name: '투믹스',
        url: 'https://www.toomics.com/',
        description: '다양한 장르의 웹툰을 추천과 랭킹으로 제공합니다.',
        tags: ['랭킹', '장르 다양'],
      },
    ],
  },
  {
    id: 'ott',
    title: 'OTT · 영화',
    description: '시청 가능한 작품, 최신 공개작, 무료 콘텐츠를 빠르게 찾습니다.',
    links: [
      {
        name: '넷플릭스',
        url: 'https://www.netflix.com/kr/',
        description: '오리지널 시리즈와 글로벌 인기작을 추천합니다.',
        tags: ['오리지널', '글로벌'],
        isPopular: true,
      },
      {
        name: '디즈니+',
        url: 'https://www.disneyplus.com/ko-kr',
        description: '마블·디즈니·픽사 콘텐츠를 한곳에서 감상합니다.',
        tags: ['마블', '디즈니'],
      },
      {
        name: '티빙',
        url: 'https://www.tving.com/',
        description: '국내 예능과 드라마, 스포츠 중계를 제공합니다.',
        tags: ['국내', '스포츠'],
        isPopular: true,
      },
      {
        name: '웨이브',
        url: 'https://www.wavve.com/',
        description: '방송사 VOD와 해외 시리즈를 모아볼 수 있습니다.',
        tags: ['VOD', '방송사'],
      },
      {
        name: '왓챠',
        url: 'https://watcha.com/',
        description: '개인화 추천과 평점 기반 큐레이션을 제공합니다.',
        tags: ['추천', '평점'],
      },
      {
        name: '쿠팡플레이',
        url: 'https://www.coupangplay.com/',
        description: '영화, 예능, 스포츠 중계를 함께 즐길 수 있습니다.',
        tags: ['스포츠', '오리지널'],
      },
    ],
  },
  {
    id: 'sports',
    title: '스포츠 · 경기 일정',
    description: '생중계, 리그 일정, 팀별 소식을 쉽게 확인합니다.',
    links: [
      {
        name: 'SPOTV NOW',
        url: 'https://www.spotvnow.co.kr/',
        description: '해외 축구와 종목별 중계 일정을 제공합니다.',
        tags: ['해외축구', '중계'],
        isPopular: true,
      },
      {
        name: 'KBO',
        url: 'https://www.koreabaseball.com/',
        description: '프로야구 경기 일정과 팀 순위를 확인합니다.',
        tags: ['야구', '일정'],
        isPopular: true,
      },
      {
        name: 'K리그',
        url: 'https://www.kleague.com/',
        description: '국내 프로축구 리그 일정과 결과를 제공합니다.',
        tags: ['축구', '국내'],
      },
      {
        name: '스포티비뉴스',
        url: 'https://www.spotvnews.co.kr/',
        description: '종목별 기사와 실시간 스포츠 이슈를 빠르게 확인합니다.',
        tags: ['뉴스', '이슈'],
      },
      {
        name: 'FIFA+',
        url: 'https://www.plus.fifa.com/',
        description: '글로벌 축구 콘텐츠와 하이라이트 영상을 제공합니다.',
        tags: ['글로벌', '하이라이트'],
      },
    ],
  },
  {
    id: 'community',
    title: '커뮤니티 · 포럼',
    description: '트렌드 토론과 후기, 이슈 공유가 활발한 커뮤니티 모음입니다.',
    links: [
      {
        name: '디시인사이드',
        url: 'https://www.dcinside.com/',
        description: '갤러리별 이슈와 밈을 빠르게 확인합니다.',
        tags: ['갤러리', '트렌드'],
        isPopular: true,
      },
      {
        name: '에펨코리아',
        url: 'https://www.fmkorea.com/',
        description: '스포츠와 유머, 생활 정보를 폭넓게 제공합니다.',
        tags: ['스포츠', '유머'],
      },
      {
        name: '더쿠',
        url: 'https://theqoo.net/',
        description: '연예, 일상, 커뮤니티 이슈를 실시간으로 공유합니다.',
        tags: ['연예', '실시간'],
      },
      {
        name: '루리웹',
        url: 'https://ruliweb.com/',
        description: '게임·서브컬처 정보와 커뮤니티 토론을 제공합니다.',
        tags: ['게임', '서브컬처'],
        isPopular: true,
      },
      {
        name: '클리앙',
        url: 'https://www.clien.net/',
        description: 'IT, 생활, 장비 후기를 중심으로 소통합니다.',
        tags: ['IT', '후기'],
      },
      {
        name: '인벤',
        url: 'https://www.inven.co.kr/',
        description: '게임별 공략과 커뮤니티 소식을 모아봅니다.',
        tags: ['게임', '공략'],
      },
    ],
  },
  {
    id: 'lifestyle',
    title: '생활 · 쇼핑',
    description: '할인, 쿠폰, 빠른 배송이 강점인 쇼핑 서비스를 모았습니다.',
    links: [
      {
        name: '네이버 쇼핑',
        url: 'https://shopping.naver.com/',
        description: '가격 비교와 리뷰 기반 쇼핑을 제공합니다.',
        tags: ['가격비교', '리뷰'],
        isPopular: true,
      },
      {
        name: '쿠팡',
        url: 'https://www.coupang.com/',
        description: '로켓배송과 빠른 재구매 기능을 제공합니다.',
        tags: ['로켓배송', '멤버십'],
        isPopular: true,
      },
      {
        name: '11번가',
        url: 'https://www.11st.co.kr/',
        description: '타임딜과 카드 할인 정보를 제공합니다.',
        tags: ['타임딜', '할인'],
      },
      {
        name: '오늘의집',
        url: 'https://www.ohou.se/',
        description: '인테리어 아이디어와 쇼핑을 함께 큐레이션합니다.',
        tags: ['인테리어', '추천'],
      },
      {
        name: '무신사',
        url: 'https://www.musinsa.com/',
        description: '패션 랭킹과 브랜드별 스타일링을 제공합니다.',
        tags: ['패션', '랭킹'],
      },
    ],
  },
  {
    id: 'learning',
    title: '학습 · 생산성',
    description: '새로운 스킬과 업무 효율을 위한 학습/툴 서비스를 묶었습니다.',
    links: [
      {
        name: '인프런',
        url: 'https://www.inflearn.com/',
        description: '개발·디자인 등 실무 기반 온라인 강의를 제공합니다.',
        tags: ['온라인 강의', '실무'],
        isPopular: true,
      },
      {
        name: '패스트캠퍼스',
        url: 'https://fastcampus.co.kr/',
        description: '커리어 전환과 실무 교육 과정을 제공합니다.',
        tags: ['커리어', '교육'],
      },
      {
        name: '노션',
        url: 'https://www.notion.so/ko-kr',
        description: '문서, 프로젝트, 지식 관리를 한곳에서 처리합니다.',
        tags: ['문서', '협업'],
        isPopular: true,
      },
      {
        name: '토스 커뮤니티',
        url: 'https://toss.im/tech',
        description: '테크 아티클과 개발 문화를 읽을 수 있습니다.',
        tags: ['테크', '아티클'],
      },
      {
        name: '브런치',
        url: 'https://brunch.co.kr/',
        description: '에세이와 글쓰기 콘텐츠를 모아볼 수 있습니다.',
        tags: ['글쓰기', '콘텐츠'],
      },
    ],
  },
];
