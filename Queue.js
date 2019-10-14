// 队列

function Queue () {
    var data = []
    // 入队
    this.enqueue = function (element) {
        data.push(element)
    }
    // 出队
    this.dequeue = function () {
        return data.shift()
    }
    // 读取队首元素
    this.front = function () {
        return data[0]
    }
    // 读取队尾元素
    this.back = function () {
        return data[data.length - 1]
    }
    // 显示队内所有元素
    this.toString = function () {
        var retStr = ""  
        for (var i = 0; i < data.length; i++) {       
            retStr += data[i] + "\n"   
        }    
        return retStr; 
    }
    // 队列是否为空
    this.isEmpty = function () {
        return data.length == 0
    }
}

// var q = new Queue()
// q.enqueue("Meredith")
// q.enqueue("Cynthia")
// q.enqueue("Jennifer")
// console.log(q.toString())
// q.dequeue()
// console.log(q.toString())
// console.log("Front of queue: " + q.front())
// console.log("Back of queue: " + q.back())

// 优先队列
function Priority_item (content, level) {
    this.content = content
    this.level = level
}
function Priority_queue () {
    var data = []
    this.enqueue = function (element) {
        data.push(element)
    }
    this.dequeue = function () {
        var level = data[0].level
        var num = 0, len = data.length
        for (var i = 1; i < len; i++) {
            if (data[i].level > level) {
                level = data[i].level
                num = i
            }
        }
        return data.splice(num, 1)
    }
    this.front = function () {
        return data[0]
    }
    this.back = function () {
        return data[data.length - 1]
    }
    this.toString = function () {
        var retStr = ""  
        for (var i = 0; i < data.length; i++) {       
            retStr += data[i].content + "\n"   
        }    
        return retStr; 
    }
    this.isEmpty = function () {
        return data.length == 0
    }
}

// var test1 = new Priority_item('ye', 8)
// var test2 = new Priority_item('qing', 10)
// var test3 = new Priority_item('lai', 11)

// var test_queue = new Priority_queue()
// test_queue.enqueue(test1)
// test_queue.enqueue(test2)
// test_queue.enqueue(test3)

// console.log(test_queue.dequeue())
