import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./calendar-Nj1AHo9U.js";import{t as r}from"./file-down-Dvqxlg2_.js";import{t as i}from"./file-text-fGsyKs4c.js";import{t as a}from"./printer-BII4pFjP.js";import{h as o,k as s,y as c}from"./index-Cc13seny.js";import{l}from"./utils-yRj-gORM.js";import{t as u}from"./date-picker-rO7Gqcpk.js";var d=e(t(),1),f=s(),p=`٠١٢٣٤٥٦٧٨٩`,m=`0123456789`;function h(e){return e.replace(/[٠-٩]/g,e=>String(p.indexOf(e))).replace(/[۰-۹]/g,e=>String(m.indexOf(e)))}function g(e){if(e==null)return null;let t=h(String(e)).trim();if(!t)return null;let n=t.match(/-?\d[\d,.'\u066C\u066B]*/);if(!n)return null;let r=n[0].replace(/['\u066C]/g,``),i=r.split(/[.,]/);r=i.length>2?i.slice(0,-1).join(``)+`.`+i[i.length-1]:r.replace(`,`,`.`);let a=Number(r);return Number.isFinite(a)?a:null}function _(e){if(e==null)return!1;let t=h(String(e)).trim();return t?/^-?\d[\d,']*(\.\d+)?\s*%?$/.test(t)||/^-?\d[\d,']*(\.\d+)?\s*[^\d\s]{1,12}$/.test(t):!1}function v(e,t){let n=t.map(t=>t[e]).filter(e=>e!=null&&String(e).trim()!==``);return n.length?n.every(e=>_(e)):!1}function y(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function b(e,t){return/^(no|number|ref|invoice|id|date|time|total|cash|card|paid|remaining|qty|count|price|amount|tax|discount)$/i.test(e)||/^[-_ ]?(no|date|time|qty|total|cash|card|paid|remaining|price|amount|tax)$/i.test(t.trim())}var x=new Set([`status`,`pay_status`,`payment_status`,`branch`,`branch_name`,`branch_id`,`pay_method`,`payment_method`,`type`,`currency`,`state`]),S=/(status|state|branch|pay.*method|payment.*method|type|currency|حالة|الفرع|طريقة|نوع)/i,C=new Set([`status`,`pay_status`,`payment_status`,`state`]);function w(e,t,n){if(x.has(e)||S.test(t)){let t=new Set(n.map(t=>String(t[e]??``).trim()).filter(Boolean));return t.size>0&&t.size<=Math.max(3,Math.ceil(n.length*.15))}return!1}function T(e){let t=String(e??``).trim().toLowerCase();return t?/(جزئ|معلق|قيد|انتظار|ناقص|متأخر|partial|pending|progress|hold|overdue)/.test(t)?`warn`:/(غير مسدد|غير مسددة|مستحق|فاشل|ملغ|ملغى|مرفوض|عجز|unpaid|fail|cancel|void|reject|reversal)/.test(t)?`bad`:/(مدفوع|مدفوعة|مسدد|مسددة|مكتمل|مؤكدة|ناجح|معتمد|مقفل|paid|approved|closed|complete|confirmed|success)/.test(t)?`ok`:`idle`:`idle`}function E(e){let t=String(e||``).replace(/[^\p{L}\p{N} ]/gu,` `).trim();if(!t)return`•`;let n=t.split(/\s+/).filter(Boolean);return n.length>=2?(n[0][0]+n[1][0]).slice(0,2):t.slice(0,2)}function D(e){let t=Number(e);return isNaN(t)?String(e??``):t.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}function O(e,t,n,r){let{vatNo:i,subtitle:a,dateRange:o,extraFields:s,summary:c,companyName:u}=r,d=t.length,f=t.map(e=>v(e.key,n)),p=t.map(e=>w(e.key,e.label,n)),m=t.map((e,t)=>b(e.key,e.label)||f[t]),h=t.map((e,t)=>{let r=String(e.label).length;for(let t of n){let n=t[e.key];n!=null&&(r=Math.max(r,String(n).length))}return r}),_=d>=7?`size: A4 landscape; margin: 10mm 10mm 12mm;`:`size: A4; margin: 12mm 10mm 14mm;`,x=d>=12?7.6:d>=9?8.2:9,S=t.map((e,t)=>p[t]?7:f[t]?Math.min(16,Math.max(8,h[t]*.85)):Math.min(26,Math.max(10,h[t]*.75))),O=S.reduce((e,t)=>e+t,0)||1,k=3.2,A=S.map(e=>Math.max(4,Number((e/O*96.8).toFixed(3))));if(A.length){let e=Number(k.toFixed(3)),t=Number((100-e-A.reduce((e,t)=>e+t,0)).toFixed(3)),n=0;A.forEach((e,t)=>{e>A[n]&&(n=t)}),A[n]=Number((A[n]+t).toFixed(3))}let j=A.map(e=>`${e.toFixed(3)}%`),M=`${k.toFixed(3)}%`,N=n.map(e=>{let n=[];if(e.items_detail&&n.push(`<span class="sub-k">البيان / الأصناف</span>${y(e.items_detail)}`),e.notes&&n.push(`<span class="sub-k">ملاحظات</span>${y(e.notes)}`),e.address&&n.push(`<span class="sub-k">العنوان</span>${y(e.address)}`),e.description&&!t.find(e=>e.key===`description`)&&n.push(`<span class="sub-k">الوصف</span>${y(e.description)}`),e.custom_values&&typeof e.custom_values==`object`){let t=e.custom_values,r=Object.entries(t).filter(([,e])=>e!==``&&e!=null);r.length&&n.push(r.map(([e,t])=>`<span class="sub-k">${e}</span>${l(String(t))}`).join(``))}return n.length?`<div class="cell-sub">${n.join(``)}</div>`:``}),P=(e,t)=>{let n=e[t]??``;return n??=``,String(n)},F=t.map(()=>Array(n.length).fill(null));p.forEach((e,r)=>{if(!e)return;let i=0,a=e=>P(n[e],t[r].key).trim()!==``&&P(n[e],t[r].key).trim()===P(n[i],t[r].key).trim();for(let e=1;e<=n.length;e++)if(e===n.length||!a(e)){let t=e-i;t>1&&(F[r][i]=t),i=e}});let I=t.map(()=>Array(n.length).fill(!1));p.forEach((e,t)=>{if(e)for(let e=0;e<n.length;e++){let n=F[t][e];if(n&&n>1)for(let r=1;r<n;r++)I[t][e+r]=!0}});let L=n.map((e,n)=>{for(let e=0;e<d;e++)if(!I[e][n]&&!f[e]&&!C.has(t[e].key))return e;for(let e=d-1;e>=0;e--)if(!I[e][n])return e;return-1}),R=t.map((e,t)=>`<th class="${f[t]?`num`:``}" style="width:${j[t]}">${y(e.label)}</th>`).join(``),z=n.map((e,n)=>{let r=t.map((t,r)=>{if(I[r][n])return``;let i=P(e,t.key),a=F[r][n],o=!!(a&&a>1),s=C.has(t.key)?`<span class="pill tone-${T(i)}">${y(i)}</span>`:null,c=[f[r]?`num`:m[r]?`nw`:``,o?`merged`:``,s?`cell-pill`:``].filter(Boolean).join(` `),l=o?` rowspan="${a}"`:``,u=r===L[n]?N[n]:``;return`<td${c?` class="${c}"`:``}${l}>${s??y(i)}${u}</td>`}).join(``);return`<tr class="${n%2==0?`even`:`odd`}"><td class="rownum">${n+1}</td>${r}</tr>`}).join(``),B=t.map((e,t)=>f[t]?n.reduce((t,n)=>t+(g(n[e.key])??0),0):null),V=B.some(e=>e!==null)?`<tr class="sum-row"><td class="rownum">Σ</td>${B.map(e=>e===null?`<td></td>`:`<td class="num">${D(e)}</td>`).join(``)}</tr>`:``;n.length;let H=o?`<div class="meta-item"><span class="meta-label">الفترة</span><span class="meta-sep">:</span><span class="meta-value num">${y(o.from)} — ${y(o.to)}</span></div>`:``,U=s&&s.length?`<div class="extra-fields">${s.map(e=>`<div class="ef-item"><span class="ef-label">${y(e.label)}</span><span class="meta-sep">:</span><span class="ef-value num">${y(e.value)}</span></div>`).join(``)}</div>`:``,W=c&&c.length?`<div class="kpis">${c.map((e,t)=>`<div class="kpi kpi-${T(e.label)}">
      <div class="kpi-label">${y(e.label)}</div>
      <div class="kpi-value num">${y(e.value)}</div>
    </div>`).join(``)}</div>`:``,G=new Date,K=G.toLocaleDateString(`en-GB`),q=G.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`}),J=`<tr><td colspan="${d+1}" class="empty">لا توجد بيانات مطابقة</td></tr>`;return`<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>${y(e)}</title>
<style>
@page { ${_} }
* { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
html, body { margin: 0; padding: 0; background: #fff; }
body {
  font-family: 'Cairo', 'Inter', 'Segoe UI', Tahoma, sans-serif;
  color: #0F172A; font-size: ${x}pt; line-height: 1.5;
  font-variant-numeric: tabular-nums;
}
h1, h2, .brand-name, .kpi-value, thead th { font-family: 'Plus Jakarta Sans', 'Cairo', sans-serif; }
.num { direction: ltr; unicode-bidi: isolate; text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
.nw { white-space: nowrap; }
.rownum { width: 3.2%; text-align: center; color: #94A3B8; font-size: 0.85em; direction: ltr; }

/* ── masthead: brand block + document meta ───────────────────────── */
.masthead { display: flex; justify-content: space-between; align-items: stretch; gap: 14px;
  padding-bottom: 11px; margin-bottom: 12px; border-bottom: 2px solid #E2E8F0; }
.brand { display: flex; align-items: flex-start; gap: 10px; min-width: 0; }
.brand-mark { width: 42px; height: 42px; flex: 0 0 42px; border-radius: 11px;
  background: linear-gradient(140deg, #2563EB, #1E40AF); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 16px; letter-spacing: -0.5px; }
.brand-text { min-width: 0; }
.brand-name { font-size: 12.5pt; font-weight: 800; margin: 0 0 1px; letter-spacing: -0.2px; }
.brand-sub { color: #64748B; font-size: 0.9em; }
.mh-meta { text-align: left; color: #475569; font-size: 0.85em; line-height: 1.7; white-space: nowrap; }
.mh-meta .k { color: #94A3B8; }
.mh-meta .v { color: #0F172A; font-weight: 700; }

/* ── title bar ──────────────────────────────────────────────────── */
.report-title-bar { display: flex; justify-content: space-between; align-items: center;
  background: linear-gradient(90deg, #1E293B, #0F172A); color: #fff;
  border-inline-start: 5px solid #2563EB;
  border-radius: 8px; padding: 8px 13px; margin-bottom: 11px; }
.report-title-bar h2 { font-size: 12pt; margin: 0; font-weight: 700; letter-spacing: -0.2px; }
.report-title-bar .badge { background: rgba(37, 99, 235, 0.9); color: #fff; padding: 2px 12px;
  border-radius: 20px; font-size: 0.85em; font-weight: 700; direction: ltr; unicode-bidi: isolate; }

/* ── KPI strip: the numbers a reader looks for first ─────────────── */
.kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 7px; margin-bottom: 11px; }
.kpi { position: relative; padding: 7px 11px 8px; background: #F8FAFC;
  border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; }
.kpi::before { content: ''; position: absolute; inset-block: 0; inset-inline-start: 0; width: 3px; background: #2563EB; }
.kpi-label { color: #64748B; font-size: 0.85em; font-weight: 600; margin-bottom: 1px; }
.kpi-value { font-size: 1.28em; font-weight: 800; color: #0F172A; letter-spacing: -0.3px; }
.kpi-ok::before { background: #10B981; }
.kpi-warn::before { background: #F59E0B; }
.kpi-bad::before { background: #EF4444; }

/* ── meta strip ─────────────────────────────────────────────────── */
.meta { display: flex; gap: 6px 20px; flex-wrap: wrap; font-size: 0.88em; margin-bottom: 10px; color: #334155;
  padding: 6px 11px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 7px; }
.meta-item { display: flex; align-items: baseline; gap: 3px; }
.meta-label { color: #94A3B8; font-weight: 600; }
.meta-sep { color: #CBD5E1; }
.meta-value { color: #0F172A; font-weight: 700; }
.extra-fields { display: flex; flex-wrap: wrap; gap: 5px 18px; margin-bottom: 10px;
  padding: 6px 11px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 7px; font-size: 0.88em; }
.ef-item { display: flex; align-items: baseline; gap: 3px; }
.ef-label { color: #64748B; font-weight: 600; }
.ef-value { color: #0F172A; font-weight: 700; }

/* ── the table ──────────────────────────────────────────────────── */
/* A visible outer frame plus a solid grid: the report must read as a bordered
   sheet, not as content that runs off the edge of the paper. */
table { width: 100%; max-width: 100%; border-collapse: collapse; table-layout: fixed;
  border: 1.2px solid #64748B; }
thead { display: table-header-group; }
tfoot { display: table-footer-group; }
thead th { background: #1E293B; color: #fff; padding: 6px 5px; font-weight: 700; font-size: 0.94em;
  border: 0.8px solid #1E293B; border-bottom: 2.5px solid #2563EB; text-align: right; line-height: 1.3; }
tbody td { padding: 4px 5px; border: 0.8px solid #CBD5E1; text-align: right; vertical-align: middle;
  word-break: normal; overflow-wrap: break-word; }
tbody tr.odd { background: #F8FAFC; }
tbody tr { break-inside: avoid; page-break-inside: avoid; }
tbody tr:hover { background: transparent; }
td.merged { vertical-align: middle; text-align: center; background: #F1F5F9; }
td.cell-pill { text-align: center; }

/* ── status pills ──────────────────────────────────────────────── */
.pill { display: inline-block; padding: 1px 9px; border-radius: 20px; font-size: 0.86em;
  font-weight: 700; line-height: 1.5; white-space: nowrap; }
.tone-ok { background: #D1FAE5; color: #065F46; border: 1px solid #A7F3D0; }
.tone-warn { background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
.tone-bad { background: #FEE2E2; color: #991B1B; border: 1px solid #FECACA; }
.tone-idle { background: #F1F5F9; color: #475569; border: 1px solid #E2E8F0; }

/* ── per-row detail, on the same line as its record ──────────────── */
.cell-sub { font-size: 0.8em; color: #64748B; line-height: 1.45; margin-top: 1px;
  border-top: 1px dotted #CBD5E1; padding-top: 1px; }
.cell-sub span { display: block; }
.sub-k { display: inline-block; background: #DBEAFE; color: #1E40AF; border-radius: 3px;
  padding: 0 5px; margin-inline-end: 5px; font-weight: 700; }

/* ── totals ────────────────────────────────────────────────────── */
tr.sum-row td { background: #EFF6FF !important; border: 0.8px solid #BFDBFE;
  border-top: 2.5px solid #2563EB; font-weight: 800; font-size: 1.04em; color: #1E3A8A; }
tr.sum-row td.rownum { color: #2563EB; }
td.empty { text-align: center; color: #94A3B8; padding: 26px 0; }

/* ── closing ───────────────────────────────────────────────────── */
.signatures { margin-top: 26px; display: flex; justify-content: space-between; gap: 30px; break-inside: avoid; }
.sig-box { flex: 1; text-align: center; }
.sig-line { border-top: 1.5px solid #CBD5E1; padding-top: 5px; font-size: 0.9em; color: #64748B; font-weight: 600; }

.footer { position: fixed; bottom: 0; inset-inline: 0; margin-top: 20px; padding-top: 5px;
  border-top: 1px solid #E2E8F0; color: #94A3B8; font-size: 0.8em;
  display: flex; justify-content: space-between; align-items: center; }
.footer .brand-foot { color: #2563EB; font-weight: 700; }
.footer .pagenum::after { content: counter(page); font-weight: 800; color: #475569; direction: ltr; unicode-bidi: isolate; }
</style></head><body>
<div class="masthead">
  <div class="brand">
    <div class="brand-mark">${y(E(u||e))}</div>
    <div class="brand-text">
      <div class="brand-name">${y(u||e)}</div>
      ${a?`<div class="brand-sub">${y(a)}</div>`:``}
    </div>
  </div>
  <div class="mh-meta">
    ${i?`<div><span class="k">الرقم الضريبي</span><span class="meta-sep">:</span><span class="v num">${y(i)}</span></div>`:``}
    <div><span class="k">تاريخ الإصدار</span><span class="meta-sep">:</span><span class="v num">${K}</span></div>
    <div><span class="k">وقت الإصدار</span><span class="meta-sep">:</span><span class="v num">${q}</span></div>
  </div>
</div>
<div class="report-title-bar">
  <h2>${y(e)}</h2>
  <span class="badge">${n.length} سجل</span>
</div>
${W}
<div class="meta">
  ${H}
  <div class="meta-item"><span class="meta-label">عدد السجلات</span><span class="meta-sep">:</span><span class="meta-value num">${n.length}</span></div>
  <div class="meta-item"><span class="meta-label">عدد الأعمدة</span><span class="meta-sep">:</span><span class="meta-value num">${d}</span></div>
</div>
${U}
<table>
  <colgroup><col style="width:${M}" />${t.map((e,t)=>`<col style="width:${j[t]}" />`).join(``)}</colgroup>
  <thead><tr><th class="rownum">#</th>${R}</tr></thead>
  <tbody>${z||J}</tbody>
  ${V?`<tfoot>${V}</tfoot>`:``}
</table>
<div class="signatures">
  <div class="sig-box"><div class="sig-line">المُعدّ</div></div>
  <div class="sig-box"><div class="sig-line">المراجع</div></div>
  <div class="sig-box"><div class="sig-line">المعتمد</div></div>
  <div class="sig-box"><div class="sig-line">المحاسب</div></div>
</div>
<div class="footer">
  <span><span class="brand-foot">${y(u||``)}</span> — تم إنشاء هذا التقرير آلياً</span>
  <span class="pagenum"></span>
</div>
</body></html>`}function k({title:e,columns:t,rows:s,companyName:l,vatNo:p,size:m=`md`,subtitle:h,extraFields:g,summary:_,dateFilterKey:v}){let[y,b]=(0,d.useState)(!1),{t:x}=o(),[S,C]=(0,d.useState)(``),[w,T]=(0,d.useState)(``),E=v?s.filter(e=>{let t=e[v];if(!t)return!0;let n=typeof t==`string`?t.slice(0,10):``;return!n||!(S&&n<S||w&&n>w)}):s;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`button`,{onClick:()=>b(!0),className:m===`sm`?`btn-ghost px-2.5 py-1.5 text-xs`:`btn-ghost`,"aria-label":x(`printbtn.print`),children:[(0,f.jsx)(a,{className:m===`sm`?`w-3.5 h-3.5`:`w-4 h-4`}),m!==`sm`&&(0,f.jsx)(`span`,{children:x(`printbtn.print`)})]}),y&&(0,f.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in p-4`,onClick:()=>b(!1),children:(0,f.jsxs)(`div`,{className:`card w-full max-w-sm animate-scale-in`,onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800`,children:[(0,f.jsxs)(`h3`,{className:`font-bold text-primary-900 dark:text-slate-50 flex items-center gap-2`,style:{fontFamily:`'Plus Jakarta Sans', sans-serif`},children:[(0,f.jsx)(i,{className:`w-4 h-4 text-accent-600`}),` `,x(`printbtn.dialog_title`).replace(`{title}`,e)]}),(0,f.jsx)(`button`,{onClick:()=>b(!1),className:`w-8 h-8 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800`,children:(0,f.jsx)(c,{className:`w-4 h-4`})})]}),(0,f.jsxs)(`div`,{className:`p-5 space-y-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{className:`label flex items-center gap-1.5`,children:[(0,f.jsx)(n,{className:`w-3.5 h-3.5`}),` `,x(`printbtn.date_range`)]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(u,{value:S,onChange:e=>C(e)}),(0,f.jsx)(u,{value:w,onChange:e=>T(e)})]}),(0,f.jsx)(`p`,{className:`text-xs text-slate-400 mt-1.5`,children:x(`printbtn.date_hint`)})]}),(0,f.jsxs)(`div`,{className:`text-sm text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-xl p-3 space-y-1`,children:[(0,f.jsxs)(`p`,{children:[x(`printbtn.records_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:E.length})]}),(0,f.jsxs)(`p`,{children:[x(`printbtn.cols_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:t.length})]}),g&&g.length>0&&(0,f.jsxs)(`p`,{children:[x(`printbtn.extra_fields`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:g.length})]})]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(`button`,{onClick:()=>b(!1),className:`btn-ghost flex-1`,children:x(`printbtn.cancel`)}),(0,f.jsxs)(`button`,{onClick:()=>{let n=O(e,t,E,{companyName:l,vatNo:p,subtitle:h,dateRange:S||w?{from:S||`—`,to:w||`—`}:void 0,extraFields:g,summary:_}),r=document.createElement(`iframe`);r.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;`,r.onload=()=>{let e=r.contentWindow;if(!e){r.parentNode&&document.body.removeChild(r);return}try{e.focus(),e.print()}catch(e){console.error(`Print failed:`,e)}setTimeout(()=>{r.parentNode&&document.body.removeChild(r)},2e3)},r.srcdoc=n,document.body.appendChild(r),b(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(a,{className:`w-4 h-4`}),` `,x(`printbtn.print`)]}),(0,f.jsxs)(`button`,{onClick:()=>{let n=O(e,t,E,{companyName:l,vatNo:p,subtitle:h,dateRange:S||w?{from:S||`—`,to:w||`—`}:void 0,extraFields:g,summary:_}),r=window.open(``,`_blank`);if(!r){alert(x(`printbtn.popup_blocked`));return}r.document.write(n),r.document.close(),setTimeout(()=>{r.focus(),r.print()},500),b(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(r,{className:`w-4 h-4`}),` PDF`]})]})]})]})})]})}export{k as t};