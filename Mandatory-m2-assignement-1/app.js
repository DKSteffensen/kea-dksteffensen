onPageUpdate();
function onPageUpdate(){
  checkLogin();
  getUserInfo();
  clearInfoParagraphs();
  getPlanesInfo();
  getCountsJson();
}
function clearInfoParagraphs(){
  $("#lblSignupFormInfo").html("");
  $("#lblLoginFormInfo").html("");
  $("#lblUpdateProfileInfo").html("");
  $("#lblAddPlaneFormInfo").html("");
}
function checkLogin(){
  if(typeof localStorage.UserLoggedIn != "undefined" || ""){
    $("#userLoggedIn").addClass("pageShown").removeClass("pageHidden");
    $("#nouserWrap").removeClass("pageShown").addClass("pageHidden");
    $("#navbarLoggedIn").removeClass("hidden");
  }
  else{
    $("#userLoggedIn").addClass("pageHidden").removeClass("pageShown");
    $("#nouserWrap").removeClass("pageHidden").addClass("pageShown");
    $("#navbarLoggedIn").addClass("hidden");
  }
}

function logout(){
  localStorage.removeItem("UserLoggedIn");
  checkLogin();
}
$("#btnLogout").click(function(){
  logout();
});

function getUserInfo(){
  var intUserID = localStorage.UserLoggedIn;

  $.ajax({
    url: "ajax.php",
    type: "post",
    dataType: "json",
    data: {
      action: "getUserInfo",
      userID: intUserID
    }
  })
  .done(function(response){
    var strFirstname = response.firstname;
    var strLastname = response.lastname;
    var strEmail = response.email;
    var strMobile = response.mobile;
    var strPassword = response.password;

    $("#lblFirstnameProfile").val(strFirstname);
    $("#lblLastnameProfile").val(strLastname);
    $("#lblEmailProfile").val(strEmail);
    $("#lblMobileProfile").val(strMobile);
    $("#lblPasswordProfile").val(strPassword);
  })
}
function getCountsJson(){
  $.ajax({
    url: "ajax.php",
    type: "post",
    dataType: "json",
    data: {
      action: "countJSON"
    }
  })
  .done(function(response){
    $("#lblNumberOfUsers").html(response.countedUsers);
    $("#lblNumberOfPlanes").html(response.countedPlanes);
  })

  var countFlying = 0;
  $(".flying").each(function(){
    countFlying += 1;
  })

  $("#lblNumberOfPlanesFlying").html(countFlying);

}

function getPlanesInfo(){
  $.getJSON("planes.json", function(data){

    var planesHTML = '';

    for (var i = 0; i < data.length; i++) {
      var strModel = data[i].model;
      var strCapacity = data[i].capacity;
      var strTakeoff = data[i].takeoff;
      var strTravelTime = data[i].travelTime;
      var strDestination = data[i].destination;

      var intCapacity = parseInt(strCapacity);
      var intTakeoff = parseInt(strTakeoff);

      var time = new Date(intTakeoff);
      var hours = time.getHours();
      hours = ("0" + hours).slice(-2);
      var minutes = time.getMinutes();
      minutes = ("0" + minutes).slice(-2);
      var shownTime = hours+":"+minutes;


      planesHTML += '<tr><td>'+strModel+'</td><td>'+intCapacity+'</td><td class="lblShownTime" data-planeID="'+i+'" data-timestamp="'+intTakeoff+'">'+shownTime+'</td><td>'+strTravelTime+'</td><td>'+strDestination+'</td><td class="status lblPlaneStatus'+i+'"></td><td class="btnEditPlane" href="#" data-planeID="'+i+'"><i class="fa fa-pencil-square-o"></i></td></tr>';
    };

    $("#tblPlanesInfo").html(planesHTML);

  })
}
function updatePlaneStatus(){
  $(".lblShownTime").each(function(){
    var planeID = $(this).attr("data-planeID");
    var takeoffTime = $(this).attr("data-timestamp");
    var currentTime = Date.now();
    if(takeoffTime < currentTime){
      $(".lblPlaneStatus"+planeID).html("Flying!").addClass("flying");
    }
    else {      
      $(".lblPlaneStatus"+planeID).html("Grounded!").removeClass("flying");
    }
  });
}


function resizeLayout(){
  var iWindowHeight = $(window).height();
  $("#map").height(iWindowHeight+25);  
  $("#wdw-control").height(iWindowHeight);
}
$( window ).resize(function() {
  resizeLayout();
});
resizeLayout();

// Navigation system
$(document).on("click", ".btnNavbar", function(){
  onPageUpdate();
  var link = $(this).attr("data-link");
  $(".btnNavbar").not(this).parent().removeClass("active")
  $(this).parent().addClass("active");

  if($("#"+link).hasClass("pageShown")) {
    // Do something nice maybe?
  }
  else {
    $(".pages").not("#"+link).removeClass("pageShown").addClass("pageHidden");
    $("#"+link).toggleClass("pageShown pageHidden");
    localStorage.activePage = link;
  }
});


$(document).on('click','#btnSignup', function(){
  var strFirstname = $("#lblFirstname").val();
  var strLastname = $("#lblLastname").val();
  var strEmail = $("#lblEmail").val();
  var strMobile = $("#lblMobile").val();
  var strPassword = $("#lblPassword").val();

  if(strFirstname == ""){
    $("#lblSignupFormInfo").html("Empty field detected!");
  }
  else if(strLastname == ""){
    $("#lblSignupFormInfo").html("Empty field detected!");
  }
  else if(strEmail == ""){
    $("#lblSignupFormInfo").html("Empty field detected!");
  }
  else if(strMobile == ""){
    $("#lblSignupFormInfo").html("Empty field detected!");
  }
  else if(strPassword == ""){
    $("#lblSignupFormInfo").html("Empty field detected!");
  }
  else {
  $.ajax({
    url: "ajax.php",
    type: "post",
    dataType: "json",
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
      var strResponse = response.answer;
      var userID = response.userid;
      console.log(response);

      if(strResponse == "succes"){

      localStorage.UserLoggedIn = userID;
      checkLogin();
      getUserInfo();
      }
      else if(strResponse == "userexists"){
        $("#lblSignupFormInfo").html("Email already in use.");
      }

  })    
  }
});
$(document).on('click', '#btnLogin', function(){
  var strEmail = $("#lblLoginEmail").val();
  var strPassword = $("#lblLoginPassword").val();

  if(strEmail == ""){
     $("#lblLoginFormInfo").html("Empty field detected!");
  }
  else if(strPassword == ""){
     $("#lblLoginFormInfo").html("Empty field detected!");
  }
  else {
    $.ajax({
      url: "ajax.php",
      type: "post",
      dataType: "json",
      data: {
        action: "login",
        email: strEmail,
        password: strPassword
      }
    })
    .done(function(response){
      var strResponse = response.answer;
      var userID = response.userid;

      if(strResponse == "succes"){
        localStorage.UserLoggedIn = userID;
        checkLogin();
        getUserInfo();
      }
      else if(strResponse == "error"){
        $("#lblLoginFormInfo").html("Fatal error, contact page admin.");
      }
      else if(strResponse == "nouser"){
        $("#lblLoginFormInfo").html("Email or Password wrong.");
      }

    })
  }
})
$(document).on('click', '#btnDelete', function(){
  var intUserID = localStorage.UserLoggedIn;

  $.ajax({
      url: "ajax.php",
      type: "post",
      data: {
        action: "deleteUser",
        userid: intUserID
      }  
  })
  .done(function(){
    logout();
  })
})
$(document).on('click', '#btnUpdate', function(){
  var strFirstname = $("#lblFirstnameProfile").val();
  var strLastname = $("#lblLastnameProfile").val();
  var strEmail = $("#lblEmailProfile").val();
  var strMobile = $("#lblMobileProfile").val();
  var strPassword = $("#lblPasswordProfile").val();
  var intUserID = localStorage.UserLoggedIn;

  $.ajax({
    url: "ajax.php",
    type: "post",
    data: {
      action: "updateUser",
      firstname: strFirstname,
      lastname: strLastname,
      email: strEmail,
      mobile: strMobile,
      password: strPassword,
      userid: intUserID
    }
  })
  .done(function(response){
    if(response == "succes"){
      $("#lblUpdateProfileInfo").html("Profile update succesfull.");
      getUserInfo();
    }
    else if(response == "emailinuse"){
      $("#lblUpdateProfileInfo").html("Email in use!");
      getUserInfo();
    }
  })
})
$(document).on('click', '#btnAddPlane', function(){

  var strTakeoff = 0;
  var time = $("#lblPlaneTakeoff").timepicker('getTime', new Date());
  var converted = Date.parse(time);
  currentTime = Date.now();
  if(currentTime > converted){
    strTakeoff = converted + 86400000;
  }
  else {
    strTakeoff = converted;
  }


  var strModel = $("#lblPlaneModel").val();
  var strCapacity = $("#lblPlaneCapacity").val();
  var strTravelTime = $("#lblPlaneTravelTime").val();
  var strDestination = $("#lblPlaneDestination").val();  

  if(strModel == ""){
     $("#lblAddPlaneFormInfo").html("Empty field detected!");
  }
  else if(strCapacity == ""){
     $("#lblAddPlaneFormInfo").html("Empty field detected!");
  }
  else if(strTakeoff == ""){
     $("#lblAddPlaneFormInfo").html("Empty field detected!");
  }
  else if(strTravelTime == ""){
     $("#lblAddPlaneFormInfo").html("Empty field detected!");
  }
  else if(strDestination == ""){
     $("#lblAddPlaneFormInfo").html("Empty field detected!");
  }
  else {
    $.ajax({
      url: "ajax.php",
      type: "post",
      data: {
        action: "addPlane",
        model: strModel,
        capacity: strCapacity,
        takeoff: strTakeoff,
        travelTime: strTravelTime,
        destination: strDestination
      }
    })
    .done(function(){    
      getPlanesInfo();
    })
  }
})
function closeEditPlane(){

  $("#editPlane").fadeOut('fast', function(){
    $(this).remove();
  });
  $("#editPlaneFiller").fadeOut('fast', function(){
    $(this).remove();
  });

}
$(document).on('click', '.btnEditPlane', function(){
  var planeID = $(this).attr("data-planeid");
  $.getJSON("planes.json", function(data){

    var strModel = data[planeID].model;
    var strCapacity = data[planeID].capacity;
    var strTakeoff = data[planeID].takeoff;
    var strTravelTime = data[planeID].travelTime;
    var strDestination = data[planeID].destination;

    var intCapacity = parseInt(strCapacity);
    var intTakeoff = parseInt(strTakeoff);

    var time = new Date(intTakeoff);
    var hours = time.getHours();
    hours = ("0" + hours).slice(-2);
    var minutes = time.getMinutes();
    minutes = ("0" + minutes).slice(-2);
    var shownTime = hours+":"+minutes;

    var editPlaneHTML = '<div id="editPlaneFiller"></div>';
    editPlaneHTML += '<div id="editPlane">';
    editPlaneHTML += '<div id="" class="save-plane">';
    editPlaneHTML += '<h1>Edit Plane</h1>';
    editPlaneHTML += '<input id="lblPlaneModelEdit" type="text" placeholder="Model" value="'+strModel+'" required="required" />';
    editPlaneHTML += '<input id="lblPlaneCapacityEdit" type="text" placeholder="Capacity" value="'+intCapacity+'"/>';
    editPlaneHTML += '<input id="lblPlaneTakeoffEdit" class="timepicker" type="text" placeholder="Takeoff" value="'+shownTime+'" />';
    editPlaneHTML += '<input id="lblPlaneTravelTimeEdit" class="timepicker" type="text" placeholder="Travel Time" value="'+strTravelTime+'" />';
    editPlaneHTML += '<input id="lblPlaneDestinationEdit" type="text" placeholder="Destination" value="'+strDestination+'" />';
    editPlaneHTML += '<button id="btnUpdatePlane" data-planeID="'+planeID+'" type="button" class="btn btn-primary btn-block btn-large">Update Airplane</button>';
    editPlaneHTML += '<button id="btnDeletePlane" data-planeID="'+planeID+'" type="button" class="btn btn-danger btn-block btn-large">Delete Airplane</button>';
    editPlaneHTML += '<p id="lblEditPlaneFormInfo"></p>';
    editPlaneHTML += '</div>';
    editPlaneHTML += '</div>';

    $("body").prepend(editPlaneHTML);

    $(".timepicker").timepicker({
      timeFormat: 'H:i'
    });

  })
})
$(document).on('click', '#editPlaneFiller', function(){
  closeEditPlane()
})
$(document).on('click', '#btnDeletePlane', function(){
  var planeID = $(this).attr('data-planeID');
  $.ajax({
    url: "ajax.php",
    type: "post",
    data: {
      action: "deletePlane",
      planeid: planeID
    }
  })
  .done(function(){ 
    closeEditPlane();
    getPlanesInfo();    
  })
})
$(document).on('click', '#btnUpdatePlane', function(){

  var strTakeoff = 0;
  var time = $("#lblPlaneTakeoffEdit").timepicker('getTime', new Date());
  var converted = Date.parse(time);
  currentTime = Date.now();
  if(currentTime > converted){
    strTakeoff = converted + 86400000;
  }
  else {
    strTakeoff = converted;
  }

  var strModel = $("#lblPlaneModelEdit").val();
  var strCapacity = $("#lblPlaneCapacityEdit").val();
  var strTravelTime = $("#lblPlaneTravelTimeEdit").val();
  var strDestination = $("#lblPlaneDestinationEdit").val();

  var planeID = $(this).attr('data-planeID');

  $.ajax({
    url: "ajax.php",
    type: "post",
    data: {
      action: "updatePlane",
      planeid: planeID,
      model: strModel,
      capacity: strCapacity,
      takeoff: strTakeoff,
      travelTime: strTravelTime,
      destination: strDestination
    }
  })
  .done(function(response){
    closeEditPlane();
    getPlanesInfo();     
  })
})

$(".timepicker").timepicker({
  timeFormat: 'H:i'
});


setInterval("updatePlaneStatus()", 1000);
/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/
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
    //console.log(jMarkers[i]);


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
  //console.log("the system killed/aborted the ajax call");
});

// oAjax.abort();
