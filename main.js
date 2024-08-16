console.log("hello world!")

let container=document.querySelector('.container');

let products=[
   
    {
        'img':'https://m.media-amazon.com/images/I/511jgZKz8UL._SR240,220_.jpg',
        'title':"Dyazo Laptop bag - Grey",
        'price':299
    }
    ,
    {
        'img':'https://m.media-amazon.com/images/I/41ruti33J+L._AC._SR180,230.jpg',
        'title':"ProElite Smart Case for iPad",
        'price':699
    },
    {
        'img':'https://m.media-amazon.com/images/I/41GMgZG6zdL.AC_SX250.jpg',
        'title':"Razer BlackShark V2 Gaming Headset",
        'price':1200
    }
    ,
    {
        'img':'https://m.media-amazon.com/images/I/51dRoa85BNL._SR480,440_.jpg',
        'title':"Samsung (65 inches) Smart TV",
        'price':66900
    },
    {
        'img':'https://m.media-amazon.com/images/I/61NqrZdoh6L._SY695_.jpg',
        'title':"YOHO Stride Sneakers for Men",
        'price':1799
    }
    ,
    {
        'img':'https://images-eu.ssl-images-amazon.com/images/I/61-SNkMcaqL._AC_UL675_SR675,480_.jpg',
        'title':"Safari Pentagon 3 Pc Set",
        'price':6299
    },
    {
        'img':'https://m.media-amazon.com/images/I/81Q7WuKlezL._AC_UL480_FMwebp_QL65_.jpg',
        'title':"Fossil Men Leather Grant Analog Watch",
        'price':13999
    }
    ,
    {
        'img':'https://images-eu.ssl-images-amazon.com/images/I/51sRWDLffyL._AC_UL900_SR900,600_.jpg',
        'title':"Car to Robot soft toy",
        'price':439
    }
];




function showProducts(products){
    let a=``;
    for(let i=0;i<products.length;i++){
       
        a+=`  <div class="item">
                <div class="item-img">
            <img  style="background-color: transparent;" src=${products[i].img} alt="">

            </div>
              <div class="idetails">
                    <p class="title">                  
    ${products[i].title}</p>

                    <p class="price" style="font-weight: bolder; font-size: 24px;">₹${products[i].price}</p>
                    <button class="btn">Add to cart</button>
                </div>
            </div>
            `
    }
    container.innerHTML=a;
}


showProducts(products);

console.log(products)
