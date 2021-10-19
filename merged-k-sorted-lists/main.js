/*
merging two lists is simple
keep merging two at a time till there is only one list left. (list.length ===1)

*/

/*
    lists =
    [
   1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
]

a =  2 -> 6
b =  1 -> 1 -> 3 -> 4 -> 5

mergedAB

return lists[0] = 1 -> 1 -> 2 -> 3 ->

*/

function mergeList(a, b){
    let dummy = new ListNode(0);
    let current = dummy;

    while(a !== null && b !== null) {
        if(a.val < b.val) {
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
    current.next = a || b;

    return dummy.next;
}

var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null;
    }

    while(lists.length > 1) {

        let a = lists.shift();
        let b = lists.shift();
        let mergedAB = mergeList(a, b);
        lists.push(mergedAB);
    }
    return lists[0];
};
