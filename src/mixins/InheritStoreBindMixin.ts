import { defineComponent } from 'vue';
import { StoreBindMixin } from 'vue-component-data-helper-mixin';
import { ParentViewState } from '../store/index';
import { ItemViewState } from '../views/share';
export default defineComponent({
  mixins: [StoreBindMixin],
  computed: {
    itemViewState(): ItemViewState {
      // 現在の項目の設定値
      const current = this.storeViewState as ItemViewState;
      // 上位から引き継がれた設定値
      const parent = this.parentInfo.viewState<ParentViewState>();

      //
      return {
        ...current,
        disabled: current?.disabled ?? parent?.disabled ?? false,
      };
    },
  },
});
