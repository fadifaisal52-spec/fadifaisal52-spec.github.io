import{i as e,s as t}from"./utils-CYNvcqjI.js";import{r as n}from"./invoicePrint-Ea9jC1wM.js";function r(e){let{title:n,columns:r,rows:i,dateRange:a,vatNo:o}=e,s=a?`<p>الفترة: ${t(a.from)} — ${t(a.to)}</p>`:``,c=r.map(e=>`<th>${t(e.label)}</th>`).join(``),l=i.map(e=>`<tr>${r.map(n=>`<td>${t(e[n.key]??``)}</td>`).join(``)}</tr>`).join(``);return`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>${t(n)}</title>
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
<h1>${t(n)}</h1>
<div class="meta">${s}${o?`<p>الرقم الضريبي: ${t(o)}</p>`:``}</div>
<table><thead><tr>${c}</tr></thead><tbody>${l||`<tr><td colspan="`+r.length+`">لا توجد بيانات</td></tr>`}</tbody></table>
<div class="footer">تم التصدير آلياً — ${new Date().toLocaleString(`en-GB`)}</div>
${e.summary?`<div style="margin-top:16px;padding:12px;background:#f8fafc;border-radius:8px;">${e.summary.map(e=>`<div style="display:flex;justify-content:space-between;padding:4px 0;"><span style="color:#64748b">${t(e.label)}</span><span style="font-weight:600">${t(e.value)}</span></div>`).join(``)}</div>`:``}
</body></html>`}function i(e){let t=r(e),n=window.open(``,`_blank`);n&&(n.document.write(t),n.document.close(),setTimeout(()=>n.print(),500))}function a(r,i,a){let o=r.items||[],s=e(r.currency),c=r.subtotal??o.reduce((e,t)=>e+t.qty*t.price,0),l=r.tax??0,u=r.discount??0,d=r.tip??0,f=r.total??c,p=Number(r.paid??0)||0,m=r.remaining==null?Math.max(0,Number(f)-p):Number(r.remaining)||0,h=r.vat_no||``,g=r.order_type||``,_=r.table_no||``,v=r.shift_no,y=r.payment_methods||{},b=String(r.title||``).trim()||(g===`dine-in`?`صالة`:g===`takeaway`?`سفري`:g===`delivery`?`توصيل`:g===`sale`?`مبيعات`:``),x=[y.cash?`<tr><td>نقدي</td><td style="text-align:left">${Number(y.cash).toFixed(2)}</td></tr>`:``,y.card?`<tr><td>شبكة</td><td style="text-align:left">${Number(y.card).toFixed(2)}</td></tr>`:``,y.online?`<tr><td>أونلاين</td><td style="text-align:left">${Number(y.online).toFixed(2)}</td></tr>`:``,y.salary?`<tr><td>خصم من الراتب</td><td style="text-align:left">${Number(y.salary).toFixed(2)}</td></tr>`:``].filter(Boolean).join(``),S=r.branch_name||``,C=r.cashier_name||``,w=String(r.number||r.id||``).slice(0,12),T=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>إيصال</title>
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
<h2>إيصال ${t(b)}</h2>
<div class="meta">رقم: ${t(w||`---`)} • ${new Date().toLocaleString(`en-GB`)}</div>
${i?`<div class="meta">${t(i)}</div>`:``}
${S?`<div class="meta">الفرع: ${t(S)}</div>`:``}
${C?`<div class="meta">الكاشير: ${t(C)}</div>`:``}
${h?`<div class="meta">الرقم الضريبي: ${t(h)}</div>`:``}
${_?`<div><span class="badge">طاولة ${t(_)}</span></div>`:``}
${v?`<div class="meta">وردية #${t(v)}</div>`:``}
</div>
${r.customer_name?`<div class="center" style="font-size:11px">العميل: ${t(r.customer_name)}${r.customer_phone?` - `+t(r.customer_phone):``}</div>`:``}
${r.customer_address?`<div class="center" style="font-size:11px">العنوان: ${t(r.customer_address)}</div>`:``}
${r.delivery_fee?`<div class="center" style="font-size:11px">رسوم التوصيل: ${Number(r.delivery_fee).toFixed(2)} ${t(s)}</div>`:``}
<table class="items">
<tr><th style="width:26px" class="c">م</th><th>الصنف</th><th class="c">كمية</th><th class="l">الإجمالي</th></tr>
${o.map((e,r)=>{let i=n(e.name,e.name_en);return`<tr><td class="c">${r+1}</td><td class="n">${t(e.name)}${i?`<div dir="ltr" style="font-size:9px;font-weight:400;text-align:right">${t(i)}</div>`:``}${e.size&&e.size!==`عادي`?` (${t(e.size)})`:``}${e.notes?`<div style="font-size:9px;font-weight:400">📝 ${t(e.notes)}</div>`:``}<div style="font-size:9px;font-weight:400">${Number(e.price).toFixed(2)}</div></td><td class="c">${e.qty}</td><td class="l">${(e.qty*e.price).toFixed(2)}</td></tr>`}).join(``)}
</table>
<table class="tots">
${l>0||u>0||d>0?`<tr><td>المجموع الفرعي</td><td style="text-align:left">${Number(c).toFixed(2)} ${t(s)}</td></tr>`:``}
${u>0?`<tr><td>الخصم</td><td style="text-align:left">-${Number(u).toFixed(2)} ${t(s)}</td></tr>`:``}
${l>0?`<tr><td>الضريبة</td><td style="text-align:left">${Number(l).toFixed(2)} ${t(s)}</td></tr>`:``}
${d>0?`<tr><td>الإكرامية</td><td style="text-align:left">${Number(d).toFixed(2)} ${t(s)}</td></tr>`:``}
<tr class="grand"><td>الإجمالي</td><td style="text-align:left">${Number(f).toFixed(2)} ${t(s)}</td></tr>
${p>0?`<tr><td>المدفوع</td><td style="text-align:left">${p.toFixed(2)} ${t(s)}</td></tr>`:``}
${p>0&&m>0?`<tr><td>المتبقي</td><td style="text-align:left">${m.toFixed(2)} ${t(s)}</td></tr>`:``}
</table>
${x?`<div class="dashed"></div><table class="tots">${x}</table>`:``}
${r.notes?`<div style="font-size:10px;margin-top:4px">ملاحظات: ${t(r.notes)}</div>`:``}
<div class="dashed"></div>
<div class="center">شكراً لزيارتكم</div>
${r.scan_qr?`<div class="center" style="margin-top:6px"><img src="${r.scan_qr}" style="width:100px;height:100px" /><div style="font-size:9px">امسح لفتح الفاتورة</div></div>`:``}
${a?`<div class="center" style="margin-top:6px"><img src="${a}" style="width:110px;height:110px" /><div style="font-size:9px">فواتير ZATCA</div></div>`:r.scan_qr?``:`<div class="center" style="font-size:9px;margin-top:4px">QR: ${t(w||`ZATCA`)}</div>`}
</body></html>`,E=window.open(``,`_blank`);if(!E){alert(`يرجى السماح بالنوافذ المنبثقة للطباعة`);return}E.document.write(T),E.document.close(),setTimeout(()=>{E.focus(),E.print()},400)}export{a as n,i as t};