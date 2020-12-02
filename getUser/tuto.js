
if (!document.title) {
    document.title = document.URL;
    console.log(document.title);
}
chrome.storage.sync.get(['pwd'], function(results) {
    //alert(results.pwd);
    if(results.pwd){
        if(results.pwd == 'on'){
            alert("true");
            console.log('online...');
            var string = document.URL;  
       /* var elm = document.getElementsByTagName('input');
                for (var i = 0; i < elm.length; i++) 
                {
                    if(string == 'http://intra.tot.co.th/SignIn.aspx?anUrl=Anniversal')
                            {
                                console.log('start');
                                if (elm[i].getAttribute('id') == 'p_lt_ctl02_LogonForm_Login1_UserName'){
                                    elm[i].setAttribute("value", "rawat");
                                }
                                if (elm[i].getAttribute('type') == 'password'){
                                    elm[i].setAttribute("value", "123456789");
                                }
                                        
                            }   
                }  */      

                //add div to page
                
           // add();
            //addItem();

            function getInputElements() {
                var el = document.getElementsByTagName('input');
                for (var i = 0; i < el.length; i++) 
                {
                    if(string == 'https://mail.tot.co.th/'){
                        if (el[i].getAttribute('name') == 'Username'){
                            el[i].setAttribute("value", "rawat");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                    }else if(string == 'http://signin.intranet.tot.co.th/' || string == 'http://signin.intranet.tot.co.th/login.html'){

                        if (el[i].getAttribute('name') == 'usr'){
                            el[i].setAttribute("value", "rawat");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                    }else if(string == 'http://www.tot-coop.com/home'){

                        if (el[i].getAttribute('name') == 'username'){
                            el[i].setAttribute("value", "26896");
                        }
                        if (el[i].getAttribute('name') == 'idcard'){
                            el[i].setAttribute("value", "1801700026993");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "25900158");
                        }
                    }else if(string == 'https://10.0.102.91/payslipsql/login_password.aspx')
                    {
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "25900158");
                        }
                    }else if(string == 'http://intra.tot.co.th/SignIn.aspx?anUrl=Anniversal')
                    {
                        if (el[i].getAttribute('id') == 'p_lt_ctl02_LogonForm_Login1_UserName'){
                            el[i].setAttribute("value", "rawat");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                                
                    }

                }
            }

            function getInput() {
                //alert(document.URL);
                var el = document.getElementsByTagName('input');
                for (var i = 0; i < el.length; i++)
                {
                    
                    if(string == 'http://intra.tot.co.th/SignIn.aspx?anUrl=Anniversal')
                    {
                        if (el[i].getAttribute('id') == 'p_lt_ctl02_LogonForm_Login1_UserName'){
                            el[i].setAttribute("value", "rawat");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                                
                    }else if(string == 'https://mail.tot.co.th/')
                    {
                        if (el[i].getAttribute('name') == 'Username'){
                            el[i].setAttribute("value", "rawat");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                    }else if(string == 'https://10.0.102.91/payslipsql/login_password.aspx')
                    {
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "25900158");
                        }

                    }else if(string == 'https://th-th.facebook.com')
                    {
                        if (el[i].getAttribute('type') == 'email'){
                            el[i].setAttribute("value", "boonchoo.rawat@gmail.com");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "admin@25900158");
                        }
                    }else if(string == 'https://github.com/login'){

                        if (el[i].getAttribute('name') == 'login'){
                            el[i].setAttribute("value", "boonchoo.rawat@gmail.com");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "Rawat1234");
                        }
                    }else if(string == 'https://www.facebook.com/' || string == 'https://th-th.facebook.com/login/'){

                        if (el[i].getAttribute('name') == 'email'){
                            el[i].setAttribute("value", "boonchoo.rawat@gmail.com");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "face_administrator");
                        }
                    }else if(string == 'http://www.tot-coop.com/home'){
                        var es = document.getElementsByTagName('label');
                        for (var x = 0; x < es.length; i++)
                        {
                            if(es[x].getAttribute('for') == 'username'){
                                es[x].innerHTML = "กรอกเลขที่สมาชิก | 26896";
                            }
                        }

                      /*  if (el[i].getAttribute('for') == 'username'){
                            el[i].innerHTML = "กรอกเลขที่สมาชิก | 26896";
                            //el[i].setAttribute("value", "26896");
                        }*/
                        if (el[i].getAttribute('name') == 'idcard'){
                            el[i].setAttribute("value", "1801700026993");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "25900158");
                        }
                    }else if(string == 'https://www.toteservice.com/MainEs/Mains/index')
                    //tot e-service
                    {
                        if (el[i].getAttribute('id') == 'username'){
                            el[i].setAttribute("value", "boonchoo.rawat@gmail.com");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "123456789");
                        }
                    }else if(string == 'https://www.ktbnetbank.com/consumer/')
                    //netbank
                    {
                       /* if (el[i].getAttribute('autocomplete') == 'off'){
                            el[i].setAttribute("autocomplete", "on");
                        }*/
                        if (el[i].getAttribute('placeholder') == 'Username'){
                            el[i].setAttribute("value", "25900158tot");
                        }
                        if (el[i].getAttribute('type') == 'password'){
                            el[i].setAttribute("value", "0843688375mylove");
                        }
                    }     
                }
            }


            var forms = document.getElementsByTagName('form');
            for (var i = 0; i < forms.length; i++) {
                forms[i].addEventListener('submit', getInputElements);
            }
            //keydown keypress
            document.addEventListener('keydown', function (e) {
                e = e || window.event;
                //var charCode = typeof e.which == "number" ? e.which : e.keyCode;
                var charCode = (typeof e.which == "number") ? e.which : e.keyCode
                alert(charCode);
                // if (charCode == 9) {
                //     console.log(document.URL);
                //     getInput();
                // } 
            });

        }else{
            console.log('please singin!!');
        }
    }else{
        console.log('please singin');
    }
}); 












//getInput();

function addItem(){
    var div=document.createElement("div"); 
                    document.body.appendChild(div); 
                    div.innerText="test123";
}

function add(){
//https://stackoverflow.com/questions/17979903/chrome-extension-insert-fixed-div-as-ui
//document.documentElement.style.height = '50%';
//document.body.style.height = '50%';
//document.documentElement.style.width = '50%';
//document.body.style.width = '50%';

var div = document.createElement( 'div' ); //tag div
var btnForm = document.createElement( 'form' ); //tag form
var btn = document.createElement( 'input' ); // tag input
var inputValue = document.createElement( 'input' ); // tag input
var button = document.createElement( 'button' ); // tag input
var s = document.createElement('script'); //tag script
//var b = document.createElement('style');//tag style

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild(inputValue);
btnForm.appendChild( btn );
div.appendChild(button);
//(document.head || document.documentElement).appendChild(b);
(document.head || document.documentElement).appendChild(s);


var actualCode = ['abc();',
                'function abc(){alert(3+9)};',
                'var a = 2 + 5 ;',
                //document.getElementById('#xxx').value = '123456',
                //document.body.style.backgroundColor = '',
                  '// Beware! This array have to be joined',
                  '// using a newline. Otherwise, missing semicolons',
                  '// or single-line comments (//) will mess up your',
                  '// code ----->'].join('\n');
//Script  https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
// TODO: add "script.js" to web_accessible_resources in manifest.json
//s.src = chrome.runtime.getURL('script.js');
s.textContent = actualCode;
//s.onload = function() {
    //this.remove();
//};

//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';  //absolute fixed
//div.style.top = '0%';
//div.style.left = '0%';
div.style.bottom = '0%';
div.style.right = '0%';
div.style.width = '150px';   
div.style.height = '150px';
div.style.backgroundColor = '#333';
div.style.padding = "20px";
div.style.borderRadius = "50%"

//set attributes for btnForm
btnForm.action = "https://www.google.com";
btnForm.method = "get";
//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'submit'; //submit button
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '55%';
btn.style.left = '50%';
btn.onclick = "abc();";

//inputValue
inputValue.name = "q";
inputValue.type = "text";
inputValue.value = "";
inputValue.id = "xxx";
inputValue.style.position = 'absolute';
inputValue.style.top = '40%';
inputValue.style.left = '50%';

//button
button.style.backgroundColor = "blue";
button.style.color = "black";
button.style.padding = "30px;";
button.id = "cli";
button.add.onclick = "abc()";
button.style.position = "absolute";




//style
//var styles = '#cli{background-color: blue;}';
//b.textContent = styles;




}

