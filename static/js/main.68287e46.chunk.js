(window.webpackJsonpfarmer=window.webpackJsonpfarmer||[]).push([[0],{170:function(e,t,a){e.exports=a(394)},175:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),c=a.n(l),o=(a(175),a(74),a(18)),i=a(29),s=a(7),m=a(8),u=a(10),p=a(9),d=a(11),h=a(164),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){h.Sidenav.init(document.querySelector(".sidenav"))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"transparent z-depth-0"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("a",{href:"",className:"brand-logo"}," ",r.a.createElement("img",{className:"material-icons",style:{height:"120px",width:"120px",borderRadius:"20%"},src:"./img/logo.png"})),r.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons black-text"},"menu ")),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null," ",r.a.createElement(o.b,{to:"/",className:"black-text"}," Home ")," "),r.a.createElement("li",null," "," "," ",r.a.createElement(o.b,{to:"/aboutus",className:"black-text"}," About ")," "))))))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},r.a.createElement("li",null," "," ",r.a.createElement(o.b,{to:"/",className:"black-text"}," Home ")," "),r.a.createElement("li",null," "," ",r.a.createElement(o.b,{to:"/aboutus",className:"black-text"}," About ")," "),r.a.createElement("li",null," ",r.a.createElement("a",{className:"sidenav-close",href:"#!"},"close")," ")))}}]),t}(n.Component),b=a(71),E=a(50),f=a.n(E);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var O=r.a.createContext(),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).plantId=function(e){a.setState({loading:!0});var t={key:"urCgrUEmyK1Im8cHhPmrJ0yEVYHPu41ZSF3cBehb2iaBd1FdAW",usage_info:!0,images:[e]};fetch("https://api.plant.id/identify",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({remaining:e.usage_info.used_week}),setTimeout(function(){fetch("https://api.plant.id/check_identifications",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({key:"urCgrUEmyK1Im8cHhPmrJ0yEVYHPu41ZSF3cBehb2iaBd1FdAW",ids:[parseInt(e.id)]})}).then(function(e){return e.json()}).then(function(e){console.log("2nd",e),console.log("whole suggestion ",e[0].suggestions[0]),console.log(" image",e[0].images[0].url),a.setState({data:e[0].suggestions[0],image:e[0].images[0].url_tiny,loading:!1})}).catch(function(e){a.setState({loading:!1}),console.log(e)})},1e4)}).catch(function(e){a.setState({loading:!1}),console.log(e)})},a.moreInfo=function(e){f.a.get("https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?token=".concat("K3BrMzlPVk1lS0FsM0oxKzlEMUtnZz09","&q=").concat(e)).then(function(e){console.log(e.data[0].link),a.getplantinfo(e.data[0].link)}).catch(function(e){console.log(e)})},a.getplantinfo=function(e){f.a.get("https://cors-anywhere.herokuapp.com/".concat(e,"?token=").concat("K3BrMzlPVk1lS0FsM0oxKzlEMUtnZz09")).then(function(e){console.log(e.data),a.setState({loading:!1})}).catch(function(e){console.log(e)})},a.state={data:{},image:"",loading:!1,remaining:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(O.Provider,{value:y({},this.state,{plantId:this.plantId})},this.props.children)}}]),t}(n.Component),j=(O.Consumer,function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})),r.a.createElement("h3",null,"We are processing you photo, Hold on"))}}]),t}(n.Component)),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.context,t=e.data,a=e.image,n=e.loading,l=e.remaining;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(j,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col s12 m7 "},l?r.a.createElement("h5",null," ",20-l," trills left"):r.a.createElement("h5",null," Sorry We rnu out of requests"),r.a.createElement("div",{className:"card medium z-depth-5"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:a,alt:"pictuer"})),r.a.createElement("span",{className:"card-title"},t.plant.name),r.a.createElement("p",null,"The Image is ",t.plant.name," with confidence of ","".concat((100*t.confidence).toFixed(2)," %"),"."),r.a.createElement("div",{className:"card-action"},t.plant.url?r.a.createElement("a",{href:"".concat(t.plant.url),target:"_blank",rel:"noopener noreferrer"},"Click here more info on Wikipidia"):null,r.a.createElement("br",null)," ",r.a.createElement("a",null,r.a.createElement(o.b,{to:"/google"},"Find The Nearest Plant Store")))))))))}}]),t}(n.Component);N.contextType=O;var k=N,S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).encodeImageFileAsURL=function(){var e=document.getElementById("inputFileToLoad").files;if(e.length>0){var t=e[0],n=new FileReader;n.onload=function(e){var t=e.target.result;a.context.plantId(t)},n.readAsDataURL(t)}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col s12 m8 "},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"form_subtitle"}," Upload an image to be processed "),r.a.createElement("ol",{type:"I"},r.a.createElement("li",null,"Upload plant's image."),r.a.createElement("li",null,"Wait for the magic of the data science."),r.a.createElement("li",null,"Plant Information will be provided. "),r.a.createElement("li",null,"Additional links will be provided too.")),r.a.createElement("input",{id:"inputFileToLoad",type:"file",onChange:this.encodeImageFileAsURL}),r.a.createElement("button",{className:"wbtn tooltipped waves-effect waves-light btn modal-trigger green lighten-4 black-text",onClick:this.props.startProccess},"Upload")))}}]),t}(n.Component);S.contextType=O;var P=S,C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={beigen:!0},a.startProccess=function(){a.setState({beigen:!1})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"col s5"},r.a.createElement(P,{startProccess:this.startProccess})),this.state.beigen?null:r.a.createElement("div",{className:"col s7"},r.a.createElement(k,null)))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgrounds"},r.a.createElement("div",{id:"index-banner",className:"parallax-container"},r.a.createElement("div",{className:"section no-pad-bot"},r.a.createElement("div",{className:"container"},r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("h4",{className:"header center"},"\xa0Welcome to Fallah website ",r.a.createElement("br",null)," Fallah will make you aware of all the plants around you by three simple steps ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," Upload .. Process .. Result  "),r.a.createElement("div",{className:"row center"},r.a.createElement(o.b,{to:"/search",className:" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"}," Start Now  ")),r.a.createElement("br",null)," ",r.a.createElement("br",null)))))}}]),t}(n.Component);var F=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"section no-pad-bot",id:"index-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"header center black-text"},"Fallah"),r.a.createElement("div",{className:"row center"},r.a.createElement("h5",{className:"header col s12 light"},"Our mission is to make every kind of plants knowing by everyone.")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col s12 m4 cardF"},r.a.createElement("img",{src:"https://t6.rbxcdn.com/69d42918b87981cd61bd0ecae48d91a4",width:"150",alt:"pictuer"}),r.a.createElement("div",null," ",r.a.createElement("p",{className:" "},"Our Fallah make it easy for everyone. It will prevent you from wasting your money!.")," ")),r.a.createElement("div",{className:"card col s12 m4 cardF"},r.a.createElement("img",{className:" ",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlg3-cJnljUnlKsaGHV4JQoyWcekV-hQpLvEmGlvSCIrdqkDCC",width:"100",alt:"pictuer"}),r.a.createElement("div",null," ",r.a.createElement("p",{className:" "},"With Fallah guidance and over 391,000 different types of plants we help you to make smarter decisions.")," ")),r.a.createElement("div",{className:"card col s12 m4 cardF"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAQCDjOSMXRvwYdWzUhajUJv_8tjPIXooICRz7NbTZCvSIinH",width:"150",alt:"pictuer"}),r.a.createElement("div",null," ",r.a.createElement("p",{className:" "},"With Fallah you can see the nearest place plantation to you.")," ")))))))},M=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer transparent z-depth-0 "},r.a.createElement("p",{className:"copyright"},"\xa9 2019 Copyright"),r.a.createElement("p",{className:"message"},"Created with \u2665 by ",r.a.createElement("span",{className:"name"},"The 4 GEEKS")),r.a.createElement("div",{className:"chip white black-text right mkf "},"Fallah +9660000"))}}]),t}(n.Component),L=(a(197),a(40)),I=a(43),A=a(169),T=a.n(A);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D=Object(L.compose)(Object(L.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyABFrz6SP5jsrNTc6Dt_yYq6whKCwMOo9g&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),Object(L.withStateHandlers)(function(){return{isOpen:!1}},{onToggleOpen:function(e){var t=e.isOpen;return function(){return{isOpen:!t}}}}),I.withScriptjs,I.withGoogleMap)(function(e){return r.a.createElement(I.GoogleMap,{defaultZoom:11,center:{lat:e.currentLocation.lat,lng:e.currentLocation.lng}},e.isMarkerShown&&r.a.createElement(I.Marker,{position:{lat:e.currentLocation.lat,lng:e.currentLocation.lng}}),e.places&&e.places.map(function(t){return r.a.createElement(I.Marker,{position:{lat:t.geometry.location.lat,lng:t.geometry.location.lng},onClick:e.onToggleOpen,key:t.id,icon:"https://mt.google.com/vt/icon/text=A&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1"},e.isOpen&&r.a.createElement(T.a,{onCloseClick:e.onToggleOpen,options:{closeBoxURL:"",enableEventPropagation:!0}},r.a.createElement("div",{style:{backgroundColor:"white",opacity:.75,padding:"8px"}},r.a.createElement("div",{style:{fontSize:"12px",fontColor:"#FFFFFF"}},t.name))))}))}),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isMarkerShown:!1,places:[],currentLatLng:{lat:24.666525,lng:46.677972}},a.searchPlace=function(){f.a.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.718279,46.7465153&radius=15000&type=plant%20store&keyword=plant%20store&key=AIzaSyABFrz6SP5jsrNTc6Dt_yYq6whKCwMOo9g").then(function(e){console.log(e.data.results),a.setState({places:e.data.results})}).catch(function(e){console.log(e)})},a.showCurrentLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){a.setState(function(t){return{currentLatLng:U({},t.currentLatLng,{lat:e.coords.latitude,lng:e.coords.longitude}),isMarkerShown:!0}})}):console.log("error")},a.delayedShowMarker=function(){setTimeout(function(){a.setState({isMarkerShown:!0})},3e3)},a.handleMarkerClick=function(){},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.delayedShowMarker(),this.showCurrentLocation(),this.searchPlace()}},{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("div",{style:{width:"50vw",height:"50vh",opacity:.9}},r.a.createElement(D,{isMarkerShown:this.state.isMarkerShown,places:this.state.places,currentLocation:this.state.currentLatLng}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/",className:" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"}," Go Home Page  ")))))}}]),t}(r.a.PureComponent);var B=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"b"},r.a.createElement(g,null),r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{exact:!0,path:"/search",component:C}),r.a.createElement(i.a,{exact:!0,path:"/aboutus",component:F}),r.a.createElement(i.a,{exact:!0,path:"/google",component:R}),r.a.createElement(M,null)))};c.a.render(r.a.createElement(w,null,r.a.createElement(B,null)),document.getElementById("root"))},74:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.68287e46.chunk.js.map