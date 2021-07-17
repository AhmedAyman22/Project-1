const redirectFour = document.getElementById('circle1');
const redirectThree = document.getElementById('circle2');
const redirectTwo = document.getElementById('circle3');
const redirectOne = document.getElementById('circle4');

// scrollTo parentheses are divs' coordinates converted from vh to px
redirectOne.addEventListener('click',function(){window.scrollTo(0, 98);})
redirectTwo.addEventListener('click',function(){window.scrollTo(0, 482);})
redirectThree.addEventListener('click',function(){window.scrollTo(0, 865);})
redirectFour.addEventListener('click',function(){window.scrollTo(0, 1250);})