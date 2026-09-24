import{n as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./utils-BvS_EyV_.js";import{i as r}from"./customFields-DrfYTuxN.js";import{r as i}from"./transliterate-ih_fcPz2.js";var a=e({buildInvoicePrintHtml:()=>d,buildInvoiceQrText:()=>u,latinName:()=>o,openPrintWindow:()=>f});function o(e,t){let n=String(t||``).trim();if(n)return n;let r=String(e||``);if(!r||!/[\u0600-\u06FF]/.test(r))return``;let a=i(r);return a&&a!==r?a:``}var s={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},c={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function l(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function u(e){let t=[];return t.push(`${e.kind===`sale`?`فاتورة بيع`:`فاتورة شراء`} رقم: ${e.number||`—`}`),t.push(`التاريخ: ${e.date||`—`} | ${e.kind===`sale`?`العميل`:`المورد`}: ${e.party||`—`} | الفرع: ${e.branch||`—`}`),t.push(`الدفع: ${e.payment||`—`} | الحالة: ${e.status||`—`}`),t.push(`الأصناف:`),(e.items||[]).forEach((e,n)=>{let r=e.name||e.description||`—`,i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.total)||i*a;t.push(`${n+1}) ${r} × ${i} @ ${a} = ${o}`)}),t.push(`الإجمالي: ${Number(e.total)||0} | المدفوع: ${Number(e.paid)||0} | المتبقي: ${Number(e.remaining)||0} ${e.currency||``}`),t.join(`
`)}function d(e,i){let a=e.kind===`sale`,u=(i.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,d=a?`فاتورة بيع`:`فاتورة شراء`,f=i.currency||``,p=Number(e.total)||0,m=Number(e.paid)||0,h=e.remaining==null?p-m:Number(e.remaining),g=String(i.print_template||`thermal`).toLowerCase(),_=g===`landscape`,v=(e.items||[]).map((e,t)=>{let r=e.name||e.description||e.product?.name||`—`,i=o(r,e.name_en||e.product?.name_en),a=Number(e.qty)||0,s=Number(e.unit_price??e.price)||0,c=Number(e.discount)||0,u=Number(e.tax_rate)||0,d=Number(e.total)||a*s-c+(a*s-c)*u/100,p=[e.size,e.unit].filter(Boolean).join(` • `),m=`${l(r)}${i?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right">${l(i)}</div>`:``}${p?`<div style="font-size:11px;color:#64748b;font-weight:400">${l(p)}</div>`:``}`;return _?`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800">${t+1}</td><td style="font-weight:700">${m}</td><td style="text-align:center">${l(e.barcode||e.sku||`—`)}</td><td style="text-align:center">${l(e.unit||`—`)}</td><td style="text-align:center;font-weight:800">${a}</td><td style="text-align:center">${n(s,f)}</td><td style="text-align:center">${c?n(c,f):`—`}</td><td style="text-align:center">${u?`${u}%`:`—`}</td><td style="text-align:center;font-weight:800">${n(d,f)}</td></tr>`:`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800">${t+1}</td><td colspan="2" style="font-weight:700">${m}</td><td style="text-align:center;font-weight:800">${a}</td><td style="text-align:center">${n(s,f)}</td><td style="text-align:center;font-weight:800">${n(d,f)}</td></tr>`}).join(``),y=r(e.custom_values),b=(e.extra_fields||[]).filter(e=>e.key?.trim()),x=Number(e.cash_amount)||(e.payment_method===`cash`?m:0),S=Number(e.card_amount)||(e.payment_method===`card`?m:0),C=(e.branch_name||``).trim(),w=C?`فرع: ${C}`:``,T=g===`thermal`?`@page { size: 80mm auto; margin: 2mm; }`:g===`a5`?`@page { size: A5; margin: 8mm 10mm; }`:_?`@page { size: A4 landscape; margin: 8mm 10mm; }`:`@page { size: A4; margin: 10mm 12mm; }`,E=g===`thermal`?`.wrap { max-width: 300px; margin: 0 auto; }`:_?`.wrap { max-width: 1060px; margin: 0 auto; }`:`.wrap { max-width: 780px; margin: 0 auto; }`,D=o(e.party_name),O=o(i.company_name),k=_?9:6,A=_?6:3,j=_?k-1:5;return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${d} ${l(e.number||``)}</title>
<style>
${T}
* { box-sizing: border-box; }
body { font-family: 'Cairo', 'Inter', sans-serif; color: #1e293b; margin: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
${E}
.co-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 14px; background: linear-gradient(135deg, #0f172a, #334155); color: #fff; margin-bottom: 10px; }
.brand .name { font-size: 20px; font-weight: 800; }
.brand .sub { font-size: 11px; color: rgba(255,255,255,.78); margin-top: 3px; }
.doc-badge { text-align: end; }
.doc-badge .t { display: inline-block; padding: 6px 22px; border-radius: 20px; background: #fff; color: #0f172a; font-weight: 800; font-size: 15px; }
.doc-badge .n { font-size: 12px; color: rgba(255,255,255,.85); margin-top: 6px; font-weight: 700; }
table.doc { width: 100%; border-collapse: collapse; font-size: 12.5px; }
table.doc th, table.doc td { border: 1.5px solid #cbd5e1; padding: 8px 10px; }
table.doc .sec-title { background: ${u}; color: #fff; font-weight: 800; font-size: 13px; text-align: center; }
table.doc .lbl { background: #f1f5f9; font-weight: 800; color: #334155; white-space: nowrap; }
table.doc .val { font-weight: 700; }
table.doc thead th { background: ${u}; color: #fff; font-size: 12px; }
table.doc tr.item td { background: #fff; }
table.doc tr.item:nth-child(even) td { background: #f8fafc; }
table.doc tr.grand td { background: ${u}; color: #fff; font-weight: 800; font-size: 15px; }
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
.sig div { border-top: 1.5px solid ${u}; padding-top: 6px; font-weight: 700; }
.footer { margin-top: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style></head><body><div class="wrap">
<div class="co-head">
<div class="brand">
<div class="name">${l(i.company_name||(a?`فاتورة بيع`:`فاتورة شراء`))}${O?`<div dir="ltr" style="font-size:12px;font-weight:400;color:rgba(255,255,255,.75);text-align:right">${l(O)}</div>`:``}</div>
<div class="sub">${[w,i.address,i.phone?`هاتف: ${i.phone}`:``,i.vat_no?`سجل/ضريبي: ${i.vat_no}`:``].filter(Boolean).join(` • `)||t(e.date)}</div>
</div>
<div class="doc-badge"><span class="t">${d}</span><div class="n">رقم: ${l(e.number||`—`)}</div></div>
</div>
${e.header_text||i.invoice_header_text?`<div class="note-box">${l(e.header_text||i.invoice_header_text||``)}</div>`:``}
<table class="doc">
<tr><td colspan="${k}" class="sec-title">${d} رقم ${l(e.number||`—`)}${_?` — أفقي`:``}</td></tr>
<tr><td class="lbl">رقم الفاتورة</td><td class="val">${l(e.number||`—`)}</td><td class="lbl">التاريخ${e.due_date?` / الاستحقاق`:``}</td><td class="val" colspan="${A}">${t(e.date)}${e.due_date?` / ${t(e.due_date)}`:``}</td></tr>
<tr><td class="lbl">${a?`العميل`:`المورد`}</td><td class="val">${l(e.party_name||`عميل نقدي`)}${D?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right">${l(D)}</div>`:``}</td><td class="lbl">الفرع</td><td class="val" colspan="${A}">${l(e.branch_name||`—`)}</td></tr>
<tr><td class="lbl">الدفع</td><td class="val">${l(s[e.payment_method||``]||e.payment_method||`—`)}${x||S?` (كاش: ${n(x,f)} • شبكة: ${n(S,f)})`:``}</td><td class="lbl">الحالة</td><td class="val" colspan="${A}"><span class="status-pill">${c[e.status||``]||e.status||`—`}</span></td></tr>
<tr><td colspan="${k}" class="sec-title">الأصناف (${(e.items||[]).length})</td></tr>
${_?`<tr><th style="width:32px">م</th><th>الصنف</th><th>باركود</th><th>الوحدة</th><th>الكمية</th><th>السعر</th><th>الخصم</th><th>الضريبة</th><th>الإجمالي</th></tr>`:`<tr><th style="width:36px">م</th><th colspan="2">الصنف</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr>`}
<tbody>${v||`<tr><td colspan="${k}" style="text-align:center;color:#94a3b8">لا توجد أصناف</td></tr>`}</tbody>
<tr class="grand"><td colspan="${k-2}">الإجمالي</td><td colspan="2">${n(p,f)}</td></tr>
<tr class="paidrow"><td colspan="${k-2}">المدفوع</td><td colspan="2">${n(m,f)}</td></tr>
<tr class="due"><td colspan="${k-2}">المتبقي</td><td colspan="2">${n(h,f)}</td></tr>
${e.notes?`<tr><td class="lbl">ملاحظات</td><td class="val" colspan="${j}">${l(e.notes)}</td></tr>`:``}
${e.terms_text||i.invoice_terms_text?`<tr><td class="lbl">الشروط</td><td class="val" colspan="${j}">${l(e.terms_text||i.invoice_terms_text||``)}</td></tr>`:``}
${y.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${j}">${y.map(({label:e,value:t})=>`${l(e)}: ${l(t)}`).join(` • `)}</td></tr>`:``}
${b.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${j}">${b.map(e=>`${l(e.key)}: ${l(e.value)}`).join(` • `)}</td></tr>`:``}
${i.invoice_show_bank_details?`<tr><td class="lbl">البنك</td><td class="val" colspan="${j}">الحساب البنكي: ${l(i.phone||`—`)}</td></tr>`:``}
</table>
<div class="qr-row">
${e.contentQrDataUrl?`<div class="qr-box"><img src="${e.contentQrDataUrl}" alt="QR" /><div class="cap">امسح لعرض الأصناف والبيانات</div></div>`:``}
${e.qrDataUrl?`<div class="qr-box"><img src="${e.qrDataUrl}" alt="ZATCA QR" /><div class="cap">فواتير ZATCA</div></div>`:``}
</div>
${i.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||i.invoice_footer_text?`<div class="footer">${l(e.footer_text||i.invoice_footer_text||``)}</div>`:``}
</div></body></html>`}function f(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}export{f as i,a as n,o as r,d as t};