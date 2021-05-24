'use strict';

/**
 * 数値の配列を全部足して返す関数　（ライブラリそのものを作成する。sum-appはライブラリを使った実装）
 */
function add(numbers) {
    let result = 0;
    for (const num of numbers) { //なんか知らんけど配列ないの一つ一つを足していくことになるらしい
　　　result = result + num; //tasiteru
    }
    return result;
}
module.exports = {　//export=輸出的な感じ　モジュールを外部に公開
    add: add //前のaddが名前、あとのが今回宣言したadd　同じ名前なので短縮可
};