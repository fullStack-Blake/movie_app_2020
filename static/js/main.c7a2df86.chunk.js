(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{34:function(e,t,a){e.exports=a(68)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),i=a(7),o=a(6),m=a(16),l=a.n(m),u=a(30),v=a(10),p=a(11),d=a(13),E=a(12),y=a(14),f=a(31),h=a.n(f);a(57);var g=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,o=e.genres;return r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:o}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},c.slice(0,180),"..."))))},b=(a(63),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(64);var _=function(e){return console.log(e),r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"Created By SangYeup Han"),r.a.createElement("div",null,"Using React, YTS API"))},N=(a(65),function(e){function t(){return Object(v.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state,a=t.year,n=t.title,c=t.summary,s=t.poster,i=t.genres;return r.a.createElement("div",{className:"movies"},r.a.createElement("div",{className:"movie_poster"},r.a.createElement("img",{src:s,alt:n,title:n})),r.a.createElement("div",{className:"movie_detail"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("div",null,c)))}return null}}]),t}(r.a.Component));a(66);var j=function(){return r.a.createElement("div",{className:"nav_bar"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};a(67);var O=function(){return r.a.createElement(i.a,null,r.a.createElement(j,null),r.a.createElement(o.a,{path:"/",exact:!0,component:b}),r.a.createElement(o.a,{path:"/about",component:_}),r.a.createElement(o.a,{path:"/movie/:id",component:N}))};s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c7a2df86.chunk.js.map