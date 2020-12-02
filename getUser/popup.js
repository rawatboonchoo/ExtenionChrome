window.onload = function() {
    //getPwd();

  };

document.addEventListener('DOMContentLoaded' , function(){
    document.getElementById('save').addEventListener('click', save, false);
    document.getElementById('out').addEventListener('click', out, false);

    //var check = setInterval(check_StatusLogin,1);

});


function save() {
    //var val = document.getElementById("Pwd").value;
    var val = "on";
    chrome.storage.local.set({pwd:val}, function() {
          console.log('set storage compleate');
          getPwd();
    });
}
function out() {
    chrome.storage.local.set({pwd:''}, function() {
        console.log('set storage compleate');
        getPwd();
  });
    
}
function getPwd() {
    chrome.storage.local.get(['pwd'], function(results) {
        //alert(results.pwd);
       if(results.pwd){
            document.getElementById("result").innerHTML = "log-on : " + results.pwd;
        }else{
            document.getElementById("result").innerHTML = "log-off";
        }
        
    });    
}
//check_StatusLogin
function check_StatusLogin(){
    var firebaseRef = firebase.database().ref('LoginExtension');
    firebaseRef.once('value').then(function(dataSnapshot){
        //console.log(dataSnapshot.val());
        dataSnapshot.forEach(function(childSnapshot){
            var chileKey = childSnapshot.key;
            var childData = childSnapshot.val();
             //console.log(chileKey);
             console.log(childData);
             chrome.storage.local.set({pwd:childData}, function() {});
            /* if(childData == 'off'){

            
             }else if(childData == 'on'){

                
                
             }*/
            
        });
    });
}