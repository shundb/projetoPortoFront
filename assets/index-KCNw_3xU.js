import{j as e,r as u,a as C}from"./react-5fiyULV6.js";import{c as y}from"./react-dom-pkzF5NuE.js";import{R as P}from"./react-router-dom-rvxFfBIP.js";import{O as k,b as T,c as I}from"./react-router-c2-O2RvD.js";import{d as L,a as O,b as B,c as M,e as D,f as F,g as w,T as G,h as V,i as X,P as E,j as U,k as z,l as p,m as N,n as Y,o as H,p as W,q as Z,I as A,N as Q,r as J}from"./@mui-DgqzwL7a.js";import{r as j}from"./react-table-_-cy2Cim.js";import"./@babel-mnrG7P4f.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-Q-hJPlN9.js";import"./clsx-Zbgk8kpT.js";import"./@emotion-y_GiC9cQ.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./react-transition-group-8id-08Ik.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}})();function q(){return e.jsx(k,{})}const K="/projetoPortoFront/assets/panorama-itaqui-IPDUH2GU.jpg",_="/projetoPortoFront/assets/logo-lYnCYFcv.png",$=()=>{const[s,o]=u.useState(""),[l,c]=u.useState(""),a=T(),i=m=>{o(m.target.value)},n=m=>{c(m.target.value)},d=m=>{s=="admin"&&l=="admin"&&a("/atraqui")},x=m=>{m.key==="Enter"&&d()};return e.jsx("section",{id:"login-around",children:e.jsxs("section",{id:"login-container",children:[e.jsxs("section",{className:"left",children:[e.jsx("div",{className:"logo",children:"ATRAQUI"}),e.jsxs("div",{className:"inputs",children:[e.jsx("i",{className:"fa-solid fa-circle-user"}),e.jsx("input",{type:"text",name:"user",id:"user",placeholder:"Usuário",value:s,onChange:i,onKeyPress:x,autoComplete:"off"}),e.jsx("input",{type:"password",name:"password",id:"password",placeholder:"Senha",value:l,onChange:n,onKeyPress:x,autoComplete:"off"}),e.jsx("button",{className:"login-button",onClick:d,children:"Entrar"})]})]}),e.jsxs("section",{className:"right",children:[e.jsx("div",{className:"image-overlay",children:e.jsx("img",{src:_})}),e.jsx("div",{className:"darker"}),e.jsx("img",{src:K,alt:""})]})]})})};function h(s){return e.jsxs("div",{className:"side-bar__button",onClick:s.uiOpen,style:{backgroundColor:s.isSelected===s.number?"#DC3545":""},children:[e.jsx("i",{children:s.icon}),e.jsx("span",{children:s.text})]})}const ee="/projetoPortoFront/assets/logo2-jmBhNOAo.png";function se(s){const[o,l]=u.useState(!1);function c(){l(d=>!d)}const[a,i]=u.useState(1);function n(d){i(d)}return e.jsxs("div",{id:"side-bar",className:o?"stowed":"",children:[e.jsxs("div",{className:"side-bar__buttons",children:[e.jsx("button",{onClick:c,className:"side-bar__toggle",type:"button",title:"bar-toggle",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("div",{className:"img-container",children:e.jsx("img",{src:ee,alt:""})})]}),e.jsx("h2",{className:"title",children:"MENU"}),e.jsx("div",{className:"side-bar__body",children:e.jsx("div",{children:e.jsxs("div",{className:"side-bar__menu",children:[e.jsx("span",{onClick:()=>{s.setWhichApp("Início"),n(1)},children:e.jsx(h,{text:"Início",icon:e.jsx(L,{}),uiOpen:s.uiOpen,number:1,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Navios Atracados"),n(2)},children:e.jsx(h,{text:"Navios Atracados",icon:e.jsx(O,{}),uiOpen:s.uiOpen,number:2,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Fila de Atracação"),n(3)},children:e.jsx(h,{text:"Fila de Atracação",icon:e.jsx(B,{}),uiOpen:s.uiOpen,number:3,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Usuários"),n(4)},children:e.jsx(h,{text:"Usuários",icon:e.jsx(M,{}),uiOpen:s.uiOpen,number:4,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Requisições de Atracação"),n(5)},children:e.jsx(h,{text:"Requisições de Atracação",icon:e.jsx(D,{}),uiOpen:s.uiOpen,number:5,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Registro de Navios"),n(6)},children:e.jsx(h,{text:"Registro de Navios",icon:e.jsx(F,{}),uiOpen:s.uiOpen,number:6,isSelected:a})}),e.jsx("span",{onClick:()=>{s.setWhichApp("Ajuda"),n(7)},children:e.jsx(h,{text:"Ajuda",icon:e.jsx(w,{}),uiOpen:s.uiOpen,number:7,isSelected:a})})]})})})]})}function ae(s){return e.jsxs("section",{id:"barra-topo",children:[e.jsx("h3",{className:"titulo",children:s.titulo}),e.jsxs("div",{className:"usuario",children:[e.jsx("i",{class:"fa-solid fa-bell"}),e.jsx("i",{className:"fa-solid fa-circle-user"})]})]})}const ie="data:image/png;base64,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",re="data:image/png;base64,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",ne="data:image/png;base64,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";function oe(){return e.jsxs("section",{id:"inicio",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"resumo-mensal",children:[e.jsx("h3",{children:"Resumo Mensal"}),e.jsx("p",{className:"sub-titulo",children:"Relatório de acompanhamento do mês de Novembro"}),e.jsxs("div",{className:"caixas",children:[e.jsxs("div",{className:"caixa",children:[e.jsx("img",{src:ie,alt:""}),e.jsx("h3",{children:"56"}),e.jsx("p",{children:"Total de navios atracados"}),e.jsx("p",{children:e.jsx("span",{className:"amarelo",children:"+10% em relação ao mês passado"})})]}),e.jsxs("div",{className:"caixa",children:[e.jsx("img",{src:re,alt:""}),e.jsx("h3",{children:"71"}),e.jsx("p",{children:"Total de navios fundeados"}),e.jsx("p",{children:e.jsx("span",{className:"ciano",children:"+8% em relação ao mês passado"})})]}),e.jsxs("div",{className:"caixa",children:[e.jsx("img",{src:ne,alt:""}),e.jsx("h3",{children:"83"}),e.jsx("p",{children:"Total de navios esperados"}),e.jsx("p",{children:e.jsx("span",{className:"verde",children:"+2% em relação ao mês passado"})})]})]})]}),e.jsxs("div",{className:"movimentacao-de-cargas",children:[e.jsx("h3",{children:"Movimentação Total de Cargas"}),e.jsx("div",{className:"grafico"}),e.jsxs("div",{className:"rodape",children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"rodape",children:[e.jsx("p",{className:"ponto verde",children:"•"}),e.jsx("p",{className:"fonte-cinza",children:"Movimentação do último mês"})]})}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"rodape",children:[e.jsx("p",{className:"ponto ciano",children:"•"}),e.jsx("p",{className:"fonte-cinza",children:"Movimentação deste mês"})]})})]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"produtos-exportados",children:[e.jsx("h3",{children:"Ranking de Produtos Exportados"}),e.jsxs("div",{className:"primeira linha fonte-cinza",children:[e.jsx("div",{className:"numero",children:"#"}),e.jsx("div",{className:"nome",children:"Nome"}),e.jsx("div",{className:"relevancia",children:"Relevância"}),e.jsx("div",{className:"porcentagem",children:"%"})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"01"}),e.jsx("div",{className:"nome",children:"Soja"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-amarelo"})})}),e.jsx("div",{className:"porcentagem redor redor-amarelo",children:e.jsx("span",{className:"amarelo",children:"46%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"02"}),e.jsx("div",{className:"nome",children:"Ferro Gusa"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-verde"})})}),e.jsx("div",{className:"porcentagem redor redor-verde",children:e.jsx("span",{className:"verde",children:"33%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"03"}),e.jsx("div",{className:"nome",children:"Cobre"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-ciano"})})}),e.jsx("div",{className:"porcentagem redor redor-ciano",children:e.jsx("span",{className:"ciano",children:"12%"})})]}),e.jsxs("div",{className:"ultima linha",children:[e.jsx("div",{className:"numero",children:"04"}),e.jsx("div",{className:"nome",children:"Milho"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-rosa"})})}),e.jsx("div",{className:"porcentagem redor redor-rosa",children:e.jsx("span",{className:"rosa",children:"5%"})})]})]}),e.jsxs("div",{className:"produtos-importados",children:[e.jsx("h3",{children:"Ranking de Produtos Importados"}),e.jsxs("div",{className:"primeira linha fonte-cinza",children:[e.jsx("div",{className:"numero",children:"#"}),e.jsx("div",{className:"nome",children:"Nome"}),e.jsx("div",{className:"relevancia",children:"Relevância"}),e.jsx("div",{className:"porcentagem",children:"%"})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"01"}),e.jsx("div",{className:"nome",children:"Fertilizantes"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-amarelo"})})}),e.jsx("div",{className:"porcentagem redor redor-amarelo",children:e.jsx("span",{className:"amarelo",children:"46%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"02"}),e.jsx("div",{className:"nome",children:"Celulose"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-verde"})})}),e.jsx("div",{className:"porcentagem redor redor-verde",children:e.jsx("span",{className:"verde",children:"33%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsx("div",{className:"numero",children:"03"}),e.jsx("div",{className:"nome",children:"Diesel"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-ciano"})})}),e.jsx("div",{className:"porcentagem redor redor-ciano",children:e.jsx("span",{className:"ciano",children:"12%"})})]}),e.jsxs("div",{className:"ultima linha",children:[e.jsx("div",{className:"numero",children:"04"}),e.jsx("div",{className:"nome",children:"Gasolina"}),e.jsx("div",{className:"relevancia",children:e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-rosa"})})}),e.jsx("div",{className:"porcentagem redor redor-rosa",children:e.jsx("span",{className:"rosa",children:"5%"})})]})]}),e.jsxs("div",{className:"tipos-de-operacao",children:[e.jsx("h3",{children:"Tipos de Operação"}),e.jsxs("div",{className:"linha",children:[e.jsxs("div",{className:"barra-e-titulo",children:[e.jsx("div",{className:"titulo",children:"IMPORTAÇÃO"}),e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-amarelo"})})]}),e.jsx("div",{className:"porcentagem redor redor-amarelo",children:e.jsx("span",{className:"amarelo",children:"48%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsxs("div",{className:"barra-e-titulo",children:[e.jsx("div",{className:"titulo",children:"EXPORTAÇÃO"}),e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-ciano"})})]}),e.jsx("div",{className:"porcentagem redor redor-ciano",children:e.jsx("span",{className:"ciano",children:"41%"})})]}),e.jsxs("div",{className:"linha",children:[e.jsxs("div",{className:"barra-e-titulo",children:[e.jsx("div",{className:"titulo",children:"TRIPULANTES"}),e.jsx("div",{className:"barra",children:e.jsx("div",{className:"preenchimento-verde"})})]}),e.jsx("div",{className:"porcentagem redor redor-verde",children:e.jsx("span",{className:"verde",children:"11%"})})]})]})]})]})}function le(s){return e.jsxs("div",{id:"botao-azul",children:[e.jsx("div",{className:"texto",children:s.texto}),e.jsx("div",{className:"icone",children:s.icone})]})}const ce=({columns:s,data:o})=>{const{getTableProps:l,getTableBodyProps:c,headerGroups:a,rows:i,prepareRow:n,state:d,setGlobalFilter:x,page:m,nextPage:v,previousPage:g,canNextPage:f,canPreviousPage:b,gotoPage:ue,pageOptions:xe,setPageSize:je}=j.useTable({columns:s,data:o,initialState:{pageIndex:0,pageSize:8}},j.useGlobalFilter,j.useSortBy,j.usePagination),{globalFilter:S,pageIndex:R}=d;return u.useMemo(()=>s,[s]),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"16px",borderRadius:"100px"},children:e.jsx(G,{variant:"filled",sx:{position:"absolute",top:"10px",marginLeft:"40%",transform:"scale(0.75)","& .MuiInputBase-formControl":{borderRadius:"100px",height:"50px",width:"300px",borderBottom:"none"},"& .MuiInputBase-formControl::before":{borderBottom:"none"},"& .MuiInputBase-formControl::after":{borderBottom:"none"},"& .MuiInputBase-formControl:hover::before":{borderBottom:"none"},"& .MuiInputBase-formControl:hover:not(.Mui-disabled, .Mui-error):before":{borderBottom:"none"},"& .MuiFormLabel-root":{left:"10px",top:"-2px"},"& .MuiFilledInput-input":{paddingLeft:"22px",paddingBottom:"16px"},"& .input-text-label":{display:"flex",alignItems:"center"}},label:e.jsxs("div",{className:"input-text-label",children:[e.jsx(V,{sx:{marginRight:".25rem",fontSize:"1.23rem"}}),"Pesquisar"]}),value:S||"",onChange:t=>x(t.target.value)})}),e.jsx(X,{component:E,children:e.jsxs(U,{...l(),style:{minWidth:650},children:[e.jsx(z,{children:a.map(t=>e.jsx(p,{...t.getHeaderGroupProps(),children:t.headers.map(r=>e.jsxs(N,{...r.getHeaderProps(r.getSortByToggleProps()),align:"left",sx:{fontWeight:"bold"},children:[r.render("Header"),e.jsx("span",{children:r.isSorted?r.isSortedDesc?e.jsx(Y,{sx:{marginBottom:"-7px"}}):e.jsx(H,{sx:{marginBottom:"-7px"}}):e.jsx(W,{sx:{fontSize:"15px",marginBottom:"-3px",marginLeft:"5px"}})})]}))}))}),e.jsx(Z,{...c(),children:m.map(t=>(n(t),e.jsx(p,{...t.getRowProps(),children:t.cells.map(r=>e.jsxs(N,{...r.getCellProps(),align:"left",children:[r.column.Header==="Imagem"&&e.jsx("span",{className:"celula celula-imagem",children:e.jsx("img",{src:t.values.imagem,alt:""})}),r.column.Header==="Status"&&e.jsx("span",{className:"celula celula-grifada",style:t.values.status==="Ativo"?{backgroundColor:"#35AADC"}:{backgroundColor:"#DC3545"},children:r.render("Cell")}),r.column.Header==="Nome"&&e.jsx("span",{className:"celula",children:r.render("Cell")}),r.column.Header==="Data de Adição"&&e.jsx("span",{className:"celula",children:r.render("Cell")}),r.column.Header==="Permissões"&&e.jsx("span",{className:"celula",children:r.render("Cell")}),r.column.Header==="Berços Editáveis"&&e.jsx("span",{className:"celula",children:r.render("Cell")})]}))})))})]})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"16px",position:"fixed",bottom:0,right:0},children:[e.jsx(A,{onClick:()=>g(),disabled:!b,children:e.jsx(Q,{sx:{fontSize:"2rem"}})}),e.jsxs("span",{children:["Página"," ",e.jsxs("strong",{children:[R+1," de ",Math.ceil(i.length/10)]})," "]}),e.jsx(A,{onClick:()=>v(),disabled:!f,children:e.jsx(J,{sx:{fontSize:"2rem"}})})]})]})};function te(){const s=[{Header:"Imagem",accessor:"imagem"},{Header:"Nome",accessor:"nome"},{Header:"Data de Adição",accessor:"data"},{Header:"Permissões",accessor:"permissoes"},{Header:"Berços Editáveis",accessor:"bercos"},{Header:"Status",accessor:"status"}],[o,l]=u.useState([{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Guilherme Ferreira dos Reis",data:"09 de Setembro de 2023",permissoes:"View, Add, Edit",bercos:"Todos",status:"Ativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Pedro Elizaldo de Sá Batista",data:"10 de Setembro de 2023",permissoes:"Add, Edit",bercos:"99, 100, 101",status:"Ativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Amanda Carvalho de Souza",data:"11 de Setembro de 2023",permissoes:"Add, Edit",bercos:"102, 103, 104, 105",status:"Ativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Rafael Arouche Ferreira",data:"12 de Setembro de 2023",permissoes:"View",bercos:"Nenhum",status:"Inativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Felipe Gabriel Guimarães",data:"12 de Setembro de 2023",permissoes:"View",bercos:"Nenhum",status:"Ativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"João Lucas Araújo Barroso",data:"12 de Setembro de 2023",permissoes:"View",bercos:"Nenhum",status:"Inativo"},{imagem:"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",nome:"Matheus Rhazek",data:"12 de Setembro de 2023",permissoes:"View",bercos:"Nenhum",status:"Ativo"}]),c=()=>{const a={imagem:"url",nome:"João da Silva",data:"alguma data",permissoes:"alguma permissão",bercos:"algum berço",status:"Inativo"};l(i=>[...i,a])};return e.jsxs("section",{id:"usuarios",children:[e.jsxs("div",{className:"topo",children:[e.jsx("h4",{className:"topo-titulo",children:"Todos (50)"}),e.jsx("span",{onClick:c,children:e.jsx(le,{texto:"Adicionar Usuário",icone:"+"})})]}),e.jsx("div",{className:"tabela",children:e.jsx(ce,{columns:s,data:o})})]})}function de(){const[s,o]=u.useState("Início");return e.jsxs(e.Fragment,{children:[e.jsx(se,{setWhichApp:o}),e.jsxs("div",{id:"atraqui__container",children:[e.jsx(ae,{titulo:s}),s==="Início"&&e.jsx(oe,{}),s==="Navios Atracados"&&e.jsx("h1",{children:"NAVIOS ATRACADOS"}),s==="Fila de Atracação"&&e.jsx("h1",{children:"FILA DE ATRACAÇÃO"}),s==="Usuários"&&e.jsx(te,{}),s==="Requisições de Atracação"&&e.jsx("h1",{children:"REQUISIÇÕES DE ATRACAÇÃO"}),s==="Registro de Navios"&&e.jsx("h1",{children:"REGISTRO DE NAVIOS"}),s==="Ajuda"&&e.jsx("h1",{children:"AJUDA"})]})]})}function me(){return I([{path:"/",element:e.jsx(q,{}),children:[{path:"/",element:e.jsx($,{})},{path:"atraqui",element:e.jsx(de,{})}]}])}const he=me();y.createRoot(document.getElementById("root")).render(e.jsx(C.StrictMode,{children:e.jsx(P,{router:he})}));