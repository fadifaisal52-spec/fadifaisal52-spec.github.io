import{r as e}from"./invoicePrint-DJSx9HMQ.js";function t(e){let{title:t,columns:n,rows:r,dateRange:i,vatNo:a}=e,o=i?`<p>الفترة: ${i.from} — ${i.to}</p>`:``,s=n.map(e=>`<th>${e.label}</th>`).join(``),c=r.map(e=>`<tr>${n.map(t=>`<td>${e[t.key]??``}</td>`).join(``)}</tr>`).join(``);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${t}</title>
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
<h1>${t}</h1>
<div class="meta">${o}${a?`<p>الرقم الضريبي: ${a}</p>`:``}</div>
<table><thead><tr>${s}</tr></thead><tbody>${c||`<tr><td colspan="`+n.length+`">لا توجد بيانات</td></tr>`}</tbody></table>
<div class="footer">تم التصدير آلياً — ${new Date().toLocaleString(`en-GB`)}</div>
${e.summary?`<div style="margin-top:16px;padding:12px;background:#f8fafc;border-radius:8px;">${e.summary.map(e=>`<div style="display:flex;justify-content:space-between;padding:4px 0;"><span style="color:#64748b">${e.label}</span><span style="font-weight:600">${e.value}</span></div>`).join(``)}</div>`:``}
</body></html>`}function n(e){let n=t(e),r=window.open(``,`_blank`);r&&(r.document.write(n),r.document.close(),setTimeout(()=>r.print(),500))}function r(t,n,r){let i=t.items||[],a=t.currency||`ر.س`,o=t.subtotal??i.reduce((e,t)=>e+t.qty*t.price,0);t.tax,t.discount;let s=t.total??o,c=t.vat_no||``,l=t.order_type||``,u=t.table_no||``,d=t.shift_no,f=t.payment_methods||{},p=[f.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(f.cash).toFixed(2)}</td></tr>`:``,f.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(f.card).toFixed(2)}</td></tr>`:``,f.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(f.online).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),m=t.branch_name||``,h=t.cashier_name||``,g=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
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
<h2>إيصال ${l===`dine-in`?`صالة`:l===`takeaway`?`سفري`:l===`delivery`?`توصيل`:``}</h2>
<div class="meta">رقم: ${(t.id||``).slice(0,8)||`---`} • ${new Date().toLocaleString(`en-GB`)}</div>
${m?`<div class="meta">الفرع: ${m}</div>`:``}
${h?`<div class="meta">الكاشير: ${h}</div>`:``}
${c?`<div class="meta">الرقم الضريبي: ${c}</div>`:``}
${u?`<div><span class="badge">طاولة ${u}</span></div>`:``}
${d?`<div class="meta">وردية #${d}</div>`:``}
</div>
${t.customer_name?`<div class="center" style="font-size:11px">العميل: ${t.customer_name}${t.customer_phone?` - `+t.customer_phone:``}</div>`:``}
${t.customer_address?`<div class="center" style="font-size:11px">العنوان: ${t.customer_address}</div>`:``}
${t.delivery_fee?`<div class="center" style="font-size:11px">رسوم التوصيل: ${Number(t.delivery_fee).toFixed(2)} ${a}</div>`:``}
<table class="items">
<tr><th style="width:26px" class="c">م</th><th>الصنف</th><th class="c">كمية</th><th class="l">الإجمالي</th></tr>
${i.map((t,n)=>{let r=e(t.name,t.name_en);return`<tr><td class="c">${n+1}</td><td class="n">${t.name}${r?`<div dir="ltr" style="font-size:9px;font-weight:400;text-align:right">${r}</div>`:``}${t.size&&t.size!==`عادي`?` (${t.size})`:``}${t.notes?`<div style="font-size:9px;font-weight:400">📝 ${t.notes}</div>`:``}<div style="font-size:9px;font-weight:400">${Number(t.price).toFixed(2)}</div></td><td class="c">${t.qty}</td><td class="l">${(t.qty*t.price).toFixed(2)}</td></tr>`}).join(``)}
</table>
<table class="tots">
<tr class="grand"><td>الإجمالي</td><td style="text-align:left">${s.toFixed(2)} ${a}</td></tr>
</table>
${p?`<div class="dashed"></div><table class="tots">${p}</table>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${t.scan_qr?`<div class="center" style="margin-top:6px"><img src="${t.scan_qr}" style="width:100px;height:100px" /><div style="font-size:9px">امسح لفتح الفاتورة</div></div>`:``}
${r?`<div class="center" style="margin-top:6px"><img src="${r}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:t.scan_qr?``:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${(t.id||``).slice(0,12)||`ZATCA`}</div>`}
</body></html>`,_=window.open(``,`_blank`);if(!_){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}_.document.write(g),_.document.close(),setTimeout(()=>{_.focus(),_.print()},400)}export{r as n,n as t};