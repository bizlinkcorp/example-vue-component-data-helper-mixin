import { defineComponent } from 'vue';
import InheritStoreBindMixin from '../../mixins/InheritStoreBindMixin';

export type ClassAttribute = {
  [className: string]: boolean | undefined;
};

export default defineComponent({
  name: 'StoreInputText',
  mixins: [InheritStoreBindMixin],
  computed: {
    // class属性値
    classAttr(): ClassAttribute {
      return {
        // 必須入力設定のクラス
        'input-require': this.itemViewState.required,
        // 注目設定のクラス
        'input-pickup': this.itemViewState.pickup,
      };
    },
  },
});
