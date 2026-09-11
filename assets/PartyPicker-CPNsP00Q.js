import{n as e,r as t}from"./rolldown-runtime-hePW80VL.js";import{t as n}from"./react-CwJFpaho.js";import{t as r}from"./supabase-CbPuWTTy.js";import{h as i}from"./index-D1dJdQXV.js";import{a,r as o}from"./utils-CfsB92wt.js";import{t as s}from"./check-CmWUQ7w7.js";import{t as c}from"./chevron-down-ReUDoNBx.js";import{t as l}from"./plus-CqRdagZ5.js";import{t as u}from"./search-M8UP9eTU.js";import{t as d}from"./truck-CU5t2ypP.js";import{t as f}from"./user-CgVubRYc.js";import{n as p}from"./transliterate-D-5hWP-j.js";var m=e({buildInvoicePrintHtml:()=>y,buildInvoiceQrText:()=>v,openPrintWindow:()=>b}),h={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},g={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function _(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function v(e){let t=[];return t.push(`${e.kind===`sale`?`فاتورة بيع`:`فاتورة شراء`} رقم: ${e.number||`—`}`),t.push(`التاريخ: ${e.date||`—`} | ${e.kind===`sale`?`العميل`:`المورد`}: ${e.party||`—`} | الفرع: ${e.branch||`—`}`),t.push(`الدفع: ${e.payment||`—`} | الحالة: ${e.status||`—`}`),t.push(`الأصناف:`),(e.items||[]).forEach((e,n)=>{let r=e.name||e.description||`—`,i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.total)||i*a;t.push(`${n+1}) ${r} × ${i} @ ${a} = ${o}`)}),t.push(`الإجمالي: ${Number(e.total)||0} | المدفوع: ${Number(e.paid)||0} | المتبقي: ${Number(e.remaining)||0} ${e.currency||``}`),t.join(`
`)}function y(e,t){let n=e.kind===`sale`,r=(t.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,i=n?`فاتورة بيع`:`فاتورة شراء`,s=t.currency||``,c=Number(e.total)||0,l=Number(e.paid)||0,u=e.remaining==null?c-l:Number(e.remaining),d=(e.items||[]).map((e,t)=>{let n=e.name||e.description||e.product?.name||`—`,r=Number(e.qty)||0,i=Number(e.unit_price??e.price)||0,o=Number(e.discount)||0,c=Number(e.tax_rate)||0,l=Number(e.total)||r*i-o+(r*i-o)*c/100,u=[e.size,e.unit].filter(Boolean).join(` • `);return`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800">${t+1}</td><td colspan="2" style="font-weight:700">${_(n)}${u?`<div style="font-size:11px;color:#64748b;font-weight:400">${_(u)}</div>`:``}</td><td style="text-align:center;font-weight:800">${r}</td><td style="text-align:center">${a(i,s)}</td><td style="text-align:center;font-weight:800">${a(l,s)}</td></tr>`}).join(``),f=e.custom_values&&typeof e.custom_values==`object`?Object.entries(e.custom_values).filter(([,e])=>e!==``&&e!=null):[],p=(e.extra_fields||[]).filter(e=>e.key?.trim()),m=Number(e.cash_amount)||(e.payment_method===`cash`?l:0),v=Number(e.card_amount)||(e.payment_method===`card`?l:0),y=(e.branch_name||``).trim(),b=y?`فرع: ${y}`:``;return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${i} ${_(e.number||``)}</title>
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
table.doc { width: 100%; border-collapse: collapse; font-size: 12.5px; }
table.doc th, table.doc td { border: 1.5px solid #cbd5e1; padding: 8px 10px; }
table.doc .sec-title { background: ${r}; color: #fff; font-weight: 800; font-size: 13px; text-align: center; }
table.doc .lbl { background: #f1f5f9; font-weight: 800; color: #334155; white-space: nowrap; }
table.doc .val { font-weight: 700; }
table.doc thead th { background: ${r}; color: #fff; font-size: 12px; }
table.doc tr.item td { background: #fff; }
table.doc tr.item:nth-child(even) td { background: #f8fafc; }
table.doc tr.grand td { background: ${r}; color: #fff; font-weight: 800; font-size: 15px; }
table.doc tr.paidrow td { font-weight: 700; }
table.doc tr.due td { color: #dc2626; font-weight: 800; }
.status-pill { display: inline-block; padding: 1px 10px; border-radius: 10px; font-size: 11px; font-weight: 800; background: ${e.status===`paid`?`#dcfce7; color: #15803d`:e.status===`partial`?`#fef3c7; color: #b45309`:`#fee2e2; color: #b91c1c`}; }
.note-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 10px 12px; margin: 0 0 10px; font-size: 12px; white-space: pre-wrap; word-break: break-word; }
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
<div class="sub">${[b,t.address,t.phone?`هاتف: ${t.phone}`:``,t.vat_no?`سجل/ضريبي: ${t.vat_no}`:``].filter(Boolean).join(` • `)||o(e.date)}</div>
</div>
<div class="doc-badge"><span class="t">${i}</span><div class="n">رقم: ${_(e.number||`—`)}</div></div>
</div>
${e.header_text||t.invoice_header_text?`<div class="note-box">${_(e.header_text||t.invoice_header_text||``)}</div>`:``}
<table class="doc">
<tr><td colspan="6" class="sec-title">${i} رقم ${_(e.number||`—`)}</td></tr>
<tr><td class="lbl">رقم الفاتورة</td><td class="val">${_(e.number||`—`)}</td><td class="lbl">التاريخ${e.due_date?` / الاستحقاق`:``}</td><td class="val" colspan="3">${o(e.date)}${e.due_date?` / ${o(e.due_date)}`:``}</td></tr>
<tr><td class="lbl">${n?`العميل`:`المورد`}</td><td class="val">${_(e.party_name||`عميل نقدي`)}</td><td class="lbl">الفرع</td><td class="val" colspan="3">${_(e.branch_name||`—`)}</td></tr>
<tr><td class="lbl">الدفع</td><td class="val">${_(h[e.payment_method||``]||e.payment_method||`—`)}${m||v?` (كاش: ${a(m,s)} • شبكة: ${a(v,s)})`:``}</td><td class="lbl">الحالة</td><td class="val" colspan="3"><span class="status-pill">${g[e.status||``]||e.status||`—`}</span></td></tr>
<tr><td colspan="6" class="sec-title">الأصناف</td></tr>
<tr><th style="width:36px">م</th><th colspan="2">الصنف</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr>
<tbody>${d||`<tr><td colspan="6" style="text-align:center;color:#94a3b8">لا توجد أصناف</td></tr>`}</tbody>
<tr class="grand"><td colspan="4">الإجمالي</td><td colspan="2">${a(c,s)}</td></tr>
<tr class="paidrow"><td colspan="4">المدفوع</td><td colspan="2">${a(l,s)}</td></tr>
<tr class="due"><td colspan="4">المتبقي</td><td colspan="2">${a(u,s)}</td></tr>
${e.notes?`<tr><td class="lbl">ملاحظات</td><td class="val" colspan="5">${_(e.notes)}</td></tr>`:``}
${e.terms_text||t.invoice_terms_text?`<tr><td class="lbl">الشروط</td><td class="val" colspan="5">${_(e.terms_text||t.invoice_terms_text||``)}</td></tr>`:``}
${f.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="5">${f.map(([e,t])=>`${_(e)}: ${_(String(t))}`).join(` • `)}</td></tr>`:``}
${p.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="5">${p.map(e=>`${_(e.key)}: ${_(e.value)}`).join(` • `)}</td></tr>`:``}
${t.invoice_show_bank_details?`<tr><td class="lbl">البنك</td><td class="val" colspan="5">الحساب البنكي: ${_(t.phone||`—`)}</td></tr>`:``}
</table>
<div class="qr-row">
${e.contentQrDataUrl?`<div class="qr-box"><img src="${e.contentQrDataUrl}" alt="QR" /><div class="cap">امسح لعرض الأصناف والبيانات</div></div>`:``}
${e.qrDataUrl?`<div class="qr-box"><img src="${e.qrDataUrl}" alt="ZATCA QR" /><div class="cap">فواتير ZATCA</div></div>`:``}
</div>
${t.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||t.invoice_footer_text?`<div class="footer">${_(e.footer_text||t.invoice_footer_text||``)}</div>`:``}
</div></body></html>`}function b(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}var x=t(n(),1),S=i();function C({value:e,onChange:t,type:n,label:i,placeholder:a,allowAdd:o=!0,onAddNew:m}){let[h,g]=(0,x.useState)([]),[_,v]=(0,x.useState)(!1),[y,b]=(0,x.useState)(``),[C,w]=(0,x.useState)(0),T=(0,x.useRef)(null),E=(0,x.useRef)(null);(0,x.useEffect)(()=>{(async()=>{let{data:e}=await r.from(`parties`).select(`*`).eq(`type`,n).order(`name`);g(e||[])})()},[n,_]),(0,x.useEffect)(()=>{let e=e=>{T.current&&!T.current.contains(e.target)&&(v(!1),b(``))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let D=h.filter(e=>!y||(e.name||``).toLowerCase().includes(y.toLowerCase())||(e.phone||``).includes(y)),O=()=>{let e=y.trim();e&&!h.some(t=>(t.name||``)===e)?k(e):D[C]&&k(D[C].name)},k=e=>{t(e),v(!1),b(``),w(0)},A=e=>{e.key===`ArrowDown`?(e.preventDefault(),w(e=>Math.min(e+1,D.length-1))):e.key===`ArrowUp`?(e.preventDefault(),w(e=>Math.max(e-1,0))):e.key===`Enter`?(e.preventDefault(),O()):e.key===`Escape`&&(v(!1),b(``))},j=n===`customer`?f:d;return(0,S.jsxs)(`div`,{className:`relative`,ref:T,children:[i&&(0,S.jsx)(`label`,{className:`label`,children:i}),(0,S.jsxs)(`button`,{type:`button`,onClick:()=>{v(!_),setTimeout(()=>E.current?.focus(),50)},className:`input w-full flex items-center justify-between text-right`,children:[(0,S.jsxs)(`span`,{className:`flex items-center gap-2 min-w-0 ${e?`text-slate-800 dark:text-slate-100`:`text-slate-400`}`,children:[(0,S.jsx)(j,{className:`w-4 h-4 shrink-0`}),(0,S.jsxs)(`span`,{className:`min-w-0`,children:[(0,S.jsx)(`span`,{className:`block truncate`,children:e||a||(n===`customer`?`اختر العميل...`:`اختر المورد...`)}),e&&p(e)&&(0,S.jsx)(`span`,{className:`block text-[10px] text-slate-400 truncate`,dir:`ltr`,children:p(e)})]})]}),(0,S.jsx)(c,{className:`w-4 h-4 text-slate-400 transition-transform ${_?`rotate-180`:``}`})]}),_&&(0,S.jsxs)(`div`,{className:`absolute z-50 mt-1 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden`,children:[(0,S.jsx)(`div`,{className:`p-2 border-b border-slate-100 dark:border-slate-700`,children:(0,S.jsxs)(`div`,{className:`relative`,children:[(0,S.jsx)(u,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400`}),(0,S.jsx)(`input`,{ref:E,value:y,onChange:e=>{b(e.target.value),w(0)},onKeyDown:A,placeholder:`بحث بالاسم أو الهاتف...`,className:`input pr-9 py-2 text-sm`})]})}),(0,S.jsx)(`div`,{className:`max-h-56 overflow-y-auto`,children:D.length===0?(0,S.jsx)(`div`,{className:`p-4 text-center text-sm text-slate-400`,children:y?`لا توجد نتائج مطابقة`:`لا توجد أطراف مسجلة`}):D.map((t,n)=>(0,S.jsxs)(`button`,{type:`button`,onClick:()=>k(t.name),onMouseEnter:()=>w(n),className:`w-full flex items-center justify-between px-3 py-2.5 text-right transition-colors ${n===C?`bg-accent-50 dark:bg-accent-900/20`:`hover:bg-slate-50 dark:hover:bg-slate-700/50`}`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,S.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 grid place-items-center shrink-0`,children:(0,S.jsx)(j,{className:`w-4 h-4 text-slate-500`})}),(0,S.jsxs)(`div`,{className:`min-w-0`,children:[(0,S.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-100 truncate`,children:t.name}),p(t.name)&&(0,S.jsx)(`p`,{className:`text-[11px] text-slate-400 truncate`,dir:`ltr`,children:p(t.name)}),t.phone&&(0,S.jsx)(`p`,{className:`text-xs text-slate-400 truncate`,children:t.phone})]})]}),t.name===e&&(0,S.jsx)(s,{className:`w-4 h-4 text-accent-600 shrink-0`})]},t.id))}),o&&m&&(0,S.jsxs)(`button`,{type:`button`,onClick:()=>{v(!1),m?.()},className:`w-full flex items-center gap-2 px-3 py-2.5 border-t border-slate-100 dark:border-slate-700 text-sm text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors`,children:[(0,S.jsx)(l,{className:`w-4 h-4`}),`إضافة `,n===`customer`?`عميل`:`مورد`,` جديد`]})]})]})}export{b as i,y as n,m as r,C as t};