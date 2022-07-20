// Given a list of integers sorted in ascending order nums, square the elements and give the output in sorted order.


let arr = [-9, -2, 0, 2, 3];
let n = arr.length;
let check_negative;
for (check_negative = 0; check_negative < n; check_negative++) {
    if (arr[check_negative] >= 0) { break; }
}

let l = check_negative - 1,
    r = check_negative,
    reference_index = 0;
let temp = new Array(n);
while (l >= 0 && r < n) {
    if (arr[l] * arr[l] < arr[r] * arr[r]) {
        temp[reference_index] = arr[l] * arr[l];
        l--;
    } else {
        temp[reference_index] = arr[r] * arr[r];
        r++;
    }

    reference_index++;
    temp[reference_index++] = arr[l] * arr[l];
    temp[reference_index++] = arr[r] * arr[r];
    l--;
    r++;
}
for (let x = 0; x < n; x++) {
    arr[x] = temp[x];
}
console.log(arr);