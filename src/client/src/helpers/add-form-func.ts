export function create2DArray(arr1: string[], arr2: string[], arr3: string[]) {
    let newArr: any = [];
    for (let i = 0; i < arr1.length; i++) {
      newArr.push([arr1[i], arr2[i],arr3[i]]);
    }
    return newArr;
  }

  