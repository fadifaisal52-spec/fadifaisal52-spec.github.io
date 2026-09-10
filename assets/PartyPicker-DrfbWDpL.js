import{n as e,r as t}from"./rolldown-runtime-hePW80VL.js";import{t as n}from"./react-CwJFpaho.js";import{t as r}from"./supabase-XhiQfxjX.js";import{b as i}from"./index-x2RBRapr.js";import{a,r as o}from"./utils-CfsB92wt.js";import{t as s}from"./check-CmWUQ7w7.js";import{t as c}from"./chevron-down-ReUDoNBx.js";import{t as l}from"./plus-CqRdagZ5.js";import{t as u}from"./search-M8UP9eTU.js";import{t as d}from"./truck-CU5t2ypP.js";import{t as f}from"./user-CgVubRYc.js";import{n as p}from"./transliterate-D-5hWP-j.js";var m=e({buildInvoicePrintHtml:()=>y,buildInvoiceQrText:()=>v,openPrintWindow:()=>b}),h={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},g={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function _(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function v(e){let t=[];return t.push(`${e.kind===`sale`?`فاتورة بيع`:`فاتورة شراء`} رقم: ${e.number||`—`}`),t.push(`التاريخ: ${e.date||`—`} | ${e.kind===`sale`?`العميل`:`المورد`}: ${e.party||`—`} | الفرع: ${e.branch||`—`}`),t.push(`الدفع: ${e.payment||`—`} | الحالة: ${e.status||`—`}`),t.push(`الأصناف:`),(e.items||[]).forEach((e,n)=>{let r=e.name||e.description||`—`,i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.total)||i*a;t.push(`${n+1}) ${r} × ${i} @ ${a} = ${o}`)}),t.push(`الإجمالي: ${Number(e.total)||0} | المدفوع: ${Number(e.paid)||0} | المتبقي: ${Number(e.remaining)||0} ${e.currency||``}`),t.join(`
`)}function y(e,t){let n=e.kind===`sale`,r=(t.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,i=n?`فاتورة بيع`:`فاتورة شراء`,s=t.currency||``,c=Number(e.total)||0,l=Number(e.paid)||0,u=e.remaining==null?c-l:Number(e.remaining),d=o(e.date),f=h[e.payment_method||``]||e.payment_method||`—`,p=(e.items||[]).map((e,t)=>{let n=e.name||e.description||e.product?.name||`—`,r=Number(e.qty)||0,i=Number(e.unit_price??e.price)||0,o=Number(e.discount)||0,c=Number(e.tax_rate)||0,l=Number(e.total)||r*i-o+(r*i-o)*c/100,u=[e.size,e.unit].filter(Boolean).join(` • `);return`<tr><td style="text-align:center;color:#94a3b8;font-weight:800">${t+1}</td><td style="font-weight:700">${_(n)}${u?`<div style="font-size:11px;color:#64748b;font-weight:400">${_(u)}</div>`:``}</td><td style="text-align:center;white-space:nowrap">${d}</td><td style="text-align:center;font-weight:800">${r}</td><td style="text-align:center">${a(i,s)}</td><td style="text-align:center;font-weight:800">${a(l,s)}</td><td style="text-align:center">${_(f)}</td></tr>`}).join(``),m=e.custom_values&&typeof e.custom_values==`object`?Object.entries(e.custom_values).filter(([,e])=>e!==``&&e!=null):[],v=(e.extra_fields||[]).filter(e=>e.key?.trim()),y=Number(e.cash_amount)||(e.payment_method===`cash`?l:0),b=Number(e.card_amount)||(e.payment_method===`card`?l:0),x=(e.branch_name||``).trim(),S=x?`فرع: ${x}`:``;return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${i} ${_(e.number||``)}</title>
<style>
@page { margin: 10mm 12mm; }
* { box-sizing: border-box; }
body { font-family: 'Cairo', 'Inter', sans-serif; color: #1e293b; margin: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.wrap { max-width: 780px; margin: 0 auto; }
.co-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 14px; background: linear-gradient(135deg, #0f172a, #334155); color: #fff; margin-bottom: 10px; }
.brand .name { font-size: 20px; font-weight: 800; }
.brand .sub { font-size: 11px; color: rgba(255,255,255,.78); margin-top: 3px; }
.doc-badge { text-align: end; }
.doc-badge .t { display: inline-block; padding: 6px 22px; border-radius: 20px; background: #fff; color: #0f172a; font-weight: 800; font-size: 15px; }
.doc-badge .n { font-size: 12px; color: rgba(255,255,255,.85); margin-top: 6px; font-weight: 700; }
/* شريط معلومات واحد: كل بيانات الفاتورة في مستطيل عرضي واحد */
.info-strip { display: flex; border: 1.5px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin: 0 0 12px; background: #f8fafc; }
.info-cell { flex: 1; padding: 8px 10px; font-size: 12px; border-inline-end: 1px solid #e2e8f0; min-width: 0; }
.info-cell:last-child { border-inline-end: none; }
.info-cell .k { color: #64748b; font-size: 10.5px; font-weight: 700; margin-bottom: 2px; }
.info-cell .v { font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
/* الجسم: صفوف أفقية عريضة — كل بند شريط رئيسي واحد فيه كل البيانات */
.body { display: block; }
table.items { width: 100%; border-collapse: separate; border-spacing: 0 6px; font-size: 13px; }
table.items th { background: ${r}; color: #fff; padding: 10px 8px; font-size: 12px; white-space: nowrap; }
table.items th:first-child { border-radius: 0 10px 10px 0; }
table.items th:last-child { border-radius: 10px 0 0 10px; }
table.items td { padding: 11px 8px; background: #f8fafc; border-top: 1.5px solid #e2e8f0; border-bottom: 1.5px solid #e2e8f0; vertical-align: middle; }
table.items td:first-child { border-inline-start: 1.5px solid #e2e8f0; border-start-start-radius: 10px; border-end-start-radius: 10px; }
table.items td:last-child { border-inline-end: 1.5px solid #e2e8f0; border-start-end-radius: 10px; border-end-end-radius: 10px; }
.status-pill { display: inline-block; padding: 1px 10px; border-radius: 10px; font-size: 11px; font-weight: 800; background: ${e.status===`paid`?`#dcfce7; color: #15803d`:e.status===`partial`?`#fef3c7; color: #b45309`:`#fee2e2; color: #b91c1c`}; }
table.items { width: 100%; border-collapse: collapse; font-size: 13px; }
table.items th { background: ${r}; color: #fff; padding: 9px 8px; font-size: 12px; }
table.items th:first-child { border-radius: 0 8px 8px 0; }
table.items th:last-child { border-radius: 8px 0 0 8px; }
table.items td { padding: 9px 8px; border-bottom: 1px solid #e2e8f0; }
tr.alt td { background: #f8fafc; }
.bottom { display: flex; gap: 14px; margin-top: 14px; align-items: flex-start; }
.side { flex: 1; font-size: 12px; min-width: 0; }
.totals { width: 270px; background: linear-gradient(180deg, #f8fafc, #eef2f7); border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 14px; font-size: 13px; flex-shrink: 0; }
.totals .row { display: flex; justify-content: space-between; padding: 3px 0; }
.totals .grand { font-weight: 800; font-size: 17px; color: #fff; background: ${r}; border-radius: 8px; padding: 8px 10px; margin-top: 6px; }
.totals .due { color: #dc2626; font-weight: 700; }
.pay-split { display: flex; gap: 8px; margin-top: 10px; font-size: 12px; }
.pay-split div { flex: 1; background: #fff; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 6px 10px; }
.note-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 10px 12px; margin-top: 10px; font-size: 12px; white-space: pre-wrap; word-break: break-word; }
.terms-box { background: #f1f5f9; border-radius: 8px; padding: 10px 12px; margin-top: 10px; font-size: 12px; color: #475569; white-space: pre-wrap; word-break: break-word; }
.custom-box { margin-top: 10px; font-size: 12px; color: #475569; }
.custom-box span { display: inline-block; background: #f1f5f9; border-radius: 6px; padding: 3px 10px; margin: 2px; }
.qr-row { display: flex; gap: 16px; align-items: center; justify-content: center; margin-top: 14px; }
.qr-box { text-align: center; }
.qr-box img { width: 120px; height: 120px; border: 1px solid #e2e8f0; border-radius: 10px; padding: 4px; background: #fff; }
.qr-box .cap { font-size: 11px; font-weight: 700; color: #64748b; margin-top: 4px; }
.sigs { margin-top: 40px; display: flex; justify-content: space-between; gap: 28px; }
.sig { flex: 1; text-align: center; font-size: 12px; color: #64748b; }
.sig div { border-top: 1.5px solid ${r}; padding-top: 6px; font-weight: 700; }
.footer { margin-top: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style></head><body><div class="wrap">
<div class="co-head">
<div class="brand">
<div class="name">${_(t.company_name||(n?`فاتورة بيع`:`فاتورة شراء`))}</div>
<div class="sub">${[S,t.address,t.phone?`هاتف: ${t.phone}`:``,t.vat_no?`سجل/ضريبي: ${t.vat_no}`:``].filter(Boolean).join(` • `)||o(e.date)}</div>
</div>
<div class="doc-badge"><span class="t">${i}</span><div class="n">رقم: ${_(e.number||`—`)}</div></div>
</div>
${e.header_text||t.invoice_header_text?`<div class="note-box" style="margin:0 0 12px">${_(e.header_text||t.invoice_header_text||``)}</div>`:``}
<div class="info-strip">
<div class="info-cell"><div class="k">رقم الفاتورة</div><div class="v" style="font-size:14px">${_(e.number||`—`)}</div></div>
<div class="info-cell"><div class="k">${n?`العميل`:`المورد`}</div><div class="v" style="font-size:14px">${_(e.party_name||`عميل نقدي`)}</div></div>
<div class="info-cell"><div class="k">الفرع</div><div class="v">${_(e.branch_name||`—`)}</div></div>
<div class="info-cell"><div class="k">الحالة</div><div class="v"><span class="status-pill">${g[e.status||``]||e.status||`—`}</span></div></div>
</div>
<div class="body">
<table class="items"><thead><tr><th style="text-align:center;width:36px">م</th><th>الصنف</th><th style="text-align:center">التاريخ</th><th style="text-align:center">الكمية</th><th style="text-align:center">السعر</th><th style="text-align:center">الإجمالي</th><th style="text-align:center">الدفع</th></tr></thead>
<tbody>${p||`<tr><td colspan="7" style="text-align:center;color:#94a3b8;background:#fff">لا توجد أصناف</td></tr>`}</tbody></table>
<div class="bottom">
<div class="side" style="flex:1">
${e.notes?`<div class="note-box"><strong>ملاحظات:</strong> ${_(e.notes)}</div>`:``}
${e.terms_text||t.invoice_terms_text?`<div class="terms-box"><strong>الشروط والأحكام:</strong> ${_(e.terms_text||t.invoice_terms_text||``)}</div>`:``}
${m.length?`<div class="custom-box">${m.map(([e,t])=>`<span>${_(e)}: ${_(String(t))}</span>`).join(``)}</div>`:``}
${v.length?`<div class="custom-box">${v.map(e=>`<span>${_(e.key)}: ${_(e.value)}</span>`).join(``)}</div>`:``}
${t.invoice_show_bank_details?`<div class="terms-box">الحساب البنكي: ${_(t.phone||`—`)}<br/>البيانات البنكية كما هي مذكورة في الإعدادات</div>`:``}
</div>
<div class="totals">
<div class="row grand" style="border-top:none;padding-top:3px;margin-top:0"><span>الإجمالي</span><span>${a(c,s)}</span></div>
<div class="row"><span>المدفوع</span><span>${a(l,s)}</span></div>
<div class="row due"><span>المتبقي</span><span>${a(u,s)}</span></div>
${y||b?`<div class="pay-split"><div>كاش: <b>${a(y,s)}</b></div><div>شبكة: <b>${a(b,s)}</b></div></div>`:``}
</div>
</div>
</div>
<div class="qr-row">
${e.contentQrDataUrl?`<div class="qr-box"><img src="${e.contentQrDataUrl}" alt="QR" /><div class="cap">امسح لعرض الأصناف والبيانات</div></div>`:``}
${e.qrDataUrl?`<div class="qr-box"><img src="${e.qrDataUrl}" alt="ZATCA QR" /><div class="cap">فواتير ZATCA</div></div>`:``}
</div>
${t.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||t.invoice_footer_text?`<div class="footer">${_(e.footer_text||t.invoice_footer_text||``)}</div>`:``}
</div></body></html>`}function b(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}var x=t(n(),1),S=i();function C({value:e,onChange:t,type:n,label:i,placeholder:a,allowAdd:o=!0,onAddNew:m}){let[h,g]=(0,x.useState)([]),[_,v]=(0,x.useState)(!1),[y,b]=(0,x.useState)(``),[C,w]=(0,x.useState)(0),T=(0,x.useRef)(null),E=(0,x.useRef)(null);(0,x.useEffect)(()=>{(async()=>{let{data:e}=await r.from(`parties`).select(`*`).eq(`type`,n).order(`name`);g(e||[])})()},[n,_]),(0,x.useEffect)(()=>{let e=e=>{T.current&&!T.current.contains(e.target)&&(v(!1),b(``))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let D=h.find(t=>t.name===e),O=h.filter(e=>!y||(e.name||``).toLowerCase().includes(y.toLowerCase())||(e.phone||``).includes(y)),k=e=>{t(e),v(!1),b(``),w(0)},A=e=>{e.key===`ArrowDown`?(e.preventDefault(),w(e=>Math.min(e+1,O.length-1))):e.key===`ArrowUp`?(e.preventDefault(),w(e=>Math.max(e-1,0))):e.key===`Enter`?(e.preventDefault(),O[C]&&k(O[C].name)):e.key===`Escape`&&(v(!1),b(``))},j=n===`customer`?f:d;return(0,S.jsxs)(`div`,{className:`relative`,ref:T,children:[i&&(0,S.jsx)(`label`,{className:`label`,children:i}),(0,S.jsxs)(`button`,{type:`button`,onClick:()=>{v(!_),setTimeout(()=>E.current?.focus(),50)},className:`input w-full flex items-center justify-between text-right`,children:[(0,S.jsxs)(`span`,{className:`flex items-center gap-2 min-w-0 ${D?`text-slate-800 dark:text-slate-100`:`text-slate-400`}`,children:[(0,S.jsx)(j,{className:`w-4 h-4 shrink-0`}),(0,S.jsxs)(`span`,{className:`min-w-0`,children:[(0,S.jsx)(`span`,{className:`block truncate`,children:D?D.name:a||(n===`customer`?`اختر العميل...`:`اختر المورد...`)}),D&&p(D.name)&&(0,S.jsx)(`span`,{className:`block text-[10px] text-slate-400 truncate`,dir:`ltr`,children:p(D.name)})]})]}),(0,S.jsx)(c,{className:`w-4 h-4 text-slate-400 transition-transform ${_?`rotate-180`:``}`})]}),_&&(0,S.jsxs)(`div`,{className:`absolute z-50 mt-1 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden`,children:[(0,S.jsx)(`div`,{className:`p-2 border-b border-slate-100 dark:border-slate-700`,children:(0,S.jsxs)(`div`,{className:`relative`,children:[(0,S.jsx)(u,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400`}),(0,S.jsx)(`input`,{ref:E,value:y,onChange:e=>{b(e.target.value),w(0)},onKeyDown:A,placeholder:`بحث بالاسم أو الهاتف...`,className:`input pr-9 py-2 text-sm`})]})}),(0,S.jsx)(`div`,{className:`max-h-56 overflow-y-auto`,children:O.length===0?(0,S.jsx)(`div`,{className:`p-4 text-center text-sm text-slate-400`,children:y?`لا توجد نتائج مطابقة`:`لا توجد أطراف مسجلة`}):O.map((t,n)=>(0,S.jsxs)(`button`,{type:`button`,onClick:()=>k(t.name),onMouseEnter:()=>w(n),className:`w-full flex items-center justify-between px-3 py-2.5 text-right transition-colors ${n===C?`bg-accent-50 dark:bg-accent-900/20`:`hover:bg-slate-50 dark:hover:bg-slate-700/50`}`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,S.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 grid place-items-center shrink-0`,children:(0,S.jsx)(j,{className:`w-4 h-4 text-slate-500`})}),(0,S.jsxs)(`div`,{className:`min-w-0`,children:[(0,S.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-100 truncate`,children:t.name}),p(t.name)&&(0,S.jsx)(`p`,{className:`text-[11px] text-slate-400 truncate`,dir:`ltr`,children:p(t.name)}),t.phone&&(0,S.jsx)(`p`,{className:`text-xs text-slate-400 truncate`,children:t.phone})]})]}),t.name===e&&(0,S.jsx)(s,{className:`w-4 h-4 text-accent-600 shrink-0`})]},t.id))}),o&&(0,S.jsxs)(`button`,{type:`button`,onClick:()=>{v(!1),m?.()},className:`w-full flex items-center gap-2 px-3 py-2.5 border-t border-slate-100 dark:border-slate-700 text-sm text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors`,children:[(0,S.jsx)(l,{className:`w-4 h-4`}),`إضافة `,n===`customer`?`عميل`:`مورد`,` جديد`]})]})]})}export{b as i,y as n,m as r,C as t};