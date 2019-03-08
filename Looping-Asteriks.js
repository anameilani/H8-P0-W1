//1. Menyusun Barisan Bintang

var row1 = 0
for(row1; row1 <5; row1++){
    console.log("*")
}

//2. Menyusun Barisan Bintang Dengan Nested Looping 
var row2 = 5
var star= ""
for (var r= 0; r <row2; r++){   
for(var c= 0; c<row2; c++){
  star=star+"*"
}
  console.log(star)
  star=""
} 



//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5
var star= ""
for (var r= 0; r <row3; r++){   
for(var c= 0; c<=r; c++){
  star=star+"*"
}
  console.log(star)
  star=""
} 
