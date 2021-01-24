//What is the value of clothes[0] and why?

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

/*value is undefined
Reducing the value of the length property has the side-effect of deleting 
own array elements whose array index is between the old and new length values.

Because of this length behavior, when JavaScript executes clothes.length = 0,
all the items of the array clothes are deleted.

clothes[0] is undefined, because clothes array was emptied.*/

//Write a Javascript program to find the sum of all elements of a given array?

var array = [11, 200, 37, 89, 235, 46];
    sum = 0;
for (let i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    }
console.log('Sum : '+sum); 