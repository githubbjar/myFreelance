//Insert the object data

const loadPage = function() {

    //Leveraging the destructuring assignment syntax to create variables
    //instead of calling for 'jobs[x].invoice_number', I can just use the variable 'invoice_number'
    const { invoice_number, job_number, employer, project, project_type, start_date, due_date, completed_date, date_billed, date_paid, hours_logged, thumbnail, pdf } = jobs[x];
    //make variables from object methods
    const employer_nickname = jobs[x].employer_nickname();
    const total_hours = jobs[x].total_hours();
    const rate_of_pay = jobs[x].rate_of_pay();
    const employer_address1 = jobs[x].employer_address1();
    const employer_address2 = jobs[x].employer_address2();
    const contact = jobs[x].contact();
    const contact_email = jobs[x].contact_email();


    //DOCUMENT TITLE
    document.title = "Invoice #" + invoice_number + ", " + employer_nickname + ": " + project;


    //JOB/INVOICE NUMBER
    const jobOrInvoice = (completed_date) ? "Invoice #" + invoice_number : "Job #" + invoice_number;
    document.getElementById("jerryjob").innerHTML = "Jerry Janquart &#8212; " + jobOrInvoice;


    //PREVIOUS NEXT LINKS
    const previous = (x === 0) ? jobs.length-1 : x-1;
    const next = (x === jobs.length-1) ? 0 : x+1;
    document.getElementById("previous").innerHTML = "<a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + previous + "'>[prev.]</a>";
    document.getElementById("next").innerHTML = "<a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + next + "'>[next]</a>";


    //BILLING DATE
    const billingDate = (date_billed) ? "Billing Date: " + date_billed : "";
    document.getElementById("date_billed").innerHTML = billingDate;


    //TOTAL AMOUNT DUE or RUNNING TOTAL
    let runningOrTotal = "RUNNING TOTAL:";
    if (completed_date && date_paid) {
        runningOrTotal = "AMOUNT PAID:";
    } else if (completed_date && !date_paid) {
        runningOrTotal = "TOTAL DUE:";
    };
    document.getElementById('running_total_or_total').innerHTML = runningOrTotal;


    //AMOUNT toFixed adds the decimal point and places
    const totalAmount = total_hours * rate_of_pay;
    document.getElementById("billing_amount").innerHTML = "$" + totalAmount.toFixed(2);


    //JOB INFO
    document.getElementById("project").innerHTML = project;
    document.getElementById("project_type").innerHTML = project_type;
    document.getElementById("start_date").innerHTML =  start_date + " / " + due_date;
    const completed_date_text = (jobs[x].completed_date) ? "COMPLETED DATE:" : "";
    document.getElementById("completed-date-header").innerHTML = completed_date_text;
    document.getElementById("completed_date").innerHTML = completed_date;
    document.getElementById("total_hours").innerHTML = total_hours + " hours";
    document.getElementById("rate_of_pay").innerHTML = "$" + rate_of_pay + " / hour";


    //BILL TO 
    document.getElementById("employer").innerHTML = employer;
    document.getElementById("employer_address1").innerHTML = employer_address1;
    document.getElementById("employer_address2").innerHTML = employer_address2;
    document.getElementById("contact").innerHTML = contact;
    document.getElementById("contact_email").innerHTML = contact_email;


    //CREATE ALL JOBS LIST
    //1. Create necessary arrays from jobs array
    const invoice_numbers = jobs.map (function (job) {return job.invoice_number;});
    const employer_nicknames = jobs.map (function (job) {return job.employer_nickname();});
    const job_numbers = jobs.map (function (job) {return job.job_number;});
    const projects = jobs.map (function (job) {return job.project;});
    const dates_paid = jobs.map (function (job) {return job.date_paid;});

    //2. Create array of jobs
    let list_jobs = []
    for (let i = 0; i < invoice_numbers.length; i++) {
        //To make chosen jobs bolded with a check
        const boldCheck = (invoice_numbers[i] === invoice_number) ? "<strong><i class='fas fa-check-square'></i> " : "";
        const endBoldCheck = (invoice_numbers[i] === invoice_number) ? "</strong>" : "";        
        //To make paid jobs greyed out
        const lightGray = (dates_paid[i]) ? "light-gray" : "";
        list_jobs.push("<p class='jobslist_employer_nicknames'><span class='" + lightGray + "'>" + employer_nicknames[i] + "</span></p>" + //Job Nickname
        "<p class='joblist_links'><a class='" + lightGray + "' href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + job_numbers[i] + "'>" + boldCheck + "#" + invoice_numbers[i] + endBoldCheck + "</a></p>" + //Job Number
        "<p class='joblist_projects'><span class='" + lightGray + "'>" + projects[i] + "</span></p>") //Job Project
    }

    //3. Turn the array into a string
    const list_jobs_code_w_commas = list_jobs.toString();

    //4. Remove the commas from the string
    const list_jobs_code = list_jobs_code_w_commas.replace(/,/g, "");

    //5. Insert jobs list code into the job list spot
    document.getElementById("job-list").innerHTML = "<p class='project-details-header'>ALL JOBS:<br /><br /></p>" + list_jobs_code;





    //THUMBNAIL & PDF
    let thumbnailImg = "";
    let thumbnailText = "<p class='project-details-header'>THUMBNAIL:<br /><br /></p>";
    if (thumbnail && pdf) {
        thumbnailImg = `${thumbnailText}<a href='pdfs/${invoice_number}.pdf'><img src='thumbnails/${invoice_number}.png' width='80%' /></a>`;
    } else if(jobs[x].thumbnail) {
        thumbnailImg = thumbnailText + "<img src='thumbnails/" + invoice_number + ".png' width='80%' />";
    } else {
        thumbnailImg = thumbnailText + "<p class='joblist_projects'>[ No image available. ]</p>";
    };
    document.getElementById("thumbnail").innerHTML = thumbnailImg;


    ///WORK LOG
    //1. Set up array
    hoursLog = [];

    //2. Iterate through jobs, pushing each hours_logged into the 'hoursLog' array
    for (let i = 0; i < hours_logged.length; i++) {
        const hourOrHours = (hours_logged[i].Hours <=1) ? "hour" : "hours";
        hoursLog.push("<p class='date-hours'>" + hours_logged[i].Date + " &#8212; " + hours_logged[i].Hours + " " + hourOrHours + " </p><p class='note'><em>" + hours_logged[i].Note + "</em></p><hr class='jobs' />")
    }

    //3. Turn array into string
    let hoursLog_w_commas = hoursLog.toString();

    //4. Remove Commas 
    let hoursLog_code = hoursLog_w_commas.replace(/,/g, "");

    //5. Insert hoursLog_code into spot
    document.getElementById("hours_table").innerHTML = "<p class='project-details-header'><br />WORK LOG:</p><hr class='jobs' />" + hoursLog_code;



    //BEGIN JOB STATUS BAR

    //1. Set up variables
    let jobStatus = "";
    const green = "<div class='col-sm-3 green'>";
    const yellow = "<div class='col-sm-3 yellow'>";
    const blue = "<div class='col-sm-4 blue'>";
    const endColor = "</div>";
    const square = "<p>&#8212;> <i class='fas fa-check-square'></i>"

    //2. Output appropriate data based on values being entered
    //if completed, billed & paid
    if (completed_date && date_billed && date_paid) {
        jobStatus = green + square + " Job started on " + start_date + endColor +
            green + square + " Completed on " + completed_date + endColor +
            green + square + " Billed on " + date_billed + endColor +
            green  + square + " Paid on " + date_paid + endColor;
    // if completed & billed
    } else if (completed_date && date_billed && !date_paid) {
        jobStatus = yellow + square + " Job started on " + start_date + endColor +
        yellow + square + " Completed on " + completed_date + endColor +
        yellow + square + " Billed on " + date_billed + endColor +
        yellow + square + " Awaiting payment . . ." + endColor;
    // if completed
    } else if (completed_date && !date_billed && !date_paid) {
        jobStatus = yellow + square + " Job started on " + start_date + endColor +
        yellow + square + " Completed on " + completed_date + endColor +
        yellow + square + " Need to bill . . .  " + endColor +
        yellow + endColor;
    // if not completed
    } else {
        jobStatus = blue + endColor + blue + square + " Job started on " + start_date + endColor + blue + endColor};

    //3. Insert code into spot
    document.getElementById("job_status").innerHTML = jobStatus;



    //JSON MODAL
    document.getElementById("json-spot").innerHTML = 'Job #' + invoice_number + ' JSON';
    document.getElementById("json").innerHTML = '<pre>' + JSON.stringify(jobs[x], null, 2) + '</pre>';/*MUST WRAP IN PRE to get the spacing and formatting to work */  


    //TOTALS MODAL
    //TOTAL PAID JOBS
    const closedJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].date_paid) {
            closedJobs.push(jobs[i]);
        }
    };
    const closedJobsAmountArray = closedJobs.map (function (job) {return job.total_paid();});
    const closedJobsProjectTitles = closedJobs.map (function (job) {return job.project;});
    const totalAmountReceived = closedJobsAmountArray.reduce(function (accumVariable, curValue) {
        return accumVariable + curValue
    }, 0);
    //TOTAL BILLED JOBS
    const completedJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].date_billed && !jobs[i].date_paid) {
            completedJobs.push(jobs[i]);
        }
    };
    const completedJobsAmountArray = completedJobs.map (function (job) {return job.total_paid();});
    const totalAmountBilled = completedJobsAmountArray.reduce(function (accumVariable, curValue) {
        return accumVariable + curValue
    }, 0);
    //TOTAL TO BE BILLED    
    const jobsInProgress = [];
    for (let i = 0; i < jobs.length; i++) {
        if (!jobs[i].completed_date) {
            jobsInProgress.push(jobs[i]);
        }
    };
    const jobsInProgressAmountArray = jobsInProgress.map (function (job) {return job.total_paid();});
    const totalAmountToBeBilled = jobsInProgressAmountArray.reduce(function (accumVariable, curValue) {
        return accumVariable + curValue
    }, 0);
    //OUTPUT TOTALS MODAL
    document.getElementById("totals-spot").innerHTML = `<h2 class="jerry">Amounts &#8212; ${jobs.length} Jobs Total</h2>`;
    document.getElementById("totals").innerHTML = `<p class="project-details-header">AMOUNT RECEIVED (CLOSED JOBS, ${closedJobs.length}):</p><p class="joblist_projects">${closedJobsProjectTitles}</p><p class="total-due">$${totalAmountReceived.toFixed(2)}</p><p class="project-details-header">AMOUNT BILLED (COMPLETED JOBS, ${completedJobs.length}):</p><p class="total-due">$${totalAmountBilled.toFixed(2)}</p><p class="project-details-header">AMOUNT TO BE BILLED (JOBS IN PROGRESS, ${jobsInProgress.length}):</p><p class="total-due">$${totalAmountToBeBilled.toFixed(2)}</p>`;



};

loadPage();