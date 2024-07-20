const cartOperation = {
    pizzas:[],
    addInCart(pizzaid){
        // this.pizzas.find(fuction(currentPizza){
        //     return currentPizza.id == pizzaid
        // })
        const pizza =this.pizzas.find(currentPizza=>currentPizza.id==pizzaid);//yeh hame current pizza lake de rha hai
        pizza.isincart=true;// yeh check karega ki pizza us cart me hai ya nhi basically
        // console.log(this.pizza);


    },
    removeInCart(){
    
    },
    viewAll(){
        return this.pizzas.filter(pizza=>pizza.isincart);

    
    },
    totalCompute(){
        
    }
    

}
// console.log(pizzas);

export default cartOperation;