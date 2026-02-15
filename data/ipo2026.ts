export type IpoOffering = {
  id: string;
  slug: string;
  companyNameKo: string;
  companyNameEn?: string;
  market: 'KOSPI' | 'KOSDAQ' | 'KONEX' | '미정';
  industry: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  listingDate?: string;
  refundDate?: string;
  leadManagers: string[];
  offerPriceBand: {
    min: number;
    max: number;
    currency: 'KRW';
  };
  confirmedOfferPrice?: number;
  competitionRates?: {
    institutionalDemandForecast?: string;
    retailSubscription?: string;
  };
  minimumSubscriptionShares?: number;
  minimumDepositKrW?: number;
  officialNoticeUrl: string;
  investmentWarning: string;
  lastUpdatedAt: string;
};

export const ipoOfferings2026: IpoOffering[] = [
  {
    id: 'seoul-ai-robotics-2026',
    slug: 'seoul-ai-robotics',
    companyNameKo: '서울AI로보틱스',
    companyNameEn: 'Seoul AI Robotics',
    market: 'KOSDAQ',
    industry: '지능형 로봇·자동화',
    subscriptionStartDate: '2026-03-09',
    subscriptionEndDate: '2026-03-10',
    listingDate: '2026-03-18',
    refundDate: '2026-03-12',
    leadManagers: ['한국투자증권', 'NH투자증권'],
    offerPriceBand: {
      min: 18000,
      max: 22000,
      currency: 'KRW',
    },
    confirmedOfferPrice: 21000,
    competitionRates: {
      institutionalDemandForecast: '1210.4:1',
      retailSubscription: '34.8:1',
    },
    minimumSubscriptionShares: 10,
    minimumDepositKrW: 105000,
    officialNoticeUrl: 'https://example.com/ipo/seoul-ai-robotics',
    investmentWarning:
      '예시 데이터입니다. 실제 청약 전 증권신고서/정정신고서와 주관사 공지를 반드시 확인하세요.',
    lastUpdatedAt: '2026-02-10',
  },
  {
    id: 'hanriver-biohealth-2026',
    slug: 'hanriver-biohealth',
    companyNameKo: '한강바이오헬스',
    companyNameEn: 'Hangang BioHealth',
    market: 'KOSPI',
    industry: '바이오·헬스케어',
    subscriptionStartDate: '2026-04-14',
    subscriptionEndDate: '2026-04-15',
    listingDate: '2026-04-24',
    refundDate: '2026-04-17',
    leadManagers: ['미래에셋증권'],
    offerPriceBand: {
      min: 26000,
      max: 32000,
      currency: 'KRW',
    },
    minimumSubscriptionShares: 10,
    minimumDepositKrW: 130000,
    officialNoticeUrl: 'https://example.com/ipo/hanriver-biohealth',
    investmentWarning:
      '예시 데이터입니다. 실제 청약 전 증권신고서/정정신고서와 주관사 공지를 반드시 확인하세요.',
    lastUpdatedAt: '2026-02-10',
  },
];
