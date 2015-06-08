

(function($) {

	'use strict';

	jQuery(function() {

		// Set postbox width
		jQuery('#simple_history_dashboard_widget').parent().parent("#postbox-container-1").css('width', '100%');
		
		// Set wider search field
		jQuery(".SimpleHistoryFilterDropin-searchInput").css('width', '50%');
		jQuery(".SimpleHistoryFilterDropin-searchInput").focus();
		jQuery(".SimpleHistoryFilterDropin-searchInput").parent().addClass('shl_searchholder');		

		// Do stuff after Ajx
		jQuery( document ).ajaxComplete(function() {


			// Larger Avatars
			jQuery('.SimpleHistoryLogitem__senderImage img').attr('width', '40');
			jQuery('.SimpleHistoryLogitem__senderImage img').attr('height', '40');

			// Add buttons
			$( ".SimpleHistoryLogitem__text" ).each( function( index, element ) {	

				// Deleted
				if(jQuery(this).text().indexOf("Deleted") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons shl_deleted dashicons dashicons-trash"></span>');
				}

				// Logged In
				if(jQuery(this).text().indexOf("Logged") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons dashicons dashicons-admin-users"></span>');
				}

				// Updated
				if(jQuery(this).text().indexOf("Updated") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons shl_updated dashicons dashicons-edit"></span>');
				}

				// Updated
				if(jQuery(this).text().indexOf("Activated") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons dashicons dashicons-admin-generic"></span>');
				}

				// Find links inside texts
				if(jQuery(this).find("a").length) {

					// Find link index
					var link = jQuery(this).find('a').attr('href');
					var linknumber = link.match(/\d+/);

					// Append buttons
					if(linknumber[0]) {
						if(!jQuery(this).find('.button-view').length) {
							jQuery(this).append('<a href="https://linknest.cc/'+linknumber[0]+'" class="button button-view" target="_blank">View on site</a>');

						}
					}

				}

			});	

		});

	});


}(jQuery));
