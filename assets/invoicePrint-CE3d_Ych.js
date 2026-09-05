import{r as e}from"./rolldown-runtime-hePW80VL.js";import{n as t,t as n}from"./jsx-runtime-DE3RlOCf.js";import{t as r}from"./supabase-DJ6hpQ2V.js";import{t as i}from"./check-ywTr2UK0.js";import{t as a}from"./chevron-down-BWhCSfq9.js";import{t as o}from"./plus-DPfq4jFJ.js";import{t as s}from"./search-D1qQq2Eb.js";import{t as c}from"./truck-BLn56NCf.js";import{t as l}from"./user-CDnJwOiM.js";import{a as u,r as d}from"./utils-CfsB92wt.js";import{t as f}from"./barcode-BHcPcy31.js";var p=e(t(),1),m=n();function h({value:e,onChange:t,type:n,label:u,placeholder:d,allowAdd:f=!0,onAddNew:h}){let[g,_]=(0,p.useState)([]),[v,y]=(0,p.useState)(!1),[b,x]=(0,p.useState)(``),[S,C]=(0,p.useState)(0),w=(0,p.useRef)(null),T=(0,p.useRef)(null);(0,p.useEffect)(()=>{(async()=>{let{data:e}=await r.from(`parties`).select(`*`).eq(`type`,n).order(`name`);_(e||[])})()},[n,v]),(0,p.useEffect)(()=>{let e=e=>{w.current&&!w.current.contains(e.target)&&(y(!1),x(``))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let E=g.find(t=>t.name===e),D=g.filter(e=>!b||(e.name||``).toLowerCase().includes(b.toLowerCase())||(e.phone||``).includes(b)),O=e=>{t(e),y(!1),x(``),C(0)},k=e=>{e.key===`ArrowDown`?(e.preventDefault(),C(e=>Math.min(e+1,D.length-1))):e.key===`ArrowUp`?(e.preventDefault(),C(e=>Math.max(e-1,0))):e.key===`Enter`?(e.preventDefault(),D[S]&&O(D[S].name)):e.key===`Escape`&&(y(!1),x(``))},A=n===`customer`?l:c;return(0,m.jsxs)(`div`,{className:`relative`,ref:w,children:[u&&(0,m.jsx)(`label`,{className:`label`,children:u}),(0,m.jsxs)(`button`,{type:`button`,onClick:()=>{y(!v),setTimeout(()=>T.current?.focus(),50)},className:`input w-full flex items-center justify-between text-right`,children:[(0,m.jsxs)(`span`,{className:`flex items-center gap-2 ${E?`text-slate-800 dark:text-slate-100`:`text-slate-400`}`,children:[(0,m.jsx)(A,{className:`w-4 h-4 shrink-0`}),E?E.name:d||(n===`customer`?`اختر العميل...`:`اختر المورد...`)]}),(0,m.jsx)(a,{className:`w-4 h-4 text-slate-400 transition-transform ${v?`rotate-180`:``}`})]}),v&&(0,m.jsxs)(`div`,{className:`absolute z-50 mt-1 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden`,children:[(0,m.jsx)(`div`,{className:`p-2 border-b border-slate-100 dark:border-slate-700`,children:(0,m.jsxs)(`div`,{className:`relative`,children:[(0,m.jsx)(s,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400`}),(0,m.jsx)(`input`,{ref:T,value:b,onChange:e=>{x(e.target.value),C(0)},onKeyDown:k,placeholder:`بحث بالاسم أو الهاتف...`,className:`input pr-9 py-2 text-sm`})]})}),(0,m.jsx)(`div`,{className:`max-h-56 overflow-y-auto`,children:D.length===0?(0,m.jsx)(`div`,{className:`p-4 text-center text-sm text-slate-400`,children:b?`لا توجد نتائج مطابقة`:`لا توجد أطراف مسجلة`}):D.map((t,n)=>(0,m.jsxs)(`button`,{type:`button`,onClick:()=>O(t.name),onMouseEnter:()=>C(n),className:`w-full flex items-center justify-between px-3 py-2.5 text-right transition-colors ${n===S?`bg-accent-50 dark:bg-accent-900/20`:`hover:bg-slate-50 dark:hover:bg-slate-700/50`}`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,m.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 grid place-items-center shrink-0`,children:(0,m.jsx)(A,{className:`w-4 h-4 text-slate-500`})}),(0,m.jsxs)(`div`,{className:`min-w-0`,children:[(0,m.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-100 truncate`,children:t.name}),t.phone&&(0,m.jsx)(`p`,{className:`text-xs text-slate-400 truncate`,children:t.phone})]})]}),t.name===e&&(0,m.jsx)(i,{className:`w-4 h-4 text-accent-600 shrink-0`})]},t.id))}),f&&(0,m.jsxs)(`button`,{type:`button`,onClick:()=>{y(!1),h?.()},className:`w-full flex items-center gap-2 px-3 py-2.5 border-t border-slate-100 dark:border-slate-700 text-sm text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors`,children:[(0,m.jsx)(o,{className:`w-4 h-4`}),`إضافة `,n===`customer`?`عميل`:`مورد`,` جديد`]})]})]})}var g={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},_={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function v(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function y(e,t){let n=e.kind===`sale`,r=(t.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,i=n?`فاتورة بيع`:`فاتورة شراء`,a=t.currency||``,o=Number(e.total)||0,s=Number(e.paid)||0,c=e.remaining==null?o-s:Number(e.remaining),l=(e.items||[]).map((e,t)=>{let n=e.name||e.description||e.product?.name||`—`,r=Number(e.qty)||0,i=Number(e.unit_price??e.price)||0,o=Number(e.discount)||0,s=Number(e.tax_rate)||0,c=Number(e.total)||r*i-o+(r*i-o)*s/100,l=[e.size,e.unit].filter(Boolean).join(` • `);return`<tr class="${t%2?`alt`:``}"><td style="text-align:center;color:#94a3b8">${t+1}</td><td>${v(n)}${l?`<div style="font-size:11px;color:#64748b">${v(l)}</div>`:``}</td><td style="text-align:center">${r}</td><td style="text-align:center">${u(i,a)}</td><td style="text-align:center">${o?u(o,a):`—`}</td><td style="text-align:center">${s?s+`%`:`—`}</td><td style="text-align:left;font-weight:700">${u(c,a)}</td></tr>`}).join(``),p=e.custom_values&&typeof e.custom_values==`object`?Object.entries(e.custom_values).filter(([,e])=>e!==``&&e!=null):[],m=(e.extra_fields||[]).filter(e=>e.key?.trim()),h=Number(e.cash_amount)||(e.payment_method===`cash`?s:0),y=Number(e.card_amount)||(e.payment_method===`card`?s:0),b=(t.company_name||``).trim(),x=b!==``&&b!==`شامل`,S=(e.branch_name||``).trim(),C=x?b:S||b||`شامل`,w=S&&(!x||S!==b)?`فرع: ${S}`:``;return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${i} ${v(e.number||``)}</title>
<style>
@page { margin: 11mm 13mm; }
* { box-sizing: border-box; }
body { font-family: 'Inter', 'Cairo', sans-serif; color: #0F172A; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.wrap { max-width: 780px; margin: 0 auto; }
.onex-bar { height: 8px; border-radius: 0 0 8px 8px; background: linear-gradient(90deg, ${r} 0%, ${r}CC 60%, ${r}66 100%); margin-bottom: 12px; }
.co-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 3px solid ${r}; }
.brand { display: flex; align-items: center; gap: 12px; }
.logo { width: 52px; height: 52px; border-radius: 12px; object-fit: contain; background: #f1f5f9; }
.brand h1 { margin: 0; font-size: 22px; }
.brand .sub { font-size: 11px; color: #64748b; margin-top: 2px; }
.doc-badge { text-align: left; }
.doc-badge .t { display: inline-block; padding: 6px 22px; border-radius: 20px; background: ${r}; color: #fff; font-weight: 800; font-size: 15px; }
.doc-badge .n { font-size: 12px; color: #475569; margin-top: 6px; font-weight: 700; }
.meta-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin: 14px 0; }
.meta-box { background: #f8fafc; border-radius: 8px; padding: 8px 12px; font-size: 12px; }
.meta-box .k { color: #64748b; font-size: 11px; }
.meta-box .v { font-weight: 700; margin-top: 2px; }
.status-pill { display: inline-block; padding: 2px 12px; border-radius: 12px; font-size: 11px; font-weight: 800; background: ${e.status===`paid`?`#dcfce7; color: #15803d`:e.status===`partial`?`#fef3c7; color: #b45309`:`#fee2e2; color: #b91c1c`}; }
table.items { width: 100%; border-collapse: collapse; font-size: 13px; }
table.items th { background: ${r}; color: #fff; padding: 9px 8px; font-size: 12px; }
table.items th:first-child { border-radius: 0 8px 8px 0; }
table.items th:last-child { border-radius: 8px 0 0 8px; }
table.items td { padding: 9px 8px; border-bottom: 1px solid #e2e8f0; }
tr.alt td { background: #f8fafc; }
.bottom { display: flex; gap: 14px; margin-top: 14px; align-items: flex-start; }
.side { flex: 1; font-size: 12px; }
.totals { width: 270px; background: #f8fafc; border-radius: 10px; padding: 12px 14px; font-size: 13px; }
.totals .row { display: flex; justify-content: space-between; padding: 3px 0; }
.totals .grand { font-weight: 800; font-size: 16px; color: ${r}; border-top: 2px solid #e2e8f0; padding-top: 8px; margin-top: 4px; }
.totals .due { color: #dc2626; font-weight: 700; }
.pay-split { display: flex; gap: 8px; margin-top: 10px; font-size: 12px; }
.pay-split div { flex: 1; background: #fff; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 6px 10px; }
.note-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 10px 12px; margin-top: 10px; font-size: 12px; white-space: pre-wrap; word-break: break-word; }
.terms-box { background: #f1f5f9; border-radius: 8px; padding: 10px 12px; margin-top: 10px; font-size: 12px; color: #475569; white-space: pre-wrap; word-break: break-word; }
.custom-box { margin-top: 10px; font-size: 12px; color: #475569; }
.custom-box span { display: inline-block; background: #f1f5f9; border-radius: 6px; padding: 3px 10px; margin: 2px; }
.barcode-box { margin-top: 14px; text-align: center; }
.barcode-box img { height: 56px; }
.barcode-box .bc-num { font-size: 12px; font-weight: 700; letter-spacing: 2px; margin-top: 2px; }
.sigs { margin-top: 44px; display: flex; justify-content: space-between; gap: 28px; }
.sig { flex: 1; text-align: center; font-size: 12px; color: #64748b; }
.sig div { border-top: 1.5px solid ${r}; padding-top: 6px; font-weight: 700; }
.footer { margin-top: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style></head><body><div class="wrap">
<div class="onex-bar"></div>
<div class="co-head">
<div class="brand">
${t.invoice_show_logo!==!1&&t.logo_url?`<img class="logo" src="${v(t.logo_url)}" />`:``}
<div><h1>${v(C)}</h1>
<div class="sub">${[w,t.address,t.phone?`هاتف: ${t.phone}`:``,t.vat_no?`سجل/ضريبي: ${t.vat_no}`:``].filter(Boolean).join(` • `)||``}</div></div>
</div>
<div class="doc-badge"><span class="t">${i}</span><div class="n">رقم: ${v(e.number||`—`)}</div></div>
</div>
${e.header_text||t.invoice_header_text?`<div class="note-box">${v(e.header_text||t.invoice_header_text||``)}</div>`:``}
<div class="meta-grid">
<div class="meta-box"><div class="k">${n?`العميل`:`المورد`}</div><div class="v">${v(e.party_name||`عميل نقدي`)}</div></div>
<div class="meta-box"><div class="k">التاريخ</div><div class="v">${d(e.date)}${e.due_date?` • استحقاق: ${d(e.due_date)}`:``}</div></div>
<div class="meta-box"><div class="k">الدفع / الحالة</div><div class="v">${v(g[e.payment_method||``]||e.payment_method||`—`)} • <span class="status-pill">${_[e.status||``]||e.status||`—`}</span></div></div>
${e.branch_name?`<div class="meta-box"><div class="k">الفرع</div><div class="v">${v(e.branch_name)}</div></div>`:``}
</div>
<table class="items"><thead><tr><th style="text-align:center;width:34px">م</th><th>الصنف</th><th style="text-align:center">الكمية</th><th style="text-align:center">السعر</th><th style="text-align:center">خصم</th><th style="text-align:center">ضريبة</th><th style="text-align:left">الإجمالي</th></tr></thead>
<tbody>${l||`<tr><td colspan="7" style="text-align:center;color:#94a3b8">لا توجد أصناف</td></tr>`}</tbody></table>
<div class="bottom">
<div class="side">
${e.notes?`<div class="note-box"><strong>ملاحظات:</strong> ${v(e.notes)}</div>`:``}
${e.terms_text||t.invoice_terms_text?`<div class="terms-box"><strong>الشروط والأحكام:</strong> ${v(e.terms_text||t.invoice_terms_text||``)}</div>`:``}
${p.length?`<div class="custom-box">${p.map(([e,t])=>`<span>${v(e)}: ${v(String(t))}</span>`).join(``)}</div>`:``}
${m.length?`<div class="custom-box">${m.map(e=>`<span>${v(e.key)}: ${v(e.value)}</span>`).join(``)}</div>`:``}
${t.invoice_show_bank_details?`<div class="terms-box">الحساب البنكي: ${v(t.phone||`—`)}<br/>البيانات البنكية كما هي مذكورة في الإعدادات</div>`:``}
</div>
<div class="totals">
<div class="row"><span>المجموع الفرعي</span><span>${u(e.subtotal,a)}</span></div>
<div class="row"><span>الضريبة</span><span>${u(e.tax,a)}</span></div>
<div class="row grand"><span>الإجمالي</span><span>${u(o,a)}</span></div>
<div class="row"><span>المدفوع</span><span>${u(s,a)}</span></div>
<div class="row due"><span>المتبقي</span><span>${u(c,a)}</span></div>
${h||y?`<div class="pay-split"><div>كاش: <b>${u(h,a)}</b></div><div>شبكة: <b>${u(y,a)}</b></div></div>`:``}
</div>
</div>
${e.number?`<div class="barcode-box"><img src="${f(e.number,`#0F172A`)}" alt="باركود" /><div class="bc-num">${v(e.number)}</div></div>`:``}
${e.qrDataUrl?`<div class="barcode-box"><img src="${e.qrDataUrl}" style="width:110px;height:110px" alt="ZATCA QR" /><div class="bc-num">فواتير ZATCA</div></div>`:``}
${t.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||t.invoice_footer_text?`<div class="footer">${v(e.footer_text||t.invoice_footer_text||``)}</div>`:``}
</div></body></html>`}function b(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}export{b as n,h as r,y as t};