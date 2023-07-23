
    array1 =['farvardin', 'ordibehesht', 'khordad', 'tir', 'mordad', 'shahrivar', 'mehr', 'aban', 'azar', 'dei', 'bahman', 'esfand'],
    array2= ['Have agood day', 'Happy Chrismas', 'Nice to meet you', 'Good luck'],
    array3 =['vitsi1', 'vitsi2', 'vitsi3', 'vitsi4', 'vitsi5', 'vitsi6' ]



let mixmasseage = (array) =>{
return array [Math.floor(Math.random() * array.length )]
}

onecheck = mixmasseage(array1);
twocheck = mixmasseage(array2);
threecheck = mixmasseage(array3)
console.log(`It is your month ${onecheck},
and your good accident ${twocheck},
and finaly is ${threecheck}`);

