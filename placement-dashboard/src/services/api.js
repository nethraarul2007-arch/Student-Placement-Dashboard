// Mock API layer. Replace each function with fetch()/axios calls to your backend.
const JOBS=[
 {id:1,company:"Infosys",role:"Systems Engineer",loc:"Chennai",pkg:4.5,type:"IT Services",deadline:"2026-10-15",skills:["Java","SQL"]},
 {id:2,company:"Zoho",role:"Member Technical Staff",loc:"Chennai",pkg:7,type:"Product",deadline:"2026-10-20",skills:["DSA","React"]},
 {id:3,company:"TCS",role:"Digital Analyst",loc:"Bengaluru",pkg:7,type:"IT Services",deadline:"2026-10-25",skills:["Python","Cloud"]},
 {id:4,company:"Freshworks",role:"Frontend Developer",loc:"Chennai",pkg:12,type:"Product",deadline:"2026-11-02",skills:["React","TypeScript"]},
 {id:5,company:"Cognizant",role:"Programmer Analyst",loc:"Coimbatore",pkg:4,type:"IT Services",deadline:"2026-11-05",skills:["Java","Testing"]},
 {id:6,company:"Razorpay",role:"SDE-1",loc:"Bengaluru",pkg:16,type:"Fintech",deadline:"2026-11-12",skills:["Node","DSA"]},
 {id:7,company:"Wipro",role:"Project Engineer",loc:"Hyderabad",pkg:3.8,type:"IT Services",deadline:"2026-11-18",skills:["C++","SQL"]},
 {id:8,company:"PayPal",role:"Software Engineer",loc:"Chennai",pkg:18,type:"Fintech",deadline:"2026-11-25",skills:["Java","Microservices"]}];
const TREND=[["May",12],["Jun",28],["Jul",35],["Aug",52],["Sep",74],["Oct",90]];
const wait=v=>new Promise(r=>setTimeout(()=>r(v),350));
export const api={jobs:()=>wait(JOBS),trend:()=>wait(TREND),
 seed:()=>wait({apps:[{jobId:1,status:"Selected",date:"2026-09-18"},{jobId:2,status:"Interview",date:"2026-09-30",interview:"2026-10-12 10:30 AM · Online"},{jobId:3,status:"Applied",date:"2026-10-02"},{jobId:5,status:"Rejected",date:"2026-09-10"}],
 notes:[{id:1,kind:"Interview",text:"Zoho technical round on 12 Oct, 10:30 AM",read:false},{id:2,kind:"Company",text:"Freshworks added new Frontend openings",read:false},{id:3,kind:"Announcement",text:"Placement orientation this Friday at 3 PM, Main Auditorium",read:true}]})};