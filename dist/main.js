(()=>{const e=[];function t(t){let n={name:t,active:!1,addToProjects:function(){e.push(n)}};return n}function n(e){let t=document.getElementById("project-list");for(;t.firstChild;)t.removeChild(t.lastChild);e.forEach((e=>{projectDiv=document.createElement("div"),projectDiv.textContent=e.name,t.appendChild(projectDiv)}))}t("general").addToProjects(),n(e);const o=document.getElementById("project-input");document.getElementById("add-project").addEventListener("click",(function(){t(o.value).addToProjects(),n(e),o.value=""}))})();
//# sourceMappingURL=main.js.map