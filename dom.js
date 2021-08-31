//Insert the object data


//DOCUMENT TITLE
document.title = "Invoice #" + jobs[x].invoice_number + ", " + jobs[x].employer_nickname() + ": " + jobs[x].project;


//JOB/INVOICE NUMBER
const jobOrInvoice = (jobs[x].completed_date) ? "Invoice #" + jobs[x].invoice_number : "Job #" + jobs[x].invoice_number;
document.getElementById("jerryjob").innerHTML = "Jerry Janquart &#8212; " + jobOrInvoice;


//PREVIOUS NEXT LINKS
const previous = (x === 0) ? jobs.length-1 : x-1;
const next = (x === jobs.length-1) ? 0 : x+1;
document.getElementById("previous").innerHTML = "<a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + previous + "'>[prev.]</a>";
document.getElementById("next").innerHTML = "<a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + next + "'>[next]</a>";


//BILLING DATE
const dateBilled = (jobs[x].date_billed) ? "Billing Date: " + jobs[x].date_billed : "";
document.getElementById("date_billed").innerHTML = dateBilled;


//TOTAL AMOUNT DUE or RUNNING TOTAL
let runningOrTotal = "RUNNING TOTAL:";
if (jobs[x].completed_date && jobs[x].date_paid) {
    runningOrTotal = "AMOUNT PAID:";
} else if (jobs[x].completed_date && !jobs[x].date_paid) {
    runningOrTotal = "TOTAL DUE:";
};
document.getElementById('running_total_or_total').innerHTML = runningOrTotal;


//AMOUNT toFixed adds the decimal point and places
const totalAmount = jobs[x].total_hours() * jobs[x].rate_of_pay();
document.getElementById("billing_amount").innerHTML = "$" + totalAmount.toFixed(2);


//JOB INFO
document.getElementById("project").innerHTML = jobs[x].project;
document.getElementById("project_type").innerHTML = jobs[x].project_type;
document.getElementById("start_date").innerHTML =  jobs[x].start_date + " / " + jobs[x].due_date;
const completed_date = (jobs[x].completed_date) ? "COMPLETED DATE:" : "";
document.getElementById("completed-date-header").innerHTML = completed_date;
document.getElementById("completed_date").innerHTML = jobs[x].completed_date;
document.getElementById("total_hours").innerHTML = jobs[x].total_hours() + " hours";
document.getElementById("rate_of_pay").innerHTML = "$" + jobs[x].rate_of_pay() + " / hour";


//BILL TO 
document.getElementById("employer").innerHTML = jobs[x].employer;
document.getElementById("employer_address1").innerHTML = jobs[x].employer_address1();
document.getElementById("employer_address2").innerHTML = jobs[x].employer_address2();
document.getElementById("contact").innerHTML = jobs[x].contact();
document.getElementById("contact_email").innerHTML = jobs[x].contact_email();


//CREATE ALL JOBS LIST
//1. Create necessary arrays from jobs array
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

//create array of jobs
let list_jobs = []
for (let i = 0; i < invoice_numbers.length; i++) {
    //To make chosen jobs bolded with a check
    const boldCheck = (invoice_numbers[i] === jobs[x].invoice_number) ? "<strong><i class='fas fa-check-square'></i> " : "";
    const endBoldCheck = (invoice_numbers[i] === jobs[x].invoice_number) ? "</strong>" : "";        
    //To make paid jobs greyed out
    const lightGray = (dates_paid[i]) ? "light-gray" : "";
    list_jobs.push("\
    <p class='jobslist_employer_nicknames'><span class='" + lightGray + "'>" + employer_nicknames[i] + "</span></p>\
    <p class='joblist_links'><a class='" + lightGray + "' href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + job_numbers[i] + "'>" + boldCheck + "#" + invoice_numbers[i] + endBoldCheck + "</a></p>\
    <p class='joblist_projects'><span class='" + lightGray + "'>" + projects[i] + "</span></p>")
}

//turn the array into a string
const list_jobs_code_w_commas = list_jobs.toString();

//remove the commas from the string
const list_jobs_code = list_jobs_code_w_commas.replace(/,/g, "");

//insert jobs code into the job list spot
document.getElementById("job-list").innerHTML = "<p class='project-details-header'>ALL JOBS:<br /><br /></p>" + 
list_jobs_code;



//TEST DIV
document.getElementById("test_space").innerHTML = "";



//THUMBNAIL & PDF
let thumbnailImg = "";
let thumbnailText = "<p class='project-details-header'>THUMBNAIL:<br /><br /></p>";
if (jobs[x].thumbnail && jobs[x].pdf) {
    thumbnailImg = thumbnailText + "<a href='pdfs/" + jobs[x].invoice_number + ".pdf'><img src='thumbnails/" + jobs[x].invoice_number + ".png' width='80%' /></a>";
} else if(jobs[x].thumbnail) {
    thumbnailImg = thumbnailText + "<img src='thumbnails/" + jobs[x].invoice_number + ".png' width='80%' />";
} else {
    thumbnailImg = thumbnailText + "<p class='joblist_projects'>[ No image available. ]</p>";
};
document.getElementById("thumbnail").innerHTML = thumbnailImg;


///WORK LOG
hoursLog = [];
for (let i = 0; i < jobs[x].hours_logged.length; i++) {
    const hourOrHours = (jobs[x].hours_logged[i].Hours <=1) ? "hour" : "hours";
    hoursLog.push("<p class='date-hours'>" + jobs[x].hours_logged[i].Date + " &#8212; " + jobs[x].hours_logged[i].Hours + " " + hourOrHours + " </p><p class='note'><em>" + jobs[x].hours_logged[i].Note + "</em></p><hr class='jobs' />")
}
let hoursLog_w_commas = hoursLog.toString();
let hoursLog_code = hoursLog_w_commas.replace(/,/g, "");
document.getElementById("hours_table").innerHTML = "<p class='project-details-header'><br />WORK LOG:</p><hr class='jobs' />" + hoursLog_code;



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
            <p>&#8212> <i class='fas fa-check-square'></i> Paid on " + jobs[x].date_paid + "\
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