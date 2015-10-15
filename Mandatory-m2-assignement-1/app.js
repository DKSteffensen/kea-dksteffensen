
function resizeLayout(){
  var iWindowHeight = $(window).height();
  $("#map").height(iWindowHeight+25);  
  $("#wdw-control").height(iWindowHeight);
}

$( window ).resize(function() {
  resizeLayout();
});

resizeLayout();




$(document).on('click','#btnViewPlanes', function(){
  $(".wdw").fadeOut(1000);
  $("#wdw-planes").fadeIn(1000);  
});


$(document).on('click','#btnLogin', function(){
  $(this).text('please wait ...').attr("disabled","disabled").css("cursor", "wait").fadeTo(500, 0.5);
  console.log("test");
});


$(document).on('click','#btnSignup', function(){
  var strFirstname = $("#lblFirstname").val();
  var strLastname = $("#lblLastname").val();
  var strEmail = $("#lblEmail").val();
  var strMobile = $("#lblMobile").val();
  var strPassword = $("#lblPassword").val();
  // $(this).text('please wait ...').attr("disabled","disabled").css("cursor", "wait").fadeTo(500, 0.5);
  $.ajax({
    url: "ajax.php",
    type: "post",
    data: {
      action: "signup",
      firstname: strFirstname,
      lastname: strLastname,
      email: strEmail,
      mobile: strMobile,
      password: strPassword
    }
  })
  .done(function(response){
    console.log(response);
  })
});






var map;
var myCenter = new google.maps.LatLng(55.615338, 12.637713);
var aMarkers = [];


/**************************************************/
function initialize() {

var styles = [  
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "on" },
      { lightness: 50 },    
      { visibility: "simplified" },
    ]
  },
  {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
          {
              "invert_lightness": true
          },
          {
              "saturation": 10
          },
          {
              "lightness": 30
          },
          {
              "gamma": 0.5
          },
          {
              "hue": "#435158"
          }
      ]
  }    
];

  var mapProp = {
    center: myCenter,
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };


// var flightPlanCoordinates = [
//   {lat: -2.898985, lng: -79.010592},
//   {lat: -2.901438, lng: -79.007388}
// ];

// var flightPath = new google.maps.Polyline({
//   path: flightPlanCoordinates,
//   geodesic: true,
//   strokeColor: 'rgba(148, 0, 211, 1)',
//   strokeOpacity: 0.5,
//   strokeWeight: 5
// });





  map = new google.maps.Map(document.getElementById("map"),mapProp);
  // flightPath.setMap(map);
  map.setOptions({styles: styles});
  setMarkers();
}


/**************************************************/
var jMarkers =  [
                  { 
                    lat:55.623892,
                    lng:12.650673,
                    "icon":"fa-plane"
                  },
                  { 
                    lat:55.594368,
                    lng:12.605011,
                    "icon":"fa-plane"
                  },                      
                  { 
                    lat:55.604454,
                    lng:12.633851,
                    "icon":"fa-plane"
                  },                      
                  { 
                    lat:55.613762,
                    lng:12.670414,
                    "icon":"fa-plane"
                  },                    
                  {
                    lat:55.627914,
                    lng:12.632906,
                    "icon":"fa-plane"
                  }
                ];

function setMarkers(){





  var image = {
    url: "http://s8.patient.media/forums/emoticons/smile.gif",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(30, 30),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };



  for(var i = 0; i < jMarkers.length; i++){
    console.log(jMarkers[i]);


    var marker = new MarkerWithLabel({
      position: new google.maps.LatLng(jMarkers[i].lat, jMarkers[i].lng),
      // draggable: true,
      // raiseOnDrag: true,
      icon: ' ',
      map: map,
      labelContent: '<i class="fa '+jMarkers[i].icon+'" style="width: 28px; height: 28px; text-align: center; line-height: 23px; color:rgba(148, 0, 211, 1); font-size:17px; border: 2px solid yellow; border-radius: 50%; padding: 2px; background-color: white;"></i>',
      labelAnchor: new google.maps.Point(0, 0)
    });


    // var marker = new google.maps.Marker({
    //   position : new google.maps.LatLng(jMarkers[i].lat, jMarkers[i].lng),
    //   icon: image
    // });
    marker.setMap(map);
  }

}


google.maps.event.addDomListener(window, 'load', initialize);



var sUrl = "ajax.php";

var oAjax = $.ajax({
  method: "GET",
  url: sUrl,
  data: {"name":"Santiago"},
  dataType: "json"
}).done(function(jData){
  $("#lblTest").text(jData.sResponse);
}).fail(function(sData){
  console.log("the system killed/aborted the ajax call");
});

// oAjax.abort();
