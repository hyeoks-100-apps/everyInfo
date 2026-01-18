export type Product = {
  id: string;
  slug: string;
  nameKo: string;
  brandKo: string;
  category: {
    main: 'skincare' | 'makeup' | 'bodyhair';
    sub: string;
  };
  price: {
    currency: 'KRW';
    amount: number;
    rangeLabel?: 'under_10k' | '10_20k' | '20_30k' | '30_50k' | 'over_50k';
  };
  skinTypes?: Array<
    | 'oily'
    | 'dry'
    | 'combination'
    | 'normal'
    | 'sensitive'
    | 'acne_prone'
    | 'dehydrated'
    | 'mature'
    | 'redness'
    | 'atopy'
  >;
  concerns?: Array<
    | 'acne'
    | 'sebum'
    | 'pores'
    | 'dryness'
    | 'dehydrated'
    | 'texture'
    | 'sensitive'
    | 'redness'
    | 'soothing'
    | 'barrier'
    | 'brightening'
    | 'dark_spots'
    | 'wrinkles'
    | 'elasticity'
    | 'dark_circles'
    | 'long_wear'
    | 'transfer_resistant'
  >;
  personalColor?: Array<
    | 'spring_warm'
    | 'summer_cool'
    | 'autumn_warm'
    | 'winter_cool'
    | 'neutral'
    | 'unknown'
  >;
  undertone?: Array<'warm' | 'cool' | 'neutral'>;
  makeupProps?: {
    finish?: Array<'matte' | 'semi_matte' | 'natural' | 'glowy'>;
    coverage?: Array<'sheer' | 'medium' | 'high'>;
    wear?: Array<'long_wear' | 'mask_proof' | 'waterproof'>;
  };
  sunscreenProps?: {
    spf?: 30 | 50;
    pa?: 'PA+++' | 'PA++++';
    waterResistant?: boolean;
    whiteCast?: 'none' | 'some' | 'yes';
    makeupCompatibility?: 'good' | 'normal' | 'pills';
  };
  freeFrom?: Array<
    | 'fragrance_free'
    | 'alcohol_free'
    | 'essential_oil_free'
    | 'silicone_free'
    | 'paraben_free'
    | 'sulfate_free'
  >;
  ethics?: Array<'vegan' | 'cruelty_free'>;
  textures?: Array<
    'gel' | 'lotion' | 'cream' | 'oil' | 'balm' | 'stick' | 'mist' | 'powder'
  >;
  useCases?: Array<
    | 'quick_morning'
    | 'easy_touchup'
    | 'mask_friendly'
    | 'office_dry_air'
    | 'outdoor_uv'
    | 'budget_friendly'
    | 'travel_size'
  >;
  keyIngredientsKo?: string[];
  ingredientSlugs?: string[];
  descriptionKo?: string;
  tipsKo?: string[];
  cautionsKo?: string[];
  updatedAt: string;
  score?: number;
};

export const products: Product[] = [
  {
    id: 'p-001',
    slug: 'round-lab-birch-juice-sunscreen',
    nameKo: '자작나무 수분 선크림',
    brandKo: '라운드랩',
    category: { main: 'skincare', sub: 'sunscreen' },
    price: { currency: 'KRW', amount: 25000, rangeLabel: '20_30k' },
    skinTypes: ['dry', 'combination', 'sensitive', 'dehydrated'],
    concerns: ['dryness', 'soothing', 'barrier'],
    sunscreenProps: {
      spf: 50,
      pa: 'PA++++',
      waterResistant: false,
      whiteCast: 'some',
      makeupCompatibility: 'good',
    },
    freeFrom: ['fragrance_free', 'essential_oil_free'],
    textures: ['cream'],
    useCases: ['quick_morning', 'office_dry_air'],
    keyIngredientsKo: ['자작나무수액', '히알루론산'],
    ingredientSlugs: ['birch-juice', 'hyaluronic-acid'],
    descriptionKo: '촉촉한 데일리 선케어로 건조함을 줄여줘요.',
    tipsKo: ['스킨케어 마지막 단계에 충분히 펴 발라주세요.'],
    cautionsKo: ['자외선 차단제는 2~3시간마다 덧발라주세요.'],
    updatedAt: '2026-01-05',
    score: 92,
  },
  {
    id: 'p-002',
    slug: 'innisfree-green-tea-foam-cleanser',
    nameKo: '그린티 마일드 폼 클렌저',
    brandKo: '이니스프리',
    category: { main: 'skincare', sub: 'cleanser' },
    price: { currency: 'KRW', amount: 12000, rangeLabel: '10_20k' },
    skinTypes: ['oily', 'combination'],
    concerns: ['sebum', 'texture'],
    freeFrom: ['paraben_free'],
    textures: ['gel'],
    useCases: ['quick_morning', 'budget_friendly'],
    keyIngredientsKo: ['녹차추출물', '살리실산'],
    ingredientSlugs: ['green-tea', 'salicylic-acid'],
    descriptionKo: '산뜻한 세정으로 번들거림을 잡아줘요.',
    tipsKo: ['미온수로 충분히 거품을 낸 뒤 사용하세요.'],
    cautionsKo: ['눈가에는 사용을 피해주세요.'],
    updatedAt: '2026-01-02',
    score: 80,
  },
  {
    id: 'p-003',
    slug: 'laneige-cream-skin-toner',
    nameKo: '크림 스킨 토너',
    brandKo: '라네즈',
    category: { main: 'skincare', sub: 'toner' },
    price: { currency: 'KRW', amount: 29000, rangeLabel: '20_30k' },
    skinTypes: ['dry', 'dehydrated', 'sensitive'],
    concerns: ['dryness', 'barrier', 'soothing'],
    freeFrom: ['fragrance_free'],
    textures: ['lotion'],
    useCases: ['office_dry_air', 'quick_morning'],
    keyIngredientsKo: ['아미노산콤플렉스', '화이트리프'],
    ingredientSlugs: ['amino-acid', 'white-leaf'],
    descriptionKo: '토너 한 번으로 촉촉한 보습감을 채워줘요.',
    tipsKo: ['2회 레이어링하면 보습감을 높일 수 있어요.'],
    updatedAt: '2026-01-08',
    score: 88,
  },
  {
    id: 'p-004',
    slug: 'iope-bio-essence',
    nameKo: '바이오 에센스 인텐시브',
    brandKo: '아이오페',
    category: { main: 'skincare', sub: 'essence' },
    price: { currency: 'KRW', amount: 38000, rangeLabel: '30_50k' },
    skinTypes: ['normal', 'combination', 'mature'],
    concerns: ['brightening', 'elasticity', 'texture'],
    freeFrom: ['alcohol_free'],
    textures: ['mist'],
    useCases: ['office_dry_air'],
    keyIngredientsKo: ['갈락토미세스', '나이아신아마이드'],
    ingredientSlugs: ['galactomyces', 'niacinamide'],
    descriptionKo: '피부결과 톤을 균일하게 정돈해줘요.',
    tipsKo: ['세안 직후 바로 사용하면 흡수가 좋아요.'],
    updatedAt: '2026-01-10',
    score: 86,
  },
  {
    id: 'p-005',
    slug: 'dr-jart-ceramidin-cream',
    nameKo: '세라마이딘 크림',
    brandKo: '닥터자르트',
    category: { main: 'skincare', sub: 'cream_lotion' },
    price: { currency: 'KRW', amount: 48000, rangeLabel: '30_50k' },
    skinTypes: ['dry', 'sensitive', 'dehydrated'],
    concerns: ['barrier', 'dryness', 'soothing'],
    freeFrom: ['fragrance_free', 'essential_oil_free'],
    textures: ['cream'],
    useCases: ['office_dry_air', 'quick_morning'],
    keyIngredientsKo: ['세라마이드', '판테놀'],
    ingredientSlugs: ['ceramide', 'panthenol'],
    descriptionKo: '건조한 피부 장벽을 탄탄하게 케어해요.',
    tipsKo: ['밤에 도톰하게 바르면 집중 보습에 좋아요.'],
    updatedAt: '2026-01-03',
    score: 90,
  },
  {
    id: 'p-006',
    slug: 'hera-black-cushion',
    nameKo: '블랙 쿠션',
    brandKo: '헤라',
    category: { main: 'makeup', sub: 'cushion' },
    price: { currency: 'KRW', amount: 60000, rangeLabel: 'over_50k' },
    skinTypes: ['combination', 'oily'],
    concerns: ['long_wear', 'transfer_resistant'],
    personalColor: ['neutral', 'spring_warm'],
    undertone: ['neutral'],
    makeupProps: {
      finish: ['semi_matte'],
      coverage: ['medium', 'high'],
      wear: ['long_wear', 'mask_proof'],
    },
    textures: ['cream'],
    useCases: ['mask_friendly', 'easy_touchup'],
    keyIngredientsKo: ['히알루론산'],
    ingredientSlugs: ['hyaluronic-acid'],
    descriptionKo: '보송한 세미매트 표현과 높은 지속력.',
    tipsKo: ['소량씩 두드려 얇게 레이어링하세요.'],
    updatedAt: '2026-01-15',
    score: 95,
  },
  {
    id: 'p-007',
    slug: 'espoir-pro-tailor-foundation',
    nameKo: '프로 테일러 비 글로우 파운데이션',
    brandKo: '에스쁘아',
    category: { main: 'makeup', sub: 'foundation' },
    price: { currency: 'KRW', amount: 38000, rangeLabel: '30_50k' },
    skinTypes: ['normal', 'dry'],
    concerns: ['long_wear', 'transfer_resistant'],
    personalColor: ['summer_cool', 'neutral'],
    undertone: ['cool', 'neutral'],
    makeupProps: {
      finish: ['glowy', 'natural'],
      coverage: ['medium'],
      wear: ['long_wear'],
    },
    textures: ['cream'],
    useCases: ['easy_touchup'],
    keyIngredientsKo: ['히알루론산', '판테놀'],
    ingredientSlugs: ['hyaluronic-acid', 'panthenol'],
    descriptionKo: '은은한 광채와 촉촉한 표현.',
    tipsKo: ['프라이머와 함께 사용하면 지속력이 좋아요.'],
    updatedAt: '2026-01-11',
    score: 78,
  },
  {
    id: 'p-008',
    slug: 'romand-juicy-lasting-tint',
    nameKo: '쥬시 래스팅 틴트',
    brandKo: '롬앤',
    category: { main: 'makeup', sub: 'lip_tint' },
    price: { currency: 'KRW', amount: 9900, rangeLabel: 'under_10k' },
    concerns: ['transfer_resistant'],
    personalColor: ['spring_warm', 'autumn_warm'],
    undertone: ['warm'],
    makeupProps: {
      finish: ['glowy'],
      coverage: ['medium'],
      wear: ['mask_proof'],
    },
    textures: ['balm'],
    useCases: ['budget_friendly', 'easy_touchup', 'travel_size'],
    keyIngredientsKo: ['비타민E'],
    ingredientSlugs: ['vitamin-e'],
    descriptionKo: '촉촉하게 밀착되는 과즙 틴트.',
    tipsKo: ['입술 안쪽부터 그라데이션하면 자연스러워요.'],
    updatedAt: '2026-01-04',
    score: 91,
  },
  {
    id: 'p-009',
    slug: 'clio-kill-lash-mascara',
    nameKo: '킬래쉬 마스카라',
    brandKo: '클리오',
    category: { main: 'makeup', sub: 'mascara' },
    price: { currency: 'KRW', amount: 18000, rangeLabel: '10_20k' },
    concerns: ['long_wear', 'transfer_resistant'],
    makeupProps: {
      finish: ['natural'],
      coverage: ['high'],
      wear: ['waterproof'],
    },
    textures: ['cream'],
    useCases: ['mask_friendly'],
    descriptionKo: '워터프루프로 번짐을 줄여줘요.',
    updatedAt: '2026-01-06',
    score: 85,
  },
  {
    id: 'p-010',
    slug: 'etude-drawing-eyebrow',
    nameKo: '드로잉 아이브로우 펜슬',
    brandKo: '에뛰드',
    category: { main: 'makeup', sub: 'eyebrow' },
    price: { currency: 'KRW', amount: 4000, rangeLabel: 'under_10k' },
    concerns: ['long_wear'],
    personalColor: ['neutral', 'autumn_warm', 'winter_cool'],
    undertone: ['neutral'],
    makeupProps: {
      finish: ['natural'],
      coverage: ['medium'],
    },
    textures: ['stick'],
    useCases: ['budget_friendly', 'quick_morning', 'travel_size'],
    descriptionKo: '뭉침 없이 자연스럽게 그려지는 아이브로우.',
    updatedAt: '2026-01-01',
    score: 70,
  },
  {
    id: 'p-011',
    slug: 'illiyoon-ceramide-body-lotion',
    nameKo: '세라마이드 아토 로션',
    brandKo: '일리윤',
    category: { main: 'bodyhair', sub: 'body_lotion' },
    price: { currency: 'KRW', amount: 19000, rangeLabel: '10_20k' },
    skinTypes: ['dry', 'sensitive'],
    concerns: ['dryness', 'soothing', 'barrier'],
    freeFrom: ['fragrance_free'],
    textures: ['lotion'],
    useCases: ['office_dry_air', 'budget_friendly'],
    keyIngredientsKo: ['세라마이드'],
    ingredientSlugs: ['ceramide'],
    descriptionKo: '온 가족이 사용 가능한 보습 바디로션.',
    updatedAt: '2026-01-07',
    score: 82,
  },
  {
    id: 'p-012',
    slug: 'labo-h-scales-shampoo',
    nameKo: '두피 쿨링 샴푸',
    brandKo: '라보에이치',
    category: { main: 'bodyhair', sub: 'shampoo' },
    price: { currency: 'KRW', amount: 17000, rangeLabel: '10_20k' },
    concerns: ['sebum', 'soothing'],
    freeFrom: ['sulfate_free'],
    textures: ['gel'],
    useCases: ['quick_morning'],
    keyIngredientsKo: ['멘톨', '살리실산'],
    ingredientSlugs: ['menthol', 'salicylic-acid'],
    descriptionKo: '쿨링감으로 두피 열감을 완화해요.',
    updatedAt: '2026-01-09',
    score: 76,
  },
  {
    id: 'p-013',
    slug: 'medicube-zero-pore-serum',
    nameKo: '제로 모공 세럼',
    brandKo: '메디큐브',
    category: { main: 'skincare', sub: 'serum' },
    price: { currency: 'KRW', amount: 32000, rangeLabel: '30_50k' },
    skinTypes: ['oily', 'combination', 'acne_prone'],
    concerns: ['pores', 'sebum', 'texture'],
    freeFrom: ['alcohol_free'],
    textures: ['gel'],
    useCases: ['quick_morning'],
    keyIngredientsKo: ['BHA', '나이아신아마이드'],
    ingredientSlugs: ['bha', 'niacinamide'],
    descriptionKo: '번들거림과 모공 고민을 정돈해줘요.',
    updatedAt: '2026-01-12',
    score: 84,
  },
  {
    id: 'p-014',
    slug: 'peripera-ink-airy-velvet',
    nameKo: '잉크 에어리 벨벳',
    brandKo: '페리페라',
    category: { main: 'makeup', sub: 'lipstick' },
    price: { currency: 'KRW', amount: 12000, rangeLabel: '10_20k' },
    concerns: ['transfer_resistant'],
    personalColor: ['winter_cool', 'summer_cool'],
    undertone: ['cool'],
    makeupProps: {
      finish: ['matte'],
      coverage: ['high'],
      wear: ['long_wear', 'mask_proof'],
    },
    textures: ['stick'],
    useCases: ['mask_friendly', 'budget_friendly'],
    descriptionKo: '보송한 마무리와 선명한 발색.',
    updatedAt: '2026-01-13',
    score: 83,
  },
  {
    id: 'prd_beautyofjoseon-rice-probiotics-sunscreen',
    slug: 'beautyofjoseon-rice-probiotics-sunscreen',
    nameKo: '맑은쌀선크림 : 고아미+프로바이오틱스 (SPF 50+ PA++++)',
    brandKo: '조선미녀',
    category: { main: 'skincare', sub: 'sunscreen' },
    price: { currency: 'KRW', amount: 18000, rangeLabel: '10_20k' },
    skinTypes: ['normal', 'dry', 'combination', 'oily', 'sensitive'],
    concerns: ['dryness', 'barrier', 'soothing', 'redness'],
    personalColor: ['unknown'],
    sunscreenProps: {
      spf: 50,
      pa: 'PA++++',
      waterResistant: false,
      whiteCast: 'none',
      makeupCompatibility: 'good',
    },
    textures: ['cream'],
    useCases: ['outdoor_uv', 'quick_morning', 'easy_touchup'],
    keyIngredientsKo: ['쌀추출물', '곡물발효추출물(프로바이오틱스)'],
    ingredientSlugs: ['rice_extract', 'fermented_grain', 'probiotics'],
    descriptionKo:
      '가볍게 펴 발리는 데일리 유기자차 타입으로, 촉촉한 마무리감과 높은 자외선 차단 지수(SPF50+ PA++++)가 특징.',
    tipsKo: [
      '스킨케어 마지막 단계에서 2~3번에 나눠 얇게 레이어링하면 뭉침이 줄어들어요.',
      '야외 활동이 길면 2~3시간마다 덧발라 주세요(땀/마찰이 많으면 더 자주).',
    ],
    cautionsKo: [
      '눈가에 너무 가까이 바르면 자극을 느낄 수 있어요. 눈에 들어가면 즉시 씻어내세요.',
      '사용 중 붉어짐/가려움 등 이상 반응이 지속되면 사용을 중단하고 전문가와 상담하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.7,
  },
  {
    id: 'prd_drg-green-mild-up-sun-plus',
    slug: 'drg-green-mild-up-sun-plus',
    nameKo: '그린 마일드 업 선 플러스 50ml (SPF50+ PA++++)',
    brandKo: '닥터지',
    category: { main: 'skincare', sub: 'sunscreen' },
    price: { currency: 'KRW', amount: 29000, rangeLabel: '20_30k' },
    skinTypes: ['sensitive', 'acne_prone', 'combination', 'oily', 'normal'],
    concerns: ['sensitive', 'soothing', 'redness', 'long_wear'],
    personalColor: ['unknown'],
    sunscreenProps: {
      spf: 50,
      pa: 'PA++++',
      waterResistant: false,
      whiteCast: 'some',
      makeupCompatibility: 'normal',
    },
    textures: ['cream'],
    useCases: ['outdoor_uv', 'mask_friendly', 'easy_touchup'],
    keyIngredientsKo: ['무기자차(미네랄 필터)'],
    ingredientSlugs: ['mineral_uv_filters'],
    descriptionKo:
      '민감 피부를 고려한 무기자차 선크림. SPF50+ PA++++로 자외선 차단을 제공하며, 밀착력과 유지감을 강조한 타입.',
    tipsKo: [
      '각질이 들뜨는 날엔 보습 크림을 충분히 바른 뒤 선크림을 얇게 두 번 레이어링해 보세요.',
      '마스크 착용이 잦다면 코/턱 라인 위주로 얇게 바르고, 마찰 구간은 소량으로 덧바르면 덜 밀려요.',
    ],
    cautionsKo: [
      '무기자차 특성상 피부 상태/도포량에 따라 백탁이 느껴질 수 있어요.',
      '사용 중 트러블/자극이 느껴지면 사용을 중단하고 전문가와 상담하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.6,
  },
  {
    id: 'prd_anua-heartleaf-77-soothing-toner-250',
    slug: 'anua-heartleaf-77-soothing-toner-250',
    nameKo: '어성초 77 수딩 토너 250ml',
    brandKo: '아누아',
    category: { main: 'skincare', sub: 'toner' },
    price: { currency: 'KRW', amount: 20000, rangeLabel: '20_30k' },
    skinTypes: ['sensitive', 'acne_prone', 'oily', 'combination', 'dehydrated'],
    concerns: ['soothing', 'redness', 'sebum', 'barrier'],
    personalColor: ['unknown'],
    textures: ['mist'],
    useCases: ['office_dry_air', 'quick_morning', 'budget_friendly'],
    keyIngredientsKo: ['어성초추출물'],
    ingredientSlugs: ['heartleaf_extract'],
    descriptionKo:
      '어성초(Heartleaf)를 중심으로 한 진정 토너로, 세안 후 피부결 정돈 및 수분 보충에 적합한 워터 타입.',
    tipsKo: [
      '화장솜에 적셔 닦토로 사용하면 피부결 정돈에 도움돼요.',
      '자극이 느껴지면 손바닥으로 가볍게 흡수시키는 방식으로 바꿔 보세요.',
    ],
    cautionsKo: [
      '각질 제거제(AHA/BHA)와 동시에 과하게 레이어링하면 자극이 될 수 있어요.',
      '사용 중 이상 반응이 지속되면 사용을 중단하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.5,
  },
  {
    id: 'prd_cosrx-advanced-snail-96-essence',
    slug: 'cosrx-advanced-snail-96-essence',
    nameKo: '어드벤스드 스네일 96 뮤신 파워 에센스 100ml',
    brandKo: '코스알엑스',
    category: { main: 'skincare', sub: 'essence' },
    price: { currency: 'KRW', amount: 23000, rangeLabel: '20_30k' },
    skinTypes: ['dry', 'dehydrated', 'normal', 'combination', 'sensitive'],
    concerns: ['dryness', 'barrier', 'soothing', 'wrinkles', 'elasticity'],
    personalColor: ['unknown'],
    textures: ['gel'],
    useCases: ['office_dry_air', 'quick_morning', 'budget_friendly'],
    keyIngredientsKo: ['달팽이점액여과물(뮤신)', '소듐하이알루로네이트(히알루론산)'],
    ingredientSlugs: ['snail_mucin', 'sodium_hyaluronate'],
    descriptionKo:
      '점성이 있는 젤 에센스 타입으로 수분 보충과 피부 결/장벽 케어를 목표로 한 제품.',
    tipsKo: [
      '토너 후 1~2펌프를 손바닥에 덜어 얼굴 전체에 눌러 흡수시키면 끈적임이 줄어들어요.',
      '건조한 부위는 한 번 더 레이어링한 뒤 크림으로 마무리하면 좋아요.',
    ],
    cautionsKo: [
      '달팽이 유래 성분에 민감한 경우 패치 테스트 후 사용하세요.',
      '상처 부위에는 사용을 피하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.6,
  },
  {
    id: 'prd_drg-red-blemish-clear-soothing-cream-50',
    slug: 'drg-red-blemish-clear-soothing-cream-50',
    nameKo: '레드 블레미쉬 클리어 수딩 크림 50mL',
    brandKo: '닥터지',
    category: { main: 'skincare', sub: 'cream_lotion' },
    price: { currency: 'KRW', amount: 31000, rangeLabel: '30_50k' },
    skinTypes: ['sensitive', 'acne_prone', 'combination', 'oily', 'dehydrated'],
    concerns: ['soothing', 'redness', 'barrier', 'dryness'],
    personalColor: ['unknown'],
    textures: ['cream'],
    useCases: ['office_dry_air', 'mask_friendly', 'quick_morning'],
    keyIngredientsKo: [
      '나이아신아마이드',
      '판테놀',
      '병풀(시카) 성분(마데카소사이드 등)',
      '베타-글루칸',
    ],
    ingredientSlugs: ['niacinamide', 'panthenol', 'centella', 'beta_glucan'],
    descriptionKo:
      '자극 받은 피부를 빠르게 진정시키는 콘셉트의 수분 크림. 젤크림 제형으로 산뜻하게 마무리되는 편.',
    tipsKo: [
      '붉어짐이 올라오는 날엔 토너-에센스 후 얇게 한 겹, 필요한 부위만 한 번 더 올려보세요.',
      '마스크 마찰 부위(볼/턱)는 소량을 두껍지 않게 발라야 밀림이 덜해요.',
    ],
    cautionsKo: [
      '민감 피부는 새로운 성분(나이아신아마이드 등)에 반응할 수 있으니 처음엔 소량 테스트하세요.',
      '사용 중 이상 반응이 있으면 중단하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.5,
  },
  {
    id: 'prd_hera-black-cushion-foundation-duo',
    slug: 'hera-black-cushion-foundation-duo',
    nameKo: 'NEW 블랙 쿠션 파운데이션 (본품15g+리필15g) 듀오',
    brandKo: '헤라',
    category: { main: 'makeup', sub: 'cushion' },
    price: { currency: 'KRW', amount: 74000, rangeLabel: 'over_50k' },
    skinTypes: ['normal', 'combination', 'oily'],
    concerns: ['pores', 'long_wear', 'transfer_resistant'],
    personalColor: ['unknown'],
    makeupProps: {
      finish: ['semi_matte'],
      coverage: ['medium', 'high'],
      wear: ['long_wear', 'mask_proof'],
    },
    textures: ['cream', 'lotion'],
    useCases: ['quick_morning', 'mask_friendly', 'easy_touchup'],
    keyIngredientsKo: ['화이트 플라워 추출물'],
    ingredientSlugs: ['white_flower_extract'],
    descriptionKo:
      '피부에 편안한 베이스감을 강조한 쿠션 파운데이션. 커버와 밀착을 원하는 데일리 베이스 메이크업에 적합.',
    tipsKo: [
      '퍼프에 소량만 묻혀 얇게 두드린 뒤 필요한 부위만 한 번 더 레이어링하면 들뜸이 줄어요.',
      '마스크 착용 시엔 T존은 얇게, 볼/턱 라인은 더 얇게 바르면 묻어남이 덜해요.',
    ],
    cautionsKo: [
      '호수(색상) 선택에 따라 톤/언더톤 적합도가 크게 달라요.',
      '피부가 매우 건조한 날엔 기초 보습을 충분히 한 뒤 사용하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.6,
  },
  {
    id: 'prd_romand-juicy-lasting-tint-25-bare-grape',
    slug: 'romand-juicy-lasting-tint-25-bare-grape',
    nameKo: '더 쥬시 래스팅 틴트 25 베어 그레이프',
    brandKo: '롬앤',
    category: { main: 'makeup', sub: 'lip_tint' },
    price: { currency: 'KRW', amount: 9900, rangeLabel: 'under_10k' },
    personalColor: ['summer_cool', 'winter_cool'],
    undertone: ['cool'],
    makeupProps: {
      finish: ['glowy'],
      coverage: ['sheer', 'medium'],
    },
    textures: ['lotion'],
    useCases: ['quick_morning', 'easy_touchup', 'travel_size'],
    descriptionKo:
      '쿨톤에 잘 어울리는 포도빛 MLBB 계열로, 과즙처럼 맑고 촉촉한 광택감을 살린 틴트.',
    tipsKo: [
      '입술 각질이 많으면 먼저 립밤을 얇게 바르고 3분 뒤 티슈로 눌러낸 후 발라보세요.',
      '안쪽에 한 번 더 올린 뒤 경계만 살짝 블렌딩하면 그라데이션이 예쁘게 나와요.',
    ],
    cautionsKo: [
      '착색(틴팅)이 남을 수 있어요. 색이 빠질 때 건조함이 느껴지면 립밤을 덧발라 주세요.',
      '입술에 상처/염증이 있으면 따가울 수 있어요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.7,
  },
  {
    id: 'prd_laneige-lip-sleeping-mask-ex-20g',
    slug: 'laneige-lip-sleeping-mask-ex-20g',
    nameKo: '립 슬리핑 마스크 EX 20g',
    brandKo: '라네즈',
    category: { main: 'makeup', sub: 'lip_balm' },
    price: { currency: 'KRW', amount: 22000, rangeLabel: '20_30k' },
    concerns: ['dryness', 'texture'],
    personalColor: ['unknown'],
    textures: ['balm'],
    useCases: ['office_dry_air', 'quick_morning', 'travel_size'],
    keyIngredientsKo: ['베리 과일 콤플렉스', '비타민C', '코코넛 오일', '시어버터'],
    ingredientSlugs: ['berry_complex', 'vitamin_c', 'coconut_oil', 'shea_butter'],
    descriptionKo:
      '밤 사이 입술 각질을 부드럽게 케어하고 다음 날 촉촉한 컨디션을 만들어주는 슬리핑 립 마스크.',
    tipsKo: [
      '잠들기 전에 두껍지 않게 한 겹 바르고, 특히 건조한 부위만 소량 추가로 올려보세요.',
      '아침엔 티슈로 가볍게 닦아낸 후 립 메이크업을 하면 밀림이 덜해요.',
    ],
    cautionsKo: [
      '향/플레이버에 민감하다면 성분과 향을 확인 후 사용하세요.',
      '입술에 자극이 느껴지면 사용 빈도를 줄이거나 중단하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.6,
  },
  {
    id: 'prd_illiyoon-ceramide-ato-lotion-564x2',
    slug: 'illiyoon-ceramide-ato-lotion-564x2',
    nameKo: '세라마이드 아토 로션 564ml 패밀리세트 (564ml x 2)',
    brandKo: '일리윤',
    category: { main: 'bodyhair', sub: 'body_lotion' },
    price: { currency: 'KRW', amount: 37800, rangeLabel: '30_50k' },
    skinTypes: ['dry', 'sensitive', 'normal', 'dehydrated'],
    concerns: ['dryness', 'barrier', 'soothing'],
    personalColor: ['unknown'],
    freeFrom: ['fragrance_free'],
    textures: ['lotion'],
    useCases: ['office_dry_air', 'budget_friendly'],
    keyIngredientsKo: [
      '세라마이드(세라마이드NP/CPP)',
      '마데카소사이드',
      '스쿠알란',
      '콜레스테롤',
    ],
    ingredientSlugs: ['ceramide', 'madecassoside', 'squalane', 'cholesterol'],
    descriptionKo:
      '민감/건조 피부를 위한 장벽 보습 바디 로션. 대용량 세트 구성으로 온몸 보습용으로 적합.',
    tipsKo: [
      '샤워 직후 물기가 살짝 남아 있을 때 바르면 흡수가 더 편해요.',
      '팔꿈치/정강이처럼 건조한 부위는 한 번 더 덧발라 주세요.',
    ],
    cautionsKo: [
      '향료를 넣지 않아 원료 고유의 냄새가 느껴질 수 있어요.',
      '눈에 들어가지 않도록 주의하고, 이상 반응이 있으면 중단하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.6,
  },
  {
    id: 'prd_aromatica-rosemary-scalp-scaling-shampoo-400',
    slug: 'aromatica-rosemary-scalp-scaling-shampoo-400',
    nameKo: '[탈모케어] 로즈마리 스칼프 스케일링 샴푸 400ml',
    brandKo: '아로마티카',
    category: { main: 'bodyhair', sub: 'shampoo' },
    price: { currency: 'KRW', amount: 26000, rangeLabel: '20_30k' },
    concerns: ['sebum', 'texture', 'soothing'],
    personalColor: ['unknown'],
    textures: ['gel'],
    useCases: ['budget_friendly', 'quick_morning'],
    keyIngredientsKo: [
      '로즈마리 에센셜오일',
      '프로바이오틱스(비피다/락토바실러스 발효)',
      '카페인',
      '바이오틴',
      '덱스판테놀(B5)',
      '살리실릭애씨드',
    ],
    ingredientSlugs: [
      'rosemary_oil',
      'probiotics',
      'caffeine',
      'biotin',
      'panthenol',
      'salicylic_acid',
    ],
    descriptionKo:
      '두피 각질 케어와 탈모 증상 완화 기능성을 표방한 두피 샴푸. 로즈마리 향이 특징이며, 세정과 두피 밸런스 케어를 목표로 함.',
    tipsKo: [
      '미온수로 두피를 충분히 적신 뒤, 거품을 낸 다음 두피 중심으로 2~3분 마사지해 보세요.',
      '각질이 많은 날엔 두피에만 2차 세정을 짧게 추가하는 방식이 부담이 덜해요.',
    ],
    cautionsKo: [
      '에센셜오일 및 향 알레르겐(리모넨 등)에 민감하면 자극이 있을 수 있어요.',
      '눈에 들어가면 즉시 씻어내고, 두피 트러블이 악화되면 사용을 중단하세요.',
    ],
    updatedAt: '2026-01-19',
    score: 4.5,
  },
];
