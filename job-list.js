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
    this.rate_of_pay = function() {
        if (this.employer == "Biretta Books") {
            return 40;
        } else if (this.employer == "Publishing Management Associates") {
            return 50;
        }
        }
    this.date_billed = "";
    this.date_paid = "";
    this.thumbnail = "";
};

//begin the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2708 = new Job(2708, 0, "Biretta Books", "2021 Music Schedule", "16 page booklet, 5.5 x 8.5, St. John Cantius Church", "July 17, 2021", "August 6, 2021");
//Hours Logged
job2708.hours_logged[0] = {Date: "Jul 21", Hours: 3, Note: "Initial layout"}
job2708.hours_logged[1] = {Date: "Jul 24", Hours: 1, Note: "Layout adjustments"}
job2708.hours_logged[2] = {Date: "Jul 28", Hours: 2, Note: "Corrections applied"}
job2708.hours_logged[3] = {Date: "Jul 29", Hours: 1, Note: "Further edits"}
job2708.hours_logged[4] = {Date: "Aug 1", Hours: 1, Note: "Final corrections"}
//End Hours Logged
job2708.completed_date = "August 1, 2021";
job2708.date_billed = "August 4, 2021";
job2708.date_paid = "August 9, 2011";
job2708.thumbnail = "2708.png";
jobs.push(job2708);
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2709 = new Job(2709, 1, "Publishing Management Associates", "FT Flex 2.0", "Online subs form creation for First Things website: PRINT, APP, WEB, COMBO", "July 16, 2021", "August 30, 2021");
//Hours Logged
job2709.hours_logged[0] = {Date: "Jul 19", Hours: 3, Note: "Initial setup"};
job2709.hours_logged[1] = {Date: "Jul 21", Hours: 1, Note: "Edits and tweaks"};
job2709.hours_logged[2] = {Date: "Aug 9", Hours: 1, Note: "More edits and tweaks"};
//End Hours Logged
job2709.thumbnail = "2709.png";
jobs.push(job2709);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2710 = new Job(2710, 2, "Biretta Books", "Poster, Drexel Parish", "Hope for the Broken talk &#8212; 11 x 17", "August 12, 2021", "Aug 23, 2021");
job2710.hours_logged[0] = {Date: "Aug 12", Hours: .5, Note: "Getting organized"};
job2710.hours_logged[1] = {Date: "Aug 19", Hours: 1, Note: "Outline picture / Begin layout"};
job2710.hours_logged[2] = {Date: "Aug 20", Hours: 1, Note: "Layout / Submit 1st draft"};
job2710.hours_logged[3] = {Date: "Aug 20", Hours: .5, Note: "Applied client revisions"}
job2710.completed_date = "August 24, 2021";
job2710.date_billed ="August 24, 2021";
job2710.thumbnail = "2710.png";
jobs.push(job2710);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2711 = new Job(2711, 3, "Publishing Management Associates", "FT House Ads", "Four half-page ads for <em>First Things</em> magazine: Back issue organizer, Books, Creed DVD, Reprint Series", "August 12, 2021", "August 30, 2021");
job2711.hours_logged[0] = {Date: "Aug 12", Hours: 1, Note: "Create Reprint Series ad"};
job2711.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "Revise Reprint Series ad"};
job2711.hours_logged[2] = {Date: "Aug 20", Hours: .5, Note: "Create Creed DVD ad"};
job2711.hours_logged[3] = {Date: "Aug 27", Hours: .5, Note: "Create Books Online ad"}
job2711.thumbnail = "2711.png";
jobs.push(job2711);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2712 = new Job(2712, 4, "Biretta Books", "Fatima Event Posters", "2 posters and a Facebook event image", "August 14, 2021", "August 23, 2021");
job2712.hours_logged[0] = {Date: "Aug 13", Hours: .5, Note: "Getting organized"};
job2712.hours_logged[1] = {Date: "Aug 15", Hours: 2, Note: "Find pictures / Start layout"};
job2712.hours_logged[2] = {Date: "Aug 16", Hours: 1, Note: "New picture"};
job2712.hours_logged[3] = {Date: "Aug 17", Hours: 1, Note: "Adjustments"};
job2712.hours_logged[4] = {Date: "Aug 19", Hours: .5, Note: "More adjustments"};
job2712.hours_logged[5] = {Date: "Aug 27", Hours: .25, Note: "Final text and submit"};
job2712.completed_date = "August 27, 2021"; 
job2712.date_billed = "August 27, 2021";
job2712.thumbnail = "2712.png";
jobs.push(job2712);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2713 = new Job(2713, 5, "Publishing Management Associates", "Ad Reformatting, misc.", "Misc. ads color corrected, resized, created.", "August 17, 2021", "N/A")
job2713.hours_logged[0] = {Date: "Aug 17", Hours: .25, Note: "Belmont Abbey"};
job2713.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "Recov of Fam Life / RTB"};
job2713.hours_logged[2] = {Date: "Aug 20", Hours: .25, Note: "Sparkly Kat Book"};
job2713.hours_logged[3] = {Date: "Aug 21", Hours: .5, Note: "FT Poetry Night"};
job2713.hours_logged[4] = {Date: "Aug  24", Hours: .25, Note: "Poetry night revisions"};
job2713.hours_logged[5] = {Date: "Aug 24", Hours: .25, Note: "FT Truth Ad"};
job2713.thumbnail = "2713.png";
jobs.push(job2713); 

//end the jobs
///////////////////////////////////////////////////////////////////////////////////////////////////////////