var double=function(x){
  return x+x;
};

var square=function(x){
  return x*x;
}
//console.log(double(1));
 
//var ar=[1,2,3];
//console.log(ar);

var map= function(ar,x){
  for (var i=0;i<ar.length;i++){
    ar[i]=x(ar[i]);
    console.log(ar[i]);
  }
  
}

map([1,2,3],double);
map([1,2,3],square);
