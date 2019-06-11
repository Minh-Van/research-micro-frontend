import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { ITypographyProps } from './models';
import { mixTypography } from './mixins';

export const H1 = styled('h1').attrs(({ className }) => ({
  className: getCssClass('ego-H1', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'h1')}
`;

export const H2 = styled('h2').attrs(({ className }) => ({
  className: getCssClass('ego-H2', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'h2')}
`;

export const H3 = styled('h3').attrs(({ className }) => ({
  className: getCssClass('ego-H3', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'h3')}
`;

export const H4 = styled('h4').attrs(({ className }) => ({
  className: getCssClass('ego-H4', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'h4')}
`;

export const BodyTextL = styled('p').attrs(({ className }) => ({
  className: getCssClass('ego-BodyText-L', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'bodyL')}
`;

export const BodyTextM = styled('p').attrs(({ className }) => ({
  className: getCssClass('ego-BodyText-M', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'bodyM')}
`;

export const BodyTextS = styled('p').attrs(({ className }) => ({
  className: getCssClass('ego-BodyText-S', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'bodyS')}
`;

export const Link = styled('p').attrs(({ className }) => ({
  className: getCssClass('ego-Link', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'link')}
`;

export const Quote = styled('p').attrs(({ className }) => ({
  className: getCssClass('ego-Quote', className),
}))<ITypographyProps>`
  ${props => mixTypography(props as ITypographyProps, 'quote')}
`;
