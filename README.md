# MongoDB $inc Operator Error: Incorrect Value Type
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numeric field by a specified value.  However, providing a string value instead of a number results in an error or unexpected behavior. 

## Bug Description
The bug involves using a string value ('1') instead of a numerical value (1) with the `$inc` operator.  This leads to a failure in the update operation. 

## Solution
The solution involves providing a numerical value to the `$inc` operator to correct the type error and ensure the intended update operation is carried out successfully.
