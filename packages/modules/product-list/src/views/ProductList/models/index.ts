import { IProductListModuleTheme } from '../../../models';

export interface IProductListViewProps {
  className?: string;
  theme: IProductListModuleTheme;
  onViewDetail?: (id: number) => void;
}

export interface IProductListViewTheme {
  item: {
    border: {
      default: string;
    };
    background: {
      default: string;
      hover: string;
    };
  };
}
