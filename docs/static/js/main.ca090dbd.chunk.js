(this["webpackJsonpformacion-online-pokemon-anaamaro"]=this["webpackJsonpformacion-online-pokemon-anaamaro"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),c=(n(14),n(1)),i=n(2),m=n(5),s=n(4),u=n(3),p=n(6),f=function(){return fetch("./data.json").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,url:e.url,name:e.name,types:e.types}}))})).catch((function(e){console.log(e)}))},k=function(e){return o.a.createElement("li",{className:"pokemones"},o.a.createElement("div",{className:"pokemones__img"},o.a.createElement("img",{src:e.pokemones.url,alt:e.pokemones.name,title:e.pokemones.name}),o.a.createElement("h2",{className:"pokemon__id"},"ID / ",e.pokemones.id)),o.a.createElement("div",{className:"pokemon__card"},o.a.createElement("h2",{className:"pokemon__name"},e.pokemones.name),o.a.createElement("ul",{className:"pokemon__types"},function(e){return e.pokemones.types.map((function(e,t){return o.a.createElement("li",{className:"pokemones__types",key:t},e)}))}(e))))},h=function(e){return o.a.createElement("ul",{className:"pokemon__list"},function(e){return e.pokemones.map((function(e,t){return o.a.createElement(k,{key:t,pokemones:e})}))}(e))},d=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"pokefilter"},o.a.createElement("input",{className:"poke__input",type:"text",id:"name",name:"name",onChange:this.props.handleFilter,placeholder:"Filtra pokemons por nombre..."})))}}]),t}(o.a.Component),E=(n(15),[]),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={pokemones:[],filter:""},e.handleFilter=e.handleFilter.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({pokemones:t})}))}},{key:"handleFilter",value:function(e){var t=e.target.value;this.setState({filter:t})}},{key:"render",value:function(){var e=this;return E=this.state.pokemones.filter((function(t){return t.name.toUpperCase().includes(e.state.filter.toUpperCase())})),o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"title"}),o.a.createElement(d,{filter:E,handleFilter:this.handleFilter}),o.a.createElement(h,{pokemones:E}))}}]),t}(o.a.Component);l.a.render(o.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ca090dbd.chunk.js.map