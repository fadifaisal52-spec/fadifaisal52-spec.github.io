import{a as e}from"./utils-Bf1UnMGU.js";import{r as t}from"./invoicePrint-CUWuyN17.js";function n(t){let{title:n,columns:r,rows:i,dateRange:a,vatNo:o}=t,s=a?`<p>الفترة: ${e(a.from)} — ${e(a.to)}</p>`:``,c=r.map(t=>`<th>${e(t.label)}</th>`).join(``),l=i.map(t=>`<tr>${r.map(n=>`<td>${e(t[n.key]??``)}</td>`).join(``)}</tr>`).join(``);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${e(n)}</title>
<style>
body{font-family:'Inter','Cairo',sans-serif;padding:32px;color:#0F172A}
h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;margin:0}
.meta{color:#64748b;font-size:13px;margin:4px 0 16px}
table{width:100%;border-collapse:collapse;font-size:13px;border:1px solid #cbd5e1}
th{background:#0F172A;color:#fff;padding:10px 12px;text-align:right;font-weight:600;border:1px solid #0F172A}
td{padding:8px 12px;border:1px solid #cbd5e1;text-align:right}
tr:nth-child(even){background:#f1f5f9}
tr.sum-row td{background:#fef3c7;border:2px solid #0F172A;font-weight:700}
tr.sum-row td{font-size:14px}
.footer{margin-top:24px;color:#94a3b8;font-size:11px}
</style></head><body>
<h1>${e(n)}</h1>
<div class="meta">${s}${o?`<p>الرقم الضريبي: ${e(o)}</p>`:``}</div>
<table><thead><tr>${c}</tr></thead><tbody>${l||`<tr><td colspan="`+r.length+`">لا توجد بيانات</td></tr>`}</tbody></table>
<div class="footer">تم التصدير آلياً — ${new Date().toLocaleString(`en-GB`)}</div>
${t.summary?`<div style="margin-top:16px;padding:12px;background:#f8fafc;border-radius:8px;">${t.summary.map(t=>`<div style="display:flex;justify-content:space-between;padding:4px 0;"><span style="color:#64748b">${e(t.label)}</span><span style="font-weight:600">${e(t.value)}</span></div>`).join(``)}</div>`:``}
</body></html>`}function r(e){let t=n(e),r=window.open(``,`_blank`);r&&(r.document.write(t),r.document.close(),setTimeout(()=>r.print(),500))}function i(n,r,i){let a=n.items||[],o=n.currency||`ر.س`,s=n.subtotal??a.reduce((e,t)=>e+t.qty*t.price,0);n.tax,n.discount;let c=n.total??s,l=n.vat_no||``,u=n.order_type||``,d=n.table_no||``,f=n.shift_no,p=n.payment_methods||{},m=[p.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(p.cash).toFixed(2)}</td></tr>`:``,p.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(p.card).toFixed(2)}</td></tr>`:``,p.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(p.online).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),h=n.branch_name||``,g=n.cashier_name||``,_=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
<style>
@page{size:80mm auto;margin:0}
body{font-family:'Cairo',monospace;width:80mm;padding:4mm;font-size:12px;color:#000;direction:rtl}
.head{text-align:center;border:2px solid #000;border-radius:8px;padding:6px 4px;margin-bottom:6px}
.head h2{font-size:15px;margin:0 0 2px}
.head .meta{font-size:10px;color:#333;line-height:1.7}
.badge{display:inline-block;border:1.5px solid #000;border-radius:6px;padding:1px 10px;font-size:10px;font-weight:700;margin-top:3px}
.center{text-align:center}
table.items{width:100%;border-collapse:collapse;margin:4px 0;border:1.5px solid #000}
table.items th{font-size:10px;border:1.5px solid #000;background:#eee;padding:4px 3px;text-align:right}
table.items th.c,table.items td.c{text-align:center}
table.items th.l,table.items td.l{text-align:left}
table.items td{padding:4px 3px;font-size:11px;border:1px solid #000;vertical-align:top}
table.items td.n{font-weight:700}
table.tots{width:100%;border-collapse:collapse;margin-top:4px;border:1.5px solid #000}
table.tots td{padding:3px 4px;font-size:11px;border-top:1px solid #000}
table.tots tr.grand td{font-weight:bold;font-size:14px;border-top:2px solid #000;padding-top:4px;background:#eee}
.dashed{border-top:1px dashed #000;margin:6px 0}
.total{font-weight:bold;font-size:13px}
</style></head><body>
<div class="head">
<h2>إيصال ${u===`dine-in`?`صالة`:u===`takeaway`?`سفري`:u===`delivery`?`توصيل`:``}</h2>
<div class="meta">رقم: ${(n.id||``).slice(0,8)||`---`} • ${new Date().toLocaleString(`en-GB`)}</div>
${h?`<div class="meta">الفرع: ${e(h)}</div>`:``}
${g?`<div class="meta">الكاشير: ${e(g)}</div>`:``}
${l?`<div class="meta">الرقم الضريبي: ${e(l)}</div>`:``}
${d?`<div><span class="badge">طاولة ${e(d)}</span></div>`:``}
${f?`<div class="meta">وردية #${e(f)}</div>`:``}
</div>
${n.customer_name?`<div class="center" style="font-size:11px">العميل: ${e(n.customer_name)}${n.customer_phone?` - `+e(n.customer_phone):``}</div>`:``}
${n.customer_address?`<div class="center" style="font-size:11px">العنوان: ${e(n.customer_address)}</div>`:``}
${n.delivery_fee?`<div class="center" style="font-size:11px">رسوم التوصيل: ${Number(n.delivery_fee).toFixed(2)} ${e(o)}</div>`:``}
<table class="items">
<tr><th style="width:26px" class="c">م</th><th>الصنف</th><th class="c">كمية</th><th class="l">الإجمالي</th></tr>
${a.map((n,r)=>{let i=t(n.name,n.name_en);return`<tr><td class="c">${r+1}</td><td class="n">${e(n.name)}${i?`<div dir="ltr" style="font-size:9px;font-weight:400;text-align:right">${e(i)}</div>`:``}${n.size&&n.size!==`عادي`?` (${e(n.size)})`:``}${n.notes?`<div style="font-size:9px;font-weight:400">📝 ${e(n.notes)}</div>`:``}<div style="font-size:9px;font-weight:400">${Number(n.price).toFixed(2)}</div></td><td class="c">${n.qty}</td><td class="l">${(n.qty*n.price).toFixed(2)}</td></tr>`}).join(``)}
</table>
<table class="tots">
<tr class="grand"><td>الإجمالي</td><td style="text-align:left">${c.toFixed(2)} ${e(o)}</td></tr>
</table>
${m?`<div class="dashed"></div><table class="tots">${m}</table>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${n.scan_qr?`<div class="center" style="margin-top:6px"><img src="${n.scan_qr}" style="width:100px;height:100px" /><div style="font-size:9px">امسح لفتح الفاتورة</div></div>`:``}
${i?`<div class="center" style="margin-top:6px"><img src="${i}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:n.scan_qr?``:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${(n.id||``).slice(0,12)||`ZATCA`}</div>`}
</body></html>`,v=window.open(``,`_blank`);if(!v){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}v.document.write(_),v.document.close(),setTimeout(()=>{v.focus(),v.print()},400)}export{i as n,r as t};