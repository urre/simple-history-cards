(function($) {

	'use strict';

	jQuery(function() {

		// Get site base url
		var pathArray = location.href.split( '/' );
		var protocol = pathArray[0];
		var host = pathArray[2];
		var url = protocol + '//' + host;

		// Set postbox width
		jQuery('#simple_history_dashboard_widget').parent().parent("#postbox-container-1").css('width', '100%');
		
		// Set wider search field and focus
		jQuery(".SimpleHistoryFilterDropin-searchInput").css('width', '50%');
		if(jQuery(window).width() > 768) {
			jQuery(".SimpleHistoryFilterDropin-searchInput").focus();
		}
		jQuery(".SimpleHistoryFilterDropin-searchInput").parent().addClass('shl_searchholder');	

		// Escape closes active
		jQuery(document).keyup(function(e) {

		  // Escape key => close details
		  if (e.keyCode == 27) {
		  	jQuery('.postbox .SimpleHistoryLogitem__details').removeClass('active');
		  }
		});

		// View details
		jQuery(document).on("click", ".button-details", function(e) {
		    e.preventDefault();
		    $(this).parent().next().addClass('active');

		});	

		// Close details
		jQuery(document).on("click", ".postbox .SimpleHistoryLogitem__details .close", function(e) {
		    e.preventDefault();
		    $(this).parent().removeClass('active');

		});

		// Hide details if narrow
		jQuery(window).on("resize", function() {
			if(jQuery(window).width() < 1100) {
				jQuery('.postbox .SimpleHistoryLogitem__details').removeClass('active');
			}

		});

		// Do stuff after Ajax requests finish
		jQuery( document ).ajaxComplete(function() {

			// Larger Avatars
			jQuery('.SimpleHistoryLogitem__senderImage img').attr('width', '40');
			jQuery('.SimpleHistoryLogitem__senderImage img').attr('height', '40');

			// Add summary card
			if(jQuery('.SimpleHistoryLogitem').length < 21) {
				jQuery('.SimpleHistoryLogitems').append('<li class="SimpleHistoryLogitem SimpleHistoryLogitem--last"><a target="_blank" href="'+url+'" class="button button-primary">Visit site</a><a href="'+url+'/wp-admin/edit.php" class="button">Posts</a><a href="'+url+'/wp-admin/edit.php?post_type=page" class="button">Pages</a><a href="'+url+'/wp-admin/options-general.php" class="button">Settings</a></li>');
			}

			// Add buttons
			$( ".SimpleHistoryLogitem__text" ).each( function( index, element ) {

				if(jQuery(this).next('.SimpleHistoryLogitem__details').length) {
					if(!jQuery(this).next('.SimpleHistoryLogitem__details').find('.close').length) {
						jQuery(this).next('.SimpleHistoryLogitem__details').prepend('<span class="close">✕</span>');
					}
				}

				// Simple history events
				if(jQuery(this).text().indexOf("events") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons shl_wordpress dashicons dashicons-wordpress"></span>');
				}

				// Created page
				if(jQuery(this).text().indexOf("Created page") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons shl_page dashicons dashicons-admin-page"></span>');
				}

				// Attachment
				if((jQuery(this).text().indexOf("attachment") >= 0 && jQuery(this).text().indexOf("Deleted") < 0) && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons shl_attachment dashicons dashicons-admin-media"></span>');
				}

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

				// Activated
				if(jQuery(this).text().indexOf("Activated") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons dashicons dashicons-admin-plugins"></span>');
				}

				// Deactivated
				if(jQuery(this).text().indexOf("Deactivated") >= 0 && !jQuery(this).find('.shl_dashicons').length) {
					jQuery(this).prepend('<span class="shl_dashicons dashicons dashicons-admin-plugins"></span>');
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
							if(jQuery(this).next('.SimpleHistoryLogitem__details').length) {
								jQuery(this).append('<a href="#" class="button-details">View details</a>');
							}
						}
					}
				}

			});	

		});

	});

}(jQuery));