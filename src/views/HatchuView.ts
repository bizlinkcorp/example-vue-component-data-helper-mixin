import { defineComponent } from 'vue';
import ProductTemplate from '../templates/ProductTemplate.vue';
import { ItemViewState, ProductType } from './share';
import { juchuProductType, juchuViewState } from './JuchuView';
import { ProductDetailData } from '../templates/ProductTemplate';

// view definition

// ProductHeader の定義情報
export const hatchuProductType: ProductType = {
  id: 'hatchu',
  name: '発注入力',
  propsIds: {
    status: 'hatchuStatus',
    no: 'hatchuNo',
    date: 'hatchuDate',
    name: 'hatchuName',
    customer: 'hatchuCustomer',
    destination: 'hatchuDestination',
    remarks: 'hatchuRemarks',
    amount: 'hatchuAmount',
    deliveryDate: 'hatchuDeliveryDate',
    charge: 'hatchuCharge',
    absDate: 'arrivalDate',
  },
};

interface AbstractHatchu<T> {
  hatchuStatus: T;
  hatchuNo: T;
  hatchuDate: T;
  hatchuName: T;
  hatchuCustomer: T;
  hatchuDestination: T;
  hatchuRemarks: T;
  hatchuAmount: T;
  hatchuDeliveryDate: T;
  hatchuCharge: T;
  arrivalDate: T;
}

export type HatchuData = AbstractHatchu<string>;

export type HatchuViewState = AbstractHatchu<ItemViewState>;

// view data

export const juchuData: HatchuData & ProductDetailData = {
  hatchuStatus: '発注済み',
  hatchuNo: '10',
  hatchuDate: '2022-03-06',
  hatchuName: '海山商事 ふでばこ',
  hatchuCustomer: 'ふでばこ商店',
  hatchuDestination: 'ふでばこ ふでお',
  hatchuRemarks: '受注No.10 ふでばこ',
  hatchuAmount: '28000',
  hatchuDeliveryDate: '2022-03-20',
  hatchuCharge: '磯野 浪平',
  arrivalDate: '2022-03-18',
  meisai: [{ id: 'A003', name: 'ふでばこ', unitAmount: '800', num: '35' }],
};

export const hatchuViewState: HatchuViewState = {
  hatchuStatus: {
    label: '発注状態',
  },
  hatchuNo: {
    label: '発注No',
    required: true,
  },
  hatchuDate: {
    label: '発注日',
  },
  hatchuName: {
    label: '発注名',
  },
  hatchuCustomer: {
    label: '発注先',
    required: true,
  },
  hatchuDestination: {
    label: '発注担当者',
  },
  hatchuRemarks: {
    label: '備考',
  },
  hatchuAmount: {
    label: '発注金額',
    pickup: true,
  },
  hatchuDeliveryDate: {
    label: '発注納期',
  },
  hatchuCharge: {
    label: '受注担当',
    required: true,
  },
  arrivalDate: {
    label: '入荷予定日',
    required: true,
  },
};

// Product画面としての画面状態
export const hatchuProductViewState = {
  disp: {
    [hatchuProductType.id]: hatchuViewState,
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
  name: 'HatchuView',
  components: {
    ProductTemplate,
  },
  mounted() {
    // store 値を設定
    this.$store.commit('setStoreState', {
      path: `viewState.${hatchuProductType.id}`,
      value: hatchuProductViewState,
    });
    if (!this.$store.state.data[hatchuProductType.id]) {
      // データが無ければ設定する
      this.$store.commit('setStoreState', {
        path: `data.${hatchuProductType.id}`,
        value: juchuData,
      });
    }
  },
  computed: {
    disp() {
      return hatchuProductType;
    },
    refDisp() {
      return juchuProductType;
    },
  },
  methods: {
    clickRegister(): void {
      alert('発注登録');
    },
  },
});
