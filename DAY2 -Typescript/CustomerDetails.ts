class Customer
{
    public CusId:number = 0;
    public CustomerName:string  = "";
    public City:string  = "";

    
    constructor(CusId:number=0 , CustomerName:string = "", City:string = "")
    {
        this.CusId = CusId;
        this.CustomerName = CustomerName;
        this.City = City;
    }
  

    public showDetails():void
    {
        console.log(`Id: ${this.CusId}, Name: ${this.CustomerName}, City: ${this.City} `)
        console.log("----------------------------");
    }
}

let c:Customer = new Customer();
let c1:Customer = new Customer(46545);
let c2:Customer = new Customer(46545, "Scott");
let c3:Customer = new Customer(46545, "Scott", "HYD");

c.showDetails();
c1.showDetails();
c2.showDetails();
c3.showDetails();
