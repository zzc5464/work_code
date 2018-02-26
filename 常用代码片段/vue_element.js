/*
* @Author: Zzc
* @Date:   2018-02-25 11:05:00
* @Last Modified by:   Zzc
* @Last Modified time: 2018-02-26 17:09:56
*/

'use strict';
// 提示
_this.$message({
    type: 'success',
    message: '删除成功!'
});
_this.$confirm('是否打印销售单?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
}).then(() => {

}).catch(() => {

});

// vue原生 更新最新的数据后执行的回调函数
this.$nextTick(function () {
    _this.computedTotal();
});

// 过滤器
time(value, pattern) {
    if (!value) {
        return;
    }
    let v = value * 1000;
    return moment(v).format(pattern);
}
// 状态过滤器
checkSatus(state) {
    // 1 审核通过 2 未审核 3 审核未通过
    switch (state) {
        case '1':
            state = '审核通过';
            break;
        case '2':
            state = '未审核';
            break;
        case '3':
            state = '审核未通过';
            break;
    }
    return state;
}

/*
element表格做编辑功能
有专门用来放操作的标签
slot-scope="scope" 保存了当前列的所有对象
*/
<el-table-column label="操作">
        <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent='minimunDetail(scope.row.order_no)'>查看</el-button>
        </template>
</el-table-column>
<el-table-column label="操作">
    <template slot-scope="scope">
    <el-button
      @click.native.prevent="deleteRow(scope.$index,数据)"
      type="text"
      size="small">
      移除
    </el-button>
  </template>
</el-table-column>
/*
deleteRow(index, rows) {
  rows.splice(index, 1);
}

 */