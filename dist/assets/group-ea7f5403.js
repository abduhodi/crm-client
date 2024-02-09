import{v as o}from"./index-5fceaf5e.js";import{a as r}from"./apiClient-4e000a57.js";const a={getTeacherGroups(s){const e=`teachers/get-groups/${s}`;return r.get(e)},getGroupStudents(s){const e=`groups/attendance/${s}/all/q?`;return r.get(e)},getLessonAttendance(s){const e=`groups/attendance/${s}/all/q?`;return r.get(e)},setLessonTitle(s,e){const t=`lessons/lesson/attendance/${s}`;return r.put(t,e)},updateLessonAttendance(s){const e="groups/attendance/update/lesson";return r.post(e,s)},getOneLessonAttendance(s,e){const t=`groups/attendance/${s}`;return r.post(t,e)},getAllLessons(s){const e=`lessons/group/${s}`;return r.get(e)}},l=o("teacher-group",{state:()=>({groups:null,loading:!1,error:null,status:null,group:null}),actions:{async getTeacherGroups(s){var e;try{const t=await a.getTeacherGroups(s);this.groups=t==null?void 0:t.groups}catch(t){this.error=(e=t==null?void 0:t.response)==null?void 0:e.data}finally{}},async getGroupStudents(s){var e;try{return await a.getGroupStudents(s)}catch(t){this.error=(e=t==null?void 0:t.response)==null?void 0:e.data}finally{}},async getOneLessonAttendance(s,e){var t;try{return await a.getOneLessonAttendance(s,e)}catch(n){this.error=(t=n==null?void 0:n.response)==null?void 0:t.data}finally{}},async setLessonTitle(s,e){var t;try{return await a.setLessonTitle(s,e)}catch(n){this.error=(t=n==null?void 0:n.response)==null?void 0:t.data}finally{}},async updateLessonAttendance(s){var e;try{return await a.updateLessonAttendance(s)}catch(t){this.error=(e=t==null?void 0:t.response)==null?void 0:e.data}finally{}},async getAllLessons(s){var e;try{const t=await a.getAllLessons(s);return console.log(t),t}catch(t){this.error=(e=t==null?void 0:t.response)==null?void 0:e.data}finally{}}}});export{l as u};
