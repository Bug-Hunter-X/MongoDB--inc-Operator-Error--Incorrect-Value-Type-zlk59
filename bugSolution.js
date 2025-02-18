```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: 1}});
```