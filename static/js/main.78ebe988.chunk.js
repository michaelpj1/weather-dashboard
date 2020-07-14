(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(31)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(17),a(1)),s=a(2),l=a(4),u=a(3),h=(a(18),a(11)),m=(a(19),a(5)),d=a.n(m),p=a(7),f=(a(21),"0594324a12ab12561dc8cf3cb64d61d8"),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={weatherData:{}},e.getApiInformation=function(){var t=Object(p.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(f,"&units=metric"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,console.log(r),e.setState({weatherData:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"currentDate",value:function(){var e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n}},{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getApiInformation(this.props.inLocation.searchLocation);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Cannot GET API.",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"undefined"==typeof this.state.weatherData.main||Math.round(this.state.weatherData.main.temp<=0)?"weather-info-container-0":Math.round(this.state.weatherData.main.temp)>0&&Math.round(this.state.weatherData.main.temp)<=20?"weather-info-container-0-20":Math.round(this.state.weatherData.main.temp)>20?"weather-info-container-20":"weather-info-container-0"},"undefined"!=typeof this.state.weatherData.main?r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"location"},this.state.weatherData.name,", ",this.state.weatherData.sys.country),r.a.createElement("div",{className:"main-temp"},Math.round(this.state.weatherData.main.temp),"\xb0C"),r.a.createElement("div",{className:"sub-temp"},"Min: ",Math.round(this.state.weatherData.main.temp_min),"\xb0C, Max: ",Math.round(this.state.weatherData.main.temp_max),"\xb0C"),r.a.createElement("div",null,this.state.weatherData.weather[0].main),r.a.createElement("div",null,this.currentDate())):"404"===this.state.weatherData.cod?r.a.createElement("div",{className:"error-container"},r.a.createElement("div",null,"Invalid location: ",this.props.inLocation.searchLocation)):r.a.createElement("div",null,"Loading..."),r.a.createElement("button",{onClick:this.props.onDelete,className:"delete-button"},"Delete"))}}]),a}(n.Component),v=a(10),w=a.n(v),y=(a(30),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchLocation:""},e.handleChange=function(t){e.setState({searchLocation:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchLocation.trim()?e.props.onSubmit({searchLocation:e.state.searchLocation,id:w.a.generate()}):alert("Invalid Input")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"search-bar-container"},r.a.createElement("input",{value:this.state.searchLocation,name:"searchLocation",onChange:this.handleChange,placeholder:"Location...",autoComplete:"off"})),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{type:"button",className:"cancel-button",onClick:this.props.onCancel},"Cancel"),r.a.createElement("button",{type:"submit",className:"search-button",onClick:this.handleSubmit},"Search"))))}}]),a}(n.Component)),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={weather:[],display:"weather"},e.displayWeather=function(){e.setState({display:"weather"})},e.displayForm=function(){e.setState({display:"form"})},e.addLocation=function(t){e.setState({weather:[].concat(Object(h.a)(e.state.weather),[t])}),e.displayWeather()},e.handleDelete=function(t){e.setState({weather:e.state.weather.filter((function(e){return e.id!==t}))})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"display"},"weather"===this.state.display&&this.state.weather.length<1?r.a.createElement("div",{className:"add-new-container"},r.a.createElement("button",{className:"add-new-button",onClick:this.displayForm},"Add New")):"weather"===this.state.display?r.a.createElement("div",null,r.a.createElement("div",{className:"weather-box-container"},this.state.weather.map((function(t){return r.a.createElement(b,{key:t.id,inLocation:t,onDelete:function(){return e.handleDelete(t.id)}})})),r.a.createElement("button",{className:"add-new-button",onClick:this.displayForm},"Add New"))):r.a.createElement("div",null,r.a.createElement(y,{onCancel:function(){return e.displayWeather()},onSubmit:this.addLocation})))}}]),a}(n.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),a}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.78ebe988.chunk.js.map