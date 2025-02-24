function processUniqueValues(arr) {
    const mySet = new Set(arr); // Create a Set from an array, automatically removing duplicates
  
    // Add a new value
    mySet.add('new value');
  
    // Check if a value exists
    const hasValue = mySet.has(5);

    console.log(hasValue)

    
  
    // Delete a value
    mySet.delete(3);
  
    // Iterate over the Set
    mySet.forEach(value => {
      console.log(value);
    });
  
    return mySet;
  }
  
  const myArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueSet = processUniqueValues(myArray);
  console.log(uniqueSet); // Output: Set(5) { 1, 2, 3, 4, 5, 'new value' }