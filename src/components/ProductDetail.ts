import InheritStoreBindMixin from '@/mixins/InheritStoreBindMixin';
import Vue, { defineComponent } from 'vue';

export interface ProductDetailRow {
  id: string;
  name: string;
  unitAmount: string;
  num: string;
}

export type ProductDetailList = ProductDetailRow[];

export default defineComponent({
  name: 'ProductDetail',
  mixins: [InheritStoreBindMixin],
  data() {
    return {
      notice: false,
      message: '',
      text: [],
      page: 1,
    };
  },
  methods: {
    onAdd(props: any): void {
      const arr = this.storeData as any[];
      // データ追加
      arr.push({
        id: 'add',
        name: 'add',
        unitAmount: 0,
        num: 0,
      });
      this.storeData = arr;
      // 追加データが表示されるように最終ページへ移動
      props.updateOptions({ page: Math.floor(props.pagination.itemsLength / props.pagination.itemsPerPage) + 1 });
    },
    onDelete(idx: number, row: any, props: any): void {
      // データ削除
      const arr = this.storeData as any[];
      arr.splice(idx, 1);
      this.storeData = arr;
      // 通知
      this.notice = true;
      this.message = `${row.name} を削除しました`;
    },
    onEdit(idx: number, row: any, props: any): void {
      // TODO 編集機能を実装する
    },
  },
});
