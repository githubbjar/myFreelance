// Empty array for jobs
const jobs = [];

//Object Constructor
function Job(invoice_number, job_number, employer, project, project_type, start_date, due_date) {
    this.invoice_number = invoice_number;
    this.job_number = job_number;
    this.employer = employer;
    this.contact = function() {
        if (this.employer == "St. John Cantius Church") {
            return "Nick Chapello";
        } else {
            return "Sue Milnes";
        }
    };
    this.contact_email = function() {
        if (this.employer == "St. John Cantius Church") {
            return "nchapello@cantius.org";
        } else {
            return "sue@pma-inc.net";
        }
    };
    this.employer_address1 = function() {
        if (this.employer == "St. John Cantius Church") {
            return "825 N. Carpenter Street";
        } else {
            return "129 Phelps Avenue, Suite 312";
        }
    };
    this.employer_address2 = function() {
        if (this.employer == "St. John Cantius Church") {
            return "Chicago, IL 60642";
        } else {
            return "Rockford, IL 61108";
        }
    };
    this.project = project;
    this.project_type = project_type;
    this.start_date = start_date;
    this.due_date = due_date;
    this.completed_date = "";
    this.total_hours = "";
    this.rate_of_pay = "";
    this.date_billed = "";
    this.date_paid = "";
};

//the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2708 = new Job(2708, 0, "St. John Cantius Church", "2021 Music Schedule", "16 page booklet", "July 17, 2021", "August 6, 2021");
job2708.completed_date = "August 1, 2021";
job2708.total_hours = 8;
job2708.rate_of_pay = 40;
job2708.date_billed = "August 4, 2021";
job2708.date_paid = "";
jobs.push(job2708);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2709 = new Job(2709, 1, "Publishing Management Associates", "First Things Flex 2.0", "Online Subs Form Creation", "July 16, 2021", "August 30, 2021");
job2709.completed_date = "";
job2709.total_hours = "";
job2709.rate_of_pay = "";
job2709.date_billed = "";
job2709.date_paid = "";
jobs.push(job2709);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2710 = new Job(2710, 2, "St. John Cantius Church", "Posters", "", "August 6, 2021", "August 30, 2021");
job2710.completed_date = "";
job2710.total_hours = "";
job2710.rate_of_pay = "";
job2710.date_billed = "";
job2710.date_paid = "";
jobs.push(job2710);

//create array of invoice nubmers
const invoice_numbers = jobs.map (function (job) {
    return job.invoice_number;
});

//create array of job numbers
const job_numbers = jobs.map (function (job) {
    return job.job_number;
});

let list_jobs = []
for (let i = 0; i < invoice_numbers.length; i++) {
    list_jobs.push("<p><a href='http://www.jerryjanquart.com/myFreelance/index.php?jobx=" + job_numbers[i] + "'>#" + invoice_numbers[i] + "</p>")
}

let list_jobs_code_w_commas = list_jobs.toString();
let list_jobs_code = list_jobs_code_w_commas.replace(/,/g, "");

console.log(list_jobs_code);