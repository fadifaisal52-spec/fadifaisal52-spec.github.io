import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{i as t,o as n}from"./utils-Bs8Fug52.js";import{i as r}from"./customFields-DrfYTuxN.js";import{r as i}from"./transliterate-jMEfCtGl.js";var a=e({amountInWords:()=>u,buildInvoicePrintHtml:()=>f,buildInvoiceQrText:()=>d,latinName:()=>o,openPrintWindow:()=>p});function o(e,t){let n=String(t||``).trim();if(n)return n;let r=String(e||``);if(!r||!/[\u0600-\u06FF]/.test(r))return``;let a=i(r);return a&&a!==r?a:``}var s={cash:`نقدي`,card:`شبكة`,bank_transfer:`تحويل بنكي`,online:`أونلاين`,apple_pay:`Apple Pay`,google_pay:`Google Pay`,wallet:`محفظة رقمية`,credit:`آجل`,check:`شيك`,mixed:`مقسّم (كاش + شبكة)`},c={paid:`مدفوعة`,partial:`جزئية`,unpaid:`غير مدفوعة`};function l(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function u(e,t=``){let n=Math.round((Number(e)||0)*100)/100;if(!isFinite(n))return``;let r=Math.floor(Math.abs(n)),i=Math.round((Math.abs(n)-r)*100),a=[``,`واحد`,`اثنان`,`ثلاثة`,`أربعة`,`خمسة`,`ستة`,`سبعة`,`ثمانية`,`تسعة`,`عشرة`,`أحد عشر`,`اثنا عشر`,`ثلاثة عشر`,`أربعة عشر`,`خمسة عشر`,`ستة عشر`,`سبعة عشر`,`ثمانية عشر`,`تسعة عشر`],o=[``,``,`عشرون`,`ثلاثون`,`أربعون`,`خمسون`,`ستون`,`سبعون`,`ثمانون`,`تسعون`],s=[``,`مائة`,`مائتان`,`ثلاثمائة`,`أربعمائة`,`خمسمائة`,`ستمائة`,`سبعمائة`,`ثمانمائة`,`تسعمائة`],c=e=>{let t=Math.floor(e/100),n=e%100,r=[];if(t&&r.push(s[t]),n)if(n<20)r.push(a[n]);else{let e=n%10,t=Math.floor(n/10);r.push(e?`${a[e]} و${o[t]}`:o[t])}return r.join(` و`)},l=[[``,``,``],[`ألف`,`ألفان`,`آلاف`],[`مليون`,`مليونان`,`ملايين`],[`مليار`,`ملياران`,`مليارات`]];if(r===0)var u=`صفر`;else{let e=[],t=r,n=0;for(;t>0&&n<l.length;){let r=t%1e3;if(r){let[t,i,a]=l[n];n===0?e.unshift(c(r)):r===1?e.unshift(t):r===2?e.unshift(i):r<=10?e.unshift(`${c(r)} ${a}`):e.unshift(`${c(r)} ${t}ًا`)}t=Math.floor(t/1e3),n++}var u=e.join(` و`)}let d=`فقط ${u} ${t}`.trim()+` لا غير`;return i>0&&(d+=` و${i} هللة`),(n<0?`سالب `:``)+d}function d(e){let t=[];return t.push(`${e.kind===`sale`?`فاتورة بيع`:`فاتورة شراء`} رقم: ${e.number||`—`}`),t.push(`التاريخ: ${e.date||`—`} | ${e.kind===`sale`?`العميل`:`المورد`}: ${e.party||`—`} | الفرع: ${e.branch||`—`}`),t.push(`الدفع: ${e.payment||`—`} | الحالة: ${e.status||`—`}`),t.push(`الأصناف:`),(e.items||[]).forEach((e,n)=>{let r=e.name||e.description||`—`,i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,o=Number(e.total)||i*a;t.push(`${n+1}) ${r} × ${i} @ ${a} = ${o}`)}),t.push(`الإجمالي: ${Number(e.total)||0} | المدفوع: ${Number(e.paid)||0} | المتبقي: ${Number(e.remaining)||0} ${e.currency||``}`),t.join(`
`)}function f(e,i){let a=e.kind===`sale`,d=(i.invoice_accent_color||`#0F172A`).trim()||`#0F172A`,f=a?`فاتورة بيع`:`فاتورة شراء`,p=i.currency||``,m=Number(e.total)||0,h=Number(e.paid)||0,g=e.remaining==null?m-h:Number(e.remaining),_=String(i.print_template||`thermal`).toLowerCase(),v=_===`landscape`,y=v?9:6,b=v?6:3,x=v?y-1:5,S=e=>`<span class="num">${n(e,p)}</span>`,C=e=>`<span dir="ltr" style="unicode-bidi:isolate">${l(e)}</span>`,w=(e.items||[]).map((e,t)=>{let n=e.name||e.description||e.product?.name||`—`,r=o(n,e.name_en||e.product?.name_en),i=Number(e.qty)||0,a=Number(e.unit_price??e.price)||0,s=Number(e.discount)||0,c=Number(e.tax_rate)||0,u=Number(e.total)||i*a-s+(i*a-s)*c/100,d=[e.size,e.unit].filter(Boolean).join(` • `),f=`<span style="unicode-bidi:isolate">${l(n)}</span>${r?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right;unicode-bidi:isolate">${l(r)}</div>`:``}${d?`<div style="font-size:11px;color:#64748b;font-weight:400">${l(d)}</div>`:``}`;return v?`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${t+1}</span></td><td style="font-weight:700">${f}</td><td style="text-align:center"><span dir="ltr" style="unicode-bidi:isolate">${l(e.barcode||e.sku||`—`)}</span></td><td style="text-align:center">${l(e.unit||`—`)}</td><td style="text-align:center;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${i}</span></td><td style="text-align:center">${S(a)}</td><td style="text-align:center">${s?S(s):`—`}</td><td style="text-align:center"><span dir="ltr" style="unicode-bidi:isolate">${c?`${c}%`:`—`}</span></td><td style="text-align:center;font-weight:800">${S(u)}</td></tr>`:`<tr class="item"><td style="text-align:center;color:#94a3b8;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${t+1}</span></td><td colspan="2" style="font-weight:700">${f}</td><td style="text-align:center;font-weight:800"><span dir="ltr" style="unicode-bidi:isolate">${i}</span></td><td style="text-align:center">${S(a)}</td><td style="text-align:center;font-weight:800">${S(u)}</td></tr>`}).join(``),T=r(e.custom_values),E=(e.extra_fields||[]).filter(e=>e.key?.trim()),D=Number(e.cash_amount)||(e.payment_method===`cash`?h:0),O=Number(e.card_amount)||(e.payment_method===`card`?h:0),k=(e.branch_name||``).trim(),A=k?`فرع: ${k}`:``,j=_===`thermal`?`@page { size: 80mm auto; margin: 2mm; }`:_===`a5`?`@page { size: A5; margin: 8mm 10mm; }`:v?`@page { size: A4 landscape; margin: 8mm 10mm; }`:`@page { size: A4; margin: 10mm 12mm; }`,M=_===`thermal`?`.wrap { max-width: 300px; margin: 0 auto; }`:v?`.wrap { max-width: 1060px; margin: 0 auto; }`:`.wrap { max-width: 780px; margin: 0 auto; }`,N=o(e.party_name),P=o(i.company_name);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${f} ${l(e.number||``)}</title>
<style>
${j}
* { box-sizing: border-box; }
body { font-family: 'Cairo', 'Inter', sans-serif; color: #1e293b; margin: 0; background: #fff; direction: rtl; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.num { direction: ltr; unicode-bidi: isolate; white-space: nowrap; font-variant-numeric: tabular-nums; }
td.val, td.lbl, th, .doc-badge .n { unicode-bidi: isolate; }
${M}
.co-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 14px; background: linear-gradient(135deg, #0f172a, #334155); color: #fff; margin-bottom: 10px; }
.brand .name { font-size: 20px; font-weight: 800; }
.brand .sub { font-size: 11px; color: rgba(255,255,255,.78); margin-top: 3px; }
.doc-badge { text-align: end; }
.doc-badge .t { display: inline-block; padding: 6px 22px; border-radius: 20px; background: #fff; color: #0f172a; font-weight: 800; font-size: 15px; }
.doc-badge .n { font-size: 12px; color: rgba(255,255,255,.85); margin-top: 6px; font-weight: 700; }
table.doc { width: 100%; border-collapse: collapse; font-size: 12.5px; }
table.doc th, table.doc td { border: 1.5px solid #cbd5e1; padding: 8px 10px; }
table.doc .sec-title { background: ${d}; color: #fff; font-weight: 800; font-size: 13px; text-align: center; }
table.doc .lbl { background: #f1f5f9; font-weight: 800; color: #334155; white-space: nowrap; }
table.doc .val { font-weight: 700; }
table.doc thead th { background: ${d}; color: #fff; font-size: 12px; }
table.doc tr.item td { background: #fff; }
table.doc tr.item:nth-child(even) td { background: #f8fafc; }
table.doc tr.grand td { background: ${d}; color: #fff; font-weight: 800; font-size: 15px; }
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
.sig div { border-top: 1.5px solid ${d}; padding-top: 6px; font-weight: 700; }
.footer { margin-top: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style></head><body><div class="wrap">
<div class="co-head">
<div class="brand">
${i.logo_url&&i.invoice_show_logo!==!1?`<img src="${l(i.logo_url)}" alt="" style="width:64px;height:64px;border-radius:14px;object-fit:cover;background:#fff;flex-shrink:0" />`:``}
<div style="flex:1;min-width:0">
<div class="name">${l(i.company_name||(a?`فاتورة بيع`:`فاتورة شراء`))}${P?`<div dir="ltr" style="font-size:12px;font-weight:400;color:rgba(255,255,255,.75);text-align:right">${l(P)}</div>`:``}</div>
<div class="sub">${[A,i.address,i.phone?`هاتف: ${i.phone}`:``,i.vat_no?`سجل/ضريبي: ${i.vat_no}`:``].filter(Boolean).join(` • `)||t(e.date)}</div>
</div>
</div>
<div class="doc-badge"><span class="t">${f}</span><div dir="ltr" style="font-size:10px;color:rgba(255,255,255,.7);font-weight:700">${a?`SALES INVOICE`:`PURCHASE INVOICE`}</div><div class="n">رقم: ${C(e.number||`—`)}</div></div>
</div>
${e.header_text||i.invoice_header_text?`<div class="note-box">${l(e.header_text||i.invoice_header_text||``)}</div>`:``}
<table class="doc">
<tr><td colspan="${y}" class="sec-title">${f} رقم ${l(e.number||`—`)} <span dir="ltr" style="font-size:10px;font-weight:400;opacity:.8">${a?`SALES`:`PURCHASE`} • ITEMS ${(e.items||[]).length}</span></td></tr>
<tr><td class="lbl">رقم الفاتورة</td><td class="val">${C(e.number||`—`)}</td><td class="lbl">التاريخ${e.due_date?` / الاستحقاق`:``}</td><td class="val" colspan="${b}">${t(e.date)}${e.due_date?` / ${t(e.due_date)}`:``}</td></tr>
<tr><td class="lbl">${a?`العميل`:`المورد`}</td><td class="val">${l(e.party_name||`عميل نقدي`)}${N?`<div dir="ltr" style="font-size:10px;color:#64748b;font-weight:400;text-align:right">${l(N)}</div>`:``}</td><td class="lbl">الفرع</td><td class="val" colspan="${b}">${l(e.branch_name||`—`)}</td></tr>
<tr><td class="lbl">الدفع</td><td class="val">${l(s[e.payment_method||``]||e.payment_method||`—`)}${D||O?` (كاش: ${S(D)} • شبكة: ${S(O)})`:``}</td><td class="lbl">الحالة</td><td class="val" colspan="${b}"><span class="status-pill">${c[e.status||``]||e.status||`—`}</span></td></tr>
<tr><td colspan="${y}" class="sec-title">الأصناف <span dir="ltr" style="font-size:10px;font-weight:400;opacity:.8">ITEMS (${(e.items||[]).length})</span></td></tr>
${v?`<tr><th style="width:32px">م</th><th>الصنف</th><th>باركود</th><th>الوحدة</th><th>الكمية</th><th>السعر</th><th>الخصم</th><th>الضريبة</th><th>الإجمالي</th></tr>`:`<tr><th style="width:36px">م</th><th colspan="2">الصنف</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr>`}
<tbody>${w||`<tr><td colspan="${y}" style="text-align:center;color:#94a3b8">لا توجد أصناف</td></tr>`}</tbody>
<tr class="grand"><td colspan="${y-2}">الإجمالي</td><td colspan="2">${S(m)}</td></tr>
<tr class="paidrow"><td colspan="${y-2}">المدفوع</td><td colspan="2">${S(h)}</td></tr>
<tr class="due"><td colspan="${y-2}">المتبقي</td><td colspan="2">${S(g)}</td></tr>
<tr><td class="lbl">المبلغ كتابة</td><td class="val" colspan="${x}">${l(u(m,p))}</td></tr>
${e.notes?`<tr><td class="lbl">ملاحظات</td><td class="val" colspan="${x}">${l(e.notes)}</td></tr>`:``}
${e.terms_text||i.invoice_terms_text?`<tr><td class="lbl">الشروط</td><td class="val" colspan="${x}">${l(e.terms_text||i.invoice_terms_text||``)}</td></tr>`:``}
${T.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${x}">${T.map(({label:e,value:t})=>`${l(e)}: ${l(t)}`).join(` • `)}</td></tr>`:``}
${E.length?`<tr><td class="lbl">إضافي</td><td class="val" colspan="${x}">${E.map(e=>`${l(e.key)}: ${l(e.value)}`).join(` • `)}</td></tr>`:``}
${i.invoice_show_bank_details?`<tr><td class="lbl">البنك</td><td class="val" colspan="${x}">الحساب البنكي: ${l(i.phone||`—`)}</td></tr>`:``}
</table>
<div class="qr-row">
${e.contentQrDataUrl?`<div class="qr-box"><img src="${e.contentQrDataUrl}" alt="QR" /><div class="cap">امسح لعرض الأصناف والبيانات</div></div>`:``}
${e.qrDataUrl?`<div class="qr-box"><img src="${e.qrDataUrl}" alt="ZATCA QR" /><div class="cap">فواتير ZATCA</div></div>`:``}
</div>
${i.invoice_show_signature===!1?``:`<div class="sigs"><div class="sig"><div>المُعدّ</div></div><div class="sig"><div>المعتمد</div></div><div class="sig"><div>المستلم</div></div></div>`}
${e.footer_text||i.invoice_footer_text?`<div class="footer">${l(e.footer_text||i.invoice_footer_text||``)}</div>`:`<div class="footer">قالب: ${v?`A4 عرضي`:_===`thermal`?`حراري`:_.toUpperCase()} • ${l(i.company_name||``)}</div>`}
</div></body></html>`}function p(e,t){let n=window.open(``,`_blank`);if(!n){t?.();return}n.document.write(e),n.document.close(),setTimeout(()=>n.print(),500)}export{p as i,a as n,o as r,f as t};