# Change_cell_color

特定のセルの値がある値であるときに、そのセルの行または列の色を自動で変更します。

# Usage

```
「拡張機能」 → 「app script」 → ライブラリ "+" 

→ スクリプトID 「 1JYOrIoxJOwz7iTGuCnCQ7eQXVoNwnwIw4ACecSzD_bO_v4WkNHkd2MRD 」

以下の関数を実行すると使用例が表示されます。

change_cell_color.show_example()
```

# Example

```
function sample_chage_color(){ 
  // 以下を変更
  // --- ここから ---
  var num_sheet = 1 // n番目のセル
  var value = "hoge" // チェックする値
  var check_cell = "A20" // チェックするセル (A1形式)
  var color = "#FF00FF" // 変更する色 (#RRGGBB, BLUE など)
  // --- ここまで --- 

  var ss = SpreadsheetApp.getActiveSpreadsheet();　//アクティブなスプレッドシートを取得
  var sh = ss.getSheets()[num_sheet - 1] // 1番目のシートを指定"
  // チェックするセルの行を変更
  // チェックするセルの行を変更
  change_cell_color.change_column_color_from_cell(sh, value, check_cell, color)
  // チェックするセルの列を変更
  change_cell_color.hange_row_color_from_cell(sh, value, check_cell, color)
  
```
