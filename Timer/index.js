console.log("Hello javascript");
console.log(Date());
const root = document.getElementById("root");
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function myfun() {
    date = new Date
    root.innerHTML="<h1>"+date.getHours()+ ":"+date.getMinutes()+":"+ date.getSeconds()+"</h1> <p>"+day[date.getDay()]+", "+date.getDate()+" "+months[date.getMonth()]+"</p>";

}

setInterval(myfun,1000);
class Rectangle{
    constructor(w,h,c){
        this.width = w;
        this.height = h;
        this.color = c;
    }

    gerArea(){
        return this.width*this.height;

    }
    get area(){
        return this.width*this.height;
    }
    set properties(a){
        this.width = Math.sqrt(a);
        this.height = Math.sqrt(a);
    }

}
let rect1 = new Rectangle(10,20,"black");
rect1.properties = 36;

class Squre{
    constructor(w){
        this.height = w;
        this.width = w;
        this.color = "Blue";
    }
    get area(){
        return this.height*this.width;
    }
    set _width(x){
        this.width = x;
        this.height = x;
    }


}
let sq1 = new Squre(5);
console.log(sq1.area);
sq1._width = 6;
console.log(sq1.area);
let arr = [10];
for(let x=0;x<10;x++){
    arr[x] = new Squre(x); 
}
for(let i = 0;i<10;i++){
    console.log(arr[i].area);
}

