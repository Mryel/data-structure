
// 字典

function Dictionary () {
    var data = new Object()
    this.add = function (key, value) {
        data[key] = value
    }
    this.find = function (key) {
        return data[key]
    }
    this.remove = function (key) {
        delete data[key]
    }
    this.showAll = function () {
        for (var key in data) {
            console.log(key + '->' + data[key])
        }
    }
}

var pbook = new Dictionary() 
pbook.add("Mike","123") 
pbook.add("David", "345")
pbook.add("Cynthia", "456")
console.log("David's extension: " + pbook.find("David"))
pbook.remove("David")
pbook.showAll()
