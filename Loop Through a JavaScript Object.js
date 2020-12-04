var student = {
    name: 'Mike',
    age: 34,
    city: 'Eagle Mountain'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);   //Best Practice
  }