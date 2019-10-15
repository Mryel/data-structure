
//----------------------------------------- 排序---------------------------------------


// 冒泡排序

function bubbleSort (arr) {
    var len = arr.length
    var temp
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

