// 二叉树

// 节点
function Node (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = function () {
        return this.data
    }
}

// 二叉查找树
function BST () {
    this.root = null
    // 插入节点
    this.insert = function (data) {
        var n = new Node(data, null, null)
        if (this.root == null) {
            this.root = n
        } else {
            var current = this.root
            var parent
            while (true) {
                parent = current
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = n
                        break
                    }
                } else {
                    current = current.right
                    if (current == null) {
                        parent.right = n
                        break
                    }
                }
            }
        }
    }
    this.putstr = function (val) {
        console.log(val)
    }
    // 中序遍历
    this.inOrder = function (node) {
        if (!(node == null)) {
            this.inOrder(node.left)
            this.putstr(node.show() + " ")
            this.inOrder(node.right)
        }
    }
    // 先序遍历
    this.preOrder = function (node) {
        if (!(node == null)) {
            this.putstr(node.show() + " ")
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    // 后序遍历
    this.postOrder = function (node) {
        if (!(node == null)) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            this.putstr(node.show() + " ")
        }
    }
    // 查找最小值
    this.getMin = function () {
        var current = this.root
        while (!(current.left == null)) {
            current = current.left
        }
        return current.data
    }
    // 查找最大值
    this.getMax = function () {
        var current = this.root
        while (!(current.right == null)) {
            current = current.right
        }
        return current.data
    }
    // 查找给定值
    this.find = function (data) {
        var current = this.root
        while (current != null) {
            if (current.data == data) {
                return current
            } else if (current.data < data) {
                current = current.right
            } else {
                current = current.left
            }
        }
        return null
    }
    // 删除节点
    this.remove = function (data) {
        this.root = removeNode(this.root, data)
    }
    this.removeNode = function (node, data) {
        if (node == null) {
            return null
        }
        if (data == node.data) {
            // 没有子节点的节点
            if (node.left == null && node.right == null) {
                return null
            }
            // 没有左子节点的节点
            if (node.left == null) {
                return node.right
            }
            // 没有右子节点的节点
            if (node.right == null) {
                return node.left
            }
            // 有两个子节点的节点
            var tempNode = node.right.getMin()
        }
    }
}

// var nums = new BST()
// nums.insert(23) 
// nums.insert(45) 
// nums.insert(16) 
// nums.insert(37) 
// nums.insert(3) 
// nums.insert(99) 
// nums.insert(22) 
// console.log("Inorder traversal: ") 
// nums.inOrder(nums.root)
// console.log("preOrder traversal: ") 
// nums.preOrder(nums.root)
// console.log("postOrder traversal: ") 
// nums.postOrder(nums.root)
// console.log(nums.getMax())
// console.log(nums.getMin())
// console.log(nums.find(22))
