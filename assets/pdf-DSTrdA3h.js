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
</body></html>`}function t(t){let n=e(t),r=window.open(``,`_blank`);r&&(r.document.write(n),r.document.close(),setTimeout(()=>r.print(),500))}function n(e,t,n){let r=e.items||[],i=e.currency||`ر.س`,a=e.subtotal??r.reduce((e,t)=>e+t.qty*t.price,0),o=e.tax??0,s=e.discount??0,c=e.total??a,l=e.vat_no||``,u=e.order_type||``,d=e.table_no||``,f=e.shift_no,p=e.payment_methods||{},m=[p.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(p.cash).toFixed(2)}</td></tr>`:``,p.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(p.card).toFixed(2)}</td></tr>`:``,p.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(p.online).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),h=e.branch_name||``,g=e.cashier_name||``,_=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
<style>
@page{size:80mm auto;margin:0}
body{font-family:'Cairo',monospace;width:80mm;padding:4mm;font-size:12px;color:#000;direction:rtl}
.head{text-align:center;border-bottom:2px solid #000;padding-bottom:6px;margin-bottom:6px}
.head h2{font-size:15px;margin:0 0 2px}
.head .meta{font-size:10px;color:#333;line-height:1.7}
.badge{display:inline-block;border:1.5px solid #000;border-radius:6px;padding:1px 10px;font-size:10px;font-weight:700;margin-top:3px}
.center{text-align:center}
table.items{width:100%;border-collapse:collapse;margin:4px 0}
table.items th{font-size:10px;border-bottom:1.5px solid #000;padding:3px 2px;text-align:right}
table.items th.c,table.items td.c{text-align:center}
table.items th.l,table.items td.l{text-align:left}
table.items td{padding:3px 2px;font-size:11px;border-bottom:1px dotted #999;vertical-align:top}
table.items td.n{font-weight:700}
table.tots{width:100%;border-collapse:collapse;margin-top:4px}
table.tots td{padding:2px 0;font-size:11px}
table.tots tr.grand td{font-weight:bold;font-size:14px;border-top:1.5px solid #000;padding-top:4px}
.dashed{border-top:1px dashed #000;margin:6px 0}
.total{font-weight:bold;font-size:13px}
</style></head><body>
<div class="head">
<h2>إيصال ${u===`dine-in`?`صالة`:u===`takeaway`?`سفري`:u===`delivery`?`توصيل`:``}</h2>
<div class="meta">رقم: ${(e.id||``).slice(0,8)||`---`} • ${new Date().toLocaleString(`en-GB`)}</div>
${h?`<div class="meta">الفرع: ${h}</div>`:``}
${g?`<div class="meta">الكاشير: ${g}</div>`:``}
${l?`<div class="meta">الرقم الضريبي: ${l}</div>`:``}
${d?`<div><span class="badge">طاولة ${d}</span></div>`:``}
${f?`<div class="meta">وردية #${f}</div>`:``}
</div>
${e.customer_name?`<div class="center" style="font-size:11px">العميل: ${e.customer_name}${e.customer_phone?` - `+e.customer_phone:``}</div>`:``}
${e.customer_address?`<div class="center" style="font-size:11px">العنوان: ${e.customer_address}</div>`:``}
${e.delivery_fee?`<div class="center" style="font-size:11px">رسوم التوصيل: ${Number(e.delivery_fee).toFixed(2)} ${i}</div>`:``}
<table class="items">
<tr><th style="width:26px" class="c">م</th><th>الصنف</th><th class="c">كمية</th><th class="l">الإجمالي</th></tr>
${r.map((e,t)=>`<tr><td class="c">${t+1}</td><td class="n">${e.name}${e.size&&e.size!==`عادي`?` (${e.size})`:``}${e.notes?`<div style="font-size:9px;font-weight:400">📝 ${e.notes}</div>`:``}<div style="font-size:9px;font-weight:400">${Number(e.price).toFixed(2)}</div></td><td class="c">${e.qty}</td><td class="l">${(e.qty*e.price).toFixed(2)}</td></tr>`).join(``)}
</table>
<table class="tots">
<tr><td>المجموع الفرعي</td><td style="text-align:left">${a.toFixed(2)} ${i}</td></tr>
${s>0?`<tr><td>الخصم</td><td style="text-align:left">-${s.toFixed(2)} ${i}</td></tr>`:``}
${o>0?`<tr><td>الضريبة</td><td style="text-align:left">+${o.toFixed(2)} ${i}</td></tr>`:``}
<tr class="grand"><td>الإجمالي</td><td style="text-align:left">${c.toFixed(2)} ${i}</td></tr>
</table>
${m?`<div class="dashed"></div><table class="tots">${m}</table>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${n?`<div class="center" style="margin-top:6px"><img src="${n}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${(e.id||``).slice(0,12)||`ZATCA`}</div>`}
</body></html>`,v=window.open(``,`_blank`);if(!v){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}v.document.write(_),v.document.close(),setTimeout(()=>{v.focus(),v.print()},400)}export{n,t};