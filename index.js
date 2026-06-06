function AddItem(index){
    var a = parseInt(document.getElementById("itemid").innerHTML);
    console.log(a)
    a=a+1
    document.getElementById("itemid").innerHTML=a
    
    var b=parseInt(document.getElementById("totalitems").innerHTML);
    b=b-1
    document.getElementById("totalitems").innerHTML=b
    document.getElementById("todo"+index).innerHTML=""




}