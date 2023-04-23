function update_text(data_received){
document.getElementById('textbox').value += data_received 
}

  function calculate_result(){
document.getElementById('textbox').value = eval(document.getElementById('textbox').value)
    
  }

function clear_screen(){
  document.getElementById('textbox').value = ''
}