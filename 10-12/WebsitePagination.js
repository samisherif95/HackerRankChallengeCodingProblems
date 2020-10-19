function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    // Write your code here

    // [['item1', '10', '15'], ['item2', '3', '4'], ['item3', '17', '8']]
    // sortParameter = 1 (relevance)
    // sortOrder = 0 (ascending)
    // itemsPerPage  = 2
    // pageNumber = 1

    //items = [['item2', '3', '4'], ['item1', '10', '15'], ['item3', '17', '8']]


    if (sortParameter === 0) {
        items.sort((a, b) => (a[0] < b[0]) ? -1 : 1);
    } else {
        items.sort((a, b) => a[sortParameter] - b[sortParameter]);
    }

    if (sortOrder === 1) {
        items = items.reverse();
    }
    let i = pageNumber * itemsPerPage; //1*0 =0
    let pageItems = [];
    while (i < items.length && pageItems.length < itemsPerPage) {
        pageItems.push(items[i][0]);
        i++;
    }
    return pageItems;
}