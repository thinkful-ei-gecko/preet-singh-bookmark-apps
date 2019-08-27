//start the page, call other js files//

'use strict';

$(document).ready(function(){
    bookmarkList.handleBookmarkList();
    bookmarkList.renderBookmarkList();

    api.getItems().then(items => {
        items.forEach(item => store.addItem(item))
        bookmarkList.renderBookmarkList();  
        });      
});