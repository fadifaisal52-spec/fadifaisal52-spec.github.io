import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./calendar-BdE_tpcL.js";import{t as r}from"./file-down-Ck3mKyhQ.js";import{t as i}from"./file-text-Co_wOGXb.js";import{t as a}from"./printer-Di7SiVV0.js";import{h as o,k as s,y as c}from"./index-C3VZStBx.js";import{l}from"./utils-QgooBxvl.js";import{t as u}from"./date-picker-Bbs04pf-.js";var d=e(t(),1),f=s(),p=`٠١٢٣٤٥٦٧٨٩`,m=`0123456789`;function h(e){return e.replace(/[٠-٩]/g,e=>String(p.indexOf(e))).replace(/[۰-۹]/g,e=>String(m.indexOf(e)))}function g(e){if(e==null)return null;let t=h(String(e)).trim();if(!t)return null;let n=t.match(/-?\d[\d,.'\u066C\u066B]*/);if(!n)return null;let r=n[0].replace(/['\u066C]/g,``),i=r.split(/[.,]/);r=i.length>2?i.slice(0,-1).join(``)+`.`+i[i.length-1]:r.replace(`,`,`.`);let a=Number(r);return Number.isFinite(a)?a:null}function _(e){if(e==null)return!1;let t=h(String(e)).trim();return t?/^-?\d[\d,']*(\.\d+)?\s*%?$/.test(t)||/^-?\d[\d,']*(\.\d+)?\s*[^\d\s]{1,12}$/.test(t):!1}function v(e,t){let n=t.map(t=>t[e]).filter(e=>e!=null&&String(e).trim()!==``);return n.length?n.every(e=>_(e)):!1}function y(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function b(e,t){return/^(no|number|ref|invoice|id|date|time|total|cash|card|paid|remaining|qty|count|price|amount|tax|discount)$/i.test(e)||/^[-_ ]?(no|date|time|qty|total|cash|card|paid|remaining|price|amount|tax)$/i.test(t.trim())}var x=new Set([`status`,`pay_status`,`payment_status`,`branch`,`branch_name`,`branch_id`,`pay_method`,`payment_method`,`type`,`currency`,`state`]),S=/(status|state|branch|pay.*method|payment.*method|type|currency|حالة|الفرع|طريقة|نوع)/i,C=/^(items|items_detail|description|statement|details|بيان|الأصناف|الوصف)$/i;function w(e){let t=[];if(e.items_detail&&t.push(`<span class="sub-k">البيان / الأصناف</span>${y(e.items_detail)}`),e.notes&&t.push(`<span class="sub-k">ملاحظات</span>${y(e.notes)}`),e.address&&t.push(`<span class="sub-k">العنوان</span>${y(e.address)}`),e.description&&!C.test(String(e.description||``))&&t.push(`<span class="sub-k">الوصف</span>${y(e.description)}`),e.custom_values&&typeof e.custom_values==`object`){let n=Object.entries(e.custom_values).filter(([,e])=>e!==``&&e!=null);n.length&&t.push(n.map(([e,t])=>`<span class="sub-k">${e}</span>${l(String(t))}`).join(` `))}return t.length?`<div class="cell-sub">${t.join(``)}</div>`:``}var T=new Set([`status`,`pay_status`,`payment_status`,`state`]);function E(e,t){return x.has(e)||S.test(t)}function D(e){let t=String(e??``).trim().toLowerCase();return t?/(جزئ|معلق|قيد|انتظار|ناقص|متأخر|partial|pending|progress|hold|overdue)/.test(t)?`warn`:/(غير مسدد|غير مسددة|مستحق|فاشل|ملغ|ملغى|مرفوض|عجز|unpaid|fail|cancel|void|reject|reversal)/.test(t)?`bad`:/(مدفوع|مدفوعة|مسدد|مسددة|مكتمل|مؤكدة|ناجح|معتمد|مقفل|paid|approved|closed|complete|confirmed|success)/.test(t)?`ok`:`idle`:`idle`}function O(e){let t=String(e||``).replace(/[^\p{L}\p{N} ]/gu,` `).trim();if(!t)return`•`;let n=t.split(/\s+/).filter(Boolean);return n.length>=2?(n[0][0]+n[1][0]).slice(0,2):t.slice(0,2)}function k(e){let t=Number(e);return isNaN(t)?String(e??``):t.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}function A(e,t,n,r){let{vatNo:i,subtitle:a,dateRange:o,extraFields:s,summary:c,companyName:l}=r,u=t.length,d=t.map(e=>v(e.key,n)),f=t.map((e,t)=>b(e.key,e.label)||d[t]),p=t.map((e,t)=>{let r=String(e.label).length;for(let t of n){let n=t[e.key];n!=null&&(r=Math.max(r,String(n).length))}return r}),m=u>=7?`size: A4 landscape; margin: 10mm 10mm 12mm;`:`size: A4; margin: 12mm 10mm 14mm;`,h=u>=12?7.6:u>=9?8.2:9,_=t.map((e,t)=>E(e.key,e.label)?7:d[t]?Math.min(16,Math.max(8,p[t]*.85)):Math.min(26,Math.max(10,p[t]*.75))),x=_.reduce((e,t)=>e+t,0)||1,S=3.2,C=_.map(e=>Math.max(4,Number((e/x*96.8).toFixed(3))));if(C.length){let e=Number(S.toFixed(3)),t=Number((100-e-C.reduce((e,t)=>e+t,0)).toFixed(3)),n=0;C.forEach((e,t)=>{e>C[n]&&(n=t)}),C[n]=Number((C[n]+t).toFixed(3))}let A=C.map(e=>`${e.toFixed(3)}%`),j=`${S.toFixed(3)}%`,M=n.map(e=>w(e)),N=(e,t)=>{let n=e[t]??``;return n??=``,String(n)},P=t.map((e,t)=>`<th class="${d[t]?`num`:``}" style="width:${A[t]}">${y(e.label)}</th>`).join(``),F=n.length>40?`dense`:n.length>0&&n.length<=3?`roomy`:`compact`,I=n.map((e,n)=>{let r=t.map((t,n)=>{let r=N(e,t.key),i=T.has(t.key)?`<span class="pill tone-${D(r)}">${y(r)}</span>`:null,a=[d[n]?`num`:f[n]?`nw`:``,i?`cell-pill`:``].filter(Boolean).join(` `);return`<td${a?` class="${a}"`:``}>${i??y(r)}</td>`}).join(``),i=n%2==0?`even`:`odd`;return`<tbody class="record ${i}">${`<tr class="${i}"><td class="rownum">${n+1}</td>${r}</tr>`}${M[n]?`<tr class="detail-row ${i}"><td class="rownum sub-num">${n+1}</td><td class="detail-cell" colspan="${u}">${M[n]}</td></tr>`:``}</tbody>`}).join(``),L=t.map((e,t)=>d[t]?n.reduce((t,n)=>t+(g(n[e.key])??0),0):null),R=L.some(e=>e!==null)?`<tr class="sum-row"><td class="rownum">Σ</td>${L.map(e=>e===null?`<td></td>`:`<td class="num">${k(e)}</td>`).join(``)}</tr>`:``;n.length;let z=o?`<div class="meta-item"><span class="meta-label">الفترة</span><span class="meta-sep">:</span><span class="meta-value num">${y(o.from)} — ${y(o.to)}</span></div>`:``,B=s&&s.length?`<div class="extra-fields">${s.map(e=>`<div class="ef-item"><span class="ef-label">${y(e.label)}</span><span class="meta-sep">:</span><span class="ef-value num">${y(e.value)}</span></div>`).join(``)}</div>`:``,V=c&&c.length?`<div class="kpis">${c.map((e,t)=>`<div class="kpi kpi-${D(e.label)}">
      <div class="kpi-label">${y(e.label)}</div>
      <div class="kpi-value num">${y(e.value)}</div>
    </div>`).join(``)}</div>`:``,H=new Date,U=H.toLocaleDateString(`en-GB`),W=H.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`}),G=`<tr><td colspan="${u+1}" class="empty">لا توجد بيانات مطابقة</td></tr>`;return`<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>${y(e)}</title>
<style>
@page { ${m} }
* { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
html, body { margin: 0; padding: 0; background: #fff; }
body {
  font-family: 'Cairo', 'Inter', 'Segoe UI', Tahoma, sans-serif;
  color: #0F172A; font-size: ${h}pt; line-height: 1.5;
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
tbody.record { break-inside: avoid; page-break-inside: avoid; }
tbody tr:hover { background: transparent; }
td.cell-pill { text-align: center; }

/* ── density: one page carries well over fifteen records ──────────── */
/* Only the rhythm changes — never the column widths, which must stay at 100%. */
.density-compact tbody td { padding: 3px 5px; line-height: 1.4; }
.density-compact thead th { padding: 5px 5px; }
.density-roomy thead th { padding: 12px 8px; font-size: 1.06em; }
.density-roomy tbody td { padding: 16px 10px; font-size: 1.14em; line-height: 1.8; }
.density-roomy td.rownum { font-size: 1.1em; }
.density-roomy tr.detail-row td { padding: 13px 11px 14px; font-size: 1em; line-height: 1.75; }
.density-roomy .kpi { padding: 11px 14px 12px; }
.density-roomy .kpi-value { font-size: 1.4em; }
.density-roomy .meta, .density-roomy .extra-fields { padding: 9px 13px; font-size: 0.95em; }
.density-roomy .signatures { margin-top: 40px; }

/* Long reports: every pixel of row height is a record that fits on the sheet. */
.density-dense tbody td { padding: 2px 4px; font-size: 0.94em; line-height: 1.28; }
.density-dense thead th { padding: 4px 4px; font-size: 0.9em; }
.density-dense td.rownum { font-size: 0.86em; }
.density-dense tr.detail-row td { padding: 1px 5px 2px; font-size: 0.88em; line-height: 1.3; }
.density-dense tfoot tr.sum-row td { padding: 3px 4px; }
.density-dense .masthead { margin-bottom: 6px; }
.density-dense .kpis { gap: 5px; margin-bottom: 7px; }
.density-dense .kpi { padding: 4px 8px 5px; border-radius: 6px; }
.density-dense .kpi-value { font-size: 1.12em; }
.density-dense .meta, .density-dense .extra-fields { padding: 4px 9px; margin-bottom: 6px; }
.density-dense .report-title-bar { margin-bottom: 6px; }
.density-dense .signatures { margin-top: 14px; }
.density-dense .footer { margin-top: 10px; padding-top: 5px; }

/* ── status pills ──────────────────────────────────────────────── */
.pill { display: inline-block; padding: 1px 9px; border-radius: 20px; font-size: 0.86em;
  font-weight: 700; line-height: 1.5; white-space: nowrap; }
.tone-ok { background: #D1FAE5; color: #065F46; border: 1px solid #A7F3D0; }
.tone-warn { background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
.tone-bad { background: #FEE2E2; color: #991B1B; border: 1px solid #FECACA; }
.tone-idle { background: #F1F5F9; color: #475569; border: 1px solid #E2E8F0; }

/* ── the statement: a full-width line under its own record ───────── */
tr.detail-row td { padding: 3px 6px 4px; border: none; border-bottom: 1px solid #E2E8F0;
  background: #FCFDFE; vertical-align: top; }
tr.detail-row.even td { background: #F8FAFC; }
tr.detail-row.odd td { background: #F1F5F9; }
/* no rule between the record and its statement, so the two read as one block */
tr:not(.detail-row) + tr.detail-row td { border-top: none; }
td.sub-num { color: #CBD5E1; font-size: 0.8em; }
.cell-sub { font-size: 0.82em; color: #475569; line-height: 1.55; max-width: 100%; }
/* The customer context line must never wrap: a wrapped extra line multiplied by
   every row is what pushed a landscape sheet down to six records per page. */
td .cell-sub { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cell-sub span { display: block; margin-bottom: 1px; }
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
</style></head><body class="density-${F}">
<div class="masthead">
  <div class="brand">
    <div class="brand-mark">${y(O(l||e))}</div>
    <div class="brand-text">
      <div class="brand-name">${y(l||e)}</div>
      ${a?`<div class="brand-sub">${y(a)}</div>`:``}
    </div>
  </div>
  <div class="mh-meta">
    ${i?`<div><span class="k">الرقم الضريبي</span><span class="meta-sep">:</span><span class="v num">${y(i)}</span></div>`:``}
    <div><span class="k">تاريخ الإصدار</span><span class="meta-sep">:</span><span class="v num">${U}</span></div>
    <div><span class="k">وقت الإصدار</span><span class="meta-sep">:</span><span class="v num">${W}</span></div>
  </div>
</div>
<div class="report-title-bar">
  <h2>${y(e)}</h2>
  <span class="badge">${n.length} سجل</span>
</div>
${V}
<div class="meta">
  ${z}
  <div class="meta-item"><span class="meta-label">عدد السجلات</span><span class="meta-sep">:</span><span class="meta-value num">${n.length}</span></div>
  <div class="meta-item"><span class="meta-label">عدد الأعمدة</span><span class="meta-sep">:</span><span class="meta-value num">${u}</span></div>
</div>
${B}
<table>
  <colgroup><col style="width:${j}" />${t.map((e,t)=>`<col style="width:${A[t]}" />`).join(``)}</colgroup>
  <thead><tr><th class="rownum">#</th>${P}</tr></thead>
  ${I||`<tbody>${G}</tbody>`}
  ${R?`<tfoot>${R}</tfoot>`:``}
</table>
<div class="signatures">
  <div class="sig-box"><div class="sig-line">المُعدّ</div></div>
  <div class="sig-box"><div class="sig-line">المراجع</div></div>
  <div class="sig-box"><div class="sig-line">المعتمد</div></div>
  <div class="sig-box"><div class="sig-line">المحاسب</div></div>
</div>
<div class="footer">
  <span><span class="brand-foot">${y(l||``)}</span> — تم إنشاء هذا التقرير آلياً</span>
  <span class="pagenum"></span>
</div>
</body></html>`}function j({title:e,columns:t,rows:s,companyName:l,vatNo:p,size:m=`md`,subtitle:h,extraFields:g,summary:_,dateFilterKey:v}){let[y,b]=(0,d.useState)(!1),{t:x}=o(),[S,C]=(0,d.useState)(``),[w,T]=(0,d.useState)(``),E=v?s.filter(e=>{let t=e[v];if(!t)return!0;let n=typeof t==`string`?t.slice(0,10):``;return!n||!(S&&n<S||w&&n>w)}):s;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`button`,{onClick:()=>b(!0),className:m===`sm`?`btn-ghost px-2.5 py-1.5 text-xs`:`btn-ghost`,"aria-label":x(`printbtn.print`),children:[(0,f.jsx)(a,{className:m===`sm`?`w-3.5 h-3.5`:`w-4 h-4`}),m!==`sm`&&(0,f.jsx)(`span`,{children:x(`printbtn.print`)})]}),y&&(0,f.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in p-4`,onClick:()=>b(!1),children:(0,f.jsxs)(`div`,{className:`card w-full max-w-sm animate-scale-in`,onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800`,children:[(0,f.jsxs)(`h3`,{className:`font-bold text-primary-900 dark:text-slate-50 flex items-center gap-2`,style:{fontFamily:`'Plus Jakarta Sans', sans-serif`},children:[(0,f.jsx)(i,{className:`w-4 h-4 text-accent-600`}),` `,x(`printbtn.dialog_title`).replace(`{title}`,e)]}),(0,f.jsx)(`button`,{onClick:()=>b(!1),className:`w-8 h-8 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800`,children:(0,f.jsx)(c,{className:`w-4 h-4`})})]}),(0,f.jsxs)(`div`,{className:`p-5 space-y-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{className:`label flex items-center gap-1.5`,children:[(0,f.jsx)(n,{className:`w-3.5 h-3.5`}),` `,x(`printbtn.date_range`)]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(u,{value:S,onChange:e=>C(e)}),(0,f.jsx)(u,{value:w,onChange:e=>T(e)})]}),(0,f.jsx)(`p`,{className:`text-xs text-slate-400 mt-1.5`,children:x(`printbtn.date_hint`)})]}),(0,f.jsxs)(`div`,{className:`text-sm text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-xl p-3 space-y-1`,children:[(0,f.jsxs)(`p`,{children:[x(`printbtn.records_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:E.length})]}),(0,f.jsxs)(`p`,{children:[x(`printbtn.cols_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:t.length})]}),g&&g.length>0&&(0,f.jsxs)(`p`,{children:[x(`printbtn.extra_fields`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:g.length})]})]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(`button`,{onClick:()=>b(!1),className:`btn-ghost flex-1`,children:x(`printbtn.cancel`)}),(0,f.jsxs)(`button`,{onClick:()=>{let n=A(e,t,E,{companyName:l,vatNo:p,subtitle:h,dateRange:S||w?{from:S||`—`,to:w||`—`}:void 0,extraFields:g,summary:_}),r=document.createElement(`iframe`);r.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;`,r.onload=()=>{let e=r.contentWindow;if(!e){r.parentNode&&document.body.removeChild(r);return}try{e.focus(),e.print()}catch(e){console.error(`Print failed:`,e)}setTimeout(()=>{r.parentNode&&document.body.removeChild(r)},2e3)},r.srcdoc=n,document.body.appendChild(r),b(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(a,{className:`w-4 h-4`}),` `,x(`printbtn.print`)]}),(0,f.jsxs)(`button`,{onClick:()=>{let n=A(e,t,E,{companyName:l,vatNo:p,subtitle:h,dateRange:S||w?{from:S||`—`,to:w||`—`}:void 0,extraFields:g,summary:_}),r=window.open(``,`_blank`);if(!r){alert(x(`printbtn.popup_blocked`));return}r.document.write(n),r.document.close(),setTimeout(()=>{r.focus(),r.print()},500),b(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(r,{className:`w-4 h-4`}),` PDF`]})]})]})]})})]})}export{j as t};