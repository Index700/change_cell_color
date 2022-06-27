
function change_cell_color_from_word(sh, value, cell, color, range){
  // セル cell の値 が value であるとき 範囲 range 内のセルの色を colorにする
  var cell_value = sh.getRange(cell).getValue()
  var rng = sh.getRange(range);
  if (cell_value == value){
    rng.setBackground(color);　//セル色を設定
  }
  else{
    rng.setBackground(null);　//セル色を設定
  }
}


function change_column_color_from_cell(sh, value, check_cell, color){
  var cell_value = sh.getRange(check_cell).getValue()
  var right_end = sh.getLastRow()
  var column = check_cell.match(/[0-9]{1,}/)[0]
  var row = check_cell.match(/[A-Za-z]{1,}/)[0]
  var rng=sh.getRange(column, 1, 1, right_end)
  if (cell_value == value){
    rng.setBackground(color);　//セル色を設定
  }
  else{
    rng.setBackground(null);　//セル色を設定
  }
  
}

function change_row_color_from_cell(sh, value, check_cell, color){
  var cell_value = sh.getRange(check_cell).getValue()
  var bottom_end =  sh.getLastColumn()

  var column = check_cell.match(/[0-9]{1,}/)[0]
  var row = check_cell.match(/[A-Za-z]{1,}/)[0]
  var row_num = 0
  for (var i = 0; i < row.length; i++){
    row_num = row_num + row[i].charCodeAt(0) - "A".charCodeAt(0) + 1
  }

  var rng=sh.getRange(1, row_num, bottom_end, 1)
  if (cell_value == value){
    rng.setBackground(color);　//セル色を設定
  }
  else{
    rng.setBackground(null);　//セル色を設定
  }
  
}

function show_sample(){
var sample = `function sample_chage_color(){ 
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
  change_cell_color.hange_row_color_from_cell(sh, value, check_cell, color)`
  console.log(sample)
}