class rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY= offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX , y:this.offsetY}
        }
      this.rope= Constraint.create(options)
        World.add(world,this.rope)
}
display(){
  var anchor1 = this.rope.bodyA.position.x
  var anchor2 = this.rope.bodyA.position.y
  var anchor3 = this.rope.bodyB.position.x+ this.offsetX
  var anchor4 = this.rope.bodyB.position.y + this.offsetY
   line(anchor1,anchor2,anchor3,anchor4)
}
}