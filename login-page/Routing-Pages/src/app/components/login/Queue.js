class Queue{  
    constructor()
    {
        this.items = [];
    }    enqueue(element)
{    
    this.items.push(element);
}
isEmpty()
{
    return this.items.length == 0;
}
dequeue()
{

    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}

printQueue()
{
	var element = "";
	for(var i = 0; i < this.items.length; i++)
		element += this.items[i] +" ";
	return element;
}
}
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.dequeue());
console.log(queue.printQueue());

class Queue1{  
    constructor()
    {
        this.items = [];
    }    enqueue(element)
{    
    this.items.push(element);
}
isEmpty()
{
    return this.items.length == 0;
}
dequeue()
{

    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}

printQueue()
{
	var element = "";
	for(var i = 0; i < this.items.length; i++)
		element += this.items[i] +" ";
	return element;
}
}
var queue2 = new Queue1();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.enqueue(40);
queue2.enqueue(50);
queue2.enqueue(60);
console.log(queue2.dequeue());
console.log(queue2.printQueue());







{/* <div class="form-group">
 <input type="password" [(ngModel)]="userdata.password" name="password" placeholder="Password" class="form-control" required #password="ngModel" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
 <div *ngIf="password.invalid && (myform.submitted || password.touched)" class="alert alert-danger">
   <div *ngIf="password.errors.required"> Password is required. </div>
   <div *ngIf="password.errors.pattern"> Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.</div>
 </div>
</div>

<div class="form-group">
 <input type="password" [(ngModel)]="userdata.confirmpassword" name="confirmpassword" placeholder="Confirm Password" class="form-control" required #confirmpassword="ngModel" pattern="{{ password.value }}" />
 <div *ngIf=" confirmpassword.invalid && (myform.submitted || confirmpassword.touched)" class="alert alert-danger">
   <div *ngIf="confirmpassword.errors.required"> Confirm password is required. </div>
   <div *ngIf="confirmpassword.errors.pattern"> Password & Confirm Password does not match.</div>
 </div>
</div> */}