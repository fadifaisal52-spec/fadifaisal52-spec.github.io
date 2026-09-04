function e(e){let{title:t,columns:n,rows:r,dateRange:i,companyName:a,vatNo:o}=e,s=i?`<p>الفترة: ${i.from} — ${i.to}</p>`:``,c=n.map(e=>`<th>${e.label}</th>`).join(``),l=r.map(e=>`<tr>${n.map(t=>`<td>${e[t.key]??``}</td>`).join(``)}</tr>`).join(``);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${t}</title>
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
<h1>${a||`شامل`}</h1>
<div class="meta"><p>${t}</p>${s}${o?`<p>الرقم الضريبي: ${o}</p>`:``}</div>
<table><thead><tr>${c}</tr></thead><tbody>${l||`<tr><td colspan="`+n.length+`">لا توجد بيانات</td></tr>`}</tbody></table>
<div class="footer">تم التصدير بواسطة نظام شامل — ${new Date().toLocaleString(`en-GB`)}</div>
${e.summary?`<div style="margin-top:16px;padding:12px;background:#f8fafc;border-radius:8px;">${e.summary.map(e=>`<div style="display:flex;justify-content:space-between;padding:4px 0;"><span style="color:#64748b">${e.label}</span><span style="font-weight:600">${e.value}</span></div>`).join(``)}</div>`:``}
</body></html>`}function t(t){let n=e(t),r=window.open(``,`_blank`);r&&(r.document.write(n),r.document.close(),setTimeout(()=>r.print(),500))}function n(e,t,n){let r=e.items||[],i=e.currency||`ر.س`,a=e.subtotal??r.reduce((e,t)=>e+t.qty*t.price,0),o=e.tax??0,s=e.discount??0,c=e.total??a,l=e.vat_no||``,u=e.order_type||``,d=e.table_no||``,f=e.shift_no,p=e.payment_methods||{},m=[p.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(p.cash).toFixed(2)}</td></tr>`:``,p.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(p.card).toFixed(2)}</td></tr>`:``,p.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(p.online).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),h=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
<style>
@page{size:80mm auto;margin:0}
body{font-family:'Cairo',monospace;width:80mm;padding:4mm;font-size:12px;color:#000;direction:rtl}
h2{text-align:center;font-size:14px;margin:4px 0}
.center{text-align:center}
.right{text-align:right}
table{width:100%;border-collapse:collapse}
td{padding:2px 0;font-size:11px}
.dashed{border-top:1px dashed #000;margin:6px 0}
.total{font-weight:bold;font-size:13px}
.label{font-size:10px;color:#444}
</style></head><body>
<h2>${t||`شامل`}</h2>
${l?`<div class="center">الرقم الضريبي: ${l}</div>`:``}
<div class="center">${new Date().toLocaleString(`en-GB`)}</div>
<div class="center">إيصال رقم: ${(e.id||``).slice(0,8)||`---`}</div>
${f?`<div class="center">وردية #${f}</div>`:``}
<div class="dashed"></div>
<table>
<tr><td><b>الصنف</b></td><td style="text-align:left"><b>السعر</b></td></tr>
${r.map(e=>`<tr><td>${e.qty}x ${e.name}</td><td style="text-align:left">${(e.qty*e.price).toFixed(2)}</td></tr>`).join(``)}
</table>
<div class="dashed"></div>
<table>
<tr><td>المجموع</td><td style="text-align:left">${a.toFixed(2)} ${i}</td></tr>
${s>0?`<tr><td>الخصم</td><td style="text-align:left">-${s.toFixed(2)}</td></tr>`:``}
${o>0?`<tr><td>الضريبة</td><td style="text-align:left">+${o.toFixed(2)}</td></tr>`:``}
<tr class="total"><td>الإجمالي</td><td style="text-align:left">${c.toFixed(2)} ${i}</td></tr>
</table>
${m?`<div class="dashed"></div><table>${m}</table>`:``}
${u?`<div class="center">${u===`dine-in`?`داخل`:u===`takeaway`?`سفري`:`توصيل`}${d?` - طاولة `+d:``}</div>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${n?`<div class="center" style="margin-top:6px"><img src="${n}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${(e.id||``).slice(0,12)||`ZATCA`}</div>`}
</body></html>`,g=window.open(``,`_blank`);if(!g){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}g.document.write(h),g.document.close(),setTimeout(()=>{g.focus(),g.print()},400)}export{n,t};