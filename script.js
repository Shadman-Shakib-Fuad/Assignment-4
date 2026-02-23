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

function renderJobs(){
  const container = document.getElementById("jobContainer");
  container.innerHTML = "";

  let filtered = jobs;

  if(currentTab !== "all"){
    filtered = jobs.filter(j => j.status === currentTab);
  }

  document.getElementById("jobCount").innerText = filtered.length;

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <h1>📂</h1>
        <h3>No jobs available</h3>
        <p>No jobs found in this category</p>
      </div>
    `;
    updateDashboard();
    return;
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";

    let statusHTML = "";
    if(job.status === "interview"){
      statusHTML = `<span class="status interview">Interview</span>`;
    } else if(job.status === "rejected"){
      statusHTML = `<span class="status rejected">Rejected</span>`;
    }

    div.innerHTML = `
      ${statusHTML}
      <h3>${job.company}</h3>
      <p><strong>${job.position}</strong></p>
      <p>${job.location} • ${job.type}</p>
      <p>${job.salary}</p>
      <p>${job.description}</p>

      <div class="buttons">
        <button class="btn-interview" onclick="setInterview(${job.id})">Interview</button>
        <button class="btn-rejected" onclick="setRejected(${job.id})">Rejected</button>
        <button class="btn-delete" onclick="deleteJob(${job.id})">Delete</button>
      </div>
    `;

    container.appendChild(div);
  });

  updateDashboard();
}

function setInterview(id){
  const job = jobs.find(j=>j.id===id);
  if(job.status === "interview"){
    job.status = "all";
  } else {
    job.status = "interview";
  }
  renderJobs();
}

function setRejected(id){
  const job = jobs.find(j=>j.id===id);
  if(job.status === "rejected"){
    job.status = "all";
  } else {
    job.status = "rejected";
  }
  renderJobs();
}

function deleteJob(id){
  const index = jobs.findIndex(j=>j.id===id);
  jobs.splice(index,1);
  renderJobs();
}

renderJobs();