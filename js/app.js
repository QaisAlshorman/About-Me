'use strict'

alert ('welcome to my webpage' )
  let Qus1=  prompt("what\'s your name ");
  while (!Qus1){
      Qus1=prompt('please enter you\'r name')
  }
  alert ('hello  ' +Qus1 +' and nice to know you')
 
  if ( Qus1.toUpperCase !=='QAIS'){
console.log(Qus1)
alert("My name Qais  " +  Qus1 + "   glade to know you")}



let Qus2=  prompt('age is record can you guess my my older' ,' answer yes or no plz ') ;
Qus2.toUpperCase();
while (!Qus2){ Qus2=  prompt('age is record  \' can you guess my age ?' ,' answer yes or no plz ')}

if (Qus2.toLowerCase == 'yes'||Qus2.toLowerCase()=='y'){
    alert(' gooood you look smart one')
    
}

else if (Qus2.toLowerCase == 'no'||Qus2.toLowerCase()=='n'){

    alert ('do\'nt worry as i said befor the age is just a record ')
}

let Qus3 =prompt(  ' maths and physics core of my stdy  do you think am I a teacher ' , ' answer yes or no plz ') ;

while (!Qus3){
    Qus3=prompt('maths and physics core of my stdy  do you think am I a teacher ' , ' answer yes or no plz')
}

console.log(Qus3);
switch ( Qus3){
case 'yes':
case 'y' :
    alert ('I am soory but I am not a teacher')
break ;

case 'no':
case 'n':
alert('that\'s corect i am an engineer')
break ;
}

let Qus4=  prompt("travel and adventurs one of my hoppies  , tell us about you  ") ;

console.log(Qus4);
alert("you enter  "+ Qus4 +"  good to know  some thing about you ");

let Qus5= prompt("do you wann to play guess game  " , 'answer yes or no plz') ;
while (!Qus5){
    Qus5=prompt("do you wann to play guess game  " , 'answer yes or no plz')
}
switch ( Qus5.toLowerCase()){
    case 'yes':
    case 'y' :

    for ( let i=0 ; i<4 ;i++)
    {
        if (i==3 ){
            alert ('you did not guess the answer which is 13');
            }

      let Qus6=prompt ('guess an ordenary number less than 50', ' enter number plz')

      if  ( Qus6 == '13')
     {
              alert('bengoooo you answer correct');
             break ;
              }
    
     
    else if ( Qus6 > '13'  ){

          alert (' too large try again')
    }

      
         
     else if (Qus6 < '13' ){ alert ( 'too law try agin')}
     


              
          
            
        
    }
    
    break ;

   case'no' :
    case'n':
      alert('you look did not like games') ;
    break ;
    }

    let Qus7 =prompt ('time value of money guess answatch type', ' enter internationally clock plz')
    let clocks= ['rolex' , 'ck' ,'orient','swatch' ,'hublot' ,'current'] ;
let scoor =0
    for ( let j=0 ; j<clocks.length ;j++){
    
    
        if (Qus7== clocks[0] || Qus7== clocks[1] || Qus7== clocks[2] ||Qus7==clocks[3]||Qus7==clocks[4]||Qus7==clocks[5]){
            alert ('great job ^.^');
            Qus7 =prompt ('try again ');
            scoor++ ;
         
            } else if((Qus7!== clocks[0] || Qus7!== clocks[1] || Qus7!== clocks[2] ||Qus7!==clocks[3]||Qus7!==clocks[4]||Qus7!==clocks[5])) {
                alert("wrong answerr >.< ")
                Qus7 =prompt ('try again ')
            }

            
        }
        alert ('you  correct answers   '+ scoor)