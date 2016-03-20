(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlaymatcostpre = document.querySelector( 'div.overlay-matcostpre' ),
		overlaywarehousingpre = document.querySelector( 'div.overlay-warehousingpre'),
		overlaytransportationcu = document.querySelector( 'div.overlay-transportationcu'),
		overlaylabourcu = document.querySelector( 'div.overlay-labourcu'),
		overlaytimecu = document.querySelector( 'div.overlay-timecu'),
		overlaytransportationpost = document.querySelector( 'div.overlay-transportationpost'),
		overlaydisposalpost = document.querySelector( 'div.overlay-disposalpost'),

		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay(overlay) {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();