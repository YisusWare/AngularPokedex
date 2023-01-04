"use strict";(self.webpackChunkPokedexAngular=self.webpackChunkPokedexAngular||[]).push([[307],{1307:(J,y,a)=>{a.r(y),a.d(y,{TypesModule:()=>g});var i=a(6895),c=a(2019),e=a(8256),b=a(2263);class d{constructor(){}ngOnInit(){}evaluateClass(){switch(this.type.name){case"normal":return"normal-type-card";case"fighting":return"fighting-type-card";case"flying":return"flying-type-card";case"poison":return"poison-type-card";case"ground":return"ground-type-card";case"rock":return"rock-type-card";case"bug":return"bug-type-card";case"ghost":return"ghost-type-card";case"steel":return"steel-type-card";case"fire":return"fire-type-card";case"water":return"water-type-card";case"grass":return"grass-type-card";case"electric":return"electric-type-card";case"psychic":return"psychic-type-card";case"ice":return"ice-type-card";case"dragon":return"dragon-type-card";case"dark":return"dark-type-card";case"fairy":return"fairy-type-card";default:return"none"}}}function _(n,t){if(1&n&&e._UZ(0,"app-type-card",2),2&n){const h=t.index;e.Q6J("type",t.$implicit)("index",h+1)}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-type-card"]],inputs:{type:"type",index:"index"},decls:9,vars:6,consts:[[1,"card-container",3,"ngClass"],[1,"button-container"],[3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.TgZ(4,"div",1)(5,"button",2),e._uU(6,"Summary"),e.qZA(),e.TgZ(7,"button",2),e._uU(8,"See Species"),e.qZA()()()),2&t&&(e.Q6J("ngClass",o.evaluateClass()),e.xp6(2),e.Oqu(e.lcZ(3,4,o.type.name)),e.xp6(3),e.MGl("routerLink","/types/type_sumary/",o.index,""),e.xp6(2),e.MGl("routerLink","/types/type_species_catalog/",o.index,""))},dependencies:[i.mk,c.rH,i.rS],styles:['.normal-type-card[_ngcontent-%COMP%]{background:radial-gradient(circle at center,#ddccaa 30%,rgb(255,251,242) 50%,#ddccaa 100%)}.fighting-type-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgb(119,29,29),rgb(143,63,20) 25%,rgb(178,84,84) 50%,rgb(119,29,29) 80%)}.flying-type-card[_ngcontent-%COMP%]{background:linear-gradient(230deg,#5689d1,#6a28e6 15%,#94abd8 45%,#6a28e6 85%,#5689d1 100%)}.poison-type-card[_ngcontent-%COMP%]{background:radial-gradient(circle at top,rgb(124,20,124) 10%,#945a99 20%,rgb(124,20,124) 40%,rgb(255,139,228) 50%,#945a99 90%)}.ground-type-card[_ngcontent-%COMP%]{background:radial-gradient(circle at right,rgb(145,130,88) 20%,rgb(193,174,153) 40%,rgb(145,130,88) 50%,rgb(158,177,111) 90%)}.rock-type-card[_ngcontent-%COMP%]{background:linear-gradient(225deg,rgb(191,112,37),rgb(246,179,107));box-shadow:inset 16px 0 16px 6px #c1ae99}.bug-type-card[_ngcontent-%COMP%]{background:linear-gradient(225deg,rgb(132,213,25),rgb(14,167,6) 50%,rgb(132,213,25))}.ghost-type-card[_ngcontent-%COMP%]{background:linear-gradient(25deg,#827ba6,rgb(93,79,109) 50%,rgb(54,42,72))}.steel-type-card[_ngcontent-%COMP%]{background:linear-gradient(25deg,#696772,rgb(198,182,215) 20%,#696772 30%,rgb(198,182,215) 60%,#696772 80%)}.fire-type-card[_ngcontent-%COMP%]{background:radial-gradient(circle at center,#da2d2d 30%,rgb(250,140,67) 50%,#e97867 100%)}.grass-type-card[_ngcontent-%COMP%]{background:linear-gradient(45deg,rgb(29,101,29),rgb(89,201,133) 50%,rgb(13,120,31))}.water-type-card[_ngcontent-%COMP%]{background:linear-gradient(45deg,rgb(27,27,160) 30%,rgb(122,152,216) 50%,rgb(27,27,160) 100%)}.electric-type-card[_ngcontent-%COMP%]{background:linear-gradient(95deg,rgb(161,161,24),rgb(198,239,36) 50%,rgb(241,243,149) 60%,rgb(198,239,36))}.psychic-type-card[_ngcontent-%COMP%]{background:radial-gradient(circle at right,rgb(251,152,192) 10%,#dc4fe6 20%,rgb(228,33,118) 40%,rgb(255,139,228) 50%,#c71aa4 90%)}.ice-type-card[_ngcontent-%COMP%]{background:linear-gradient(195deg,rgb(135,193,218),rgb(86,171,193) 50%,rgb(135,193,218) 60%,rgb(54,180,208))}.dragon-type-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgb(55,64,252),rgb(96,21,136) 15%,rgb(205,15,15) 50%,rgb(96,21,136) 85%,rgb(64,54,208) 100%)}.dark-type-card[_ngcontent-%COMP%]{background:linear-gradient(95deg,rgb(40,42,75),rgb(96,21,136) 15%,rgb(59,69,99) 50%,rgb(96,21,136) 85%,rgb(40,42,75) 100%)}.fairy-type-card[_ngcontent-%COMP%]{background:linear-gradient(47deg,rgb(223,128,234),rgb(181,49,165) 15%,rgb(211,10,141) 50%,rgb(219,104,212) 85%,rgb(221,166,223)) 100%}[_nghost-%COMP%]{width:90%;max-width:400px;overflow:hidden;border-radius:4px;margin:16px 0;padding:0 0 10px}h3[_ngcontent-%COMP%]{text-align:center}.card-container[_ngcontent-%COMP%]{padding-bottom:10px;border-radius:10px}.button-container[_ngcontent-%COMP%]{width:95%;height:auto;display:flex;margin:10px auto 0;justify-content:center}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;height:60px;border:none;font-weight:700;transition:all .3s}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;height:60px;border:none;font-weight:700}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1){background-color:var( --main-red );border:2px solid black;border-top-left-radius:50px;border-bottom-left-radius:50px;position:relative}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1):hover{background-color:#c95d5d}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2):hover{background-color:#d4d4d4}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){background-color:#fff;border:2px solid black;border-top-right-radius:50px;border-bottom-right-radius:50px}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1):after{content:"";width:40px;height:40px;position:absolute;background-color:#fff;left:100%;margin-left:-21px;bottom:50%;margin-bottom:-22px;border-radius:50%;border:3px solid black}']});class s{constructor(t){this.PokedexService=t}get types(){return this.PokedexService.types}ngOnInit(){this.PokedexService.getPokemonTypes()}}s.\u0275fac=function(t){return new(t||s)(e.Y36(b.z))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-types-catalog"]],decls:2,vars:1,consts:[[1,"type-cards-container"],[3,"type","index",4,"ngFor","ngForOf"],[3,"type","index"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,_,1,2,"app-type-card",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",o.types))},dependencies:[i.sg,d],styles:[".type-cards-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly}"]});var x=a(805),C=a(47),k=a(4247);function P(n,t){1&n&&e._uU(0," Basic Information ")}function T(n,t){1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Double Damage From"),e.qZA()())}function O(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA()()),2&n){const o=t.$implicit;e.xp6(2),e.Oqu(o.name)}}function M(n,t){1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"none"),e.qZA()())}function v(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Double Damage To"),e.qZA()(),e.YNc(3,M,3,0,"tr",5)),2&n){const o=e.oxw();e.xp6(3),e.Q6J("ngIf",0===o.doubleDamageTo.length)}}function Z(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA()()),2&n){const o=t.$implicit;e.xp6(2),e.Oqu(o.name)}}function S(n,t){1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"none"),e.qZA()())}function A(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Half Damage From"),e.qZA()(),e.YNc(3,S,3,0,"tr",5)),2&n){const o=e.oxw();e.xp6(3),e.Q6J("ngIf",0===o.doubleDamageTo.length)}}function N(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA()()),2&n){const o=t.$implicit;e.xp6(2),e.Oqu(o.name)}}function w(n,t){1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"none"),e.qZA()())}function q(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Half Damage To"),e.qZA()(),e.YNc(3,w,3,0,"tr",5)),2&n){const o=e.oxw();e.xp6(3),e.Q6J("ngIf",0===o.halfDamageTo.length)}}function U(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA()()),2&n){const o=t.$implicit;e.xp6(2),e.Oqu(o.name)}}class m{constructor(t,o){this.activatedRoute=t,this.pokedexService=o,this.typeName="",this.doubleDamageFrom=[],this.doubleDamageTo=[],this.halfDamageFrom=[],this.halfDamageTo=[],this.japaneseName="",this.pokemonQty=0,this.movesQty=0,this.activatedRoute.params.subscribe(h=>{this.pokedexService.getTypeSumary(h.id).subscribe(r=>{this.typeName=r.name,this.doubleDamageFrom=r.damage_relations.double_damage_from,this.doubleDamageTo=r.damage_relations.double_damage_to,this.halfDamageFrom=r.damage_relations.half_damage_from,this.halfDamageTo=r.damage_relations.double_damage_to,this.japaneseName=`${r.names[0].name}(${r.names[0].language.name})`,this.pokemonQty=r.pokemon.length,this.movesQty=r.moves.length})})}ngOnInit(){}}m.\u0275fac=function(t){return new(t||m)(e.Y36(c.gz),e.Y36(b.z))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-type-sumary"]],decls:31,vars:11,consts:[["pTemplate","header"],[1,"damage-relations-table-container"],[1,"damage-relations-table"],[3,"value"],["pTemplate","body"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"titlecase"),e.qZA(),e.TgZ(3,"p-card"),e.YNc(4,P,1,0,"ng-template",0),e.TgZ(5,"ul")(6,"li"),e._uU(7),e.qZA(),e.TgZ(8,"li"),e._uU(9),e.qZA(),e.TgZ(10,"li"),e._uU(11),e.qZA()()(),e.TgZ(12,"h3"),e._uU(13),e.qZA(),e.TgZ(14,"div",1)(15,"div",2)(16,"p-table",3),e.YNc(17,T,3,0,"ng-template",0),e.YNc(18,O,3,1,"ng-template",4),e.qZA()(),e.TgZ(19,"div",2)(20,"p-table",3),e.YNc(21,v,4,1,"ng-template",0),e.YNc(22,Z,3,1,"ng-template",4),e.qZA()(),e.TgZ(23,"div",2)(24,"p-table",3),e.YNc(25,A,4,1,"ng-template",0),e.YNc(26,N,3,1,"ng-template",4),e.qZA()(),e.TgZ(27,"div",2)(28,"p-table",3),e.YNc(29,q,4,1,"ng-template",0),e.YNc(30,U,3,1,"ng-template",4),e.qZA()()()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,9,o.typeName+" type summary")),e.xp6(6),e.Oqu("Japanese Name: "+o.japaneseName),e.xp6(2),e.Oqu("Moves: "+o.movesQty),e.xp6(2),e.Oqu("Species: "+o.pokemonQty),e.xp6(2),e.Oqu("Damage Relations for "+o.typeName+" type"),e.xp6(3),e.Q6J("value",o.doubleDamageFrom),e.xp6(4),e.Q6J("value",o.doubleDamageTo),e.xp6(4),e.Q6J("value",o.halfDamageFrom),e.xp6(4),e.Q6J("value",o.halfDamageTo))},dependencies:[i.O5,x.jx,C.iA,k.Z,i.rS],styles:["h1[_ngcontent-%COMP%]{text-align:center}h3[_ngcontent-%COMP%]{text-align:center;margin:16px 0 4px}[_nghost-%COMP%]     .p-card{width:95%!important;margin:10px auto 0;padding-left:10px}[_nghost-%COMP%]     .p-card ul{list-style:none}[_nghost-%COMP%]     .p-card-header{text-align:center;padding-top:10px}.damage-relations-table-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.damage-relations-table[_ngcontent-%COMP%]{width:90%;max-width:350px;margin:10px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center!important}"]});var f=a(7210);function D(n,t){1&n&&e._UZ(0,"app-pokemon-card",5),2&n&&e.Q6J("pokemonName",t.$implicit.pokemon.name)}class l{constructor(t,o){this.activatedRoute=t,this.pokedexService=o,this.pokemonList=[],this.currentPokemonList=[],this.currentPage=1,this.totalPages=0}ngOnInit(){this.btnBefore=document.querySelector("#before-button"),this.btnBefore.disabled=!0,this.btnNext=document.querySelector("#next-button"),this.activatedRoute.params.subscribe(t=>{this.pokedexService.getTypeSumary(t.id).subscribe(o=>{this.pokemonList=o.pokemon,this.currentPokemonList=o.pokemon.slice(0,10),this.totalPages=Math.ceil(o.pokemon.length/10)})})}fnBefore(){1!==this.currentPage&&(this.currentPage--,1===this.currentPage&&(this.btnBefore.disabled=!0),this.btnNext.disabled=!1,this.currentPokemonList=this.pokemonList.slice(10*(this.currentPage-1),10*(this.currentPage-1)+10))}fnNext(){this.currentPage!==this.totalPages&&(this.currentPage++,this.currentPage===this.totalPages&&(this.currentPokemonList=this.pokemonList.slice(10*(this.currentPage-1),this.pokemonList.length),this.btnNext.disabled=!0),this.btnBefore.disabled=!1,this.currentPokemonList=this.pokemonList.slice(10*(this.currentPage-1),10*(this.currentPage-1)+10),console.log(this.currentPage+" current page"),console.log(this.currentPokemonList))}}l.\u0275fac=function(t){return new(t||l)(e.Y36(c.gz),e.Y36(b.z))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-pokemon-species"]],decls:8,vars:1,consts:[[1,"pokemon-cards-container"],[3,"pokemonName",4,"ngFor","ngForOf"],[1,"button-container"],["id","before-button",3,"click"],["id","next-button",3,"click"],[3,"pokemonName"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,D,1,1,"app-pokemon-card",1),e.qZA(),e.TgZ(2,"div")(3,"div",2)(4,"button",3),e.NdJ("click",function(){return o.fnBefore()}),e._uU(5,"Before"),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return o.fnNext()}),e._uU(7,"Next"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",o.currentPokemonList))},dependencies:[i.sg,f.U],styles:['.button-container[_ngcontent-%COMP%]{width:95%;max-width:350px;height:auto;display:flex;margin:10px auto 0;justify-content:center}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;height:60px;border:none;font-weight:700;transition:all .3s}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;height:60px;border:none;font-weight:700}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1){background-color:var( --main-red );border:2px solid black;border-top-left-radius:50px;border-bottom-left-radius:50px;position:relative}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1):hover{background-color:#c95d5d}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2):hover{background-color:#d4d4d4}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){background-color:#fff;border:2px solid black;border-top-right-radius:50px;border-bottom-right-radius:50px}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1):after{content:"";width:40px;height:40px;position:absolute;background-color:#fff;left:100%;margin-left:-21px;bottom:50%;margin-bottom:-22px;border-radius:50%;border:3px solid black}.pokemon-cards-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly}']});class u{constructor(t,o){this.ActivatedRoute=t,this.PokedexService=o,this.pokemon=""}ngOnInit(){this.ActivatedRoute.params.subscribe(t=>{try{this.pokemon=t.name}catch{}})}}u.\u0275fac=function(t){return new(t||u)(e.Y36(c.gz),e.Y36(b.z))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-pokemon-search"]],decls:2,vars:1,consts:[[1,"pokemon-card-container"],[3,"pokemonName"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-pokemon-card",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("pokemonName",o.pokemon))},dependencies:[f.U],styles:[".pokemon-card-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:20px}"]});const F=[{path:"",children:[{path:"types_catalog",component:s},{path:"type_sumary/:id",component:m},{path:"type_species_catalog/:id",component:l},{path:"pokemon_search/:name",component:u}]}];class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[c.Bz.forChild(F),c.Bz]});var Y=a(6400),Q=a(4466);class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[i.ez,p,Y.H,Q.m]})}}]);