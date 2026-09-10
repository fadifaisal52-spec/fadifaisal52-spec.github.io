function e(e){let{title:t,columns:n,rows:r,dateRange:i,vatNo:a}=e,o=i?`<p>الفترة: ${i.from} — ${i.to}</p>`:``,s=n.map(e=>`<th>${e.label}</th>`).join(``),c=r.map(e=>`<tr>${n.map(t=>`<td>${e[t.key]??``}</td>`).join(``)}</tr>`).join(``);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${t}</title>
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
</body></html>`}function t(t){let n=e(t),r=window.open(``,`_blank`);r&&(r.document.write(n),r.document.close(),setTimeout(()=>r.print(),500))}function n(e,t,n){let r=e.items||[],i=e.currency||`ر.س`,a=e.subtotal??r.reduce((e,t)=>e+t.qty*t.price,0);e.tax,e.discount;let o=e.total??a,s=e.vat_no||``,c=e.order_type||``,l=e.table_no||``,u=e.shift_no,d=e.payment_methods||{},f=[d.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(d.cash).toFixed(2)}</td></tr>`:``,d.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(d.card).toFixed(2)}</td></tr>`:``,d.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(d.online).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),p=e.branch_name||``,m=e.cashier_name||``,h=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
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
<h2>إيصال ${c===`dine-in`?`صالة`:c===`takeaway`?`سفري`:c===`delivery`?`توصيل`:``}</h2>
<div class="meta">رقم: ${(e.id||``).slice(0,8)||`---`} • ${new Date().toLocaleString(`en-GB`)}</div>
${p?`<div class="meta">الفرع: ${p}</div>`:``}
${m?`<div class="meta">الكاشير: ${m}</div>`:``}
${s?`<div class="meta">الرقم الضريبي: ${s}</div>`:``}
${l?`<div><span class="badge">طاولة ${l}</span></div>`:``}
${u?`<div class="meta">وردية #${u}</div>`:``}
</div>
${e.customer_name?`<div class="center" style="font-size:11px">العميل: ${e.customer_name}${e.customer_phone?` - `+e.customer_phone:``}</div>`:``}
${e.customer_address?`<div class="center" style="font-size:11px">العنوان: ${e.customer_address}</div>`:``}
${e.delivery_fee?`<div class="center" style="font-size:11px">رسوم التوصيل: ${Number(e.delivery_fee).toFixed(2)} ${i}</div>`:``}
<table class="items">
<tr><th style="width:26px" class="c">م</th><th>الصنف</th><th class="c">كمية</th><th class="l">الإجمالي</th></tr>
${r.map((e,t)=>`<tr><td class="c">${t+1}</td><td class="n">${e.name}${e.size&&e.size!==`عادي`?` (${e.size})`:``}${e.notes?`<div style="font-size:9px;font-weight:400">📝 ${e.notes}</div>`:``}<div style="font-size:9px;font-weight:400">${Number(e.price).toFixed(2)}</div></td><td class="c">${e.qty}</td><td class="l">${(e.qty*e.price).toFixed(2)}</td></tr>`).join(``)}
</table>
<table class="tots">
<tr class="grand"><td>الإجمالي</td><td style="text-align:left">${o.toFixed(2)} ${i}</td></tr>
</table>
${f?`<div class="dashed"></div><table class="tots">${f}</table>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${e.scan_qr?`<div class="center" style="margin-top:6px"><img src="${e.scan_qr}" style="width:100px;height:100px" /><div style="font-size:9px">امسح لفتح الفاتورة</div></div>`:``}
${n?`<div class="center" style="margin-top:6px"><img src="${n}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:e.scan_qr?``:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${(e.id||``).slice(0,12)||`ZATCA`}</div>`}
</body></html>`,g=window.open(``,`_blank`);if(!g){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}g.document.write(h),g.document.close(),setTimeout(()=>{g.focus(),g.print()},400)}export{n,t};