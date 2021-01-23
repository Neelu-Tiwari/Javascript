/*Question 1
What will the code below output to the console and why ?*/

console.log(1 + "2" + "2");
// This statement will print 112 because 1 is taken as integer so it will be printed as it is, 
// 2 is taken as string because it is witten in inverted commas,
// Again 2 is taken as string
// the + operater is used as to write along with not for addition here



console.log(1 + +"2" + "2");
// This srtatement will print 32 because 1 is integer
// 2 is a string here but it has one more  + opeartor which eill perform the adddtion with 1
// and 2 will be printed as 2 because again it is a string.



console.log(1 + -"1" + "2");
// This srtatement will print 02 because 1 is integer
// 1 is a string here but it has one more  - opeartor which will perform the substraction with 1
// and 2 will be printed as it is 2 because again it is a string.



console.log(+"1" + "1" + "2");
// This srtatement will print 112 because all the elements in function are string.
// the + operater is used as to write along with not for addition here

console.log( "A" - "B" + "2");
// This statement will print NaN2 (not a number) beacuse - opearator is not used with strings
// and we cannot perform any mathemetical operation on strings

console.log( "A" - "B" + 2);
// This statement will print NaN beacuse we cannot perform mathematical 
// operations on the combination of strings and integers



/* Question 2
You are given a variable “marks”. Your task is to print:
- AA if the mark is greater than 90
- AB if the mark is greater than 80 and less than or equal to 90
- BB if the mark is greater than 70and less than or equal to 80
- BC if the mark is greater than 60 and less than or equal to 70
- CC if the mark is greater than 50 and less than or equal to 60
- CD if the mark is greater than 40 and less than or equal to 50
- DD if the mark is greater than 30 and less than or equal to 40
- FF if the mark is less than or equal to 30
 */
 
 var marks = 52;
 
 if (marks > 90){
	 console.log("AA")
 }
 else if (marks < 90 && marks > 80){
	 console.log("AB")
 }
 else if (marks < 80 && marks > 70){
	 console.log("BB")
 }
else if (marks < 70 && marks > 60){
	 console.log("BC")
 }
 else if (marks < 60 && marks > 50){
	 console.log("CC")
 }
 else if (marks < 50 && marks > 40){
	 console.log("CD")
 }
 else if (marks < 40 && marks > 30){
	 console.log("DD")
 }
else{
	 console.log("FF")
 }

