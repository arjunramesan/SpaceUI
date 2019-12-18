var dataTobeSent = {
  app: 'Lab42',
  type: 'AUTH_REQUEST',
  state: 'LOADED',
  plugin: 'NONE',
  data: {
    id: '42'
  }
};
var lexToken = null;
window.addEventListener("message", function (e) {
    try {
      if(e.data.type.toUpperCase()=="AUTH_RESPONSE"){
        lexToken =  e.data.data.token;
      }
    } catch (error) {
    }
},false);
top.postMessage(dataTobeSent,"*");
