function AddItem(index){
    var a = parseInt(document.getElementById("itemid").innerHTML);
    console.log(a)
    a=a+1
    document.getElementById("itemid").innerHTML=a
    
    var b=parseInt(document.getElementById("totalitems").innerHTML);
    b=b-1
    document.getElementById("totalitems").innerHTML=b
    const parent = document.getElementById("todo"+index)
    const c = parent.innerHTML
    const childn =parent.querySelector(".childname").innerHTML
    const childp =parseInt(parent.querySelector(".childprice").innerHTML)
    document.getElementById("todo"+index).innerHTML = ""

    

    const cart = document.getElementById("itemlist")
    const row1 = document.createElement("div")
    row1.setAttribute("id", "cart"+index)
    row1.style.display = "flex"
    row1.style.flexDirection = "column"
    const row = document.createElement("div")
    row.style.display = "flex"    
    const cartn = document.createElement("div")
    cartn.innerHTML = childn
    const cartp = document.createElement("div")
    cartp.innerHTML = childp
    cartp.setAttribute("id","itemp"+index)
    cartp.style.marginLeft = "auto"

    const d = document.createElement("button")
    d.innerHTML="Delete"
    d.style.alignSelf = "center"
    d.addEventListener('click', () => {
        document.getElementById("todo"+index).innerHTML = c
        let t = parseInt((document.getElementById("totalprice").innerHTML))
        const p = parseInt(document.getElementById("itemp"+index).innerHTML)
        document.getElementById("totalprice").innerHTML= t - p
        document.getElementById("cart"+index).innerHTML = ""
         
    })
    const br = document.createElement("br")
    row.appendChild(cartn)
    row.appendChild(cartp)
    row1.appendChild(row)
    row1.appendChild(d)
    row1.appendChild(br)
    cart.appendChild(row1)

    
    let t = parseInt((document.getElementById("totalprice").innerHTML))
    document.getElementById("totalprice").innerHTML= t + childp





}