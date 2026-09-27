import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./calendar-D00-skTb.js";import{t as r}from"./file-down-DdVgsr_P.js";import{t as i}from"./file-text-B6T7FNc2.js";import{t as a}from"./printer-C1Mhfiys.js";import{h as o,k as s,y as c}from"./index-D8g14uGV.js";import{l}from"./utils-BWnTCRKL.js";import{t as u}from"./date-picker-Ci3KsbuQ.js";var d=e(t(),1),f=s(),p=e=>e!=null&&e!==``&&!isNaN(Number(e));function m(e){let t=Number(e);return isNaN(t)?String(e??``):t.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}function h(e,t,n,r){let{vatNo:i,subtitle:a,dateRange:o,extraFields:s,summary:c}=r,u=t.map(e=>`<th>${l(e.label)}</th>`).join(``),d=t.map(e=>n.some(t=>p(t[e.key]))),f=n.map((e,n)=>{let r=t.map((t,n)=>{let r=e[t.key]??``;r??=``;let i=d[n]?m(r):String(r);return`<td${d[n]?` style="text-align:left;font-variant-numeric:tabular-nums"`:``}>${i}</td>`}).join(``),i=``;if(e.notes&&(i+=`<div class="row-notes">ملاحظات: ${l(e.notes)}</div>`),e.address&&(i+=`<div class="row-notes">العنوان: ${l(e.address)}</div>`),e.items_detail&&(i+=`<div class="row-notes">البيان/الأصناف: ${l(e.items_detail)}</div>`),e.description&&!t.find(e=>e.key===`description`)&&(i+=`<div class="row-notes">الوصف: ${l(e.description)}</div>`),e.custom_values&&typeof e.custom_values==`object`){let t=e.custom_values,n=Object.entries(t).filter(([,e])=>e!==``&&e!=null);n.length&&(i+=`<div class="row-custom">`+n.map(([e,t])=>`<span>${e}: ${t}</span>`).join(` • `)+`</div>`)}return`<tr class="${n%2==0?``:`alt`}"><td style="text-align:center;color:#94a3b8">${n+1}</td>${r}</tr>${i?`<tr class="extra-row"><td colspan="${t.length+1}">${i}</td></tr>`:``}`}).join(``),h=t.map((e,t)=>d[t]?n.reduce((t,n)=>t+(p(n[e.key])?Number(n[e.key]):0),0):null),g=h.some(e=>e!==null)?`<tr class="sum-row"><td style="text-align:center;font-weight:700">Σ</td>${t.map((e,t)=>h[t]===null?`<td></td>`:`<td style="text-align:left;font-variant-numeric:tabular-nums;font-weight:700">${m(h[t])}</td>`).join(``)}</tr>`:``,_=n.length>0?`<tr class="count-row"><td colspan="${t.length+1}">عدد السجلات: ${n.length}</td></tr>`:``,v=o?`<div class="meta-item"><span class="meta-label">الفترة:</span> <span class="meta-value">${o.from} — ${o.to}</span></div>`:``,y=s&&s.length?`<div class="extra-fields">${s.map(e=>`<div class="ef-item"><span class="ef-label">${l(e.label)}:</span> <span class="ef-value">${l(e.value)}</span></div>`).join(``)}</div>`:``,b=c&&c.length?`<div class="summary-section"><div class="summary-title">الإجماليات</div><div class="summary-grid">${c.map(e=>`<div class="summary-item"><span class="summary-label">${l(e.label)}</span><span class="summary-value">${l(e.value)}</span></div>`).join(``)}</div></div>`:``,x=new Date,S=x.toLocaleDateString(`en-GB`),C=x.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`});return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${e}</title>
<style>
@page { margin: 12mm 14mm; }
* { box-sizing: border-box; }
body { font-family: 'Inter', 'Cairo', sans-serif; color: #0F172A; padding: 0; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.report-header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 14px; margin-bottom: 18px; border-bottom: 3px solid #0F172A; }
.brand-block { display: flex; align-items: center; gap: 12px; }
.brand-mark { width: 44px; height: 44px; border-radius: 10px; background: #0F172A; color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 20px; }
.brand-text h1 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; margin: 0 0 2px; color: #0F172A; }
.brand-text .sub { color: #64748b; font-size: 11px; }
.report-meta { text-align: left; font-size: 11px; color: #64748b; line-height: 1.7; }
.report-meta .company { font-weight: 700; font-size: 14px; color: #0F172A; }
.report-title-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding: 10px 16px; background: linear-gradient(90deg, #0F172A, #1e293b); border-radius: 8px; }
.report-title-bar h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 16px; margin: 0; color: #fff; }
.report-title-bar .badge { background: rgba(255,255,255,0.15); color: #fff; padding: 3px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; }
.meta { color: #64748b; font-size: 12px; margin-bottom: 14px; display: flex; gap: 20px; flex-wrap: wrap; }
.meta-item { display: flex; gap: 4px; }
.meta-label { color: #94a3b8; font-weight: 600; }
.meta-value { color: #334155; font-weight: 600; }
.extra-fields { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; padding: 10px 14px; background: #f1f5f9; border-radius: 8px; border: 1px solid #e2e8f0; }
.ef-item { font-size: 11px; }
.ef-label { color: #64748b; font-weight: 600; }
.ef-value { color: #0F172A; font-weight: 600; }
table { width: 100%; border-collapse: collapse; font-size: 11px; }
thead th { background: #0F172A; color: #fff; padding: 9px 10px; text-align: right; font-weight: 600; font-size: 11px; border: 1px solid #0F172A; position: sticky; top: 0; }
thead th:first-child { width: 40px; text-align: center; }
tbody td { padding: 7px 10px; border: 1px solid #cbd5e1; text-align: right; vertical-align: top; }
tbody tr.alt { background: #f8fafc; }
tr.sum-row td { background: #fef3c7; border: 2px solid #0F172A; font-size: 12px; }
tr.count-row td { background: #f1f5f9; border-top: 2px solid #0F172A; font-weight: 700; font-size: 12px; text-align: right; }
tr.extra-row td { padding: 2px 10px 6px; border: 1px solid #cbd5e1; border-top: none; background: #fff; }
.row-notes { font-size: 9px; color: #64748b; padding: 1px 0; }
.row-custom { font-size: 9px; color: #3B82F6; padding: 1px 0; }
.row-custom span { margin-left: 10px; }
.summary-section { margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 10px; border: 1px solid #e2e8f0; }
.summary-title { font-size: 13px; font-weight: 700; color: #0F172A; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid #0F172A; }
.summary-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px; }
.summary-item { display: flex; justify-content: space-between; align-items: center; padding: 6px 12px; background: #fff; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12px; }
.summary-label { color: #64748b; font-weight: 500; }
.summary-value { font-weight: 700; color: #0F172A; font-size: 13px; }
.signatures { margin-top: 36px; display: flex; justify-content: space-between; gap: 40px; }
.sig-box { flex: 1; text-align: center; }
.sig-line { border-top: 1.5px solid #475569; padding-top: 6px; font-size: 11px; color: #475569; font-weight: 600; }
.footer { margin-top: 28px; padding-top: 10px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 10px; display: flex; justify-content: space-between; align-items: center; }
.stamp { display: inline-block; border: 2px solid #16a34a; border-radius: 8px; padding: 4px 14px; color: #16a34a; font-size: 11px; font-weight: 700; }
</style></head><body>
<div class="report-header">
<div class="brand-text">
<h1>${e}</h1>
<div class="sub">${a||``}</div>
</div>
<div class="report-meta">
${i?`<div>الرقم الضريبي: ${i}</div>`:``}
<div>تاريخ الإصدار: ${S}</div>
<div>وقت الإصدار: ${C}</div>
</div>
</div>
<div class="report-title-bar">
<h2>${e}</h2>
<span class="badge">${n.length} سجل</span>
</div>
<div class="meta">
${v}
<div class="meta-item"><span class="meta-label">عدد السجلات:</span> <span class="meta-value">${n.length}</span></div>
<div class="meta-item"><span class="meta-label">عدد الأعمدة:</span> <span class="meta-value">${t.length}</span></div>
</div>
${y}
<table><thead><tr><th>#</th>${u}</tr></thead><tbody>${f||`<tr><td colspan="${t.length+1}" style="text-align:center;color:#94a3b8;padding:24px">لا توجد بيانات</td></tr>`}</tbody>${_?`<tfoot>${g}${_}</tfoot>`:``}</table>
${b}
<div class="signatures">
<div class="sig-box"><div class="sig-line">المُعدّ</div></div>
<div class="sig-box"><div class="sig-line">المراجع</div></div>
<div class="sig-box"><div class="sig-line">المعتمد</div></div>
<div class="sig-box"><div class="sig-line">المحاسب</div></div>
</div>
<div class="footer">
<span>تم إنشاء هذا التقرير آلياً | ${S} ${C}</span>
<span class="stamp">تمت المراجعة</span>
</div>
</body></html>`}function g({title:e,columns:t,rows:s,companyName:l,vatNo:p,size:m=`md`,subtitle:g,extraFields:_,summary:v,dateFilterKey:y}){let[b,x]=(0,d.useState)(!1),{t:S}=o(),[C,w]=(0,d.useState)(``),[T,E]=(0,d.useState)(``),D=y?s.filter(e=>{let t=e[y];if(!t)return!0;let n=typeof t==`string`?t.slice(0,10):``;return!n||!(C&&n<C||T&&n>T)}):s;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`button`,{onClick:()=>x(!0),className:m===`sm`?`btn-ghost px-2.5 py-1.5 text-xs`:`btn-ghost`,"aria-label":S(`printbtn.print`),children:[(0,f.jsx)(a,{className:m===`sm`?`w-3.5 h-3.5`:`w-4 h-4`}),m!==`sm`&&(0,f.jsx)(`span`,{children:S(`printbtn.print`)})]}),b&&(0,f.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in p-4`,onClick:()=>x(!1),children:(0,f.jsxs)(`div`,{className:`card w-full max-w-sm animate-scale-in`,onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800`,children:[(0,f.jsxs)(`h3`,{className:`font-bold text-primary-900 dark:text-slate-50 flex items-center gap-2`,style:{fontFamily:`'Plus Jakarta Sans', sans-serif`},children:[(0,f.jsx)(i,{className:`w-4 h-4 text-accent-600`}),` `,S(`printbtn.dialog_title`).replace(`{title}`,e)]}),(0,f.jsx)(`button`,{onClick:()=>x(!1),className:`w-8 h-8 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800`,children:(0,f.jsx)(c,{className:`w-4 h-4`})})]}),(0,f.jsxs)(`div`,{className:`p-5 space-y-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{className:`label flex items-center gap-1.5`,children:[(0,f.jsx)(n,{className:`w-3.5 h-3.5`}),` `,S(`printbtn.date_range`)]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(u,{value:C,onChange:e=>w(e)}),(0,f.jsx)(u,{value:T,onChange:e=>E(e)})]}),(0,f.jsx)(`p`,{className:`text-xs text-slate-400 mt-1.5`,children:S(`printbtn.date_hint`)})]}),(0,f.jsxs)(`div`,{className:`text-sm text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-xl p-3 space-y-1`,children:[(0,f.jsxs)(`p`,{children:[S(`printbtn.records_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:D.length})]}),(0,f.jsxs)(`p`,{children:[S(`printbtn.cols_count`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:t.length})]}),_&&_.length>0&&(0,f.jsxs)(`p`,{children:[S(`printbtn.extra_fields`),` `,(0,f.jsx)(`strong`,{className:`text-primary-900 dark:text-slate-50`,children:_.length})]})]}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(`button`,{onClick:()=>x(!1),className:`btn-ghost flex-1`,children:S(`printbtn.cancel`)}),(0,f.jsxs)(`button`,{onClick:()=>{let n=h(e,t,D,{companyName:l,vatNo:p,subtitle:g,dateRange:C||T?{from:C||`—`,to:T||`—`}:void 0,extraFields:_,summary:v}),r=document.createElement(`iframe`);r.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;`,r.onload=()=>{let e=r.contentWindow;if(!e){r.parentNode&&document.body.removeChild(r);return}try{e.focus(),e.print()}catch(e){console.error(`Print failed:`,e)}setTimeout(()=>{r.parentNode&&document.body.removeChild(r)},2e3)},r.srcdoc=n,document.body.appendChild(r),x(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(a,{className:`w-4 h-4`}),` `,S(`printbtn.print`)]}),(0,f.jsxs)(`button`,{onClick:()=>{let n=h(e,t,D,{companyName:l,vatNo:p,subtitle:g,dateRange:C||T?{from:C||`—`,to:T||`—`}:void 0,extraFields:_,summary:v}),r=window.open(``,`_blank`);if(!r){alert(S(`printbtn.popup_blocked`));return}r.document.write(n),r.document.close(),setTimeout(()=>{r.focus(),r.print()},500),x(!1)},className:`btn-primary flex-1`,children:[(0,f.jsx)(r,{className:`w-4 h-4`}),` PDF`]})]})]})]})})]})}export{g as t};