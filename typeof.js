var tail = {
    t1:"hello world",
    t2:10,
    t3:1.8,
    t4:true,
    t5:1<4,
    t6:[1,2,3]
}
for(var i in tail){
    console.log(typeof(i));
}