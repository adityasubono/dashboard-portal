import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({
  loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),
  loading: Loading
});
const Doc = Loadable({loader: () => import(/*webpackChunkName:'Doc'*/'@/views/doc'), loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/views/guide'), loading: Loading});
const Explanation = Loadable({
  loader: () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'),
  loading: Loading
});
const AdminPage = Loadable({
  loader: () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'),
  loading: Loading
});
const GuestPage = Loadable({
  loader: () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'),
  loading: Loading
});
const EditorPage = Loadable({
  loader: () => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'),
  loading: Loading
});
const RichTextEditor = Loadable({
  loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'),
  loading: Loading
});
const Markdown = Loadable({
  loader: () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'),
  loading: Loading
});
const Draggable = Loadable({
  loader: () => import(/*webpackChunkName:'Draggable'*/'@/views/components-demo/draggable'),
  loading: Loading
});
const KeyboardChart = Loadable({
  loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'),
  loading: Loading
});
const LineChart = Loadable({
  loader: () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'),
  loading: Loading
});
const MixChart = Loadable({
  loader: () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'),
  loading: Loading
});
const Menu1_1 = Loadable({
  loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'),
  loading: Loading
});
const Menu1_2_1 = Loadable({
  loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'),
  loading: Loading
});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'), loading: Loading});
const ExportExcel = Loadable({
  loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'),
  loading: Loading
});
const UploadExcel = Loadable({
  loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'),
  loading: Loading
});
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/views/zip'), loading: Loading});
const Clipboard = Loadable({
  loader: () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'),
  loading: Loading
});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'), loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/views/user'), loading: Loading});
const About = Loadable({loader: () => import(/*webpackChunkName:'About'*/'@/views/about'), loading: Loading});
const Bug = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/bug'), loading: Loading});

//HighScope Route Component
const AdminSystem = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/admin-system'), loading: Loading});
const Curriculum = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/curriculum'), loading: Loading});
const Elibrary = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/e-library'), loading: Loading});
const Admission = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/admission'), loading: Loading});
const MaterialProduction = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/material-production'), loading: Loading});
const Finance = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/finance'), loading: Loading});
const GeneralAffair = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/general-affair'), loading: Loading});
const Student = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/student'), loading: Loading});
const Teacher = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/teacher'), loading: Loading});
const Parent = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/parent'), loading: Loading});
const Alumni = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/alumni'), loading: Loading});
const Reporting = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/reporting'), loading: Loading});
const SchoolManagement = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/school-management'), loading: Loading});
const Clinic = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/page/clinic'), loading: Loading});





export default [
  {
    path: "/dashboard",
    component: Dashboard,
    roles: ["ceo", "head", "advisor","chief","assisted-chief","executive", "super-admin", "admission", "staff", "teacher", "parent", "student"]
  },
  {path: "/admin-system", component: AdminSystem, roles: ["administrator", "super-admin"]},
  {path: "/admission", component: Admission, roles: ["admission", "staff", "teacher", "parent", "student"]},
  {path: "/curriculum", component: Curriculum, roles: ["staff", "teacher"]},
  {path: "/e-library", component: Elibrary, roles: ["staff", "teacher", "student"]},
  {path: "/material-production", component: MaterialProduction, roles: ["staff"]},
  {path: "/clinic", component: Clinic, roles: ["staff"]},
  {path: "/finance", component: Finance, roles: ["staff"]},
  {path: "/general-affair", component: GeneralAffair, roles: ["staff"]},
  {path: "/student", component: Student, roles: ["student"]},
  {path: "/parent", component: Parent, roles: ["parent"]},
  {path: "/alumni", component: Alumni, roles: ["teacher", "student"]},
  {path: "/reporting", component: Reporting, roles: ["ceo", "head", "advisor","chief","assisted-chief","executive"]},
  {path: "/school-management", component: SchoolManagement, roles: ["teacher", "staff"]},
  // { path: "/doc", component: Doc, roles: ["admin","editor","guest","super-admin"] },
  // { path: "/guide", component: Guide, roles: ["admin","editor"] },
  // { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  // { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  // { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  // { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  // { path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin","editor"] },
  // { path: "/components/Markdown", component: Markdown, roles: ["admin","editor"] },
  // { path: "/components/draggable", component: Draggable, roles: ["admin","editor"] },
  // { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin","editor"] },
  // { path: "/charts/line", component: LineChart, roles: ["admin","editor"] },
  // { path: "/charts/mix-chart", component: MixChart, roles: ["admin","editor"] },
  // { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin","editor"] },
  // { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin","editor"] },
  // { path: "/table", component: Table, roles: ["admin","editor"] },
  // { path: "/excel/export", component: ExportExcel, roles: ["admin","editor"] },
  // { path: "/excel/upload", component: UploadExcel, roles: ["admin","editor"] },
  // { path: "/zip", component: Zip, roles: ["admin","editor"] },
  // { path: "/clipboard", component: Clipboard, roles: ["admin","editor"] },
  // { path: "/user", component: User, roles: ["admin"] },
  // { path: "/about", component: About, roles: ["admin", "editor", "guest"] },
  // { path: "/bug", component: Bug, roles: ["admin"] },
  {path: "/error/404", component: Error404},
];
