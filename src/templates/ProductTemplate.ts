import { defineComponent, PropType } from 'vue';
import { ProductType } from '../views/share';
import ProductHeader from '../components/ProductHeader.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import { StorePath } from 'vue-component-data-helper-mixin';
import { ProductDetailList } from '../components/ProductDetail';

export interface ProductDetailData {
  meisai: ProductDetailList;
}

export default defineComponent({
  name: 'ProductTemplate',
  components: {
    ProductHeader,
    ProductDetail,
    StorePath,
  },
  props: {
    disp: {
      type: Object as PropType<ProductType>,
      required: true,
    },
    refDisp: {
      type: Object as PropType<ProductType>,
      required: false,
    },
  },
  emits: ['register'],
  methods: {
    clickRegister(): void {
      this.$emit('register');
    },
  },
});
