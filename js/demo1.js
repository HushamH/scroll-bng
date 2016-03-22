$(document).ready(function() {
	var overlaymaintitle = document.querySelector( 'div.overlay-maintitle' ),
		overlaymatcostprebanner = document.querySelector( 'div.overlay-matcostprebanner' ),
		overlaymatcostpre = document.querySelector( 'div.overlay-matcostpre' ),
		overlaymatcostpre1 = document.querySelector( 'div.overlay-matcostpre1' ),
		overlaymatcostpre2 = document.querySelector( 'div.overlay-matcostpre2' ),
		overlaywarehousingprebanner = document.querySelector( 'div.overlay-warehousingprebanner'),
		overlaywarehousingpre = document.querySelector( 'div.overlay-warehousingpre'),
		overlaywarehousingpre1 = document.querySelector( 'div.overlay-warehousingpre1'),
		overlaywarehousingpre2 = document.querySelector( 'div.overlay-warehousingpre2'),
		overlaytransportationcubanner = document.querySelector( 'div.overlay-transportationcubanner'),
		overlaytransportationcu = document.querySelector( 'div.overlay-transportationcu'),
		overlaytransportationcu1 = document.querySelector( 'div.overlay-transportationcu1'),
		overlaytransportationcu2 = document.querySelector( 'div.overlay-transportationcu2'),
		overlaylabourcubanner = document.querySelector( 'div.overlay-labourcubanner'),
		overlaylabourcu = document.querySelector( 'div.overlay-labourcu'),
		overlaylabourcu1 = document.querySelector( 'div.overlay-labourcu1'),
		overlaylabourcu2 = document.querySelector( 'div.overlay-labourcu2'),
		overlaytimecubanner = document.querySelector( 'div.overlay-timecubanner'),
		overlaytimecu = document.querySelector( 'div.overlay-timecu'),
		overlaytimecu1 = document.querySelector( 'div.overlay-timecu1'),
		overlaytimecu2 = document.querySelector( 'div.overlay-timecu2'),
		overlaytransportationpostbanner = document.querySelector( 'div.overlay-transportationpostbanner'),
		overlaytransportationpost = document.querySelector( 'div.overlay-transportationpost'),
		overlaytransportationpost1 = document.querySelector( 'div.overlay-transportationpost1'),
		overlaytransportationpost2 = document.querySelector( 'div.overlay-transportationpost2'),
		overlaydisposalpostbanner = document.querySelector( 'div.overlay-disposalpostbanner'),
		overlaydisposalpost = document.querySelector( 'div.overlay-disposalpost'),
		overlaydisposalpost1 = document.querySelector( 'div.overlay-disposalpost1'),
		overlaydisposalpost2 = document.querySelector( 'div.overlay-disposalpost2'),
		overlayoverallcost = document.querySelector( 'div.overlay-overallcost'),

		triggermaintitle = document.querySelector( 'img#maintitle'),
		triggermatcostprebanner = document.querySelector( 'img#matcostprebanner'),
		triggermatcostpre = document.querySelector( 'img#matcostpre'),
		triggermatcostpre1 = document.querySelector( 'img#matcostpre1'),
		triggermatcostpre2 = document.querySelector( 'img#matcostpre2'),
		triggerwarehousingprebanner = document.querySelector( 'img#warehousingprebanner'),
		triggerwarehousingpre = document.querySelector( 'img#warehousingpre'),
		triggerwarehousingpre1 = document.querySelector( 'img#warehousingpre1'),
		triggerwarehousingpre2 = document.querySelector( 'img#warehousingpre2'),
		triggertransportationcubanner = document.querySelector( 'img#transportationcubanner'),
		triggertransportationcu = document.querySelector( 'img#transportationcu'),
		triggertransportationcu1 = document.querySelector( 'img#transportationcu1'),
		triggertransportationcu2 = document.querySelector( 'img#transportationcu2'),
		triggerlabourcubanner = document.querySelector( 'img#labourcubanner'),
		triggerlabourcu = document.querySelector( 'img#labourcu'),
		triggerlabourcu1 = document.querySelector( 'img#labourcu1'),
		triggerlabourcu2 = document.querySelector( 'img#labourcu2'),
		triggertimecubanner = document.querySelector( 'img#timecubanner'),
		triggertimecu = document.querySelector( 'img#timecu'),
		triggertimecu1 = document.querySelector( 'img#timecu1'),
		triggertimecu2 = document.querySelector( 'img#timecu2'),
		triggertransportationpostbanner = document.querySelector( 'img#transportationpostbanner'),
		triggertransportationpost = document.querySelector( 'img#transportationpost'),
		triggertransportationpost1 = document.querySelector( 'img#transportationpost1'),
		triggertransportationpost2 = document.querySelector( 'img#transportationpost2'),
		triggerdisposalpostbanner = document.querySelector( 'img#disposalpostbanner'),
		triggerdisposalpost = document.querySelector( 'img#disposalpost'),
		triggerdisposalpost1 = document.querySelector( 'img#disposalpost1'),
		triggerdisposalpost2 = document.querySelector( 'img#disposalpost2'),
		triggeroverallcost = document.querySelector( 'img#triggeroverallcost'),

		closemaintitle = document.querySelector( 'button#overlay-close-maintitle'),
		closematcostprebanner = document.querySelector( 'button#overlay-close-matcostprebanner'),
		closematcostpre = document.querySelector( 'button#overlay-close-matcostpre'),
		closematcostpre1 = document.querySelector( 'button#overlay-close-matcostpre1'),
		closematcostpre2 = document.querySelector( 'button#overlay-close-matcostpre2'),
		closewarehousingprebanner = document.querySelector( 'button#overlay-close-warehousingprebanner'),
		closewarehousingpre = document.querySelector( 'button#overlay-close-warehousingpre'),
		closewarehousingpre1 = document.querySelector( 'button#overlay-close-warehousingpre1'),
		closewarehousingpre2 = document.querySelector( 'button#overlay-close-warehousingpre2'),
		closetransportationcubanner = document.querySelector( 'button#overlay-close-transportationcubanner'),
		closetransportationcu = document.querySelector( 'button#overlay-close-transportationcu'),
		closetransportationcu1 = document.querySelector( 'button#overlay-close-transportationcu1'),
		closetransportationcu2 = document.querySelector( 'button#overlay-close-transportationcu2'),
		closelabourcubanner = document.querySelector( 'button#overlay-close-labourcubanner'),
		closelabourcu = document.querySelector( 'button#overlay-close-labourcu'),
		closelabourcu1 = document.querySelector( 'button#overlay-close-labourcu1'),
		closelabourcu2 = document.querySelector( 'button#overlay-close-labourcu2'),
		closetimecubanner = document.querySelector( 'button#overlay-close-timecubanner'),
		closetimecu = document.querySelector( 'button#overlay-close-timecu'),
		closetimecu1 = document.querySelector( 'button#overlay-close-timecu1'),
		closetimecu2 = document.querySelector( 'button#overlay-close-timecu2'),
		closetransportationpostbanner = document.querySelector( 'button#overlay-close-transportationpostbanner'),
		closetransportationpost = document.querySelector( 'button#overlay-close-transportationpost'),
		closetransportationpost1 = document.querySelector( 'button#overlay-close-transportationpost1'),
		closetransportationpost2 = document.querySelector( 'button#overlay-close-transportationpost2'),
		closedisposalpostbanner = document.querySelector( 'button#overlay-close-disposalpostbanner'),
		closedisposalpost = document.querySelector( 'button#overlay-close-disposalpost'),
		closedisposalpost1 = document.querySelector( 'button#overlay-close-disposalpost1'),
		closedisposalpost2 = document.querySelector( 'button#overlay-close-disposalpost2'),
		closeoverallcost = document.querySelector( 'button#overlay-close-overallcost'),

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

	triggermaintitle.addEventListener('click', function () {
		toggleOverlay(overlaymaintitle);
	});
	closemaintitle.addEventListener('click', function() {
		toggleOverlay(overlaymaintitle);
	});

	triggermatcostprebanner.addEventListener('click', function () {
		toggleOverlay(overlaymatcostprebanner);
	});
	closematcostprebanner.addEventListener('click', function() {
		toggleOverlay(overlaymatcostprebanner);
	});
    triggermatcostpre.addEventListener('click', function () {
        toggleOverlay(overlaymatcostpre);
    });
	closematcostpre.addEventListener('click', function() {
        toggleOverlay(overlaymatcostpre);
    });
	triggermatcostpre1.addEventListener('click', function () {
		toggleOverlay(overlaymatcostpre1);
	});
	closematcostpre1.addEventListener('click', function() {
		toggleOverlay(overlaymatcostpre1);
	});
	triggermatcostpre2.addEventListener('click', function () {
		toggleOverlay(overlaymatcostpre2);
	});
	closematcostpre2.addEventListener('click', function() {
		toggleOverlay(overlaymatcostpre2);
	});

	triggerwarehousingprebanner.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingprebanner);
	});
	closewarehousingprebanner.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingprebanner);
	});
	triggerwarehousingpre.addEventListener('click', function() {
        toggleOverlay(overlaywarehousingpre);
    });
	closewarehousingpre.addEventListener('click', function() {
        toggleOverlay(overlaywarehousingpre);
    });
	triggerwarehousingpre1.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingpre1);
	});
	closewarehousingpre1.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingpre1);
	});
	triggerwarehousingpre2.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingpre2);
	});
	closewarehousingpre2.addEventListener('click', function() {
		toggleOverlay(overlaywarehousingpre2);
	});

	triggerlabourcubanner.addEventListener('click', function() {
		toggleOverlay(overlaylabourcubanner);
	});
	closelabourcubanner.addEventListener('click', function() {
		toggleOverlay(overlaylabourcubanner);
	});
	triggerlabourcu.addEventListener('click', function() {
        toggleOverlay(overlaylabourcu);
    });
	closelabourcu.addEventListener('click', function() {
        toggleOverlay(overlaylabourcu);
    });
	triggerlabourcu1.addEventListener('click', function() {
		toggleOverlay(overlaylabourcu1);
	});
	closelabourcu1.addEventListener('click', function() {
		toggleOverlay(overlaylabourcu1);
	});
	triggerlabourcu2.addEventListener('click', function() {
		toggleOverlay(overlaylabourcu2);
	});
	closelabourcu2.addEventListener('click', function() {
		toggleOverlay(overlaylabourcu2);
	});

	triggertransportationcubanner.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcubanner);
	});
	closetransportationcubanner.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcubanner);
	});
	triggertransportationcu.addEventListener('click', function() {
        toggleOverlay(overlaytransportationcu);
    });
	closetransportationcu.addEventListener('click', function() {
        toggleOverlay(overlaytransportationcu);
    });
	triggertransportationcu1.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcu1);
	});
	closetransportationcu1.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcu1);
	});
	triggertransportationcu2.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcu2);
	});
	closetransportationcu2.addEventListener('click', function() {
		toggleOverlay(overlaytransportationcu2);
	});

	triggertimecubanner.addEventListener('click', function() {
		toggleOverlay(overlaytimecubanner);
	});
	closetimecubanner.addEventListener('click', function() {
		toggleOverlay(overlaytimecubanner);
	});
	triggertimecu.addEventListener('click', function() {
        toggleOverlay(overlaytimecu);
    });
	closetimecu.addEventListener('click', function() {
        toggleOverlay(overlaytimecu);
    });
	triggertimecu1.addEventListener('click', function() {
		toggleOverlay(overlaytimecu1);
	});
	closetimecu1.addEventListener('click', function() {
		toggleOverlay(overlaytimecu1);
	});
	triggertimecu2.addEventListener('click', function() {
		toggleOverlay(overlaytimecu2);
	});
	closetimecu2.addEventListener('click', function() {
		toggleOverlay(overlaytimecu2);
	});

	triggertransportationpostbanner.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpostbanner);
	});
	closetransportationpostbanner.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpostbanner);
	});
	triggertransportationpost.addEventListener('click', function() {
        toggleOverlay(overlaytransportationpost);
    });
	closetransportationpost.addEventListener('click', function() {
        toggleOverlay(overlaytransportationpost);
    });
	triggertransportationpost1.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpost1);
	});
	closetransportationpost1.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpost1);
	});
	triggertransportationpost2.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpost2);
	});
	closetransportationpost2.addEventListener('click', function() {
		toggleOverlay(overlaytransportationpost2);
	});

	triggerdisposalpostbanner.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpostbanner);
	});
	closedisposalpostbanner.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpostbanner);
	});
	triggerdisposalpost.addEventListener('click', function() {
        toggleOverlay(overlaydisposalpost);
    });
	closedisposalpost.addEventListener('click', function() {
        toggleOverlay(overlaydisposalpost);
    });
	triggerdisposalpost1.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpost1);
	});
	closedisposalpost1.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpost1);
	});
	triggerdisposalpost2.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpost2);
	});
	closedisposalpost2.addEventListener('click', function() {
		toggleOverlay(overlaydisposalpost2);
	});

	triggeroverallcost.addEventListener('click', function() {
		toggleOverlay(overlayoverallcost);
	});
	closeoverallcost.addEventListener('click', function() {
		toggleOverlay(overlayoverallcost);
	});
});