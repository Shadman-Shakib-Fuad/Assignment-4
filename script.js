let currentTab = "all";

const jobs = [
  {id:1, company:"Google", position:"Frontend Dev", location:"Remote", type:"Full-time", salary:"$3000", description:"Modern UI work", status:"all"},
  {id:2, company:"Microsoft", position:"Backend Dev", location:"USA", type:"Full-time", salary:"$3500", description:"API development", status:"all"},
  {id:3, company:"Amazon", position:"Full Stack", location:"Canada", type:"Remote", salary:"$4000", description:"Full stack apps", status:"all"},
  {id:4, company:"Meta", position:"UI Designer", location:"Remote", type:"Part-time", salary:"$2000", description:"Design systems", status:"all"},
  {id:5, company:"Netflix", position:"React Dev", location:"UK", type:"Full-time", salary:"$3200", description:"React projects", status:"all"},
  {id:6, company:"Tesla", position:"Engineer", location:"USA", type:"Full-time", salary:"$4500", description:"Automation", status:"all"},
  {id:7, company:"Spotify", position:"Frontend Eng", location:"Sweden", type:"Remote", salary:"$3000", description:"Music UI", status:"all"},
  {id:8, company:"Adobe", position:"UI Engineer", location:"USA", type:"Full-time", salary:"$3800", description:"Creative tools", status:"all"}
];

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j=>j.status==="rejected").length;
}

function setTab(tab){
  currentTab = tab;
  document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
  document.getElementById("tab-"+tab).classList.add("active");
  renderJobs();
}