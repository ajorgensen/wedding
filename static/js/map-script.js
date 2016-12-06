
	'use strict';

	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(42.6065, -71.5639),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,

  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});

		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
    var markers = []
		markers.push(new MarkerWithLabel({
          position: new google.maps.LatLng(42.6065, -71.5639),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		}));

		markers.push(new MarkerWithLabel({
          position: new google.maps.LatLng(42.550392, -71.459095),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-food" style="color:#f0394d"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		}));

      var marker1 = markers[0];
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < markers.length; i++) {
       bounds.extend(markers[i].getPosition());
      }
      map.fitBounds(bounds);


		//INFO WINDOWS
		//=======================================================================================
		var contentString = '<div>'+
		'WEDDING CEREMONY';
      	'</div>';

		var contentString1 = '<div>'+
		'WEDDING PARTY';
      	'</div>';

 	 	var infowindow = new google.maps.InfoWindow({
      		content: contentString
  		});

		var infowindow1 = new google.maps.InfoWindow({
      		content: contentString1
  		});



		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		infowindow.open(map,marker1);


		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});*/

		google.maps.event.addListener(marker1, 'click', function() {
			infowindow.open(map,marker1);
   	 		//map.setZoom(17);
    		//map.setCenter(marker.getPosition());
  		});

		/*google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/

		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
