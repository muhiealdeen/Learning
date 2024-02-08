/*
  Type Annotations With Arrays
*/

let all: String | Number | Boolean = 'Osama';
all = 'A';
all = 100;
all = true;

let myFriends: string[] = ['Ahmed', 'Sayed', 'Ali', 'Osama'];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
