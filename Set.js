// 集合

// 类实现
function Set () {
    var data = []
    // 添加元素
    this.add = function (element) {
        if (data.indexOf(element) < 0) {
            // data.push(val)
            if (data.length == 0) {
                data.push(element)
            } else {
                if (element < data[0]) {
                    data.unshift(element)
                } else if (element >= data[data.length - 1]) {
                    data.push(element)
                } else {
                    for (var i = 1; i < data.length; i++) {
                        if (element < data[i]) {
                            data.splice(i - 1, 0, element)
                        }
                    }
                }
            }
            return true
        }
        return false
    }
    // 删除元素
    this.remove = function (element) {
        var index = data.indexOf(element)
        if (index > -1) {
            data.splice(index, 1)
            return true
        }
        return false
    }
    // 判断某个元素是否存在
    this.has = function (element) {
        if (data.indexOf(element) > -1) {
            return true
        }
        return false    
    }
    // 并集
    this.union = function (set) {
        var values = set.show()
        var result = new Set()
        for (var i = 0; i < data.length; i++) {
            result.add(data[i])
        }
        for (var j = 0; j < values.length; j++) {
            if (!result.has(values[i])) {
                result.add(values[i])
            }
        }
        return result
    }
    // 交集
    this.intersect = function (set) {
        var result = new Set()
        for (var i = 0; i < data.length; i++) {
            if (set.has(data[i])) {
                result.add(data[i])
            }
        }
        return result
    }
    // 判断是否为某个集合的子集
    this.subset = function (set) {
        if (this.size() == 0) {
            return true
        }
        if (this.size() > set.size()) {
            return false
        }
        for (var i = 0; i < data.length; i++) {
            if (!set.has(data[i])) {
                return false
            }
        }
        return true
    }
    // 补集
    this.difference = function (set) {
        var result = new Set()
        for (var i = 0; i < data.length; i++) {
            if (!set.has(data[i])) {
                result.add(data[i])
            }
        }
        return result
    }
    // 返回比传入元素大的元素中最小的那 个
    this.higher  = function (element) {
        var highers = []
        for (var i = 0; i < data.length; i++) {
            if (data[i] > element) {
                highers.push(data[i])
            }
        }
        if (highers.length > 0) {
            return Math.min(...highers)
        } else {
            console.log('集合不存在更大的元素')
        }
    }
    // 返回比传入元素小的元素中最大的那 个
    this.lower  = function (element) {
        var lowers = []
        for (var i = 0; i < data.length; i++) {
            if (data[i] < element) {
                lowers.push(data[i])
            }
        }
        if (lowers.length > 0) {
            return Math.max(...lowers)
        } else {
            console.log('集合不存在更小的元素')
        }
    }
    // 集合的大小
    this.size = function () {
        return data.length
    }
    // 集合的所有元素
    this.show = function () {
        return data
    }
}

var test = new Set()
test.add(10)
test.add(8)
test.add(16)
test.add(21)
test.add(5)
test.add(33)
console.log(test.higher(11))
console.log(test.lower(4))