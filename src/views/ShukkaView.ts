import { defineComponent } from 'vue';
import ProductTemplate from '../templates/ProductTemplate.vue';
import { ItemViewState, ProductType } from './share';
import { juchuProductType, juchuViewState } from './JuchuView';
import { ProductDetailData } from '../templates/ProductTemplate';

// view definition

// ProductHeader の定義情報
export const shukkaProductType: ProductType = {
  id: 'shukka',
  name: '出荷入力',
  propsIds: {
    status: 'shukkaStatus',
    no: 'shukkaNo',
    date: 'shukkaDate',
    name: 'shukkaName',
    customer: 'shukkaCustomer',
    destination: 'shukkaDestination',
    remarks: 'shukkaRemarks',
    amount: 'shukkaAmount',
    deliveryDate: 'shukkaDeliveryDate',
    charge: 'shukkaCharge',
    absDate: 'deliveryDate',
  },
};

interface AbstractShukka<T> {
  shukkaStatus: T;
  shukkaNo: T;
  shukkaDate: T;
  shukkaName: T;
  shukkaCustomer: T;
  shukkaDestination: T;
  shukkaRemarks: T;
  shukkaAmount: T;
  shukkaDeliveryDate: T;
  shukkaCharge: T;
  deliveryDate: T;
}

export type ShukkaData = AbstractShukka<string>;

export type ShukkaViewState = AbstractShukka<ItemViewState>;

// view data
export const shukkaData: ShukkaData & ProductDetailData = {
  shukkaStatus: '見積送付済み',
  shukkaNo: '10',
  shukkaDate: '2022-03-21',
  shukkaName: '新年度受注',
  shukkaCustomer: '海山商事',
  shukkaDestination: 'フグ田 マスオ',
  shukkaRemarks: '予定より早く出荷',
  shukkaAmount: '100000',
  shukkaDeliveryDate: '2022-03-20',
  shukkaCharge: '磯野 浪平',
  deliveryDate: '2022-03-22',
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

export const shukkaViewState: ShukkaViewState = {
  shukkaStatus: {
    label: '出荷状態',
  },
  shukkaNo: {
    label: '出荷No',
    required: true,
  },
  shukkaDate: {
    label: '出荷日',
    required: true,
  },
  shukkaName: {
    label: '出荷名',
  },
  shukkaCustomer: {
    label: '顧客名',
    required: true,
  },
  shukkaDestination: {
    label: '顧客宛先名',
    required: true,
  },
  shukkaRemarks: {
    label: '備考',
  },
  shukkaAmount: {
    label: '出荷金額',
  },
  shukkaDeliveryDate: {
    label: '出荷作業日',
    pickup: true,
  },
  shukkaCharge: {
    label: '出荷担当',
    required: true,
  },
  deliveryDate: {
    label: '配達予定日',
    pickup: true,
  },
};

// Product画面としての画面状態
export const shukkaProductViewState = {
  disp: {
    [shukkaProductType.id]: shukkaViewState,
  },
  refDisp: {
    [juchuProductType.id]: {
      ...juchuViewState,
      disabled: true,
    },
  },
};

// component

export default defineComponent({
  name: 'ShukkaView',
  components: {
    ProductTemplate,
  },
  mounted() {
    // store 値を設定
    this.$store.commit('setStoreState', {
      path: `viewState.${shukkaProductType.id}`,
      value: shukkaProductViewState,
    });
    if (!this.$store.state.data[shukkaProductType.id]) {
      // データが無ければ設定する
      this.$store.commit('setStoreState', {
        path: `data.${shukkaProductType.id}`,
        value: shukkaData,
      });
    }
  },
  computed: {
    disp() {
      return shukkaProductType;
    },
    refDisp() {
      return juchuProductType;
    },
  },
  methods: {
    clickRegister(): void {
      alert('出荷登録');
    },
  },
});
