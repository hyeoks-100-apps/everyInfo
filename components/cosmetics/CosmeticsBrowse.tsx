'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { products, type Product } from '../../data/cosmetics/products';
import {
  categoryGroups,
  concernOptions,
  coverageOptions,
  ethicsOptions,
  finishOptions,
  freeFromOptions,
  makeupCompatibilityOptions,
  paOptions,
  personalColorOptions,
  priceRanges,
  skinTypeOptions,
  sortOptions,
  spfOptions,
  textureOptions,
  undertoneOptions,
  useCaseOptions,
  waterResistantOptions,
  wearOptions,
  whiteCastOptions,
} from '../../data/cosmetics/filterOptions';

type FilterState = {
  q: string;
  brands: string[];
  category: string[];
  priceRanges: string[];
  priceMin: string;
  priceMax: string;
  skinTypes: string[];
  concerns: string[];
  personalColor: string[];
  undertone: string[];
  finish: string[];
  coverage: string[];
  wear: string[];
  spf: string[];
  pa: string[];
  waterResistant: string[];
  whiteCast: string[];
  makeupCompatibility: string[];
  freeFrom: string[];
  ethics: string[];
  textures: string[];
  useCases: string[];
  sort: string;
  page: number;
};

const DEFAULT_SORT = 'recommended';
const DEFAULT_PAGE = 1;
const PER_PAGE = 12;

const parseList = (value: string | null) =>
  value ? value.split(',').filter(Boolean) : [];

const parseNumber = (value: string | null) => {
  if (!value) return '';
  return Number.isNaN(Number(value)) ? '' : value;
};

const buildLabelMap = (
  groups: Array<{ value: string; label: string }>
) =>
  groups.reduce<Record<string, string>>((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {});

const categoryLabelMap = categoryGroups.flatMap((group) => group.options);

const labelMaps = {
  category: buildLabelMap(categoryLabelMap),
  price: buildLabelMap(priceRanges),
  skin: buildLabelMap(skinTypeOptions),
  concern: buildLabelMap(concernOptions),
  personalColor: buildLabelMap(personalColorOptions),
  undertone: buildLabelMap(undertoneOptions),
  finish: buildLabelMap(finishOptions),
  coverage: buildLabelMap(coverageOptions),
  wear: buildLabelMap(wearOptions),
  spf: buildLabelMap(spfOptions),
  pa: buildLabelMap(paOptions),
  waterResistant: buildLabelMap(waterResistantOptions),
  whiteCast: buildLabelMap(whiteCastOptions),
  makeupCompatibility: buildLabelMap(makeupCompatibilityOptions),
  freeFrom: buildLabelMap(freeFromOptions),
  ethics: buildLabelMap(ethicsOptions),
  texture: buildLabelMap(textureOptions),
  useCase: buildLabelMap(useCaseOptions),
};

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('ko-KR').format(amount);

const sortProducts = (items: Product[], sort: string) => {
  switch (sort) {
    case 'latest':
      return [...items].sort(
        (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
      );
    case 'price_low':
      return [...items].sort((a, b) => a.price.amount - b.price.amount);
    case 'price_high':
      return [...items].sort((a, b) => b.price.amount - a.price.amount);
    case 'recommended':
    default:
      return [...items].sort((a, b) => {
        const scoreDiff = (b.score ?? 0) - (a.score ?? 0);
        if (scoreDiff !== 0) return scoreDiff;
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
      });
  }
};

const matchesAny = (selected: string[], values?: string[] | string) => {
  if (selected.length === 0) return true;
  if (!values) return false;
  if (Array.isArray(values)) {
    return values.some((value) => selected.includes(value));
  }
  return selected.includes(values);
};

const matchesAll = (selected: string[], values?: string[]) => {
  if (selected.length === 0) return true;
  if (!values) return false;
  return selected.every((value) => values.includes(value));
};

const getTags = (product: Product) => {
  const tags = [
    ...(product.concerns ?? []),
    ...(product.skinTypes ?? []),
    ...(product.personalColor ?? []),
    ...(product.makeupProps?.finish ?? []),
    ...(product.makeupProps?.wear ?? []),
    ...(product.sunscreenProps?.spf ? [`spf_${product.sunscreenProps.spf}`] : []),
  ];
  const labelMap: Record<string, string> = {
    ...labelMaps.concern,
    ...labelMaps.skin,
    ...labelMaps.personalColor,
    ...labelMaps.finish,
    ...labelMaps.wear,
    spf_30: 'SPF 30+',
    spf_50: 'SPF 50+',
  };
  return tags
    .filter((tag, index) => tags.indexOf(tag) === index)
    .map((tag) => labelMap[tag] ?? tag)
    .slice(0, 5);
};

const initialStateFromParams = (searchParams: URLSearchParams): FilterState => {
  const pageValue = Number(searchParams.get('page') ?? DEFAULT_PAGE);
  return {
    q: searchParams.get('q') ?? '',
    brands: parseList(searchParams.get('brand')),
    category: parseList(searchParams.get('category')),
    priceRanges: parseList(searchParams.get('price')),
    priceMin: parseNumber(searchParams.get('minPrice')),
    priceMax: parseNumber(searchParams.get('maxPrice')),
    skinTypes: parseList(searchParams.get('skin')),
    concerns: parseList(searchParams.get('concern')),
    personalColor: parseList(searchParams.get('tone')),
    undertone: parseList(searchParams.get('undertone')),
    finish: parseList(searchParams.get('finish')),
    coverage: parseList(searchParams.get('coverage')),
    wear: parseList(searchParams.get('wear')),
    spf: parseList(searchParams.get('spf')),
    pa: parseList(searchParams.get('pa')),
    waterResistant: parseList(searchParams.get('waterResistant')),
    whiteCast: parseList(searchParams.get('whiteCast')),
    makeupCompatibility: parseList(searchParams.get('makeupCompatibility')),
    freeFrom: parseList(searchParams.get('freeFrom')),
    ethics: parseList(searchParams.get('ethics')),
    textures: parseList(searchParams.get('texture')),
    useCases: parseList(searchParams.get('useCase')),
    sort: searchParams.get('sort') ?? DEFAULT_SORT,
    page: Number.isNaN(pageValue) ? DEFAULT_PAGE : pageValue,
  };
};

const buildSearchParams = (state: FilterState) => {
  const params = new URLSearchParams();
  if (state.q) params.set('q', state.q);
  if (state.brands.length) params.set('brand', state.brands.join(','));
  if (state.category.length) params.set('category', state.category.join(','));
  if (state.priceRanges.length)
    params.set('price', state.priceRanges.join(','));
  if (state.priceMin) params.set('minPrice', state.priceMin);
  if (state.priceMax) params.set('maxPrice', state.priceMax);
  if (state.skinTypes.length) params.set('skin', state.skinTypes.join(','));
  if (state.concerns.length) params.set('concern', state.concerns.join(','));
  if (state.personalColor.length)
    params.set('tone', state.personalColor.join(','));
  if (state.undertone.length)
    params.set('undertone', state.undertone.join(','));
  if (state.finish.length) params.set('finish', state.finish.join(','));
  if (state.coverage.length) params.set('coverage', state.coverage.join(','));
  if (state.wear.length) params.set('wear', state.wear.join(','));
  if (state.spf.length) params.set('spf', state.spf.join(','));
  if (state.pa.length) params.set('pa', state.pa.join(','));
  if (state.waterResistant.length)
    params.set('waterResistant', state.waterResistant.join(','));
  if (state.whiteCast.length)
    params.set('whiteCast', state.whiteCast.join(','));
  if (state.makeupCompatibility.length)
    params.set('makeupCompatibility', state.makeupCompatibility.join(','));
  if (state.freeFrom.length) params.set('freeFrom', state.freeFrom.join(','));
  if (state.ethics.length) params.set('ethics', state.ethics.join(','));
  if (state.textures.length) params.set('texture', state.textures.join(','));
  if (state.useCases.length) params.set('useCase', state.useCases.join(','));
  if (state.sort !== DEFAULT_SORT) params.set('sort', state.sort);
  if (state.page > 1) params.set('page', String(state.page));
  return params;
};

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="filter-section">
    <h3>{title}</h3>
    {children}
  </section>
);

export default function CosmeticsBrowse() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [state, setState] = useState<FilterState>(() =>
    initialStateFromParams(searchParams)
  );

  useEffect(() => {
    setState(initialStateFromParams(searchParams));
  }, [searchParams]);

  useEffect(() => {
    const params = buildSearchParams(state);
    const nextQuery = params.toString();
    const currentQuery = searchParams.toString();
    if (nextQuery !== currentQuery) {
      const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
      router.replace(nextUrl, { scroll: false });
    }
  }, [state, pathname, router, searchParams]);

  useEffect(() => {
    if (!isFilterOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFilterOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFilterOpen]);

  const updateState = (partial: Partial<FilterState>) => {
    setState((prev) => ({ ...prev, ...partial, page: 1 }));
  };

  const toggleValue = (key: keyof FilterState, value: string) => {
    setState((prev) => {
      const current = new Set(prev[key] as string[]);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      return { ...prev, [key]: Array.from(current), page: 1 };
    });
  };

  const resetFilters = () => {
    setState({
      q: '',
      brands: [],
      category: [],
      priceRanges: [],
      priceMin: '',
      priceMax: '',
      skinTypes: [],
      concerns: [],
      personalColor: [],
      undertone: [],
      finish: [],
      coverage: [],
      wear: [],
      spf: [],
      pa: [],
      waterResistant: [],
      whiteCast: [],
      makeupCompatibility: [],
      freeFrom: [],
      ethics: [],
      textures: [],
      useCases: [],
      sort: DEFAULT_SORT,
      page: DEFAULT_PAGE,
    });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 대부분의 다중 선택 필터는 OR 매칭, freeFrom은 AND 매칭으로 처리합니다.
      const priceMatches =
        state.priceRanges.length === 0 ||
        state.priceRanges.includes(product.price.rangeLabel ?? '');
      const min = state.priceMin ? Number(state.priceMin) : null;
      const max = state.priceMax ? Number(state.priceMax) : null;
      const manualPriceMatches =
        (min === null || product.price.amount >= min) &&
        (max === null || product.price.amount <= max);

      const searchTarget = [
        product.nameKo,
        product.brandKo,
        ...(product.keyIngredientsKo ?? []),
      ]
        .join(' ')
        .toLowerCase();
      const queryMatches = state.q
        ? searchTarget.includes(state.q.toLowerCase())
        : true;

      return (
        matchesAny(state.brands, product.brandKo) &&
        matchesAny(state.category, product.category.sub) &&
        priceMatches &&
        manualPriceMatches &&
        matchesAny(state.skinTypes, product.skinTypes) &&
        matchesAny(state.concerns, product.concerns) &&
        matchesAny(state.personalColor, product.personalColor) &&
        matchesAny(state.undertone, product.undertone) &&
        matchesAny(state.finish, product.makeupProps?.finish) &&
        matchesAny(state.coverage, product.makeupProps?.coverage) &&
        matchesAny(state.wear, product.makeupProps?.wear) &&
        matchesAny(
          state.spf,
          product.sunscreenProps?.spf ? String(product.sunscreenProps.spf) : undefined
        ) &&
        matchesAny(state.pa, product.sunscreenProps?.pa) &&
        matchesAny(
          state.waterResistant,
          product.sunscreenProps?.waterResistant !== undefined
            ? String(product.sunscreenProps.waterResistant)
            : undefined
        ) &&
        matchesAny(state.whiteCast, product.sunscreenProps?.whiteCast) &&
        matchesAny(
          state.makeupCompatibility,
          product.sunscreenProps?.makeupCompatibility
        ) &&
        matchesAll(state.freeFrom, product.freeFrom) &&
        matchesAny(state.ethics, product.ethics) &&
        matchesAny(state.textures, product.textures) &&
        matchesAny(state.useCases, product.useCases) &&
        queryMatches
      );
    });
  }, [state]);

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, state.sort),
    [filteredProducts, state.sort]
  );

  const total = sortedProducts.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const currentPage = Math.min(state.page, totalPages);
  const pagedProducts = sortedProducts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  useEffect(() => {
    if (state.page > totalPages) {
      setState((prev) => ({ ...prev, page: totalPages }));
    }
  }, [state.page, totalPages]);

  const selectedChips = useMemo(() => {
    const chips: Array<{
      id: string;
      label: string;
      key: keyof FilterState;
      value: string;
    }> = [];
    if (state.q) {
      chips.push({
        id: `q-${state.q}`,
        label: `검색: ${state.q}`,
        key: 'q',
        value: state.q,
      });
    }
    state.brands.forEach((value) =>
      chips.push({
        id: `brand-${value}`,
        label: value,
        key: 'brands',
        value,
      })
    );
    state.category.forEach((value) =>
      chips.push({
        id: `category-${value}`,
        label: labelMaps.category[value] ?? value,
        key: 'category',
        value,
      })
    );
    state.priceRanges.forEach((value) =>
      chips.push({
        id: `price-${value}`,
        label: labelMaps.price[value] ?? value,
        key: 'priceRanges',
        value,
      })
    );
    state.skinTypes.forEach((value) =>
      chips.push({
        id: `skin-${value}`,
        label: labelMaps.skin[value] ?? value,
        key: 'skinTypes',
        value,
      })
    );
    state.concerns.forEach((value) =>
      chips.push({
        id: `concern-${value}`,
        label: labelMaps.concern[value] ?? value,
        key: 'concerns',
        value,
      })
    );
    state.personalColor.forEach((value) =>
      chips.push({
        id: `tone-${value}`,
        label: labelMaps.personalColor[value] ?? value,
        key: 'personalColor',
        value,
      })
    );
    state.undertone.forEach((value) =>
      chips.push({
        id: `undertone-${value}`,
        label: labelMaps.undertone[value] ?? value,
        key: 'undertone',
        value,
      })
    );
    state.finish.forEach((value) =>
      chips.push({
        id: `finish-${value}`,
        label: labelMaps.finish[value] ?? value,
        key: 'finish',
        value,
      })
    );
    state.coverage.forEach((value) =>
      chips.push({
        id: `coverage-${value}`,
        label: labelMaps.coverage[value] ?? value,
        key: 'coverage',
        value,
      })
    );
    state.wear.forEach((value) =>
      chips.push({
        id: `wear-${value}`,
        label: labelMaps.wear[value] ?? value,
        key: 'wear',
        value,
      })
    );
    state.spf.forEach((value) =>
      chips.push({
        id: `spf-${value}`,
        label: labelMaps.spf[value] ?? value,
        key: 'spf',
        value,
      })
    );
    state.pa.forEach((value) =>
      chips.push({
        id: `pa-${value}`,
        label: labelMaps.pa[value] ?? value,
        key: 'pa',
        value,
      })
    );
    state.waterResistant.forEach((value) =>
      chips.push({
        id: `water-${value}`,
        label: labelMaps.waterResistant[value] ?? value,
        key: 'waterResistant',
        value,
      })
    );
    state.whiteCast.forEach((value) =>
      chips.push({
        id: `white-${value}`,
        label: labelMaps.whiteCast[value] ?? value,
        key: 'whiteCast',
        value,
      })
    );
    state.makeupCompatibility.forEach((value) =>
      chips.push({
        id: `compat-${value}`,
        label: labelMaps.makeupCompatibility[value] ?? value,
        key: 'makeupCompatibility',
        value,
      })
    );
    state.freeFrom.forEach((value) =>
      chips.push({
        id: `free-${value}`,
        label: labelMaps.freeFrom[value] ?? value,
        key: 'freeFrom',
        value,
      })
    );
    state.ethics.forEach((value) =>
      chips.push({
        id: `ethics-${value}`,
        label: labelMaps.ethics[value] ?? value,
        key: 'ethics',
        value,
      })
    );
    state.textures.forEach((value) =>
      chips.push({
        id: `texture-${value}`,
        label: labelMaps.texture[value] ?? value,
        key: 'textures',
        value,
      })
    );
    state.useCases.forEach((value) =>
      chips.push({
        id: `use-${value}`,
        label: labelMaps.useCase[value] ?? value,
        key: 'useCases',
        value,
      })
    );
    return chips;
  }, [state]);

  const removeChip = (chip: { key: keyof FilterState; value: string }) => {
    if (chip.key === 'q') {
      updateState({ q: '' });
      return;
    }
    setState((prev) => {
      const nextValues = (prev[chip.key] as string[]).filter(
        (value) => value !== chip.value
      );
      return { ...prev, [chip.key]: nextValues, page: 1 };
    });
  };

  const FilterPanel = () => (
    <div className="filter-panel cosmetics-filter-panel">
      <FilterSection title="브랜드">
        <div className="filter-options">
          {[...new Set(products.map((product) => product.brandKo))].map(
            (brand) => (
              <label key={brand} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.brands.includes(brand)}
                  onChange={() => toggleValue('brands', brand)}
                />
                {brand}
              </label>
            )
          )}
        </div>
      </FilterSection>
      <FilterSection title="카테고리">
        {categoryGroups.map((group) => (
          <div key={group.label} className="filter-group">
            <span className="filter-group-label">{group.label}</span>
            <div className="filter-options">
              {group.options.map((option) => (
                <label key={option.value} className="filter-option">
                  <input
                    type="checkbox"
                    checked={state.category.includes(option.value)}
                    onChange={() => toggleValue('category', option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="가격대">
        <div className="filter-options">
          {priceRanges.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.priceRanges.includes(option.value)}
                onChange={() => toggleValue('priceRanges', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="price-range-inputs">
          <input
            type="number"
            inputMode="numeric"
            placeholder="최소"
            value={state.priceMin}
            onChange={(event) => updateState({ priceMin: event.target.value })}
          />
          <span>~</span>
          <input
            type="number"
            inputMode="numeric"
            placeholder="최대"
            value={state.priceMax}
            onChange={(event) => updateState({ priceMax: event.target.value })}
          />
        </div>
      </FilterSection>

      <FilterSection title="피부타입/상태">
        <div className="filter-options">
          {skinTypeOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.skinTypes.includes(option.value)}
                onChange={() => toggleValue('skinTypes', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="피부 고민">
        <div className="filter-options">
          {concernOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.concerns.includes(option.value)}
                onChange={() => toggleValue('concerns', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="퍼스널컬러/톤">
        <div className="filter-options">
          {personalColorOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.personalColor.includes(option.value)}
                onChange={() => toggleValue('personalColor', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="filter-options">
          {undertoneOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.undertone.includes(option.value)}
                onChange={() => toggleValue('undertone', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="메이크업 특성">
        <div className="filter-group">
          <span className="filter-group-label">마감감</span>
          <div className="filter-options">
            {finishOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.finish.includes(option.value)}
                  onChange={() => toggleValue('finish', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-group-label">커버력</span>
          <div className="filter-options">
            {coverageOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.coverage.includes(option.value)}
                  onChange={() => toggleValue('coverage', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-group-label">지속력/상황</span>
          <div className="filter-options">
            {wearOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.wear.includes(option.value)}
                  onChange={() => toggleValue('wear', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </FilterSection>

      <FilterSection title="선케어 특성">
        <div className="filter-group">
          <span className="filter-group-label">SPF/PA</span>
          <div className="filter-options">
            {spfOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.spf.includes(option.value)}
                  onChange={() => toggleValue('spf', option.value)}
                />
                {option.label}
              </label>
            ))}
            {paOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.pa.includes(option.value)}
                  onChange={() => toggleValue('pa', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-group-label">워터프루프/백탁</span>
          <div className="filter-options">
            {waterResistantOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.waterResistant.includes(option.value)}
                  onChange={() => toggleValue('waterResistant', option.value)}
                />
                {option.label}
              </label>
            ))}
            {whiteCastOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.whiteCast.includes(option.value)}
                  onChange={() => toggleValue('whiteCast', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-group-label">메이크업 궁합</span>
          <div className="filter-options">
            {makeupCompatibilityOptions.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={state.makeupCompatibility.includes(option.value)}
                  onChange={() => toggleValue('makeupCompatibility', option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </FilterSection>

      <FilterSection title="성분/프리프롬">
        <p className="filter-helper">프리프롬은 모두 만족해야 적용됩니다.</p>
        <div className="filter-options">
          {freeFromOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.freeFrom.includes(option.value)}
                onChange={() => toggleValue('freeFrom', option.value)}
              />
              {option.label}
            </label>
          ))}
          {ethicsOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.ethics.includes(option.value)}
                onChange={() => toggleValue('ethics', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="텍스처/제형">
        <div className="filter-options">
          {textureOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.textures.includes(option.value)}
                onChange={() => toggleValue('textures', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="사용 맥락">
        <div className="filter-options">
          {useCaseOptions.map((option) => (
            <label key={option.value} className="filter-option">
              <input
                type="checkbox"
                checked={state.useCases.includes(option.value)}
                onChange={() => toggleValue('useCases', option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="filter-reset full-width" type="button" onClick={resetFilters}>
        필터 초기화
      </button>
    </div>
  );

  return (
    <div className="cosmetics-browse">
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="제품명, 브랜드, 성분으로 검색"
          value={state.q}
          onChange={(event) => updateState({ q: event.target.value })}
        />
        <button
          className="filter-toggle"
          type="button"
          onClick={() => setIsFilterOpen(true)}
        >
          필터
        </button>
      </div>
      <p className="section-description cosmetics-note">
        표시는 참고용이며 개인차가 있어요. 민감 피부는 패치 테스트를 권장해요.
      </p>

      <div className="cosmetics-layout">
        <aside className="filter-sidebar">
          <FilterPanel />
        </aside>

        <section className="results-section">
          <div className="results-header">
            <div className="results-summary">
              <strong>총 {total}개</strong>
            </div>
            <label className="sort-control">
              <span>정렬</span>
              <select
                value={state.sort}
                onChange={(event) => updateState({ sort: event.target.value })}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {selectedChips.length > 0 && (
            <div className="chip-row">
              {selectedChips.map((chip) => (
                <button
                  key={chip.id}
                  className="chip"
                  type="button"
                  onClick={() => removeChip(chip)}
                >
                  {chip.label}
                  <span aria-hidden="true">×</span>
                </button>
              ))}
              <button className="chip-reset" type="button" onClick={resetFilters}>
                필터 초기화
              </button>
            </div>
          )}

          {total === 0 ? (
            <div className="empty-state">
              조건에 맞는 제품이 없어요. 필터를 줄이거나 검색어를 바꿔보세요.
            </div>
          ) : (
            <>
              <div className="cosmetics-grid">
                {pagedProducts.map((product) => (
                  <article key={product.id} className="product-card">
                    <div className="product-card-header">
                      <span className="tag">
                        {product.category.main === 'skincare'
                          ? '스킨케어'
                          : product.category.main === 'makeup'
                          ? '메이크업'
                          : '바디/헤어'}
                      </span>
                      <span className="price">
                        {formatPrice(product.price.amount)}원
                      </span>
                    </div>
                    <h3>{product.nameKo}</h3>
                    <p className="brand">{product.brandKo}</p>
                    <p className="category-label">
                      {labelMaps.category[product.category.sub] ??
                        product.category.sub}
                    </p>
                    <div className="tag-row">
                      {getTags(product).map((tag) => (
                        <span key={tag} className="chip-lite">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/cosmetics/product/${product.slug}`}>
                      자세히 보기 →
                    </Link>
                  </article>
                ))}
              </div>

              <div className="pagination">
                <button
                  type="button"
                  onClick={() => setState((prev) => ({ ...prev, page: prev.page - 1 }))}
                  disabled={currentPage <= 1}
                >
                  이전
                </button>
                <span>
                  {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setState((prev) => ({ ...prev, page: prev.page + 1 }))}
                  disabled={currentPage >= totalPages}
                >
                  다음
                </button>
              </div>
            </>
          )}
        </section>
      </div>

      <div className={`filter-drawer ${isFilterOpen ? 'is-open' : ''}`}>
        <div className="filter-drawer-header">
          <h3>필터</h3>
          <button type="button" onClick={() => setIsFilterOpen(false)}>
            닫기
          </button>
        </div>
        <div className="filter-drawer-body">
          <FilterPanel />
        </div>
      </div>
      {isFilterOpen && (
        <button
          className="filter-overlay"
          type="button"
          onClick={() => setIsFilterOpen(false)}
          aria-label="필터 닫기"
        />
      )}
    </div>
  );
}
