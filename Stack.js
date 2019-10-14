// 栈结构

// 入栈
function push (element) {
    this.dataStore[this.top++] = element
}

// 出栈
function pop () {
    return this.dataStore[--this.top]
}

// 栈顶元素
function peek () {
    return this.dataStore[this.top - 1]
}

// 清空栈
function clear () {
    this.top = 0
}

// 栈的长度
function length () {
    return this.top
}
function Stack () {
    this.dataStore = [] 
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}


// 数字进制转换
function mulBase (num, base) {
    var s = new Stack()
    do {
        s.push(num % base)
        num = Math.floor(num / base)
    } while (num > 0)
    var result = ''
    while (s.length() > 0) {
        result += s.pop()
    }
    return result
}

console.log(mulBase(32, 2))
console.log(mulBase(125, 8))