//start the page, call other js files//

'use strict';

$(document).ready(function() {
    bookmarkList.handleBookmarkList();
    bookmarkList.renderBookmarkList(); 
    api.getItems(items => {
        items.forEach(item => {
            store.addItem(item);
        });
});
});