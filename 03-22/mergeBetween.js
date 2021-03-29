function mergeInBetween(list1, list2, a, b) {
    // Write your code here
    let pointerA = list1
    let endL2 = list2  // 9 node
    let prev = null
    while (endL2.next) endL2 = endL2.next
    while (a > 1) {
        prev = pointerA //prev = node 1
        pointerA = pointerA.next // pointerA = node2
        a -= 1 //a = 1
    }
    let pointerB = list1
    while (b > 0) {
        pointerB = pointerB.next // pointerB = node4
        b -= 1 //b=0
    }
    endL2.next = pointerB

    if (prev) {
        prev.next = list2
        return list1
    }
    return list2



}