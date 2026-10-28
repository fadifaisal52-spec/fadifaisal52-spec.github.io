import{r as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,s as n}from"./utils-DKkSHaV_.js";import{i as r}from"./customFields-DrfYTuxN.js";import{c as i,s as a}from"./transliterate-ChHWVDgc.js";var o=e({amountInWords:()=>h,buildInvoicePrintHtml:()=>_,buildInvoiceQrText:()=>g,latinName:()=>s,latinProductName:()=>c,normalizeInvoiceItem:()=>u,normalizeInvoiceItems:()=>d,openPrintWindow:()=>v});function s(e,t){let n=String(t||``).trim();if(n)return n;let r=String(e||``);if(!r||!/[\u0600-\u06FF]/.test(r))return``;let i=a(r);return i&&i!==r?i:``}function c(e,t){let n=String(t||``).trim();if(n)return n;let r=String(e||``);if(!r||!/[\u0600-\u06FF]/.test(r))return``;let a=i(r);return a&&a!==r?a:``}function l(...e){for(let t of e){if(t==null||t===``)continue;let e=Number(t);if(Number.isFinite(e))return e}return null}function u(e){let t=e||{},n=t.product||{},r=String(t.name??t.description??t.product_name??n.name??``).trim(),i=String(t.name_en??t.product_name_en??n.name_en??``).trim(),a=l(t.unit_price,t.price,t.sale_price,t.unitPrice)??0,o=l(t.discount,t.discount_amount)??0,s=l(t.tax_rate,t.taxRate,t.tax)??0,c=l(t.total,t.line_total,t.amount,t.lineTotal),u=l(t.qty,t.quantity,t.count,t.qty_ordered);u===null&&(u=c!==null&&a>0?c/a:1),u===0&&c!==null&&c>0&&(u=a>0?c/a:1);let d=u*a-o,f=d+d*s/100,p=c!==null&&c!==0?c:f;return{...t,name:r,description:String(t.description??r),name_en:i||void 0,qty:u,unit_price:a,price:a,discount:o,tax_rate:s,total:p,unit:t.unit?String(t.unit):void 0,size:t.size?String(t.size):void 0,barcode:t.barcode?String(t.barcode):n.barcode?String(n.barcode):void 0,sku:t.sku?String(t.sku):n.sku?String(n.sku):void 0}}function d(e){return(Array.isArray(e)?e:[]).map(u)}var f={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},p={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function m(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function h(e,t=``){let n=Math.round((Number(e)||0)*100)/100;if(!isFinite(n))return``;let r=Math.floor(Math.abs(n)),i=Math.round((Math.abs(n)-r)*100),a=[``,`واحد`,`اثنان`,`ثلاثة`,`أربعة`,`خمسة`,`ستة`,`سبعة`,`ثمانية`,`تسعة`,`عشرة`,`أحد عشر`,`اثنا عشر`,`ثلاثة عشر`,`أربعة عشر`,`خمسة عشر`,`ستة عشر`,`سبعة عشر`,`ثمانية عشر`,`تسعة عشر`],o=[``,``,`عشرون`,`ثلاثون`,`أربعون`,`خمسون`,`ستون`,`سبعون`,`ثمانون`,`تسعون`],s=[``,`مائة`,`مائتان`,`ثلاثمائة`,`أربعمائة`,`خمسمائة`,`ستمائة`,`سبعمائة`,`ثمانمائة`,`تسعمائة`],c=e=>{let t=Math.floor(e/100),n=e%100,r=[];if(t&&r.push(s[t]),n){if(n<20)r.push(a[n]);else{let e=n%10,t=Math.floor(n/10);r.push(e?`${a[e]} و${o[t]}`:o[t])}}return r.join(` و`)},l=[[``,``,``],[`ألف`,`ألفان`,`آلاف`],[`مليون`,`مليونان`,`ملايين`],[`مليار`,`ملياران`,`مليارات`]],u;if(r===0)u=`صفر`;else{let e=[],t=r,n=0;for(;t>0&&n<l.length;){let r=t%1e3;if(r){let[t,i,a]=l[n];n===0?e.unshift(c(r)):r===1?e.unshift(t):r===2?e.unshift(i):r<=10?e.unshift(`${c(r)} ${a}`):e.unshift(`${c(r)} ${t}ًا`)}t=Math.floor(t/1e3),n++}u=e.join(` و`)}let d=`فقط ${u} ${t}`.trim()+` لا غير`;return i>0&&(d+=` و${i} هللة`),(n<0?`سالب `:``)+d}function g(e){let t=[];return t.push(`${e.kind===`sale`?`فاتورة بيع`:`فاتورة شراء`} رقم: ${e.number||`—`}`),t.push(`التاريخ: ${e.date||`—`} | ${e.kind===`sale`?`العميل`:`المورد`}: ${e.party||`—`} | الفرع: ${e.branch||`—`}`),t.push(`الدفع: ${e.payment||`—`} | الحالة: ${e.status||`—`}`),t.push(`الأصناف:`),d(e.items).forEach((e,n)=>{let r=e.name||e.description||`—`,i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.total)||i*a;t.push(`${n+1}) ${r} × ${i} @ ${a} = ${o}`)}),t.push(`الإجمالي: ${Number(e.total)||0} | المدفوع: ${Number(e.paid)||0} | المتبقي: ${Number(e.remaining)||0} ${e.currency||``}`),t.join(`
`)}function _(e,i){let a=e.kind===`sale`,o=(i.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,l=a?`فاتورة بيع`:`فاتورة شراء`,u=i.currency||``,g=Number(e.total)||0,_=Number(e.paid)||0,v=e.remaining==null?g-_:Number(e.remaining),y=String(i.print_template||`thermal`).toLowerCase(),b=y===`landscape`,x=b?9:6,S=b?6:3,C=b?x-1:5,w=e=>`<span class="num">${t(e,u)}</span>`,T=e=>`<span dir="ltr" style="unicode-bidi:isolate">${m(e)}</span>`,E=d(e.items),D=E.map((e,t)=>{let n=e.name||e.description||`—`,r=c(n,e.name_en),i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.discount)||0,s=Number(e.tax_rate)||0,l=Number(e.total)||i*a-o+(i*a-o)*s/100,u=[e.size,e.unit].filter(Boolean).join(` • `),d=`<span style="unicode-bidi:isolate">${m(n)}</span>${r?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right;unicode-bidi:isolate">${m(r)}</div>`:``}${u?`<div style="font-size:11px;color:#64748b;font-weight:400">${m(u)}</div>`:``}`;return b?`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${t+1}</span></td><td style="font-weight:700">${d}</td><td style="text-align:center"><span dir="ltr" style="unicode-bidi:isolate">${m(e.barcode||e.sku||`—`)}</span></td><td style="text-align:center">${m(e.unit||`—`)}</td><td style="text-align:center;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${i}</span></td><td style="text-align:center">${w(a)}</td><td style="text-align:center">${o?w(o):`—`}</td><td style="text-align:center"><span dir="ltr" style="unicode-bidi:isolate">${s?`${s}%`:`—`}</span></td><td style="text-align:center;font-weight:800">${w(l)}</td></tr>`:`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${t+1}</span></td><td colspan="2" style="font-weight:700">${d}</td><td style="text-align:center;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${i}</span></td><td style="text-align:center">${w(a)}</td><td style="text-align:center;font-weight:800">${w(l)}</td></tr>`}).join(``),O=r(e.custom_values),k=(e.extra_fields||[]).filter(e=>e.key?.trim()),A=Number(e.cash_amount)||(e.payment_method===`cash`?_:0),j=Number(e.card_amount)||(e.payment_method===`card`?_:0),M=(e.branch_name||``).trim(),N=M?`فرع: ${M}`:``,P=y===`thermal`?`@page { size: 80mm auto; margin: 2mm; }`:y===`a5`?`@page { size: A5; margin: 8mm 10mm; }`:b?`@page { size: A4 landscape; margin: 8mm 10mm; }`:`@page { size: A4; margin: 10mm 12mm; }`,F=y===`thermal`?`.wrap { max-width: 300px; margin: 0 auto; }`:b?`.wrap { max-width: 1060px; margin: 0 auto; }`:`.wrap { max-width: 780px; margin: 0 auto; }`,I=s(e.party_name),L=s(i.company_name);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${l} ${m(e.number||``)}</title>
<style>
${P}
* { box-sizing: border-box; }
body { font-family: 'Cairo', 'Inter', sans-serif; color: #1e293b; margin: 0; background: #fff; direction: rtl; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.num { direction: ltr; unicode-bidi: isolate; white-space: nowrap; font-variant-numeric: tabular-nums; }
td.val, td.lbl, th, .doc-badge .n { unicode-bidi: isolate; }
${F}
.co-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 14px; background: linear-gradient(135deg, #0f172a, #334155); color: #fff; margin-bottom: 10px; }
.brand .name { font-size: 20px; font-weight: 800; }
.brand .sub { font-size: 11px; color: rgba(255,255,255,.78); margin-top: 3px; }
.doc-badge { text-align: end; }
.doc-badge .t { display: inline-block; padding: 6px 22px; border-radius: 20px; background: #fff; color: #0f172a; font-weight: 800; font-size: 15px; }
.doc-badge .n { font-size: 12px; color: rgba(255,255,255,.85); margin-top: 6px; font-weight: 700; }
table.doc { width: 100%; border-collapse: collapse; font-size: 12.5px; }
table.doc th, table.doc td { border: 1.5px solid #cbd5e1; padding: 8px 10px; }
table.doc .sec-title { background: ${o}; color: #fff; font-weight: 800; font-size: 13px; text-align: center; }
table.doc .lbl { background: #f1f5f9; font-weight: 800; color: #334155; white-space: nowrap; }
table.doc .val { font-weight: 700; }
table.doc thead th { background: ${o}; color: #fff; font-size: 12px; }
table.doc tr.item td { background: #fff; }
table.doc tr.item:nth-child(even) td { background: #f8fafc; }
table.doc tr.grand td { background: ${o}; color: #fff; font-weight: 800; font-size: 15px; }
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
.sig div { border-top: 1.5px solid ${o}; padding-top: 6px; font-weight: 700; }
.footer { margin-top: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style></head><body><div class="wrap">
<div class="co-head">
<div class="brand">
${i.logo_url&&i.invoice_show_logo!==!1?`<img src="${m(i.logo_url)}" alt="" style="width:64px;height:64px;border-radius:14px;object-fit:cover;background:#fff;flex-shrink:0" />`:``}
<div style="flex:1;min-width:0">
<div class="name">${m(i.company_name||(a?`فاتورة بيع`:`فاتورة شراء`))}${L?`<div dir="ltr" style="font-size:12px;font-weight:400;color:rgba(255,255,255,.75);text-align:right">${m(L)}</div>`:``}</div>
<div class="sub">${[N,i.address,i.phone?`هاتف: ${i.phone}`:``,i.vat_no?`سجل/ضريبي: ${i.vat_no}`:``].filter(Boolean).join(` • `)||n(e.date)}</div>
</div>
</div>
<div class="doc-badge"><span class="t">${l}</span><div dir="ltr" style="font-size:10px;color:rgba(255,255,255,.7);font-weight:700">${a?`SALES INVOICE`:`PURCHASE INVOICE`}</div><div class="n">رقم: ${T(e.number||`—`)}</div></div>
</div>
${e.header_text||i.invoice_header_text?`<div class="note-box">${m(e.header_text||i.invoice_header_text||``)}</div>`:``}
<table class="doc">
<tr><td colspan="${x}" class="sec-title">${l} رقم ${m(e.number||`—`)} <span dir="ltr" style="font-size:10px;font-weight:400;opacity:.8">${a?`SALES`:`PURCHASE`} • ITEMS ${E.length}</span></td></tr>
<tr><td class="lbl">رقم الفاتورة</td><td class="val">${T(e.number||`—`)}</td><td class="lbl">التاريخ${e.due_date?` / الاستحقاق`:``}</td><td class="val" colspan="${S}">${n(e.date)}${e.due_date?` / ${n(e.due_date)}`:``}</td></tr>
<tr><td class="lbl">${a?`العميل`:`المورد`}</td><td class="val">${m(e.party_name||`عميل نقدي`)}${I?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right">${m(I)}</div>`:``}</td><td class="lbl">الفرع</td><td class="val" colspan="${S}">${m(e.branch_name||`—`)}</td></tr>
<tr><td class="lbl">الدفع</td><td class="val">${m(f[e.payment_method||``]||e.payment_method||`—`)}${A||j?` (كاش: ${w(A)} • شبكة: ${w(j)})`:``}</td><td class="lbl">الحالة</td><td class="val" colspan="${S}"><span class="status-pill">${p[e.status||``]||e.status||`—`}</span></td></tr>
<tr><td colspan="${x}" class="sec-title">الأصناف <span dir="ltr" style="font-size:10px;font-weight:400;opacity:.8">ITEMS (${E.length})</span></td></tr>
${b?`<tr><th style="width:32px">م</th><th>الصنف</th><th>باركود</th><th>الوحدة</th><th>الكمية</th><th>السعر</th><th>الخصم</th><th>الضريبة</th><th>الإجمالي</th></tr>`:`<tr><th style="width:36px">م</th><th colspan="2">الصنف</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr>`}
<tbody>${D||`<tr><td colspan="${x}" style="text-align:center;color:#94a3b8">لا توجد أصناف</td></tr>`}</tbody>
<tr class="grand"><td colspan="${x-2}">الإجمالي</td><td colspan="2">${w(g)}</td></tr>
<tr class="paidrow"><td colspan="${x-2}">المدفوع</td><td colspan="2">${w(_)}</td></tr>
<tr class="due"><td colspan="${x-2}">المتبقي</td><td colspan="2">${w(v)}</td></tr>
<tr><td class="lbl">المبلغ كتابة</td><td class="val" colspan="${C}">${m(h(g,u))}</td></tr>
${e.notes?`<tr><td class="lbl">ملاحظات</td><td class="val" colspan="${C}">${m(e.notes)}</td></tr>`:``}
${e.terms_text||i.invoice_terms_text?`<tr><td class="lbl">الشروط</td><td class="val" colspan="${C}">${m(e.terms_text||i.invoice_terms_text||``)}</td></tr>`:``}
${O.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${C}">${O.map(({label:e,value:t})=>`${m(e)}: ${m(t)}`).join(` • `)}</td></tr>`:``}
${k.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${C}">${k.map(e=>`${m(e.key)}: ${m(e.value)}`).join(` • `)}</td></tr>`:``}
${i.invoice_show_bank_details?`<tr><td class="lbl">البنك</td><td class="val" colspan="${C}">الحساب البنكي: ${m(i.phone||`—`)}</td></tr>`:``}
</table>
<div class="qr-row">
${e.contentQrDataUrl?`<div class="qr-box"><img src="${e.contentQrDataUrl}" alt="QR" /><div class="cap">امسح لعرض الأصناف والبيانات</div></div>`:``}
${e.qrDataUrl?`<div class="qr-box"><img src="${e.qrDataUrl}" alt="ZATCA QR" /><div class="cap">فواتير ZATCA</div></div>`:``}
</div>
${i.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||i.invoice_footer_text?`<div class="footer">${m(e.footer_text||i.invoice_footer_text||``)}</div>`:`<div class="footer">قالب: ${b?`A4 عرضي`:y===`thermal`?`حراري`:y.toUpperCase()} • ${m(i.company_name||``)}</div>`}
</div></body></html>`}function v(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}export{d as a,u as i,o as n,v as o,c as r,_ as t};