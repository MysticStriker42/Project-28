class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.image=loadImage("images/grass.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			fill(101,67,33)
			image(this.image,0,-20,500,100)
			image(this.image,400,-20,500,100)
			image(this.image,-400,-20,500,100)
			
			pop()
			
	}

}