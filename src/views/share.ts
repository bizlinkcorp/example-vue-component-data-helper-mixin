import { ParentViewState } from '../store/index';
import { ProductHeaderPropsIds } from '../components/ProductHeader';

export interface ItemViewState extends ParentViewState {
  label: string;
  required?: boolean;
  pickup?: boolean;
}

export type ProductKey = 'juchu' | 'mitsumori' | 'hatchu' | 'shukka';

export const ProductName = {
  juchu: '受注入力',
  mitsumori: '見積入力',
  hatchu: '発注入力',
  shukka: '出荷入力',
};

export interface ProductType {
  readonly id: string;
  readonly name: string;
  readonly propsIds: ProductHeaderPropsIds;
}
