/* column range */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type ColumnRange = Range<1, 13>;

/* felxbox interfaces */
export interface RowProps {
  gapXl?: number;
  gapLg?: number;
  gapMd?: number;
  gapSm?: number;
  xl?: ColumnRange; // 1200px
  lg?: ColumnRange; // 992px
  md?: ColumnRange; // 768px
  sm?: ColumnRange; // 576px
  wrap?: 'wrap' | 'nowrap';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'center';
  className?: string;
}

export interface ColProps {
  xl?: ColumnRange; // 1200px
  lg?: ColumnRange; // 992px
  md?: ColumnRange; // 768px
  sm?: ColumnRange; // 576px
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'center';
  order?: number;
  orderMd?: number;
  orderSm?: number;
  className?: string;
}
