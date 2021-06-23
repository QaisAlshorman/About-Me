'use strict'

function yes_no_validation(user_inp) {
    let Comparison_yes_y = (user_inp.toLowerCase() == 'yes' || user_inp.toLowerCase() == 'y');
    let Comparison_no_n = (user_inp.toLowerCase() == 'no' || user_inp.toLowerCase() == 'n');
    let result = Comparison_yes_y || Comparison_no_n;
    return !result;

}
function validation(user_inp, Qus) {
    while (yes_no_validation(user_inp)) {
        alert('please answer by \'yes\' or \'no\'');
        user_inp = prompt(Qus)
    }
    return user_inp
}
alert('welcome to my webpage')
let Qus1 = prompt("what\'s your name ");
while (!Qus1) {
    Qus1 = prompt('please enter you\'r name')
}
alert('hello  ' + Qus1 + ' and nice to know you')



if (Qus1.toUpperCase !== 'QAIS') {
    console.log(Qus1)
    alert("My name Qais  " + Qus1 + "   glade to know you")
}

let Qus2 = prompt('age is record can you guess my my older', ' answer yes or no plz ');

function qus2(Qus_function2) {

    Qus_function2.toUpperCase();
    while (!Qus_function2) { Qus_function2 = prompt('age is record  \' can you guess my age ?', ' answer yes or no plz ') }

    if (Qus_function2.toLowerCase == 'yes' || Qus_function2.toLowerCase() == 'y') {
        alert(' gooood you look smart one')

    }

    else if (Qus_function2.toLowerCase == 'no' || Qus_function2.toLowerCase() == 'n') {

        alert('do\'nt worry as i said before the age is just a record ')
    }
}

qus2(validation(Qus2, 'age is record can you guess my my older', 'answer yes or no plz'));


let Qus3 = prompt(' maths and physics core of my stdy  do you think am I a teacher ', ' answer yes or no plz ');
function qus3(Qus_function3) {

    while (!Qus_function3) {
        Qus_function3 = prompt('maths and physics core of my stdy  do you think am I a teacher ', ' answer yes or no plz')
    }

    console.log(Qus_function3);
    switch (Qus_function3) {
        case 'yes':
        case 'y':
            alert('I am soory but I am not a teacher')
            break;

        case 'no':
        case 'n':
            alert('that\'s corect i am an engineer')
            break;
    }

}

qus3(validation(Qus3, 'maths and physics core of my stdy  do you think am I a teacher ', ' answer yes or no plz '))

let Qus_function6;
let Qus4 = prompt("travel and adventurs one of my hoppies  , tell us about you  ");
// console.log(Qus4);
alert("you enter  " + Qus4 + "  good to know  some thing about you ");
let Qus5 = prompt("do you wann to play guess game  ", 'answer yes or no plz');



function qus5_6(Qus_function5) {
    while (!Qus_function5) {
        Qus_function5 = prompt("do you wann to play guess game  ", 'answer yes or no plz')
    }
    console.log(Qus_function5);
    switch (Qus_function5.toLowerCase()) {
        case 'yes':
        case 'y':
            // let Qus_function6 = prompt('guess an ordenary number less than 20', ' enter number plz')
            for (let i = 0; i < 4; i++) {
                Qus_function6 = prompt('guess an ordenary number less than 20', ' enter number plz')
                if (i == 3 && Qus_function6 != '13') {
                    alert('you did not guess the answer which is 13');
                }
                else if (Qus_function6 == '13') {
                    alert('bengoooo you answer correct');
                    break;
                }


                else if (Qus_function6 > '13') {

                    alert(' too large try again')
                }



                else if (Qus_function6 < '13') {

                    alert('too law try agin')
                }

            }
            break
        case 'no':
        case 'n':
            alert('you look did not like games');
            break;
    }
}

qus5_6(validation(Qus5, 'do you wann to play guess game', 'answer yes or no plz '));

let Qus7 = prompt('time value of money guess answatch type', ' enter internationally clock plz')
let clocks = ['rolex', 'ck', 'orient', 'swatch', 'hublot', 'current'];
function Qus_function7(Qus_function7) {



    let scoor = 0;
    for (let j = 0; j < clocks.length; j++) {


        if (Qus_function7 == clocks[0] || Qus_function7 == clocks[1] || Qus_function7 == clocks[2] || Qus_function7 == clocks[3] || Qus_function7 == clocks[4] || Qus_function7 == clocks[5]) {
            alert('great job ^.^');
            Qus_function7 = prompt('try again ');
            scoor++;

        } else if ((Qus_function7 !== clocks[0] || Qus_function7 !== clocks[1] || Qus_function7 !== clocks[2] || Qus_function7 !== clocks[3] || Qus_function7 !== clocks[4] || Qus_function7 !== clocks[5])) {
            alert("wrong answerr >.< ")
            Qus_function7 = prompt('try again ')
        }


    }
    alert('you  correct answers   ' + scoor)
}

Qus_function7(Qus7)