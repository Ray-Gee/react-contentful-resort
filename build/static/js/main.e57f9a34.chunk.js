(this["webpackJsonpreact-contentful-resort"]=this["webpackJsonpreact-contentful-resort"]||[]).push([[0],{132:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(54),i=s.n(r),a=s(4),o=(s(68),s(2)),l=s(0);function j(e){var t=e.children,s=e.hero;return Object(l.jsx)("header",{className:s,children:t})}function m(e){var t=e.children,s=e.title,c=e.subtitle;return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("h1",{children:s}),Object(l.jsx)("div",{}),Object(l.jsx)("p",{children:c}),t]})}j.defaultProps={hero:"defaultHero"};var u=s(11),d=s(12),b=s(14),h=s(13),p=s(17);function O(e){var t=e.title;return Object(l.jsxs)("div",{className:"section-title",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsx)("div",{})]})}var x=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={services:[{icon:Object(l.jsx)(p.c,{}),title:"free cocktails",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt nemo debitis nulla repudiandae repellat, tempora, ea obcaecati incidunt possimus molestiae ipsum molestias fugiat quis? Magni praesentium possimus quos iusto."},{icon:Object(l.jsx)(p.d,{}),title:"Endless",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt nemo debitis nulla repudiandae repellat, tempora, ea obcaecati incidunt possimus molestiae ipsum molestias fugiat quis? Magni praesentium possimus quos iusto."},{icon:Object(l.jsx)(p.e,{}),title:"free shuttle",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt nemo debitis nulla repudiandae repellat, tempora, ea obcaecati incidunt possimus molestiae ipsum molestias fugiat quis? Magni praesentium possimus quos iusto."},{icon:Object(l.jsx)(p.b,{}),title:"Strongest",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt nemo debitis nulla repudiandae repellat, tempora, ea obcaecati incidunt possimus molestiae ipsum molestias fugiat quis? Magni praesentium possimus quos iusto."}]},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(l.jsxs)("section",{className:"services",children:[Object(l.jsx)(O,{title:"services"}),Object(l.jsx)("div",{className:"services-center",children:this.state.services.map((function(e,t){return Object(l.jsxs)("article",{className:"service",children:[Object(l.jsx)("span",{children:e.icon}),Object(l.jsx)("h6",{children:e.title}),Object(l.jsx)("p",{children:e.info})]},t)}))})]})}}]),s}(c.Component),f=s(18),g=s(24),v=s(19),y=s.n(v),N=s(15),S=s(55),C=s(56),k=Object(C.createClient)({space:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN}),R=n.a.createContext(),T=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,mazSize:0,breakfast:!1,pets:!1},e.getData=Object(S.a)(y.a.mark((function t(){var s,c,n,r,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.getEntries({content_type:"beachResortRoom",order:"fields.price"});case 3:s=t.sent,c=e.formatData(s.items),n=c.filter((function(e){return!0===e.featured})),r=Math.max.apply(Math,Object(N.a)(c.map((function(e){return e.price})))),i=Math.max.apply(Math,Object(N.a)(c.map((function(e){return e.size})))),e.setState({rooms:c,sortedRooms:c,featuredRooms:n,loading:!1,price:r,maxPrice:r,maxSize:i}),console.log(c),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),e.getRoom=function(t){return Object(N.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var s=t.target,c="checkbox"===s.type?s.checked:s.value,n=t.target.name;e.setState(Object(g.a)({},n,c),e.filterRooms)},e.filterRooms=function(){var t=e.state,s=t.rooms,c=t.type,n=t.capacity,r=t.price,i=t.minSize,a=t.maxSize,o=t.breakfast,l=t.pets,j=Object(N.a)(s);n=parseInt(n),r=parseInt(r),"all"!==c&&(j=j.filter((function(e){return e.type===c}))),1!==n&&(j=j.filter((function(e){return e.capacity>=n}))),j=(j=j.filter((function(e){return e.price<=r}))).filter((function(e){return e.size>=i&&e.size<=a})),o&&(j=j.filter((function(e){return!0===e.breakfast}))),l&&(j=j.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:j})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,s=e.fields.images.map((function(e){return e.fields.file.url}));return Object(f.a)(Object(f.a)({},e.fields),{},{images:s,id:t})}))}},{key:"render",value:function(){return Object(l.jsx)(R.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),s}(c.Component),_=R.Consumer;var z=s.p+"static/media/loading-arrow.dd29210f.gif";function E(){return Object(l.jsxs)("div",{className:"loading",children:[Object(l.jsx)("h4",{children:"rooms loading..."}),Object(l.jsx)("img",{src:z,alt:""})]})}var F=s.p+"static/media/room-1.05b90599.jpeg";function P(e){var t=e.room,s=t.name,c=t.slug,n=t.images,r=t.price;return console.log(n[0]),Object(l.jsxs)("article",{className:"room",children:[Object(l.jsxs)("div",{className:"img-container",children:[Object(l.jsx)("img",{src:n[0]||F,alt:"single-room"}),Object(l.jsxs)("div",{className:"price-top",children:[Object(l.jsxs)("h6",{children:["$",r]}),Object(l.jsx)("p",{children:"per night"})]}),Object(l.jsx)(a.b,{to:"/rooms/".concat(c),className:"btn-primary room-link",children:"Features"})]}),Object(l.jsx)("p",{className:"room-info",children:s})]})}var A=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this.context,t=e.loading,s=e.featuredRooms;return s=s.map((function(e){return Object(l.jsx)(P,{room:e},e.id)})),Object(l.jsxs)("section",{className:"featured-rooms",children:[Object(l.jsx)(O,{title:"featured rooms"}),Object(l.jsx)("div",{className:"featured-rooms-center",children:t?Object(l.jsx)(E,{}):s})]})}}]),s}(c.Component);function D(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{hero:"defaultHero",children:Object(l.jsx)(m,{title:"luxurious rooms",subtitle:"deluxe rooms starting at $299",children:Object(l.jsx)(a.b,{to:"/rooms",className:"btn-primary",children:"our rooms"})})}),Object(l.jsx)(x,{}),Object(l.jsx)(A,{})]})}A.contextType=R;var w=function(e,t){return Object(N.a)(new Set(e.map((function(e){return e[t]}))))};function H(e){var t=e.rooms,s=Object(c.useContext)(R),n=s.handleChange,r=s.type,i=s.capacity,a=s.price,o=s.minPrice,j=s.maxPrice,m=s.minSize,u=s.maxSize,d=s.breakfast,b=s.pets,h=w(t,"type");h=(h=["all"].concat(Object(N.a)(h))).map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}));var p=w(t,"capacity");return p=p.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)})),Object(l.jsxs)("section",{className:"filter-container",children:[Object(l.jsx)(O,{title:"search rooms"}),Object(l.jsxs)("form",{className:"filter-form",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"type",children:"room type"}),Object(l.jsx)("select",{name:"type",id:"type",value:r,className:"form-control",onChange:n,children:h})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"capacity",children:"Guests"}),Object(l.jsx)("select",{name:"capacity",id:"capacity",value:i,className:"form-control",onChange:n,children:p})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"price",children:["room priice $",a]}),Object(l.jsx)("input",{type:"range",name:"price",min:o,max:j,id:"price",value:a,onChange:n,className:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"size",children:"room size"}),Object(l.jsxs)("div",{className:"size-inputs",children:[Object(l.jsx)("input",{type:"number",name:"minSize",id:"size",value:m,onChange:n,className:"size-input"}),Object(l.jsx)("input",{type:"number",name:"maxSize",id:"size",value:u,onChange:n,className:"size-input"})]})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"single-extra",children:[Object(l.jsx)("input",{type:"checkbox",name:"breakfast",checked:d,onChange:n,id:"breakfast"}),Object(l.jsx)("label",{htmlFor:"breakfast",children:"breakfast"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"single-extra",children:[Object(l.jsx)("input",{type:"checkbox",name:"pets",checked:b,onChange:n,id:"pets"}),Object(l.jsx)("label",{htmlFor:"pets",children:"pets"})]})})]})]})}function L(e){var t=e.rooms;return 0===t.length?Object(l.jsx)("div",{className:"empty-search",children:Object(l.jsx)("h3",{children:"unfortunately no rooms matched your search parameters"})}):Object(l.jsx)("section",{className:"roomslist",children:Object(l.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(l.jsx)(P,{room:e},e.id)}))})})}var M,q,B=(M=function(e){var t=e.context,s=t.loading,c=t.sortedRooms,n=t.rooms;return s?Object(l.jsx)(E,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(H,{rooms:n}),Object(l.jsx)(L,{rooms:c})]})},function(e){return Object(l.jsx)(_,{children:function(t){return Object(l.jsx)(M,Object(f.a)(Object(f.a)({},e),{},{context:t}))}})}),I=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{hero:"roomsHero",children:Object(l.jsx)(m,{title:"our rooms",children:Object(l.jsx)(a.b,{to:"/",className:"btn-primary",children:"return home"})})}),Object(l.jsx)(B,{})]})},K=s(63),V=s(58),W=s(59).a.header(q||(q=Object(V.a)(["\n  min-height: 60vh;\n  background: url(",")\n    center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.img?e.img:F})),U=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(u.a)(this,s),(c=t.call(this,e)).state={slug:c.props.match.params.slug,defaultBcg:F},c}return Object(d.a)(s,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("h3",{children:"no such room could be found..."}),Object(l.jsx)(a.b,{to:"/rooms",className:"btn-primary",children:"back to rooms"})]});var t=e.name,s=e.description,c=e.capacity,n=e.size,r=e.price,i=e.extras,o=e.breakfast,j=e.pets,u=e.images,d=Object(K.a)(u),b=d[0],h=d.slice(1);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(W,{img:b||this.state.defaultBcg,children:Object(l.jsx)(m,{title:"".concat(t," room"),children:Object(l.jsx)(a.b,{to:"/rooms",className:"btn-primary",children:"back to rooms"})})}),Object(l.jsxs)("section",{className:"single-room",children:[Object(l.jsx)("div",{className:"single-room-images",children:h.map((function(e,s){return Object(l.jsx)("img",{src:e,alt:t},s)}))}),Object(l.jsxs)("div",{className:"single-room-info",children:[Object(l.jsxs)("article",{className:"desc",children:[Object(l.jsx)("h3",{children:"details"}),Object(l.jsx)("p",{children:s})]}),Object(l.jsxs)("article",{className:"info",children:[Object(l.jsx)("h3",{children:"info"}),Object(l.jsxs)("h6",{children:["price: $",r]}),Object(l.jsxs)("h6",{children:["size: ",n," SQFT"]}),Object(l.jsxs)("h6",{children:["max capacity:","".concat(c,c>1?" people":" prtson")]}),Object(l.jsx)("h6",{children:j?"prts allowed":"no pets allowed"}),Object(l.jsx)("h6",{children:o&&"free breakfast included"})]})]})]}),Object(l.jsxs)("section",{className:"room-extras",children:[Object(l.jsx)("h6",{children:"extras"}),Object(l.jsx)("ul",{className:"extras",children:i?i.map((function(e,t){return Object(l.jsxs)("li",{children:["- ",e]},t)})):"Nothing"})]})]})}}]),s}(c.Component);function $(){return Object(l.jsx)(j,{children:Object(l.jsx)(m,{title:"404",subtitle:"page not found",children:Object(l.jsx)(a.b,{to:"/",className:"btn-primary",children:"return home"})})})}U.contextType=R;var J=s.p+"static/media/logo.87947b58.svg",G=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"nav-center",children:[Object(l.jsxs)("div",{className:"nav-header",children:[Object(l.jsx)(a.b,{to:"/",children:Object(l.jsx)("img",{src:J,alt:"Beach Resort"})}),Object(l.jsx)("button",{type:"button",className:"nav-btn",children:Object(l.jsx)(p.a,{className:"nav-icon",onClick:this.handleToggle})})]}),Object(l.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/rooms",children:"Rooms"})})]})]})})}}]),s}(c.Component);var Q=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(G,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(l.jsx)(o.a,{exact:!0,path:"/rooms",component:I}),Object(l.jsx)(o.a,{exact:!0,path:"/rooms/:slug",component:U}),Object(l.jsx)(o.a,{component:$})]})]})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,133)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(T,{children:Object(l.jsx)(a.a,{children:Object(l.jsx)(Q,{})})}),document.getElementById("root")),X()},35:function(e,t){},68:function(e,t,s){},98:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.e57f9a34.chunk.js.map