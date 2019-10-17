
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
        // console.log(arr)
    }
}

var test = [45, 33, 29, 86, 53, 74, 98, 12, 19]
// bubbleSort(test)
// console.log(test)


// 选择排序

function selectionSort (arr) {
    var len = arr.length
    var min, temp
    for (var i = 0; i < len - 1; i++) {
        min = i
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}

// selectionSort(test)
// console.log(test)

// 插入排序

function insertSort (arr) {
    var len = arr.length
    for (var i = 1; i < len; i++) {
        var temp = arr[i]
        var j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
}

// insertSort(test)
// console.log(test)

function shellSort (arr) {
    var len = arr.length
    var gap = 1
    while (gap < len / 3) {
        gap = gap * 3 + 1
    }
    for(gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i]
            var j = i - gap
            while (j >= 0 && arr[j] > temp) {
                arr[j + gap] = arr[j]
                j = j - gap
            }
            arr[j + gap] = temp
        }
    }
}


// 归并排序

function merge(left, right) {
    var result = []
    var i = 0, j = 0
    var left_len = left.length, right_len = right.length
    while (i < left_len && j < right_len) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    while (i < left_len) {
        result.push(left[i++])
    }
    while (j < right_len) {
        result.push(right[j++])
    }
    return result
}

function mergeSort (arr) {
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var mid = Math.floor(len / 2) 
    var left = arr.slice(0, mid)
    var right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}


// 快速排序

function fastSort (arr) {
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var lesser = [], greater = []
    for (var i = 1; i < len; i++) {
        if (arr[i] < arr[0]) {
            lesser.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return fastSort(lesser).concat(arr[0], fastSort(greater))
}

for (var i = 0, j = 5000; i < 5000; i++) {
    test[i] =  j--
}

var start = new Date().getTime() 
bubbleSort(test) 
var stop = new Date().getTime() 
var elapsed = stop - start
console.log(" 执行冒泡排序消耗的时间为：" + elapsed + " 毫秒。")

start = new Date().getTime() 
selectionSort(test) 
stop = new Date().getTime() 
elapsed = stop - start
console.log(" 执行选择排序消耗的时间为：" + elapsed + " 毫秒。")

start = new Date().getTime() 
insertSort(test) 
stop = new Date().getTime() 
elapsed = stop - start
console.log(" 执行插入排序消耗的时间为：" + elapsed + " 毫秒。")

start = new Date().getTime() 
shellSort(test) 
stop = new Date().getTime() 
elapsed = stop - start
console.log(" 执行希尔排序消耗的时间为：" + elapsed + " 毫秒。")

start = new Date().getTime() 
mergeSort(test) 
stop = new Date().getTime() 
elapsed = stop - start
console.log(" 执行归并排序消耗的时间为：" + elapsed + " 毫秒。")

start = new Date().getTime() 
fastSort(test) 
stop = new Date().getTime() 
elapsed = stop - start
console.log(" 执行快速排序消耗的时间为：" + elapsed + " 毫秒。")