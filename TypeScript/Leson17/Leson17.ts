/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum level {
  Kids = 15,
  Easy,
  Medium,
  Hard,
}
