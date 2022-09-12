import { defineComponent } from 'vue';
import ProductTemplate from '../templates/ProductTemplate.vue';
import { ItemViewState, ProductType } from './share';
import { ProductDetailData } from '../templates/ProductTemplate';

// view definition

// ProductHeader の定義情報
export const mitsumoriProductType: ProductType = {
  id: 'mitsumori',
  name: '見積入力',
  propsIds: {
    status: 'mitsumoriStatus',
    no: 'mitsumoriNo',
    date: 'mitsumoriDate',
    name: 'mitsumoriName',
    customer: 'mitsumoriCustomer',
    destination: 'mitsumoriDestination',
    remarks: 'mitsumoriRemarks',
    amount: 'mitsumoriAmount',
    deliveryDate: 'desiredDeliveryDate',
    charge: 'mitsumoriCharge',
    absDate: 'mitsumoriEffectiveDate',
  },
};

interface AbstractMitsumori<T> {
  mitsumoriStatus: T;
  mitsumoriNo: T;
  mitsumoriDate: T;
  mitsumoriName: T;
  mitsumoriCustomer: T;
  mitsumoriDestination: T;
  mitsumoriRemarks: T;
  mitsumoriAmount: T;
  desiredDeliveryDate: T;
  mitsumoriCharge: T;
  mitsumoriEffectiveDate: T;
}

export type MitsumoriData = AbstractMitsumori<string>;

export type MitsumoriViewState = AbstractMitsumori<ItemViewState>;

// view data

export const mitsumoriData: MitsumoriData & ProductDetailData = {
  mitsumoriStatus: '見積送付済み',
  mitsumoriNo: '10',
  mitsumoriDate: '2022-03-01',
  mitsumoriName: '新年度見積り',
  mitsumoriCustomer: '海山商事',
  mitsumoriDestination: 'フグ田 マスオ',
  mitsumoriRemarks: '',
  mitsumoriAmount: '100000',
  desiredDeliveryDate: '2022-04-15',
  mitsumoriCharge: '磯野 浪平',
  mitsumoriEffectiveDate: '2022-03-08',
  meisai: [
    { id: 'A001', name: 'えんぴつ', unitAmount: '1000', num: '10' },
    { id: 'A002', name: 'けしごむ', unitAmount: '500', num: '20' },
  ],
};

export const mitsumoriViewState: MitsumoriViewState = {
  mitsumoriStatus: {
    label: '見積状態',
  },
  mitsumoriNo: {
    label: '見積No',
  },
  mitsumoriDate: {
    label: '見積日',
    required: true,
  },
  mitsumoriName: {
    label: '見積名',
  },
  mitsumoriCustomer: {
    label: '顧客名',
  },
  mitsumoriDestination: {
    label: '顧客宛先名',
  },
  mitsumoriRemarks: {
    label: '備考',
  },
  mitsumoriAmount: {
    label: '見積金額',
  },
  desiredDeliveryDate: {
    label: '希望納期',
  },
  mitsumoriCharge: {
    label: '見積担当',
    required: true,
  },
  mitsumoriEffectiveDate: {
    label: '見積有効期限',
  },
};

// Product画面としての画面状態
export const mitsumoriProductViewState = {
  disp: {
    [mitsumoriProductType.id]: mitsumoriViewState,
  },
  refDisp: {},
};

// components

export default defineComponent({
  name: 'MitsumoriView',
  components: {
    ProductTemplate,
  },
  mounted() {
    // store 値を設定
    this.$store.commit('setStoreState', {
      path: `viewState.${mitsumoriProductType.id}`,
      value: mitsumoriProductViewState,
    });
    if (!this.$store.state.data[mitsumoriProductType.id]) {
      // データが無ければ設定する
      this.$store.commit('setStoreState', {
        path: `data.${mitsumoriProductType.id}`,
        value: mitsumoriData,
      });
    }
  },
  computed: {
    disp() {
      return mitsumoriProductType;
    },
  },

  methods: {
    clickRegister(): void {
      alert('見積登録');
    },
  },
});
