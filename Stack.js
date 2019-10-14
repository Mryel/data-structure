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

// console.log(mulBase(32, 2))
// console.log(mulBase(125, 8))


// 回文字符串判断
function isPalindrome (word) {
    var s = new Stack()
    for (var i = 0; i < word.length; i++) {
        s.push(word[i])
    }
    var rword = ''
    while (s.length() > 0) {
        rword += s.pop()
    }
    return word == rword
}

// var word = "hello"
// if (isPalindrome(word)) {    
//     console.log(word + " is a palindrome.")
// } else {    
//     console.log(word + " is not a palindrome.")
// } 
// word = "racecar"
// if (isPalindrome(word)) {    
//     console.log(word + " is a palindrome.")
// } else {    
//     console.log(word + " is not a palindrome.")
// }


// 递归演示

function factorial(n) {    
    if (n === 0) {       
        return 1;    
    } else {       
        return n * factorial(n-1);    
    } 
}

function fact (n) {
    var s = new Stack()
    while (n > 1) {
        s.push(n--)
    }
    var product = 1
    while (s.length() > 0) {
        product *= s.pop()
    }
    return product
}

// console.log(factorial(5))
// console.log(fact(5))

// 括号匹配实现

function isMatch (string) {
    var s = new Stack()
    var len = string.length
    if (len === 0) {
        return true
    }
    for (var i = 0; i < len; i++) {
        if (string[i] == '{' || string[i] == '[' || string[i] == '(') {
            s.push(string[i])
        } else {
            var temp = s.pop()
            if ((temp + string[i]) != '{}' && (temp + string[i] != '[]') && (temp + string[i]) != '()') {
                return false
            }
        }
    }
    if (s.length() > 0) {
        return false
    }
    return true
}

// console.log(isMatch('({[([]){}()]})'))
