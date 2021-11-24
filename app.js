const items =[
    {item:"Milk",cost:5,id:0},
    {item:"Apple",cost:1,id:1},
    {item:"Bread",cost:2,id:2},
    {item:"Butter",cost:3,id:3},
    {item:"shoes",cost:100,id:4}

];
const cart = {};
const output = document.createElement('div');
document.body.appendChild(output);
items.forEach(function(ele){
    console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener("click",function(){
        let namer = ele.item.toLowerCase();
        console.log(namer);
        if(!cart[namer]){
          cart[namer] = {
                name:ele.item,
                Price:ele.cost,
                qty:1,
                subtotal:function(){
                    return this.Price*this.qty;
                }
            }
        } else{
            cart[namer].qty++;
        }
        reList();
    })
    function reList(){
        output.innerHTML = "";
        console.log(cart);
       let total = 0;
       for(let pro in cart){
           console.log(cart[pro]);
           let subTotal = cart[pro].subtotal();
           total += subTotal;
           output.innerHTML += `${cart[pro].name} ${":"}$${cart[pro].Price}*`;
           output.innerHTML += `${cart[pro].qty} ${"="} $${subTotal}<br>`;
       }
    output.innerHTML += `<b>Total = $${total}</b>`;
    }
    document.body.appendChild(div);

})