<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
	<style>
	body {
		background-color:slategrey;
		transition-duration: 0.5s;
	}
	</style>

    <!-- JQuery -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  
  <img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http%3A//ecuanota.com/change-color.php%3Fcolor%3Dorange&chld=H|0">
  <p>orange</p>  

  <img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http%3A//ecuanota.com/change-color.php%3Fcolor%3Dpurple&chld=H|0">
  <p>purple</p>


    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script>
        function changeColor(){
          $.get("http://ecuanota.com/ai.php", function(sColor){
            $("body").css('background-color', sColor);
          });
        }
        setInterval("changeColor()", 5000);
    </script>

  </body>
</html>