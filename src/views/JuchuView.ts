import { defineComponent } from 'vue';
import ProductTemplate from '../templates/ProductTemplate.vue';
import { mitsumoriProductType, mitsumoriViewState } from './MitsumoriView';
import { ItemViewState, ProductType } from './share';
import { ProductDetailData } from '../templates/ProductTemplate';

// view definition

// ProductHeader の定義情報
export const juchuProductType: ProductType = {
  id: 'juchu',
  name: '受注入力',
  propsIds: {
    status: 'juchuStatus',
    no: 'juchuNo',
    date: 'juchuDate',
    name: 'juchuName',
    customer: 'juchuCustomer',
    destination: 'juchuDestination',
    remarks: 'juchuRemarks',
    amount: 'juchuAmount',
    deliveryDate: 'targetDeliveryDate',
    charge: 'juchuCharge',
    absDate: 'shippingDate',
  },
};

interface AbstractJuchu<T> {
  juchuStatus: T;
  juchuNo: T;
  juchuDate: T;
  juchuName: T;
  juchuCustomer: T;
  juchuDestination: T;
  juchuRemarks: T;
  juchuAmount: T;
  targetDeliveryDate: T;
  juchuCharge: T;
  shippingDate: T;
}

export type JuchuData = AbstractJuchu<string>;

export type JuchuViewState = AbstractJuchu<ItemViewState>;

// view data

export const juchuData: JuchuData & ProductDetailData = {
  juchuStatus: '見積送付済み',
  juchuNo: '10',
  juchuDate: '2022-03-05',
  juchuName: '新年度受注',
  juchuCustomer: '海山商事',
  juchuDestination: 'フグ田 マスオ',
  juchuRemarks: 'ふでばこの在庫無し',
  juchuAmount: '100000',
  targetDeliveryDate: '2022-04-10',
  juchuCharge: '磯野 浪平',
  shippingDate: '2022-04-09',
  meisai: [
    { id: 'A001', name: 'えんぴつ', unitAmount: '1000', num: '10' },
    { id: 'A002', name: 'けしごむ', unitAmount: '500', num: '20' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A002', name: 'けしごむ', unitAmount: '500', num: '20' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
    { id: 'A003', name: 'ふでばこ', unitAmount: '2000', num: '5' },
  ],
};

export const juchuViewState: JuchuViewState = {
  juchuStatus: {
    label: '受注状態',
  },
  juchuNo: {
    label: '受注No',
    required: true,
  },
  juchuDate: {
    label: '受注日',
  },
  juchuName: {
    label: '受注名',
  },
  juchuCustomer: {
    label: '顧客名',
    required: true,
  },
  juchuDestination: {
    label: '顧客宛先名',
  },
  juchuRemarks: {
    label: '備考',
  },
  juchuAmount: {
    label: '受注金額',
  },
  targetDeliveryDate: {
    label: '目標納期',
    required: true,
  },
  juchuCharge: {
    label: '受注担当',
    required: true,
  },
  shippingDate: {
    label: '出荷予定日',
    pickup: true,
  },
};

// Product画面としての画面状態
export const juchuProductViewState = {
  disp: {
    [juchuProductType.id]: juchuViewState,
  },
  refDisp: {
    [mitsumoriProductType.id]: {
      ...mitsumoriViewState,
      disabled: true,
    },
  },
};

// component

export default defineComponent({
  name: 'JuchuView',
  components: {
    ProductTemplate,
  },
  mounted() {
    // store 値を設定
    this.$store.commit('setStoreState', {
      path: `viewState.${juchuProductType.id}`,
      value: juchuProductViewState,
    });
    if (!this.$store.state.data[juchuProductType.id]) {
      // データが無ければ設定する
      this.$store.commit('setStoreState', {
        path: `data.${juchuProductType.id}`,
        value: juchuData,
      });
    }
  },
  computed: {
    disp() {
      return juchuProductType;
    },
    refDisp() {
      return mitsumoriProductType;
    },
  },
  methods: {
    clickRegister(): void {
      alert('受注登録');
    },
  },
});
