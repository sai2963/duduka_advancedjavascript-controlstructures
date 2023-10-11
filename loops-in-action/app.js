let input=document.getElementById('user-number');
let button1=document.getElementById('btn1')
let result1=document.getElementById('result')

function sum(){
    let a=0;
    for(i=0;i<=input.value;i++){
      a+=i
    }

   result1.textContent=a;
}
button1.addEventListener('click',sum)

let link1=document.getElementById('ths');
let link2=document.getElementById('js');
let link3=document.getElementById('crs');
let button2=document.getElementById('btn2');

function addcolor(){
  let user=[link1,link2,link3]
  for(let users of user){
    users.style.backgroundColor='yellow';
  }
}
button2.addEventListener('click',addcolor)

let button3=document.getElementById('btn3');
let userdata=document.getElementById('data');


function Data(){
  let user={
    name:'sai',
    age:20,
    isAdmin:true

  };
  userdata.textContent='';
  //userdata.innerHTML='';
  for (let propertyName in user){
    let dummy=propertyName.toUpperCase()+':'+user[propertyName];
    let userdata2=document.createElement('li');
    userdata2.style.listStyle='none'
    userdata2.textContent=dummy.toUpperCase();
    //userdata.textContent=user[propertyName]
    userdata.append(userdata2);
    
  }
  
}
button3.addEventListener('click',Data)

let inputvaue2=document.getElementById('input2')
let button4=document.getElementById('btn4')
let solut=document.getElementById('sol')
function inputchech(){
  if(inputvaue2.value>6){
    confirm('please enter number upto 6')
    inputvaue2.value=''
  }
}
//inputvaue2.addEventListener('input',inputchech)


button4.addEventListener('click',inputchech)