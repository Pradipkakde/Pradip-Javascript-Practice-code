//Exercise using objects
//itemname
//price
//discount
//itemcode
const product={
    itemname: 'Flower',
    price:50,
    discount:20,
    itemcode:'f4'
}
function createproduct(name,price,discount,itemcode){
    return{
        itemname:name,
        price:price,
        discount:discount,
        itemcode:itemcode
    }
}
const football = createproduct('football',400,10,'f4');
function Product(name,price, discount,itemcode){
    this.name=name;
    this.price=price;
    this.discount=discount;
    this.itemcode=itemcode;
    this.discountValue=function(){
        return price*discount/100;
    }
}
const mobile= new Product('Oneplus Nord',30000,5,'OP20')
const mobile1=new Product('Oppo',1000,10,'oppo1') 