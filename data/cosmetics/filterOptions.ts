export const categoryGroups = [
  {
    label: '스킨케어',
    main: 'skincare',
    options: [
      { value: 'cleanser', label: '클렌저' },
      { value: 'cleansing_oil_balm', label: '클렌징오일/밤' },
      { value: 'toner', label: '토너' },
      { value: 'essence', label: '에센스/앰플/세럼' },
      { value: 'serum', label: '에센스/앰플/세럼' },
      { value: 'cream_lotion', label: '크림/로션' },
      { value: 'eye_cream', label: '아이크림' },
      { value: 'mask_pack', label: '마스크/팩' },
      { value: 'exfoliator', label: '각질케어(AHA/BHA/PHA)' },
      { value: 'spot', label: '스팟케어' },
      { value: 'sunscreen', label: '선크림' },
    ],
  },
  {
    label: '메이크업',
    main: 'makeup',
    options: [
      { value: 'primer', label: '프라이머' },
      { value: 'cushion', label: '쿠션' },
      { value: 'foundation', label: '파운데이션' },
      { value: 'concealer', label: '컨실러' },
      { value: 'powder', label: '파우더/픽서' },
      { value: 'cheek', label: '치크/컨투어/하이라이터' },
      { value: 'eye_shadow', label: '섀도' },
      { value: 'eyeliner', label: '아이라이너' },
      { value: 'mascara', label: '마스카라' },
      { value: 'eyebrow', label: '아이브로우' },
      { value: 'lip_tint', label: '틴트' },
      { value: 'lipstick', label: '립스틱' },
      { value: 'lip_balm', label: '립밤' },
      { value: 'lip_gloss', label: '글로스' },
    ],
  },
  {
    label: '바디/헤어',
    main: 'bodyhair',
    options: [
      { value: 'body_wash', label: '바디워시' },
      { value: 'body_lotion', label: '바디로션' },
      { value: 'hand_cream', label: '핸드크림' },
      { value: 'shampoo', label: '샴푸' },
      { value: 'conditioner', label: '컨디셔너' },
      { value: 'treatment', label: '트리트먼트' },
    ],
  },
];

export const priceRanges = [
  { value: 'under_10k', label: '1만원 이하' },
  { value: '10_20k', label: '1~2만원' },
  { value: '20_30k', label: '2~3만원' },
  { value: '30_50k', label: '3~5만원' },
  { value: 'over_50k', label: '5만원 이상' },
];

export const skinTypeOptions = [
  { value: 'oily', label: '지성' },
  { value: 'dry', label: '건성' },
  { value: 'combination', label: '복합성' },
  { value: 'normal', label: '중성' },
  { value: 'dehydrated', label: '수부지(속건조)' },
  { value: 'sensitive', label: '민감성' },
  { value: 'acne_prone', label: '여드름성(트러블)' },
  { value: 'redness', label: '홍조/열감' },
  { value: 'atopy', label: '아토피 경향' },
  { value: 'mature', label: '성숙피부(탄력저하)' },
];

export const concernOptions = [
  { value: 'acne', label: '여드름/트러블' },
  { value: 'sebum', label: '피지/유분' },
  { value: 'pores', label: '모공/블랙헤드' },
  { value: 'dryness', label: '건조/당김' },
  { value: 'dehydrated', label: '속건조' },
  { value: 'texture', label: '각질/결' },
  { value: 'sensitive', label: '민감/따가움' },
  { value: 'soothing', label: '진정/장벽' },
  { value: 'redness', label: '홍조' },
  { value: 'brightening', label: '톤개선/칙칙함' },
  { value: 'dark_spots', label: '잡티/색소침착' },
  { value: 'wrinkles', label: '주름/탄력' },
  { value: 'dark_circles', label: '다크서클' },
  { value: 'long_wear', label: '지속력' },
  { value: 'transfer_resistant', label: '마스크 묻어남' },
];

export const personalColorOptions = [
  { value: 'spring_warm', label: '봄 웜' },
  { value: 'summer_cool', label: '여름 쿨' },
  { value: 'autumn_warm', label: '가을 웜' },
  { value: 'winter_cool', label: '겨울 쿨' },
  { value: 'neutral', label: '뉴트럴' },
  { value: 'unknown', label: '모름' },
];

export const undertoneOptions = [
  { value: 'warm', label: '웜' },
  { value: 'cool', label: '쿨' },
  { value: 'neutral', label: '뉴트럴' },
];

export const finishOptions = [
  { value: 'matte', label: '매트' },
  { value: 'semi_matte', label: '세미매트' },
  { value: 'natural', label: '내추럴' },
  { value: 'glowy', label: '글로우/물광' },
];

export const coverageOptions = [
  { value: 'sheer', label: '낮음' },
  { value: 'medium', label: '중간' },
  { value: 'high', label: '높음' },
];

export const wearOptions = [
  { value: 'long_wear', label: '롱웨어' },
  { value: 'mask_proof', label: '마스크프루프' },
  { value: 'waterproof', label: '워터프루프' },
];

export const spfOptions = [
  { value: '30', label: 'SPF 30+' },
  { value: '50', label: 'SPF 50+' },
];

export const paOptions = [
  { value: 'PA+++', label: 'PA+++' },
  { value: 'PA++++', label: 'PA++++' },
];

export const waterResistantOptions = [
  { value: 'true', label: '워터프루프 있음' },
  { value: 'false', label: '워터프루프 없음' },
];

export const whiteCastOptions = [
  { value: 'none', label: '백탁 없음' },
  { value: 'some', label: '백탁 약간' },
  { value: 'yes', label: '백탁 있음' },
];

export const makeupCompatibilityOptions = [
  { value: 'good', label: '메컵 잘 먹음' },
  { value: 'normal', label: '보통' },
  { value: 'pills', label: '밀림' },
];

export const freeFromOptions = [
  { value: 'fragrance_free', label: '무향' },
  { value: 'alcohol_free', label: '알코올 프리' },
  { value: 'essential_oil_free', label: '에센셜오일 프리' },
  { value: 'silicone_free', label: '실리콘 프리' },
  { value: 'paraben_free', label: '파라벤 프리' },
  { value: 'sulfate_free', label: '설페이트 프리' },
];

export const ethicsOptions = [
  { value: 'vegan', label: '비건' },
  { value: 'cruelty_free', label: '크루얼티 프리' },
];

export const textureOptions = [
  { value: 'gel', label: '젤' },
  { value: 'lotion', label: '로션' },
  { value: 'cream', label: '크림' },
  { value: 'oil', label: '오일' },
  { value: 'balm', label: '밤' },
  { value: 'stick', label: '스틱' },
  { value: 'mist', label: '미스트' },
  { value: 'powder', label: '파우더' },
];

export const useCaseOptions = [
  { value: 'quick_morning', label: '빠른 출근용' },
  { value: 'easy_touchup', label: '수정 화장 쉬움' },
  { value: 'mask_friendly', label: '마스크 착용/이염 적음' },
  { value: 'office_dry_air', label: '사무실 건조' },
  { value: 'outdoor_uv', label: '야외활동 많음' },
  { value: 'budget_friendly', label: '가성비(학생용)' },
  { value: 'travel_size', label: '휴대성/여행용' },
];

export const sortOptions = [
  { value: 'recommended', label: '추천순' },
  { value: 'latest', label: '최신순' },
  { value: 'price_low', label: '가격 낮은순' },
  { value: 'price_high', label: '가격 높은순' },
];
