import { defineComponent } from 'vue';
import { StorePathMixin } from 'vue-component-data-helper-mixin';
import { ParentViewState } from '../store/index';
export default defineComponent({
  mixins: [StorePathMixin],
  methods: {
    getProvideViewState(): ParentViewState {
      const current = this.currentViewState();
      const parent = this.parentViewState();

      // 上位のStore設定値を引継ぎする。
      return {
        // 設定優先順位： 自ViewState > 親ViewState
        // disabled プロパティ
        disabled: current?.disabled ?? parent?.disabled,
      };
    },
  },
});
