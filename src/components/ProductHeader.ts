import { defineComponent, PropType } from 'vue';
import InheritStorePathMixin from '../mixins/InheritStorePathMixin';
import StoreInputText from './item/StoreInputText.vue';
import { ParentViewState } from '../store/index';

export interface ProductHeaderPropsIds {
  status: string;
  no: string;
  date: string;
  name: string;
  customer: string;
  destination: string;
  remarks: string;
  amount: string;
  deliveryDate: string;
  charge: string;
  absDate: string;
}

export default defineComponent({
  name: 'ProductHeader',
  mixins: [InheritStorePathMixin],
  components: {
    StoreInputText,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    ids: {
      type: Object as PropType<ProductHeaderPropsIds>,
      required: true,
    },
  },
  computed: {
    headerDisabled() {
      return this.provideViewState<ParentViewState>().disabled;
    },
  },
});
