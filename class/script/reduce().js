const array = [1, [2, 3], 4, [5, 6]];
const result = array.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);

//pre : [] cur : [1]
//pre : [1] cur : [1]
//pre : [1] cur : [2, 3] concat 때문에 [1, 2, 3]
//pre : [1, 2, 3] cur : [4] concat 때문에 [1, 2, 3, 4]
//pre : [1, 2, 3, 4] cur : [5, 6] concat 때문에 [1, 2, 3, 4 ,5, 6]
//최종반환값 : [1, 2, 3, 4, 5, 6] 

// concat은 배열을  합쳐주는거임