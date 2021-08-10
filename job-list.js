

// Empty array for jobs
const jobs = [];

//Object Constructor
function Job(invoice_number, job_number, employer, project, project_type, start_date, due_date) {
    this.invoice_number = invoice_number;
    this.job_number = job_number;
    this.employer = employer;
    this.contact = function() {
        if (this.employer == "Biretta Books") {
            return "Nick Chapello";
        } else if (this.employer == "Publishing Management Associates") {
            return "Richard A. Vaughan";
        }
    };
    this.contact_email = function() {
        if (this.employer == "Biretta Books") {
            return "nchapello@cantius.org";
        } else if (this.employer == "Publishing Management Associates") {
            return "ravaughan@pma-inc.net";
        }
    };
    this.employer_address1 = function() {
        if (this.employer == "Biretta Books") {
            return "1025 West Fry Street";
        } else if (this.employer == "Publishing Management Associates") {
            return "129 Phelps Avenue, Suite 312";
        }
    };
    this.employer_address2 = function() {
        if (this.employer == "Biretta Books") {
            return "Chicago, IL 60642-5419";
        } else if (this.employer == "Publishing Management Associates") {
            return "Rockford, IL 61108";
        }
    };
    this.project = project;
    this.project_type = project_type;
    this.start_date = start_date;
    this.due_date = due_date;
    this.employer_nickname = function() {
        if (this.employer == "Biretta Books") {
            return "Biretta";
        } else if (this.employer == "Publishing Management Associates") {
            return "PMA";
        }
    };
    this.completed_date = "";
    this.total_hours = "";
    this.rate_of_pay = "";
    this.date_billed = "";
    this.date_paid = "";
};

//the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2708 = new Job(2708, 0, "Biretta Books", "2021 Music Schedule", "16 page booklet, 5.5 x 8.5, St. John Cantius Church", "July 17, 2021", "August 6, 2021");
job2708.completed_date = "August 1, 2021";
job2708.total_hours = 8;
job2708.rate_of_pay = 40;
job2708.date_billed = "August 4, 2021";
job2708.date_paid = "August 9, 2011";
jobs.push(job2708);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2709 = new Job(2709, 1, "Publishing Management Associates", "FT Flex 2.0", "Online subs form creation for First Things website", "July 16, 2021", "August 30, 2021");
job2709.completed_date = "";
job2709.total_hours = "";
job2709.rate_of_pay = "";
job2709.date_billed = "";
job2709.date_paid = "";
jobs.push(job2709);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2710 = new Job(2710, 2, "Biretta Books", "Posters", "For St. John Cantius Church event", "August 6, 2021", "August 30, 2021");
job2710.completed_date = "";
job2710.total_hours = "";
job2710.rate_of_pay = "";
job2710.date_billed = "";
job2710.date_paid = "";
jobs.push(job2710);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2711 = new Job(2711, 3, "Publishing Management Associates", "FT House Ads", "Various small ads for First Things magazine", "May 20, 2021", "August 30, 2021");
jobs.push(job2711);

//create array of invoice nubmers
const invoice_numbers = jobs.map (function (job) {
    return job.invoice_number;
});

//create array of invoice nubmers
const employer_nicknames = jobs.map (function (job) {
    return job.employer_nickname();
});


//create array of job numbers
const job_numbers = jobs.map (function (job) {
    return job.job_number;
});

//create array of projects
const projects = jobs.map (function (job) {
    return job.project;
});



let list_jobs = []
for (let i = 0; i < invoice_numbers.length; i++) {
    //I needed to put this IN the for loop since I was referencing "i". 
    var bold = "";
    var endBold = "";
    if(invoice_numbers[i]==jobs[x].invoice_number){
        bold="<strong>";
        }
    if(invoice_numbers[i]==jobs[x].invoice_number){
        endBold="</strong>";
        }      
    list_jobs.push("\
    <p class='jobslist_employer_nicknames'>" + employer_nicknames[i] + "</p>\
    <p class='joblist_links'><a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + job_numbers[i] + "'>" + bold + "#" + invoice_numbers[i] + endBold + "</a></p>\
    <p class='joblist_projects'>" + projects[i] + "</p>")
}
let list_jobs_code_w_commas = list_jobs.toString();
let list_jobs_code = list_jobs_code_w_commas.replace(/,/g, "");