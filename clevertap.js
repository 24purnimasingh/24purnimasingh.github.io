
var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
 //clevertap test account id: "TEST-96Z-K45-766Z"
clevertap.account.push({"id": "86Z-K45-766Z"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
 (function () {
     var wzrk = document.createElement('script');
     wzrk.type = 'text/javascript';
     wzrk.async = true;
     wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(wzrk, s);
  })();

function alertMessage(text) {
    alert(text)
}

function user_login(props) {
    const userObj = JSON.parse(props);
    clevertap.onUserLogin.push({
        "Site": userObj
    });
}

function profile(props) {
    const userObj = JSON.parse(props);
    clevertap.profile.push({
       "Site": userObj
    });
}

function raise_event(name, props) {
    const obj = JSON.parse(props);
    clevertap.event.push(name, obj);
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}