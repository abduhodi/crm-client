import{u as L}from"./group-26fdcc00.js";import{s as G,r as c,l as E,c as j,a as C,o as f,i as T,w as i,f as l,g as S,d as e,t as m,b as D,F as V,e as te,n as ae,u as w,q as le,y as ne,A as de,_ as ce,m as re,h as ie,p as ue,j as pe}from"./index-5fceaf5e.js";import{f as N,b as _e,a as ee}from"./moment-36213c16.js";import{_ as $,s as se,d as oe,w as me}from"./VButton-d6e73414.js";import{A as I}from"./app-modal-ef920211.js";import{_ as B}from"./VInput-1c3b4578.js";import{_ as fe}from"./accordion-e9734148.js";import{l as xe,S as he}from"./mdi-32fed39f.js";import{L as ve}from"./Loader-35472409.js";import"./apiClient-4e000a57.js";import"./moment-a9aaa855.js";const ge=e("h1",{class:"text-color1 text-[24px] w-full text-center"}," Add Student to group ",-1),be={__name:"AddStudent",setup(v,{expose:b}){const u=G(),a=L(),p=c(!1),g=async h=>{var r,y;p.value=!0;const o=(r=u.params)==null?void 0:r.id,s=h.phone.split("").filter(F=>F==="+"||!isNaN(+F)).join(""),t=await a.addStudentToGroup({group:o,student_phone:s});p.value=!1,t?(se("successfully added "),location.reload()):oe((y=a.error)==null?void 0:y.message)},d=c(!1);E(d,h=>{h||(d.value=!1)});const x=()=>{d.value=!0},_=j(()=>({phone:"required|phone:19"}));return b({openModal:x}),(h,o)=>{const s=C("vee-form");return f(),T(I,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=t=>d.value=t)},{default:i(()=>[ge,l(s,{"validation-schema":_.value,onSubmit:g,class:"w-full flex flex-col gap-5"},{default:i(()=>[l(B,{type:"text",name:"phone",label:"Phone",placeholder:"(+998)-90-123-45-67",mask:"(+998)-##-###-##-##"}),l($,{btn_type:"primary",isLoading:p.value,class:"mt-3"},{default:i(()=>[S("Add to group")]),_:1},8,["isLoading"])]),_:1},8,["validation-schema"])]),_:1},8,["modelValue"])}}},ye={class:"text-[24px] font-bold w-full text-center mb-[20px] text-color1"},we={__name:"AddCommentLesson",setup(v,{expose:b}){L();const u=c(!1),a=c(!1),p=c("Add Comment to Lesson"),g=j(()=>u?"saving":"Save"),d=c({description:"",days:1});E(a,o=>{o||(d.value={description:"",days:1})});const x=o=>{a.value=!0},_=j(()=>({description:"required|min:5",days:"required|min:1"})),h=async o=>{console.log(o)};return b({openModal:x}),(o,s)=>{const t=C("vee-form");return f(),T(I,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=r=>a.value=r)},{default:i(()=>[e("h1",ye,m(p.value),1),l(t,{"validation-schema":_.value,"initial-values":d.value,onSubmit:h},{default:i(()=>[l(B,{type:"text",name:"description",label:"Comment",placeholder:"Enter description"}),l(B,{type:"number",name:"days",label:"Including days",placeholder:"Enter number of days"}),l($,{btn_type:"primary",isLoading:u.value,type:"submit",class:"mt-5 w-full text-[18px]"},{default:i(()=>[S(m(g.value),1)]),_:1},8,["isLoading"])]),_:1},8,["validation-schema","initial-values"])]),_:1},8,["modelValue"])}}},De={class:"demo-collapse"},Fe=e("span",{class:"text-[20px] text-color1 pl-5"},"Lessons",-1),Se={class:"flex flex-wrap gap-2 p-5"},Ce=["onClick"],ke={key:0,class:"w-4 h-4 bg-red-600 inline-block absolute rotate-45 -top-2"},Ae={__name:"accordion-lessons",props:{data:Array,modal:Function},setup(v,{expose:b}){const u=c(),a=d=>{console.log(d),u.value.openModal()},p=v;return b({openModal:()=>{p.modal.openModal(123)}}),(d,x)=>{const _=C("el-popover"),h=C("el-collapse-item"),o=C("el-collapse");return f(),D(V,null,[l(we,{ref_key:"openAddCommentModal",ref:u},null,512),e("div",De,[l(o,{accordion:""},{default:i(()=>[(f(),T(h,{name:d.index,key:d.index,class:"mt-2"},{title:i(()=>[Fe]),default:i(()=>[e("div",Se,[(f(!0),D(V,null,te(v.data,(s,t)=>(f(),D("div",{onClick:r=>a(s==null?void 0:s._id),key:t,class:ae(["w-[50px] text-center py-1 text-[14px] text-color1 border border-color1 rounded-md hover:bg-color1/10 cursor-pointer relative overflow-hidden",{"bg-transparent/30":s==null?void 0:s.pass}])},[l(_,{placement:"top-start",title:s==null?void 0:s.title,width:200,trigger:"hover",content:w(N)(s==null?void 0:s.date)},{reference:i(()=>[S(m(w(_e)(s==null?void 0:s.date)),1)]),_:2},1032,["title","content"]),s!=null&&s.description?(f(),D("span",ke)):le("",!0)],10,Ce))),128))])]),_:1},8,["name"]))]),_:1})])],64)}}},Me=e("h1",{class:"text-color1 text-[24px] w-full text-center font-medium"}," Add Teacher to group ",-1),$e={class:"flex flex-col justify-between items-center gap-3 mb-2 mt-5"},Te=e("label",{for:"teacher",class:"text-[18px] text-color1 font-medium mb-1 inline-block"},"Select Teacher for group",-1),Le=e("option",{value:"",hidden:"",selected:""},"Select Teacher",-1),je=["value"],Ve={__name:"AddTeacher",setup(v,{expose:b}){const u=L(),a=c(""),p=c([]),g=G(),d=async()=>{var t;x.value=!0;const o={group:g.params.id,teacher:a.value};if(!o.group||!o.teacher){me("group or teacher shoul not be empty");return}console.log(o),await u.addTeacherToGroup(o)?se("Teacher added successfully"):oe((t=u==null?void 0:u.error)==null?void 0:t.message),x.value=!1},x=c(!1),_=c(!1);return E(_,o=>{o||(_.value=!1)}),b({openModal:o=>{_.value=!0,p.value=o}}),(o,s)=>(f(),T(I,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=t=>_.value=t)},{default:i(()=>[Me,e("div",$e,[Te,ne(e("select",{id:"teacher","onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),class:"outline-none border px-2 rounded-md py-2 text-sm w-full"},[Le,(f(!0),D(V,null,te(p.value,(t,r)=>(f(),D("option",{key:r,value:t==null?void 0:t._id},m(t==null?void 0:t.first_name)+" "+m(t==null?void 0:t.last_name),9,je))),128))],512),[[de,a.value]])]),l($,{btn_type:"primary",isLoading:x.value,onClick:d,class:"w-[200px] mt-5 mx-auto"},{default:i(()=>[S("Add Teacher")]),_:1},8,["isLoading"])]),_:1},8,["modelValue"]))}};const n=v=>(ue("data-v-7f595010"),v=v(),pe(),v),Ne={key:1},Be={class:"w-full flex lg:flex-row flex-col justify-between items-start mt-3 gap-5"},Ge={class:"lg:w-[315px] w-full p-5 flex flex-col gap-[15px] font-medium rounded-[10px] border bg-white border-[#12486B]"},Ee={class:"w-full flex justify-between items-center"},Ie=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"ID:",-1)),qe={class:"text-[#065FD4] text-[14px]"},Ue=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),Re={class:"w-full flex justify-between items-center"},ze=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Group Name:",-1)),Pe={class:"text-[#065FD4] text-[14px]"},We=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),He={class:"w-full flex justify-between items-center"},Je=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Started date:",-1)),Ke={class:"text-[#065FD4] text-[14px]"},Oe=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),Qe={class:"w-full flex justify-between items-center"},Xe=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Ended date:",-1)),Ye={class:"text-[#065FD4] text-[14px]"},Ze=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),et={class:"w-full flex justify-between items-center"},tt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Start time:",-1)),st={class:"text-[#065FD4] text-[14px]"},ot=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),at={class:"w-full flex justify-between items-center"},lt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"End time:",-1)),nt={class:"text-[#065FD4] text-[14px]"},dt=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),ct={class:"w-full flex justify-between items-center"},rt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Days:",-1)),it={key:0,class:"text-[#065FD4] text-[14px]"},ut={key:1,class:"text-[#065FD4] text-[14px]"},pt=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),_t={class:"w-full flex justify-between items-center"},mt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Status:",-1)),ft={class:"text-[#065FD4] text-[14px]"},xt=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),ht={class:"w-full flex justify-between items-center"},vt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Course:",-1)),gt=n(()=>e("span",{class:"w-full h-[1px] bg-[#CFD0D3]"},null,-1)),bt={class:"w-full flex justify-between items-center"},yt=n(()=>e("span",{class:"text-[#3D444F] text-[12px]"},"Room:",-1)),wt={class:"flex flex-col gap-5 lg:side w-full"},Dt={class:"flex justify-between items-center lg:gap-0 gap-5"},Ft={__name:"SingleGroup",setup(v){const b=G(),u=re(),a=L(),p=c(!1),g=c([]),d=c([]),x=c(),_=c(),h=()=>{u.push({path:"/students"})},o=()=>{x.value.openModal()},s=async()=>{var y,F,k;p.value=!0;const r=await a.getGroupCourseTeachers((F=(y=a==null?void 0:a.group)==null?void 0:y.course)==null?void 0:F._id);(k=_.value)==null||k.openModal(r==null?void 0:r.teachers),p.value=!1};ie(async()=>{var y;const r=(y=b.params)==null?void 0:y.id;[g.value,t.value,d.value]=await Promise.all([a.getGroupStudents(r),a.getGroupById(r),a.getGroupLessons(r)])});const t=c({student_count:{type:Number,defalut:""},_id:String,name:String,start_date:Date,end_date:Date,days:Boolean,start_time:Number,end_time:Number,status:Boolean,course:{_id:String,name:String,price:Number,period:Number},room:{_id:String,name:String,size:Number}});return(r,y)=>{var k,q,U,R,z,P,W,H,J,K,O,Q,X,Y,Z;const F=C("router-link");return w(a).loading?(f(),T(ve,{key:0})):(f(),D("div",Ne,[l(be,{ref_key:"openModal",ref:x},null,512),l(Ve,{ref_key:"openAddTeacherModal",ref:_,data:(q=(k=g.value[0])==null?void 0:k.course)==null?void 0:q._id},null,8,["data"]),e("span",{onClick:h,class:"w-9 h-9 border border-[#12486B] bg-[#EBEEF3] hover:bg-[#dee3e9] flex justify-center items-center rounded-full cursor-pointer"},[l(w(he),{type:"mdi",path:w(xe),class:"text-[#12486B] w-5 h-5"},null,8,["path"])]),e("div",Be,[e("div",Ge,[e("div",Ee,[Ie,e("span",qe,m((U=t.value)==null?void 0:U._id),1)]),Ue,e("div",Re,[ze,e("span",Pe,m((R=t.value)==null?void 0:R.name),1)]),We,e("div",He,[Je,e("span",Ke,m(w(N)((z=t.value)==null?void 0:z.start_date)),1)]),Oe,e("div",Qe,[Xe,e("span",Ye,m(w(N)((P=t.value)==null?void 0:P.end_date)),1)]),Ze,e("div",et,[tt,e("span",st,m(w(ee)((W=t.value)==null?void 0:W.start_time)),1)]),ot,e("div",at,[lt,e("span",nt,m(w(ee)((H=t.value)==null?void 0:H.end_time)),1)]),dt,e("div",ct,[rt,(J=t.value)!=null&&J.days?(f(),D("span",it,"Mon Wed Fri")):(f(),D("span",ut,"Tue Thu Sat"))]),pt,e("div",_t,[mt,e("span",ft,m((K=t.value)==null?void 0:K.status),1)]),xt,e("div",ht,[vt,l(F,{to:"/courses/"+((Q=(O=t.value)==null?void 0:O.course)==null?void 0:Q._id),class:"text-[#065FD4] text-[14px] underline"},{default:i(()=>{var A,M;return[S(m((M=(A=t.value)==null?void 0:A.course)==null?void 0:M.name),1)]}),_:1},8,["to"])]),gt,e("div",bt,[yt,l(F,{to:"/rooms/"+((Y=(X=t.value)==null?void 0:X.room)==null?void 0:Y._id),class:"text-[#065FD4] text-[14px] underline"},{default:i(()=>{var A,M;return[S(m((M=(A=t.value)==null?void 0:A.room)==null?void 0:M.name),1)]}),_:1},8,["to"])])]),e("div",wt,[e("div",Dt,[l($,{btn_type:"primary",isLoading:!1,onClick:o,class:"w-[200px]"},{default:i(()=>[S("Add Student")]),_:1}),l($,{btn_type:"success",isLoading:p.value,onClick:s,class:"w-[200px]"},{default:i(()=>[S("Add Teacher")]),_:1},8,["isLoading"])]),l(Ae,{data:(Z=d.value)==null?void 0:Z.lessons},null,8,["data"]),l(fe,{data:g.value,ref:"openAddCommentModal"},null,8,["data"])])])]))}}},Bt=ce(Ft,[["__scopeId","data-v-7f595010"]]);export{Bt as default};
