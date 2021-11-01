function addToCArt(quandity,productName="sakız") {
    console.log("sepete eklendi: "+productName+ "adet: " +quandity)
}

addToCArt("10")
//addToCArt("yumurta")

let sayHello = ()=>{
    console.log("hello world")
}

sayHello()

let sayHello2 = function(){
    console.log("hello world 2")
}

sayHello2()

function addToCart2(productName,quandity,unitPrice) {
    
}

addToCart2("elma",5,10)
addToCart2("armut",2,20)
addToCart2("limon",3,15)


let product1={productName:"zencefil",unitPrice:15,quandity:5}
function addToCart3(product) {
    console.log("ürün : "+product.productName ) 
    console.log("price : "+product.unitPrice)  
    console.log("quandity : "+product.quandity)    
}

addToCart3(product1)


let product2 ={productName:"zencefil",unitPrice:15,quandity:5}
let product3 ={productName:"zencefil",unitPrice:15,quandity:5}
product2=product3
product2.productName="karpuz"
console.log(product3.productName)

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"elma",unitPrice:15,quandity:5},
    {productName:"armut",unitPrice:15,quandity:5},
    {productName:"zencefil",unitPrice:15,quandity:5}
]

addToCart4(products)

function add(...numbers) { //rest operatörü
    let total =0;
    for (let i= 0; i<numbers.length;i++){
        total =total+numbers[i]
    }
    console.log(total)
    
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,20,500,600]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:'İç Anadolu', population :"20M"},
    {name:'Maramara', population :"10M"},
    {name:'Karadeniz', population :"30M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Çorum","Sinop"]
    ]
    
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} ={productName:"zencefil",unitPrice:15,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)