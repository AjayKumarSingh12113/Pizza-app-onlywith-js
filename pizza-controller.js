import { apicall } from "./Api-client.js";
import cartOperation from "./cart-service.js";
async function loadPizza(){
    const URL='https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json';
    try{

    const response = await apicall(URL);
    // yeh sync hai blocked hai esko asyn banne ke liye function ko async de
    const obj = await response.json();
    console.log(obj); //yeha obj me pura data aa rha hai
    printPizzas(obj.Vegetarian);
    // console.log(obj.Vegetarian);
    }catch(err){
        console.log("error in fetch call",err);
    }

    // import { apicall } from "./Api-client.js";
    // function loadPizza(){
    // const URL='https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json';
    // const promise= apicall(URL);

    // promise.then(function(response){
    //     const pr=response.json();
    //     pr.then(function(data){
    //         console.log('Pizza data',data);
    //         printPizzas(data.Vegetarian);// vegetation ke sare arrray hame mil rhi hai 
    //     }).catch(function(err){
    //         console.log('invalid json',err);
    //     })
    // }).catch(function(err){
    //     console.log('yeh kahegga apicall hi nhi aa rha hai ',err);
    // })

}
loadPizza();


function printPizzas(pizzas){
    cartOperation.pizzas=pizzas;
    for(let i=0; i<pizzas.length; i++){
        //console.log(pizzas[i]);
        printPizza(pizzas[i]);   
    }
}

function addToCart(){
    // console.log("hello pizza",this.getAttribute('pizza-id'));
    const pizzaid=this.getAttribute('pizza-id');
    cartOperation.addInCart(pizzaid);
    printCart();

}
function printCart(){

    const pizzasInCart=cartOperation.viewAll();// viewall jo jo true true hai oh pizzaincart me dal rhe hai 
    // console.log(pizzasInCart);
    document.getElementById("carts").innerHTML='';
    pizzasInCart.forEach(p=>printCartItem(p));

    //last ------print total here
    const total =printTotal(pizzasInCart);//yeha total return ho ke aarha hai
    // console.log(total);
    const pTag=document.getElementById("ptotal");// html ptag ko access krliye
    pTag.innerText="total bill " + total;

}
function printCartItem(pizza){// p hi pizza hai
    const pTag=document.createElement('p');
    pTag.innerText=`${pizza.name} ${pizza.price}`;
    document.getElementById("carts").appendChild(pTag);//yeha pe tumne createelementbyid kr diya tha 
   

}
function printTotal(pizzasInCart){
    return pizzasInCart.reduce((acc,pizza)=>acc+parseFloat(pizza.price),0).toFixed(2);


}
// function printPizza(pizza){
//     const card=`<div class="card" style="width: 18rem;">
//   <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${pizza.name}</h5>
//     <p class="card-text">${pizza['menu_description']}&#8377; ${pizza.price}</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//     <button onclick={addtocard} class="btn btn-primary">Add to cart</button>
//   </div>
// </div>`;
// const div=document.getElementById("pizzas");
// div.innerHTML=div.innerHTML + card;

// }

function printPizza(pizza){
    const carddiv =document.createElement('div');
    carddiv.className='card';
    carddiv.style.width='18rem';
    const img=document.createElement('img');
    img.src=pizza.assets.menu[0].url;
    img.className='card-img-top';
    const cardBodydiv=document.createElement('div');
    cardBodydiv.className='card-body';
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const p =document.createElement('p');
    p.className='card-text';
    p.innerText=pizza['menu_description'] + pizza.price;
    const button=document.createElement('button');
    button.className='btn btn-primary';
    button.setAttribute('pizza-id',pizza.id)
    button.innerText='Add to cart' ;
    button.addEventListener('click', addToCart);
    cardBodydiv.appendChild(h5);
    cardBodydiv.appendChild(p);
    cardBodydiv.appendChild(button);
    carddiv.appendChild(img);
    carddiv.appendChild(cardBodydiv);
   
const div=document.getElementById("pizzas");
div.appendChild(carddiv);

}

