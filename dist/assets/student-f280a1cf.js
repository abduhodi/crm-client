import{v as o}from"./index-c34ed4f6.js";import{a as u}from"./apiClient-172dff35.js";const d={getStudents(e){const n=`admin/get-students/q?page=${e==null?void 0:e.page}&limit=${e==null?void 0:e.limit}`;return u.get(n)},getStudentById(e){const n=`admin/get-student/${e}`;return u.get(n)},getStudentGroups(e){const n=`students/groups/${e}`;return u.get(n)},addStudent(e){const n="admin/add-student";return u.post(n,e)},updateStudent(e,n){const t=`admin/update-student/${n}`;return u.put(t,e)},deleteStudent(e){const n=`admin/delete-student/${e}`;return u.delete(n)}},r=o("admin-student",{state:()=>({students:null,loading:!1,error:null,status:null,student:null}),actions:{async addStudent(e){var n;try{const t=await d.addStudent(e);return this.student=t.student,console.log(t),!0}catch(t){return this.error=(n=t==null?void 0:t.response)==null?void 0:n.data,console.log(t),!1}finally{}},async getStudents(e){var n;try{this.loading=!0;const t=await d.getStudents(e);return this.students=t.students,t==null?void 0:t.count}catch(t){return this.error=(n=t==null?void 0:t.response)==null?void 0:n.data,console.log(t),!1}finally{this.loading=!1}},async updateStudent(e,n){var t;try{const s=await d.updateStudent(e,n);return this.student=s.student,!0}catch(s){return this.error=(t=s==null?void 0:s.response)==null?void 0:t.data,console.log(s),!1}finally{}},async deleteStudent(e){var n;try{const t=await d.deleteStudent(e);return this.student=t.student,!0}catch(t){return this.error=(n=t==null?void 0:t.response)==null?void 0:n.data,console.log(t),!1}finally{}},async getStudentById(e){var n;try{this.loading=!0;const t=await d.getStudentById(e);return t==null?void 0:t.student}catch(t){return this.error=(n=t==null?void 0:t.response)==null?void 0:n.data,console.log(t),!1}finally{this.loading=!1}},async getStudentGroups(e){var n;try{const t=await d.getStudentGroups(e);return console.log(t==null?void 0:t.groups),t==null?void 0:t.groups}catch(t){return this.error=(n=t==null?void 0:t.response)==null?void 0:n.data,console.log(t),!1}finally{this.loading=!1}}}});export{r as u};