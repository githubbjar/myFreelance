

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
    this.hours_logged = []; 
    this.completed_date = "";
    this.total_hours = function() {
        //create array of hours
        let arrayOfHours = [];
        for (let i = 0; i < this.hours_logged.length; i++) {
            arrayOfHours.push(jobs[this.job_number].hours_logged[i].Hours);
        };
        //add the array of hours
        let sum = 0;
        for (let i = 0; i < arrayOfHours.length; i++) {
            sum += arrayOfHours[i];
        }
        return sum;
    };
    this.rate_of_pay = "";
    this.date_billed = "";
    this.date_paid = "";
    this.thumbnail = "";
};

//begin the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2708 = new Job(2708, 0, "Biretta Books", "2021 Music Schedule", "16 page booklet, 5.5 x 8.5, St. John Cantius Church", "July 17, 2021", "August 6, 2021");
//Hours Logged
job2708.hours_logged[0] = {Date: "Jul 21", Hours: 3}
job2708.hours_logged[1] = {Date: "Jul 24", Hours: 1}
job2708.hours_logged[2] = {Date: "Jul 28", Hours: 2}
job2708.hours_logged[3] = {Date: "Jul 29", Hours: 1}
job2708.hours_logged[4] = {Date: "Aug 1", Hours: 1}
//End Hours Logged
job2708.completed_date = "August 1, 2021";
job2708.rate_of_pay = 40;
job2708.date_billed = "August 4, 2021";
job2708.date_paid = "August 9, 2011";
job2708.thumbnail = "2708.png";
jobs.push(job2708);
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2709 = new Job(2709, 1, "Publishing Management Associates", "FT Flex 2.0", "Online subs form creation for First Things website: PRINT, APP, WEB, COMBO", "July 16, 2021", "August 30, 2021");
//Hours Logged
job2709.hours_logged[0] = {Date: "Jul 19", Hours: 3};
job2709.hours_logged[1] = {Date: "Jul 21", Hours: 1};
job2709.hours_logged[2] = {Date: "Aug 9", Hours: 1};
//End Hours Logged
job2709.completed_date = "";
job2709.rate_of_pay = "50";
job2709.date_billed = "";
job2709.date_paid = "";
job2709.thumbnail = "2709.png";
jobs.push(job2709);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2710 = new Job(2710, 2, "Biretta Books", "Poster, Drexel Parish", "Hope for the Broken talk &#8212; 11 x 17", "August 12, 2021", "Aug 23, 2021");
job2710.hours_logged[0] = {Date: "Aug 12", Hours: .5};
job2710.completed_date = "";
job2710.rate_of_pay = "40";
job2710.date_billed = "";
job2710.date_paid = "";
jobs.push(job2710);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2711 = new Job(2711, 3, "Publishing Management Associates", "FT House Ads", "Four half-page ads for <em>First Things</em> magazine: Back issue organizer, Books, Creed DVD, Reprint Series", "August 12, 2021", "August 30, 2021");
job2711.hours_logged[0] = {Date: "Aug 12", Hours: 1};
job2711.rate_of_pay = 50;
jobs.push(job2711);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2712 = new Job(2712, 4, "Biretta Books", "Fatima Event Posters", "2 posters and a Facebook event image", "August 14, 2021", "August 23, 2021");
job2712.hours_logged[0] = {Date: "Aug 13", Hours: .5};
job2712.hours_logged[1] = {Date: "Aug 15", Hours: 3};
job2712.hours_logged[2] = {Date: "Aug 16", Hours: 1};
job2712.hours_logged[3] = {Date: "Aug 17", Hours: 1};
job2712.thumbnail = "2712.png";
job2712.rate_of_pay = 40;
jobs.push(job2712);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2713 = new Job(2713, 5, "Publishing Management Associates", "Ad Reformatting", "Belmont Abbey, Recovery of Family Life, Reason to Believe", "August 17, 2021", "N/A")
job2713.hours_logged[0] = {Date: "Aug 17", Hours: .25};
job2713.hours_logged[1] = {Date: "Aug 19", Hours: .25};
job2713.rate_of_pay = 50;
jobs.push(job2713); 

//end the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//create array of completed dates
const dates_paid = jobs.map (function (job) {
    return job.date_paid;
});

console.log(jobs[1].thumbnail)

//BEGIN JOB LIST
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
//END JOB LIST



