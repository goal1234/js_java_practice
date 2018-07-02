document.write("<p>hello world</p>");

$(function() {
    $('body').hide().fadeIn(3000);
})


var firstName = 'John';
var lastName = 'Smith';
var fullName = firstName + lastName;


var firstName = 'John';
var lastName = 'Smith';
var fullName = firstName + ' ' + lastName;


var name = prompt('What is your name?', '');

document.write('<p>Welcome ' + name + '</p>');

var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
var days = new Array('Mon', 'Tues', 'Wed');


var authors = [ 'Ernest Hemingway',
    'Charlotte Bronte',
    'Dante Alighieri',
    'Emily Dickinson'
];


var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
alert(days[0]);


days[days.length-1]


var i = 0;
alert(days[i]);


//push
var properties = ['red', '14px', 'Arial'];

properties[3] = 'bold';
properties[properties.length] = 'bold';

properties.push("bold");
properties.push('bold', 'italic', 'underlined');


//在还是的地方
var properties = ['red', '14px', 'Arial'];
properties.unshift('bold');
properties.unshift('bold', 'italic', 'underlined');

//pop->删除最后一个
//shift -> 删除最开始的一个


var p = [0,1,2,3];
var removedItem = p.pop();


var authors = [ 'Ernest Hemingway',
    'Charlotte Bronte',
    'Dante Alighieri',
    'Emily Dickinson'
];

if ( condition ) {
// some action happens here
}


if (enteredColor == 'red') {
    document.body.style.backgroundColor='red';
}


if (dayOfWeek == 'Friday') {
    var fridayCash = prompt('How much money can you spend?', '');
    if (fridayCash >= 50) {
        alert('You should go out to a dinner and a movie.');
    } else if (fridayCash >= 35) {
        alert('You should go out to a fine meal.');
    } else if (fridayCash >= 12) {
        alert('You should go see a movie.');
    } else {
        alert('Looks like you will be watching TV.');
    }
}

