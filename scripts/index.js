//start the page, call other js files//

'use strict';

  $(document).ready(function() {
  
    api.getItems(items => {
      items.forEach(item => {
        store.addItem(item);
      });
      bookmarkList.renderBookmarkList();
    });
    bookmarkList.handleBookmarkList();
  });