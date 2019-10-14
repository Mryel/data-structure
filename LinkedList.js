// 链表


/// 节点类
function Node (element) {
    this.element = element
    this.next = null
}
// 单向链表类
function LinkedList () {
    var head = new Node('head')
    // 查找链表
    this.findPrevious = function (item) {
        var currNode = head
        while (!(currNode.next == null) && currNode.next.element != item) {
            currNode = currNode.next
        }
        return currNode
    }
    this.find = function (item) {
        var currNode = head
        while (currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }
    this.insert = function (element, item) {
        var newNode = new Node(element)
        var current = this.find (item)
        newNode.next = current.next
        current.next = newNode
    }
    this.remove = function (item) {
        var preNode = this.findPrevious(item)
        if (!(preNode.next == null)) {
            preNode.next = preNode.next.next
        }
    }
    this.display = function () {
        var currNode = head
        while (!(currNode.next == null)) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
}

// var cities = new LinkedList(); 
// cities.insert("Conway", "head")
// cities.insert("Russellville", "Conway")
// cities.insert("Alma", "Russellville") 
// cities.display()
// cities.remove('Russellville')
// cities.display()

function DNode (element) {
    this.element = element
    this.previous = null
    this.next = null
}
// 双向链表
function DoubleLinkedList () {
    var head = new DNode('head')
    this.dispReverse = function () {
        var currNode = this.findLast()
        while (!(currNode.previous == null)) {
            console.log(currNode.element)
            currNode = currNode.previous
        }
    }
    // 查找链表
    this.findLast = function () {
        var currNode = head
        while (!(currNode.next == null)) {
            currNode = currNode.next
        }
        return currNode
    }
    this.find = function (item) {
        var currNode = head
        while (currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }
    this.insert = function (element, item) {
        var newNode = new DNode(element)
        var current = this.find (item)
        newNode.next = current.next
        newNode.previous = current
        current.next.previous = newNode
        current.next = newNode
    }
    this.remove = function (item) {
        var currNode = this.find(item)
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next
            currNode.next.previous = currNode.previous
            currNode.next = null
            currNode.previous = null
        }
    }
    this.display = function () {
        var currNode = head
        while (!(currNode.next == null)) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
}