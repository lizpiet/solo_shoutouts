//$(function() {
//
//    $.ajax({
//        url: "/students"
//
//    }).done(function (response) {
//        console.log("called ajax");
//        console.log(response);
//
//    //}).fail(function (response) {
//    //    console.log("failed:");
//
//        var student = response;
//    for(var it = 0; it < response.length; it++){
//        //var student = response;
//        //console.log(student[it].description);
//
//        var active = "";
//        if(it == 0){
//            active = " active";
//        }
//
//
//
//        var $content = $("<div class='jcarousel'></div><h3>" + student[it].name + "</h3>" + "<p>" + student[it].description +
//            "</p>" + "<p>" + student[it].shout + "</p></div>");
//
//
//        var $list = "<li data-target='#carousel-example-generic' data-slide-to='" + it + "' class='" + "active" + "'></li>";
//        console.log(active);
//        $('.carousel-inner').html($content);
//
//        $('.carousel-indicators').html($list);
//        //console.log($content);
//
//    }
//
//        $('.carousel').carousel();
//
//    });
//});



$(function() {
    $.ajax({
        url:"/students"
    }).done(function(response) {
        console.log(response);

        var people = response;

        for (var i = 0; i < people.length; i++) {

            var active = "";
            if(i == 0) {
                active = " active";
            }

            var present = $("<div class='item" + active + "'><h3>" + people[i].name + "</h3>  <p> "   + people[i].description + "</p> <p> " + people[i].shout + "</p> </br> </div>");
            var list = "<li data-target='#carousel-example-generic' data-slide-to='" + i + "' class='" + active + "'></li>";

            $(".carousel-inner").append(present);

            $(".carousel-indicators").append(list);
        }

    });
});




