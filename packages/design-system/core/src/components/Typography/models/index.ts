import { ICoreTheme } from '../../../models';
export interface ITypographyProps {
  className?: string;
  style?: object;
  children?: any;
  theme: ICoreTheme;
  padding?: number | string;
  margin?: number | string;
  color?: 'none' | string;
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
    | 'initial'
    | 'inherit';
  wordBreak?:
    | 'normal'
    | 'break-all'
    | 'keep-all'
    | 'break-word'
    | 'initial'
    | 'inherit';
}

export interface ITypographyTheme {
  h1: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  h2: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  h3: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  h4: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  bodyL: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  bodyM: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  bodyS: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  link: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
  quote: {
    fontFamily: string;
    fontSize: number | string;
    fontWeight: number | string;
    lineHeight: number | string;
    letterSpacing: number | string;
    color: string;
  };
}
