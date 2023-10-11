let a=20;
let b=15;
function add(){
    if(a>=b){
    console.log('hello')
    } 
    else{
        console.log('bye')
    }  
}
add();
for(i=0;i<10;i++){
    console.log(i)
}

const users=['max','anna','joel']
for(let user of users){
    console.log(user);
}

const loggedinuser={
    name:'max',
    age:32,
    isAdmin:true
};
for(let result in loggedinuser){
    console.log(result);
    console.log(loggedinuser[result])
}
let finished=false;
while(!finished){
    finished=confirm('do you want to quit')
}
console.log('done');
let j=0;
while(j<10){
    j++
    console.log(j)
}