$(document).ready(function() {
	var overlaymatcostpre = document.querySelector( 'div.overlay-matcostpre' ),
		overlaywarehousingpre = document.querySelector( 'div.overlay-warehousingpre'),
		overlaytransportationcu = document.querySelector( 'div.overlay-transportationcu'),
		overlaylabourcu = document.querySelector( 'div.overlay-labourcu'),
		overlaytimecu = document.querySelector( 'div.overlay-timecu'),
		overlaytransportationpost = document.querySelector( 'div.overlay-transportationpost'),
		overlaydisposalpost = document.querySelector( 'div.overlay-disposalpost'),
		triggermatcostpre = document.querySelector( 'img#matcostpre'),
		triggerwarehousingpre = document.querySelector( 'img#warehousingpre'),
		triggertransportationcu = document.querySelector( 'img#transportationcu'),
		triggerlabourcu = document.querySelector( 'img#labourcu'),
		triggertimecu = document.querySelector( 'img#timecu'),
		triggertransportationpost = document.querySelector( 'img#transportationpost'),
		triggerdisposalpost = document.querySelector( 'img#disposalpost'),
		closematcostpre = document.querySelector( 'button#overlay-close-matcostpre'),
		closewarehousingpre = document.querySelector( 'button#overlay-close-warehousingpre'),
		closetransportationcu = document.querySelector( 'button#overlay-close-transportationcu'),
		closelabourcu = document.querySelector( 'button#overlay-close-labourcu'),
		closetimecu = document.querySelector( 'button#overlay-close-timecu'),
		closetransportationpost = document.querySelector( 'button#overlay-close-transportationpost'),
		closedisposalpost = document.querySelector( 'button#overlay-close-disposalpost'),
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

	triggermatcostpre.addEventListener('click', toggleOverlay(overlaymatcostpre));
	closematcostpre.addEventListener('click', toggleOverlay(overlaymatcostpre));
	triggerwarehousingpre.addEventListener('click', toggleOverlay(overlaywarehousingpre));
	closewarehousingpre.addEventListener('click', toggleOverlay(overlaywarehousingpre));
	triggerlabourcu.addEventListener('click', toggleOverlay(overlaylabourcu));
	closelabourcu.addEventListener('click', toggleOverlay(overlaylabourcu));
	triggertransportationcu.addEventListener('click', toggleOverlay(overlaytransportationcu));
	closetransportationcu.addEventListener('click', toggleOverlay(overlaytransportationcu));
	triggertimecu.addEventListener('click', toggleOverlay(overlaytimecu));
	closetimecu.addEventListener('click', toggleOverlay(overlaytimecu));
	triggertransportationpost.addEventListener('click', toggleOverlay(overlaytransportationpost));
	closetransportationpost.addEventListener('click', toggleOverlay(overlaytransportationpost));
	triggerdisposalpost.addEventListener('click', toggleOverlay(overlaydisposalpost));
	closedisposalpost.addEventListener('click', toggleOverlay(overlaydisposalpost));
});