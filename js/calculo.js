function calcular(){
  try{
    let cant1 = parseFloat(document.getElementById("cant1").value) || 0, prec1 = parseFloat(document.getElementById("prec1").value) || 0;
    let result1= cant1*prec1; 
    document.getElementById("result1").value= result1.toFixed(2);

    let cant2 = parseFloat(document.getElementById("cant2").value) || 0, prec2 = parseFloat(document.getElementById("prec2").value) || 0;
    let result2= cant2*prec2; 
    document.getElementById("result2").value= result2.toFixed(2);

    let sub_total= result1+result2;
    let igv= sub_total *0.18;
    let total= sub_total + igv;
    document.getElementById("cant_total").value= cant1+cant2;
    document.getElementById("sub_total").value= sub_total.toFixed(2);
    document.getElementById("igv").value= igv.toFixed(2);
    document.getElementById("total").value= total.toFixed(2);
  }
  catch (e){}
}