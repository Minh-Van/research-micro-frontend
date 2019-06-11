import { ICoreTheme } from '../../../models';

export interface IFlexProps {
  className?: string;
  style?: object;
  theme: ICoreTheme;
  w?: number | string;
  h?: number | string;
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
  // need string type for `wrap` to fix warning: Received `true` for a non-boolean attribute `wrap`.
  wrap?: boolean | string;
  column?: boolean;
  auto?: boolean;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: 'auto' | 'unset' | number;
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  alignSelf?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
}

export interface IBoxProps extends IFlexProps {
  flex?: boolean;
}
