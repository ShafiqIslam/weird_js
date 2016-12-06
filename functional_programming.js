function mapForEach(arr, fn) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(fn(arr[i]));
	}
	return newArray;
}

var arr1 = [1,2,3];
var arr2 = mapForEach(arr1, function(a) {
	return a * a;
});

console.log(arr1);
console.log(arr2);

var checkForLimitSimple = function(limiter) {
	return function(limiter, item) {
		return item < limiter;
	}.bind(this, limiter);
}

var arr3 = mapForEach(arr2, checkForLimitSimple(4));
console.log(arr3);

var arr4 = _.map(arr2, function(n) {
  return n + n;
});
console.log(arr4);