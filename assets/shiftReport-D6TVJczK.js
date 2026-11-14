import{r as e}from"./supabase-DCCh5YOP.js";import{s as t,u as n}from"./utils-fKULBn4E.js";var r=e=>(e?.card_total||0)+(e?.online_total||0),i=(e,t=0)=>(e?.opening_cash||0)+(e?.cash_total||0)-(t||0);function a(e,t,n,a,o){let s=i(e,a),c=r(e);return{expectedCash:s,closingCash:t,cashDiff:t-s,expectedNet:c,closingNet:n,netDiff:n-c,petty:a,notes:o||``}}async function o(t,n){let r={closing_cash:n.closingCash,closing_network:n.closingNet,difference:n.cashDiff,network_difference:n.netDiff,expected_cash:n.expectedCash,expected_network:n.expectedNet,status:`closed`,closed_at:new Date().toISOString(),petty_expenses:n.petty,close_notes:n.notes},{error:i}=await e.from(`shifts`).update(r).eq(`id`,t);if(i){let r={closing_cash:n.closingCash,difference:n.cashDiff,status:`closed`,closed_at:new Date().toISOString(),petty_expenses:n.petty,close_notes:n.notes},{error:i}=await e.from(`shifts`).update(r).eq(`id`,t);if(i){let{error:r}=await e.from(`shifts`).update({closing_cash:n.closingCash,difference:n.cashDiff,status:`closed`,closed_at:new Date().toISOString(),notes:n.notes||`إغلاق`}).eq(`id`,t);if(r)throw r}}}function s(e,r,i,a){try{let i=(e,n,r=!1,i=`#0F172A`)=>`<div style="display:flex;justify-content:space-between;padding:5px 0;font-size:13px;${r?`font-weight:800;`:``}color:${i}"><span>${t(e)}</span><span>${t(n)}</span></div>`,o=(e,t)=>i(e,n(t,a)+(t===0?` ✓`:``),!0,t===0?`#059669`:`#dc2626`),s=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>تقرير إغلاق وردية #${e.shift_no}</title>
<style>body{font-family:'Inter','Cairo',sans-serif;color:#0F172A;margin:0}.wrap{max-width:420px;margin:0 auto;padding:20px}.head{text-align:center;border-bottom:2px dashed #94a3b8;padding-bottom:12px;margin-bottom:12px}.sec{background:#f8fafc;border-radius:10px;padding:10px 12px;margin:10px 0}.t{font-size:12px;color:#64748b;font-weight:700;margin-bottom:4px}</style></head><body><div class="wrap">
<div class="head"><h2 style="margin:0">تقرير إغلاق وردية (Z) — #${t(e.shift_no)}</h2><div style="font-size:12px;color:#64748b">${t(e.employee_name||``)} • ${new Date().toLocaleString(`ar-EG`)}</div></div>
<div class="sec"><div class="t">العهدة والمبيعات</div>
${i(`عهدة الافتتاح`,n(e.opening_cash||0,a))}
${i(`مبيعات نقدية`,n(e.cash_total||0,a))}
${i(`مبيعات شبكة/بطاقة`,n(e.card_total||0,a))}
${i(`مبيعات أونلاين/محافظ`,n(e.online_total||0,a))}
${i(`الإكراميات`,n(e.tips_total||0,a))}
${i(`إجمالي المبيعات`,n(e.sales_total||0,a),!0)}
${i(`النثريات`,n(r.petty,a))}</div>
<div class="sec"><div class="t">مطابقة النقدي</div>
${i(`المتوقع (عهدة + نقدي − نثريات)`,n(r.expectedCash,a))}
${i(`المعدود بالدرج`,n(r.closingCash,a))}
${o(`فارق النقدي`,r.cashDiff)}</div>
<div class="sec"><div class="t">مطابقة الشبكة</div>
${i(`المتوقع (بطاقة + أونلاين)`,n(r.expectedNet,a))}
${i(`المعدود/الكشف`,n(r.closingNet,a))}
${o(`فارق الشبكة`,r.netDiff)}</div>
${r.notes?`<div style="font-size:12px;color:#64748b">ملاحظات: ${t(r.notes)}</div>`:``}
<div style="text-align:center;font-size:11px;color:#94a3b8;margin-top:14px">نهاية التقرير</div>
</div><script>setTimeout(()=>window.print(),400)<\/script></body></html>`,c=window.open(``,`_blank`);c&&(c.document.write(s),c.document.close())}catch{}}export{r as a,i,s as n,o as r,a as t};