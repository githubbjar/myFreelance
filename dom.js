//Insert the object data

//DOCUMENT TITLE
document.title = "INVOICE #" + jobs[x].invoice_number + ", " + jobs[x].employer_nickname() + ": " + jobs[x].project;

//JOB/INVOICE NUMBER
let jobOrInvoice = "<h2>JOB #" + jobs[x].invoice_number + "</h2>";
if (jobs[x].completed_date) {
    jobOrInvoice = "<h2>INVOICE #" + jobs[x].invoice_number + "</h2>";
};
document.getElementById("invoice_number").innerHTML = jobOrInvoice;


//BILLING DATE or RUNNING TOTAL
let billingDate = "RUNNING TOTAL:";
if (jobs[x].date_billed) {
    billingDate = "BILLING DATE: " + jobs[x].date_billed;
};
document.getElementById("date_billed").innerHTML = jobs[x].date_billed;

//TOTAL AMOUNT DUE or RUNNING TOTAL
document.getElementById("project").innerHTML = jobs[x].project;
let totalDue = "$";
if (jobs[x].date_paid) {
    totalDue = "PAID: $"
}
document.getElementById("billing_amount").innerHTML = "$" + jobs[x].total_hours() * jobs[x].rate_of_pay();

//JOB INFO
document.getElementById("project_type").innerHTML = jobs[x].project_type;
document.getElementById("start_date").innerHTML =  jobs[x].start_date + " / " + jobs[x].due_date;
document.getElementById("completed_date").innerHTML = jobs[x].completed_date;
document.getElementById("total_hours").innerHTML = jobs[x].total_hours() + " hours";
document.getElementById("rate_of_pay").innerHTML = jobs[x].rate_of_pay() + " / hour";


//BILL TO 
document.getElementById("employer").innerHTML = jobs[x].employer;
document.getElementById("employer_address1").innerHTML = "<p class='employer-contact'>" + jobs[x].employer_address1() + "</p>";
document.getElementById("employer_address2").innerHTML = "<p class='employer-contact'>" + jobs[x].employer_address2() + "</p>";
document.getElementById("contact").innerHTML = "<p class='employer-contact'>" + jobs[x].contact() + "</p>";
document.getElementById("contact_email").innerHTML = "<p class='employer-contact'>" + jobs[x].contact_email() + "</p>";


//CREATE ALL JOBS LIST
//Create necessary arrays
const invoice_numbers = jobs.map (function (job) {
    return job.invoice_number;
});
const employer_nicknames = jobs.map (function (job) {
    return job.employer_nickname();
});
const job_numbers = jobs.map (function (job) {
    return job.job_number;
});
const projects = jobs.map (function (job) {
    return job.project;
});
const dates_paid = jobs.map (function (job) {
    return job.date_paid;
});

let list_jobs = []
for (let i = 0; i < invoice_numbers.length; i++) {
    //To make bold or leave unbolded 
    var bold = "";
    var endBold = "";
    if(invoice_numbers[i]==jobs[x].invoice_number){
        bold="<strong><i class='fas fa-check-square'></i> ";
        }
    if(invoice_numbers[i]==jobs[x].invoice_number){
        endBold="</strong>";
        }
    //To use a hash or number symbol 
    var lightGray = "";
    var hashOrNot = "#";    
    if (dates_paid[i]) {
        lightGray = "light-gray";
    }  
    list_jobs.push("\
    <p class='jobslist_employer_nicknames'><span class='" + lightGray + "'>" + employer_nicknames[i] + "</span></p>\
    <p class='joblist_links'><a class='" + lightGray + "' href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + job_numbers[i] + "'>" + bold + "#" + invoice_numbers[i] + endBold + "</a></p>\
    <p class='joblist_projects'><span class='" + lightGray + "'>" + projects[i] + "</span></p>")
}
let list_jobs_code_w_commas = list_jobs.toString();
let list_jobs_code = list_jobs_code_w_commas.replace(/,/g, "");

document.getElementById("job-list").innerHTML = "<p class='jobs-heading'><strong>All Jobs:</strong></p>" + 
list_jobs_code;


//TEST DIV
document.getElementById("test_space").innerHTML = "";



//THUMBNAIL
let thumbnailImg = "";
if (jobs[x].thumbnail) {
    thumbnailImg = "<img src='thumbnails/" + jobs[x].thumbnail + "' width='80%' />";
} else {
    thumbnailImg = "<p class='joblist_projects'>[ No image available. ]</p>";
};
document.getElementById("thumbnail").innerHTML = thumbnailImg;



///BEGIN HOURS LOG AS TABLE
hoursLog = [];
for (let i = 0; i < jobs[x].hours_logged.length; i++) {
    //hoursLog.push("<tr><td>" + jobs[x].hours_logged[i].Date + "</td><td>" + jobs[x].hours_logged[i].Hours+ "</td></tr><tr><td colspan='2'><p class='worklog_items'>* "+ jobs[x].hours_logged[i].Note +"</p></td></tr>");
    hoursLog.push("<p class='date-hours'>" + jobs[x].hours_logged[i].Date + " &#8212; " + jobs[x].hours_logged[i].Hours + "</p><p class='note'>*" + jobs[x].hours_logged[i].Note + "</p><hr class='jobs' />")
}
let hoursLog_w_commas = hoursLog.toString();
let hoursLog_code = hoursLog_w_commas.replace(/,/g, "");
document.getElementById("hours_table").innerHTML = "<p class='date-hours'><strong>Date &#8212; Hours Logged</strong></p><hr class='jobs' />" + hoursLog_code;
//END HOURS LOG



//BEGIN JOB STATUS BAR
let jobStatus = "";
//if completed, billed & paid
if (jobs[x].completed_date && jobs[x].date_billed && jobs[x].date_paid) {
    jobStatus = "\
        <div class='col-sm-3 green' >\
            <p>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " \
        </div>\
        <div class='col-sm-3 green'>\
            <p>&#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " \
        </div>\
        <div class='col-sm-3 green'>\
            <p>&#8212;> <i class='fas fa-check-square'></i> Billed on " + jobs[x].date_billed + " \
        </div>\
        <div class='col-sm-3 green'>\
            <p>&#8212> <i class='fas fa-check-square'></i> Payment Recieved on " + jobs[x].date_paid + "\
        </div>"; 
// if completed & billed
} else if (jobs[x].completed_date && jobs[x].date_billed && !jobs[x].date_paid) {
    jobStatus = "\
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " \
    </div>\
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " \
    </div>\
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='fas fa-check-square'></i> Billed on " + jobs[x].date_billed + " \
    </div>\
    <div class='col-sm-3 yellow'>\
        <p>&#8212> <i class='far fa-square'></i> Awaiting payment . . .\
    </div>"
// if completed
} else if (jobs[x].completed_date && !jobs[x].date_billed && !jobs[x].date_paid) {
    jobStatus = "\
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " \
    </div> \
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " \
    </div>\
    <div class='col-sm-3 yellow'>\
        <p>&#8212;> <i class='far fa-square'></i> Need to bill . . .  </div> \
    </div>\
    <div class='col-sm-3 yellow'>\
    </div>"

// if not completed
} else {
    jobStatus = "\
    <div class='col-sm-4 blue'></div><div class='col-sm-4 blue'>\
    <p>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + "\</div><div class='col-sm-4 blue'></div>"};
document.getElementById("job_status").innerHTML = jobStatus;