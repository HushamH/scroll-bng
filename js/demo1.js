$(document).ready(function() {
	var overlaymaintitle = document.querySelector( 'div.overlay-maintitle' ),
		overlayprespilltitle = document.querySelector( 'div.overlay-prespilltitle' ),
		overlaymatcostpre = document.querySelector( 'div.overlay-matcostpre' ),
		overlaymatcostpre1 = document.querySelector( 'div.overlay-matcostpre1' ),
		overlaymatcostpre2 = document.querySelector( 'div.overlay-matcostpre2' ),
		overlaywarehousingpre = document.querySelector( 'div.overlay-warehousingpre'),
		overlaywarehousingpre1 = document.querySelector( 'div.overlay-warehousingpre1'),
		overlaywarehousingpre2 = document.querySelector( 'div.overlay-warehousingpre2'),
		overlaycleanuptitle = document.querySelector( 'div.overlay-cleanuptitle'),
		overlaytransportationcu = document.querySelector( 'div.overlay-transportationcu'),
		overlaytransportationcu1 = document.querySelector( 'div.overlay-transportationcu1'),
		overlaytransportationcu2 = document.querySelector( 'div.overlay-transportationcu2'),
		overlaylabourcu = document.querySelector( 'div.overlay-labourcu'),
		overlaylabourcu1 = document.querySelector( 'div.overlay-labourcu1'),
		overlaylabourcu2 = document.querySelector( 'div.overlay-labourcu2'),
		overlaytimecu = document.querySelector( 'div.overlay-timecu'),
		overlaytimecu1 = document.querySelector( 'div.overlay-timecu1'),
		overlaytimecu2 = document.querySelector( 'div.overlay-timecu2'),
		overlaypostspilltitle = document.querySelector( 'div.overlay-postspilltitle'),
		overlaytransportationpost = document.querySelector( 'div.overlay-transportationpost'),
		overlaytransportationpost1 = document.querySelector( 'div.overlay-transportationpost1'),
		overlaytransportationpost2 = document.querySelector( 'div.overlay-transportationpost2'),
		overlaydisposalpost = document.querySelector( 'div.overlay-disposalpost'),
		overlaydisposalpost1 = document.querySelector( 'div.overlay-disposalpost1'),
		overlaydisposalpost2 = document.querySelector( 'div.overlay-disposalpost2'),
		overlaytotalcosttitle = document.querySelector( 'div.overlay-totalcosttitle'),
		overlaytotalcost1 = document.querySelector( 'div.overlay-totalcost1'),
		overlaytotalcost2 = document.querySelector( 'div.overlay-totalcost2'),
		overlayoverallcost = document.querySelector( 'div.overlay-overallcost'),

		triggermaintitle = document.querySelector( 'img#maintitle'),
		triggerprespilltitle = document.querySelector( 'img#pre-spilltitle'),
		triggermatcostpre = document.querySelector( 'img#matcostpre'),
		triggermatcostpre1 = document.querySelector( 'img#matcostpre1'),
		triggermatcostpre2 = document.querySelector( 'img#matcostpre2'),
		triggerwarehousingpre = document.querySelector( 'img#warehousingpre'),
		triggerwarehousingpre1 = document.querySelector( 'img#warehousingpre1'),
		triggerwarehousingpre2 = document.querySelector( 'img#warehousingpre2'),
		triggercleanuptitle = document.querySelector( 'img#clean-uptitle'),
		triggertransportationcu = document.querySelector( 'img#transportationcu'),
		triggertransportationcu1 = document.querySelector( 'img#transportationcu1'),
		triggertransportationcu2 = document.querySelector( 'img#transportationcu2'),
		triggerlabourcu = document.querySelector( 'img#labourcu'),
		triggerlabourcu1 = document.querySelector( 'img#labourcu1'),
		triggerlabourcu2 = document.querySelector( 'img#labourcu2'),
		triggertimecu = document.querySelector( 'img#timecu'),
		triggertimecu1 = document.querySelector( 'img#timecu1'),
		triggertimecu2 = document.querySelector( 'img#timecu2'),
		triggerpostspilltitle = document.querySelector( 'img#post-spilltitle'),
		triggertransportationpost = document.querySelector( 'img#transportationpost'),
		triggertransportationpost1 = document.querySelector( 'img#transportationpost1'),
		triggertransportationpost2 = document.querySelector( 'img#transportationpost2'),
		triggerdisposalpost = document.querySelector( 'img#disposalpost'),
		triggerdisposalpost1 = document.querySelector( 'img#disposalpost1'),
		triggerdisposalpost2 = document.querySelector( 'img#disposalpost2'),
		triggertotalcosttitle = document.querySelector( 'img#total-costtitle'),
		triggertotalcost1 = document.querySelector( 'img#totalcost1'),
		triggertotalcost2 = document.querySelector( 'img#totalcost2'),
		triggeroverallcost = document.querySelector( 'img#overallcost'),

		closemaintitle = document.querySelector( 'button#overlay-close-maintitle'),
		closeprespilltitle = document.querySelector( 'button#overlay-close-prespilltitle'),
		closematcostpre = document.querySelector( 'button#overlay-close-matcostpre'),
		closematcostpre1 = document.querySelector( 'button#overlay-close-matcostpre1'),
		closematcostpre2 = document.querySelector( 'button#overlay-close-matcostpre2'),
		closewarehousingpre = document.querySelector( 'button#overlay-close-warehousingpre'),
		closewarehousingpre1 = document.querySelector( 'button#overlay-close-warehousingpre1'),
		closewarehousingpre2 = document.querySelector( 'button#overlay-close-warehousingpre2'),
		closecleanuptitle = document.querySelector( 'button#overlay-close-cleanuptitle'),
		closetransportationcu = document.querySelector( 'button#overlay-close-transportationcu'),
		closetransportationcu1 = document.querySelector( 'button#overlay-close-transportationcu1'),
		closetransportationcu2 = document.querySelector( 'button#overlay-close-transportationcu2'),
		closelabourcu = document.querySelector( 'button#overlay-close-labourcu'),
		closelabourcu1 = document.querySelector( 'button#overlay-close-labourcu1'),
		closelabourcu2 = document.querySelector( 'button#overlay-close-labourcu2'),
		closetimecu = document.querySelector( 'button#overlay-close-timecu'),
		closetimecu1 = document.querySelector( 'button#overlay-close-timecu1'),
		closetimecu2 = document.querySelector( 'button#overlay-close-timecu2'),
		closepostspilltitle = document.querySelector( 'button#overlay-close-postspilltitle'),
		closetransportationpost = document.querySelector( 'button#overlay-close-transportationpost'),
		closetransportationpost1 = document.querySelector( 'button#overlay-close-transportationpost1'),
		closetransportationpost2 = document.querySelector( 'button#overlay-close-transportationpost2'),
		closedisposalpost = document.querySelector( 'button#overlay-close-disposalpost'),
		closedisposalpost1 = document.querySelector( 'button#overlay-close-disposalpost1'),
		closedisposalpost2 = document.querySelector( 'button#overlay-close-disposalpost2'),
		closetotalcosttitle = document.querySelector( 'button#overlay-close-totalcosttitle'),
		closetotalcost1 = document.querySelector( 'button#overlay-close-totalcost1'),
		closetotalcost2 = document.querySelector( 'button#overlay-close-totalcost2'),
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

	triggerprespilltitle.addEventListener('click', function () {
		toggleOverlay(overlayprespilltitle);
	});
	closeprespilltitle.addEventListener('click', function() {
		toggleOverlay(overlayprespilltitle);
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

	triggercleanuptitle.addEventListener('click', function() {
		toggleOverlay(overlaycleanuptitle);
	});
	closecleanuptitle.addEventListener('click', function() {
		toggleOverlay(overlaycleanuptitle);
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

	triggerpostspilltitle.addEventListener('click', function() {
		toggleOverlay(overlaypostspilltitle);
	});
	closepostspilltitle.addEventListener('click', function() {
		toggleOverlay(overlaypostspilltitle);
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

	triggertotalcosttitle.addEventListener('click', function() {
		toggleOverlay(overlaytotalcosttitle);
	});
	closetotalcosttitle.addEventListener('click', function() {
		toggleOverlay(overlaytotalcosttitle);
	});
	triggertotalcost1.addEventListener('click', function() {
		toggleOverlay(overlaytotalcost1);
	});
	closetotalcost1.addEventListener('click', function() {
		toggleOverlay(overlaytotalcost1);
	});
	triggertotalcost2.addEventListener('click', function() {
		toggleOverlay(overlaytotalcost2);
	});
	closetotalcost2.addEventListener('click', function() {
		toggleOverlay(overlaytotalcost2);
	});

	triggeroverallcost.addEventListener('click', function() {
		toggleOverlay(overlayoverallcost);
	});
	closeoverallcost.addEventListener('click', function() {
		toggleOverlay(overlayoverallcost);
	});
});