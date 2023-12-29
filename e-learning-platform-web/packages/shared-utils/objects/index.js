function extractObjInArray(array) {
  const newArray = array.map((item, index) => {
    return {
      ...item,
      ...item.user,
    };
  });
  return newArray;
}

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    if (!map.has(key)) {
      map.set(key, [item]);
    } else {
      map.get(key).push(item);
    }
  });
  const arr = Array.from(map);
  let newArray = [];
  // console.log(arr)
  arr.map((item) => {
    newArray.push({
      label: JSON.parse(item[0]),
      data: item[1],
    });
  });
  return newArray;
}
/**
 * usage  ::  const grouped = groupBy(pets,
pet => JSON.stringify({ name:pet.type.name }));
 */

export { extractObjInArray, groupBy };
