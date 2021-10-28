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
    this.secondary_contact = [];
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
    };
    this.total_paid = function() {
        return this.rate_of_pay() * this.total_hours();
    };
    this.date_billed = "";
    this.date_paid = "";
    this.thumbnail = false;
    this.pdf = false;
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
job2708.thumbnail = true;
job2708.pdf = true;
jobs.push(job2708);
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2709 = new Job(2709, 1, "Publishing Management Associates", "FT Flex 2.0", "Online subs form creation for First Things website: PRINT, APP, WEB, COMBO", "July 16, 2021", "August 30, 2021");
//Hours Logged
job2709.hours_logged[0] = {Date: "Jul 19", Hours: 3, Note: "Initial setup"};
job2709.hours_logged[1] = {Date: "Jul 21", Hours: 1, Note: "Edits and tweaks"};
job2709.hours_logged[2] = {Date: "Aug 9", Hours: 1, Note: "More edits and tweaks"};
//End Hours Logged
job2709.thumbnail = true;
jobs.push(job2709);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2710 = new Job(2710, 2, "Biretta Books", "Drexel Parish Poster", "Hope for the Broken talk &#8212; 11 x 17 and 8.5 x 11 posters, and 7.25 x 4.57 ad", "August 12, 2021", "Aug 23, 2021");
job2710.secondary_contact[0] = {Name: "Andrea Eisenberg", Email: "aeisenberg@cantius.org"};
job2710.hours_logged[0] = {Date: "Aug 12", Hours: .5, Note: "Getting organized"};
job2710.hours_logged[1] = {Date: "Aug 19", Hours: 1, Note: "Outline picture / Begin layout"};
job2710.hours_logged[2] = {Date: "Aug 20", Hours: 1, Note: "Layout / Submit 1st draft"};
job2710.hours_logged[3] = {Date: "Aug 20", Hours: .5, Note: "Applied client revisions"}
job2710.completed_date = "August 24, 2021";
job2710.date_billed = "August 24, 2021";
job2710.date_paid = "August 29, 2021";
job2710.thumbnail = true;
job2710.pdf = true;
jobs.push(job2710);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2711 = new Job(2711, 3, "Publishing Management Associates", "FT House Ads", "Four half-page ads for <em>First Things</em> magazine: Back issue organizer, Books, Creed DVD, Reprint Series", "August 12, 2021", "August 30, 2021");
job2711.hours_logged[0] = {Date: "Aug 12", Hours: 1, Note: "Create Reprint Series ad"};
job2711.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "Revise Reprint Series ad"};
job2711.hours_logged[2] = {Date: "Aug 20", Hours: .5, Note: "Create Creed DVD ad"};
job2711.hours_logged[3] = {Date: "Aug 27", Hours: .5, Note: "Create Books Online ad"};
job2711. hours_logged[4] = {Date: "Aug 30", Hours: 1.5, Note: "Create Slipcase ad"};
job2711.completed_date = "September 1, 2021";
job2711.date_billed = "September 3, 2021";
job2711.date_paid = "October 3, 2021";
job2711.thumbnail = true;
job2711.pdf = true;
jobs.push(job2711);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2712 = new Job(2712, 4, "Biretta Books", "Fatima Event Posters", "2 posters (11x17 &amp; 8.5x11) and a jpg for social media", "August 14, 2021", "August 23, 2021");
job2712.secondary_contact[0] = {Name: "Andrea Eisenberg", Email: "aeisenberg@cantius.org"};
job2712.hours_logged[0] = {Date: "Aug 13", Hours: .5, Note: "Getting organized"};
job2712.hours_logged[1] = {Date: "Aug 15", Hours: 2, Note: "Find pictures / Start layout"};
job2712.hours_logged[2] = {Date: "Aug 16", Hours: 1, Note: "New picture"};
job2712.hours_logged[3] = {Date: "Aug 17", Hours: 1, Note: "Adjustments"};
job2712.hours_logged[4] = {Date: "Aug 19", Hours: .5, Note: "More adjustments"};
job2712.hours_logged[5] = {Date: "Aug 27", Hours: .75, Note: "Final text and submit"};
job2712.completed_date = "August 27, 2021";
job2712.date_billed = "August 27, 2021";
job2712.date_paid = "September 10, 2011";
job2712.thumbnail = true;
job2712.pdf = true;
jobs.push(job2712);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2713 = new Job(2713, 5, "Publishing Management Associates", "Ad Reformatting, misc.", "Misc. ads color corrected, resized, created.", "August 17, 2021", "N/A")
job2713.hours_logged[0] = {Date: "Aug 17", Hours: .25, Note: "Belmont Abbey"};
job2713.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "Recov of Fam Life / RTB"};
job2713.hours_logged[2] = {Date: "Aug 20", Hours: .25, Note: "Sparkly Kat Book"};
job2713.hours_logged[3] = {Date: "Aug 21", Hours: .5, Note: "FT Poetry Night"};
job2713.hours_logged[4] = {Date: "Aug  24", Hours: .25, Note: "Poetry night revisions"};
job2713.hours_logged[5] = {Date: "Aug 24", Hours: .25, Note: "FT Truth Ad"};
job2713.hours_logged[6] = {Date: "Sept 2", Hours: 1, Note: "FT Gift Subs Sm Ads"};
job2713.completed_date = "September 7, 2021";
job2713.date_billed = "September 7, 2021";
job2713.date_paid = "October 3, 2021";
job2713.thumbnail = true;
jobs.push(job2713); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2714 = new Job(2714, 6, "Biretta Books", "Benefit Prayer Cards", "Holy cards sized 3.25 x 5.5 w/ bleed, four color", "September 1, 2021", "September 8, 2021");
job2714.hours_logged[0] = {Date: "Sept 2", Hours: .25, Note: "Getting organized"};
job2714.hours_logged[1] = {Date: "Sept 4", Hours: .5, Note: "Initial layout, St. Joseph"};
job2714.thumbnail = true;
job2714.pdf = true;
jobs.push(job2714);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2715 = new Job(2715, 7, "Biretta Books", "The Alternatim Masses Series", "5 booklets, 8.5 x 11, Covers, and an ad", "September 9, 2021", "September 23, 2021");
job2715.secondary_contact = {Name: "Massimo Scapin", Email: "music@cantius.org"};
job2715.hours_logged[0] = {Date: "Sept 9", Hours: .5, Note: "Getting organized"};
job2715.hours_logged[1] = {Date: "Sept 10", Hours: 2, Note: "Initial layout Advent"};
job2715.hours_logged[2] = {Date: "Sept 11", Hours: .5, Note: "More art found"};
job2715.hours_logged[3] = {Date: "Sept 14", Hours: .5, Note: "Formatting"};
job2715.hours_logged[4] = {Date: "Sept 15", Hours: 1.5, Note: "Paintings, graphics"};
job2715.hours_logged[5] = {Date: "Sept 16", Hours: 1, Note: "rework design layout"};
job2715.hours_logged[6] = {Date: "Sept 17", Hours: 1, Note: "layout/scale pages"};
job2715.hours_logged[6] = {Date: "Sept 18", Hours: 1.5, Note: "prepare fnl version/layout"};
job2715.hours_logged[7] = {Date: "Sept 22", Hours: 3, Note: "Back page ad/layout"};
job2715.hours_logged[8] = {Date: "Sept 23", Hours: 1, Note: "Final Preparations"};
job2715.completed_date = "September 23, 2021";
job2715.date_billed = "September 23, 2021";
job2715.thumbnail = true;
job2715.pdf = true;
jobs.push(job2715);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2716 = new Job(2716, 8, "Publishing Management Associates", "Small Ads", "Reno Future of Christianity", "September 10, 2021", "November 5, 2021");
job2716.hours_logged[0] = {Date: "Sept 11", Hours: 1, Note: "Wash College ad"};
job2716.hours_logged[1] = {Date: "Sept 21", Hours: .5, Note: "Tolstoy &amp; W. College"};
job2716.hours_logged[2] = {Date: "Sept 21", Hours: .5, Note: "FST More Images"};
job2716.hours_logged[3] = {Date: "Sept 22", Hours: .25, Note: "GreatHearts"};
job2716.hours_logged[4] = {Date: "Sept 27", Hours: .25, Note: "Zealot Book"};
job2716.hours_logged[5] = {Date: "Sept 27", Hours: .25, Note: "Missionaries Book"};
job2716.hours_logged[6] = {Date: "Oct 21", Hours: .75, Note: "7 Covers"}; 
job2716.hours_logged[7] = {Date: "Oct 27", Hours: .2, Note: "Bachonors"};
job2716.hours_logged[8] = {Date: "Oct 28", Hours: .75, Note: "Creation Book"};
job2716.thumbnail = true;
jobs.push(job2716);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2717 = new Job (2717, 9, "Biretta Books", "2022 Ordo", "6 x 9, spiral-bound, 150+ page reference book for St. John Cantius Church", "September 27, 2021", "October 15, 2021");
job2717.hours_logged[0] = {Date: "Sept 27", Hours: .5, Note: "Getting organized"};
job2717.hours_logged[1] = {Date: "Oct 10", Hours: 2, Note: "Designing tables"};
job2717.hours_logged[2] = {Date: "Oct 11", Hours: 2.5, Note: "Table layout"};
job2717.hours_logged[3] = {Date: "Oct 15", Hours: 2.25, Note: "Date Layout"};
job2717.hours_logged[4] = {Date: "Oct 16", Hours: 1, Note: "Date Layout"};
job2717.hours_logged[5] = {Date: "Oct 18", Hours: 4.5, Note: "Date Layout"};
job2717.hours_logged[6] = {Date: "Oct 19", Hours: 3.0, Note: "Date Layout"};
job2717.hours_logged[7] = {Date: "Oct 20", Hours: 1, Note: "Date Layout"};
job2717.hours_logged[8] = {Date: "Oct 21", Hours: 2, Note: "Finished Date Layout"};
job2717.hours_logged[9] = {Date: "Oct 22", Hours: 4.5, Note: "Galleys finished"};
job2717.hours_logged[10] = {Date: "Oct 23", Hours: 1, Note: "Add Francis Letter"};
job2717.hours_logged[11] = {Date: "Oct 24", Hours: 4.5, Note: "Finalize Interior"};
job2717.hours_logged[12] = {Date: "Oct 25", Hours: 2, Note: "Applied corrections, proofing"};
job2717.hours_logged[13] = {Date: "Oct 26", Hours: 2, Note: "Cover finished, pdf output"};
job2717.thumbnail = true;
job2717.pdf = true;
job2717.completed_date = "October 26, 2021";
job2717.date_billed = "October 26, 2021";
jobs.push(job2717);

//end the jobs
//////////////////////////////////////////////////////////////////////////////////////////////////////////