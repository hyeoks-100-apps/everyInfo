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
];
