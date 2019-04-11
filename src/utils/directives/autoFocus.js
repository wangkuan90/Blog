/**
 * @file autoFocus指令文件
 * @desc 当被绑定的元素插入到 DOM 中时,获取焦点
 */
/* eslint import/prefer-default-export: 0 */
export const focus = {
    inserted: function(el) {
        // 聚焦元素
        el.focus();
    }
};
