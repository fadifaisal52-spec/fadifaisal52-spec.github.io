import{t as e}from"./supabase-CbPuWTTy.js";import{a as t}from"./utils-CfsB92wt.js";var n=e=>(e?.card_total||0)+(e?.online_total||0),r=(e,t=0)=>(e?.opening_cash||0)+(e?.cash_total||0)-(t||0);function i(e,t,i,a,o){let s=r(e,a),c=n(e);return{expectedCash:s,closingCash:t,cashDiff:t-s,expectedNet:c,closingNet:i,netDiff:i-c,petty:a,notes:o||``}}async function a(t,n){let r={closing_cash:n.closingCash,closing_network:n.closingNet,difference:n.cashDiff,network_difference:n.netDiff,expected_cash:n.expectedCash,expected_network:n.expectedNet,status:`closed`,closed_at:new Date().toISOString(),petty_expenses:n.petty,close_notes:n.notes},{error:i}=await e.from(`shifts`).update(r).eq(`id`,t);i&&await e.from(`shifts`).update({closing_cash:n.closingCash,difference:n.cashDiff,status:`closed`,closed_at:new Date().toISOString(),petty_expenses:n.petty,close_notes:n.notes}).eq(`id`,t)}function o(e,n,r,i){try{let r=(e,t,n=!1,r=`#0F172A`)=>`<div style="display:flex;justify-content:space-between;padding:5px 0;font-size:13px;${n?`font-weight:800;`:``}color:${r}"><span>${e}</span><span>${t}</span></div>`,a=(e,n)=>r(e,t(n,i)+(n===0?` ✓`:``),!0,n===0?`#059669`:`#dc2626`),o=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><title>تقرير إغلاق وردية #${e.shift_no}</title>
<style>body{font-family:'Inter','Cairo',sans-serif;color:#0F172A;margin:0}.wrap{max-width:420px;margin:0 auto;padding:20px}.head{text-align:center;border-bottom:2px dashed #94a3b8;padding-bottom:12px;margin-bottom:12px}.sec{background:#f8fafc;border-radius:10px;padding:10px 12px;margin:10px 0}.t{font-size:12px;color:#64748b;font-weight:700;margin-bottom:4px}</style></head><body><div class="wrap">
<div class="head"><h2 style="margin:0">تقرير إغلاق وردية (Z) — #${e.shift_no}</h2><div style="font-size:12px;color:#64748b">${e.employee_name||``} • ${new Date().toLocaleString(`ar-EG`)}</div></div>
<div class="sec"><div class="t">العهدة والمبيعات</div>
${r(`عهدة الافتتاح`,t(e.opening_cash||0,i))}
${r(`مبيعات نقدية`,t(e.cash_total||0,i))}
${r(`مبيعات شبكة/بطاقة`,t(e.card_total||0,i))}
${r(`مبيعات أونلاين/محافظ`,t(e.online_total||0,i))}
${r(`الإكراميات`,t(e.tips_total||0,i))}
${r(`إجمالي المبيعات`,t(e.sales_total||0,i),!0)}
${r(`النثريات`,t(n.petty,i))}</div>
<div class="sec"><div class="t">مطابقة النقدي</div>
${r(`المتوقع (عهدة + نقدي − نثريات)`,t(n.expectedCash,i))}
${r(`المعدود بالدرج`,t(n.closingCash,i))}
${a(`فارق النقدي`,n.cashDiff)}</div>
<div class="sec"><div class="t">مطابقة الشبكة</div>
${r(`المتوقع (بطاقة + أونلاين)`,t(n.expectedNet,i))}
${r(`المعدود/الكشف`,t(n.closingNet,i))}
${a(`فارق الشبكة`,n.netDiff)}</div>
${n.notes?`<div style="font-size:12px;color:#64748b">ملاحظات: ${n.notes}</div>`:``}
<div style="text-align:center;font-size:11px;color:#94a3b8;margin-top:14px">نهاية التقرير</div>
</div><script>setTimeout(()=>window.print(),400)<\/script></body></html>`,s=window.open(``,`_blank`);s&&(s.document.write(o),s.document.close())}catch{}}export{n as a,r as i,o as n,a as r,i as t};