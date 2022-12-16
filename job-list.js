// Empty array for jobs
const jobs = [];

//Object Constructor
function Job(invoice_number, job_number, employer, project, project_type, start_date, due_date) {
    this.invoice_number = invoice_number;
    this.job_number = job_number;
    this.employer = employer;
    this.contact = function() {
        if (this.employer === "Biretta Books") {
            return "Nick Chapello";
        } else if (this.employer === "Publishing Management Associates") {
            return "Richard A. Vaughan";
        } else if (this.employer === "The Fellowship of St. James") {
            return "James M. Kushiner";
        } else if (this.employer === "Douglas Shaw & Associates") {
            return "Jennifer Matos";
		}
    };
    this.contact_email = function() {
        if (this.employer === "Biretta Books") {
            return "nchapello@cantius.org";
        } else if (this.employer === "Publishing Management Associates") {
            return "ravaughan@pma-inc.net";
        } else if (this.employer === "The Fellowship of St. James") {
            return "jmk@fsj.org";
        } else if (this.employer === "Douglas Shaw & Associates") {
            return "invoices@douglasshaw.com";
        }
    };
    this.secondary_contact = [];
    this.employer_address1 = function() {
        if (this.employer === "Biretta Books") {
            return "1025 West Fry Street";
        } else if (this.employer === "Publishing Management Associates") {
            return "129 Phelps Avenue, Suite 312";
        } else if (this.employer === "The Fellowship of St. James") {
            return "4215 W. Newport Avenue";
        } else if (this.employer === "Douglas Shaw & Associates") {
            return "1717 Park Street Suite 300";
        }
    };
    this.employer_address2 = function() {
        if (this.employer === "Biretta Books") {
            return "Chicago, IL 60642-5419";
        } else if (this.employer === "Publishing Management Associates") {
            return "Rockford, IL 61108";
        } else if (this.employer === "The Fellowship of St. James") {
            return "Chicaog, IL 60641";
        } else if (this.employer === "Douglas Shaw & Associates") {
            return "Naperville, IL 60563";
        } 
    };
    this.project = project;
    this.project_type = project_type;
    this.start_date = start_date;
    this.due_date = due_date;
    this.employer_nickname = function() {
        if (this.employer === "Biretta Books") {
            return "Biretta";
        } else if (this.employer === "Publishing Management Associates") {
            return "PMA";
        } else if (this.employer === "The Fellowship of St. James") {
            return "FSJ";
        } else if (this.employer === "Douglas Shaw & Associates") {
            return "Shaw";
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
        if (this.employer === "Biretta Books") {
            return 40;
        } else if (this.employer === "Publishing Management Associates") {
            return 50;
        } else if (this.employer === "The Fellowship of St. James") {
            return 50;
        } else if (this.employer === "Douglas Shaw & Associates") {
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
    this.mockupSubmitted = false;
    this.filesReceived = false;
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
const job2711 = new Job(2711, 3, "Publishing Management Associates", "FT In-House Ads", "Four half-page ads for First Things magazine: Back issue organizer, Books, Creed DVD, Reprint Series", "August 12, 2021", "August 30, 2021");
job2711.hours_logged[0] = {Date: "Aug 12", Hours: 1, Note: "Create Reprint Series ad"};
job2711.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "Revise Reprint Series ad"};
job2711.hours_logged[2] = {Date: "Aug 20", Hours: .5, Note: "Create Creed DVD ad"};
job2711.hours_logged[3] = {Date: "Aug 27", Hours: .5, Note: "Create Books Online ad"};
job2711.hours_logged[4] = {Date: "Aug 30", Hours: 1.5, Note: "Create Slipcase ad"};
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
const job2713 = new Job(2713, 5, "Publishing Management Associates", "PMA Small Ads 1", "Misc. ads color corrected, resized, created.", "August 17, 2021", "N/A")
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
const job2714 = new Job(2714, 6, "Biretta Books", "Benefit Prayer Cards", "A prayer card, sized 3.25 x 5.5 w/ bleed, four color", "September 1, 2021", "September 8, 2021");
job2714.hours_logged[0] = {Date: "Sept 2", Hours: .25, Note: "Getting organized"};
job2714.hours_logged[1] = {Date: "Sept 4", Hours: .5, Note: "Initial layout, St. Joseph"};
job2714.completed_date = "September 8, 2021";
job2714.date_billed = "March 26, 2022";
job2714.date_paid = "March 21, 2022";
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
job2715.date_paid = "October 30, 2021"; 
job2715.thumbnail = true;
job2715.pdf = true;
jobs.push(job2715);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2716 = new Job(2716, 8, "Publishing Management Associates", "PMA Small Ads 2", "Small ads, created or reformatted", "September 10, 2021", "November 5, 2021");
job2716.hours_logged[0] = {Date: "Sept 11", Hours: 1, Note: "Wash College ad"};
job2716.hours_logged[1] = {Date: "Sept 21", Hours: .5, Note: "Tolstoy &amp; W. College"};
job2716.hours_logged[2] = {Date: "Sept 21", Hours: .5, Note: "FST More Images"};
job2716.hours_logged[3] = {Date: "Sept 22", Hours: .25, Note: "GreatHearts"};
job2716.hours_logged[4] = {Date: "Sept 27", Hours: .25, Note: "Zealot Book"};
job2716.hours_logged[5] = {Date: "Sept 27", Hours: .25, Note: "Missionaries Book"};
job2716.hours_logged[6] = {Date: "Oct 21", Hours: .75, Note: "7 Covers"}; 
job2716.hours_logged[7] = {Date: "Oct 27", Hours: .2, Note: "Bachonors"};
job2716.hours_logged[8] = {Date: "Oct 28", Hours: 1.25, Note: "Creation Book"};
job2716.hours_logged[9] = {Date: "Nov 5", Hours: .2, Note: "FT 8th Day"};
job2716.hours_logged[10] = {Date: "Nov 9", Hours: 1, Note: "C.M.H. Koenig"};
job2716.hours_logged[11] = {Date: "Nov 10", Hours: .5, Note: "C.M.H Koenig"};
job2716.completed_date = "November 10, 2021";
job2716.date_billed = "November 10, 2021";
job2716.date_paid = "December 17, 2021";
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
job2717.date_paid = "December 1, 2021";
jobs.push(job2717);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2718 = new Job (2718, 10, "Publishing Management Associates", "PMA Small Ads 3", "Small ads, created or reformatted", "November 18, 2021", "N/A");
job2718.hours_logged[0] = {Date: "Nov 18", Hours: .25, Note: "McClay"};
job2718.hours_logged[1] = {Date: "Nov 18", Hours: .25, Note: "Gottfried"};
job2718.hours_logged[2] = {Date: "Nov 20", Hours: 1, Note: "FT Lecture Ad"};
job2718.hours_logged[3] = {Date: "Nov 22", Hours: 1, Note: "FT Freedom Ad"};
job2718.hours_logged[4] = {Date: "Nov 22", Hours: 1, Note: "FT Text Speech Ad"};
job2718.hours_logged[5] = {Date: "Dec 8", Hours: .5, Note: "FT ad revisions"};
job2718.hours_logged[6] = {Date: "Dec 13", Hours: 1, Note: "St. Thomas"};
job2718.hours_logged[7] = {Date: "Dec 14", Hours: .25, Note: "Ft ad flat Bork"};
job2718.hours_logged[8] = {Date: "Dec 15", Hours: .25, Note: "Great Hearts"};
job2718.hours_logged[9] = {Date: "Dec 17", Hours: .5, Note: "Artwork format (6)"};
job2718.hours_logged[10] = {Date: "Dec 28", Hours: 1, Note: "FT McClay Book"};
job2718.hours_logged[11] = {Date: "Dec 29", Hours: .5, Note: "FT McClay Buckslip"};
job2718.hours_logged[12] = {Date: "Jan 19", Hours: .25, Note: "Artwork reformat (2)"};
job2718.completed_date = "January 19, 2022";
job2718.date_billed = "January 19, 2022";
job2718.date_paid = "April 1, 2022";
jobs.push(job2718);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2719 = new Job(2719, 11, "Biretta Books", "St. John Cantius book", "6x9 book by Fr. Dennis Kolinski, SJC", "December 20, 2021", "N/A");
job2719.hours_logged[0] = {Date: "Dec 30", Hours: 2.5, Note: "Initial layouts intro, chpt. 1"};
job2719.hours_logged[1] = {Date: "Jan 6", Hours: 1, Note: "chpts. 2 and 3"};
job2719.hours_logged[2] = {Date: "Jan 7", Hours: 1, Note: "chpts. 4 and 5"};
job2719.hours_logged[3] = {Date: "Jan 8", Hours: 2, Note: "chpts. 6, 7, 8"};
job2719.hours_logged[4] = {Date: "Jan 14", Hours: 1, Note: "setting up graphics"};
job2719.hours_logged[5] = {Date: "Apr 19", Hours: 1, Note: "font size, intro, 1+2 adj"};
job2719.hours_logged[6] = {Date: "Apr 21", Hours: 1, Note: "size adjust through chpt. 5"};
job2719.hours_logged[7] = {Date: "Apr 25", Hours: 1, Note: "finished chapter txt pages"};
job2719.hours_logged[8] = {Date: "Apr 25", Hours: 1, Note: "appendices"};
job2719.hours_logged[9] = {Date: "Apr 26", Hours: 1, Note: "endnotes formatting"};
job2719.hours_logged[10] = {Date: "Apr 27", Hours: 1, Note: "finalize draft to send around"};
job2719.hours_logged[11] = {Date: "May 2", Hours: 1, Note: "proof passes 1"};
job2719.hours_logged[12] = {Date: "May 20", Hours: 1, Note: "Illustration layout"};
job2719.hours_logged[13] = {Date: "May 22", Hours: 1, Note: "Illustration layout"};
job2719.hours_logged[14] = {Date: "May 23", Hours: 1, Note: "Illustration layout"};
job2719.hours_logged[15] = {Date: "May 24", Hours: 1.5, Note: "Preparing proof copies"};
jobs.push(job2719);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2720 = new Job(2720, 12, "Publishing Management Associates", "PMA Small Ads 4", "Small ads created or reformatted", "February 15, 2022", "N/A");
job2720.hours_logged[0] = {Date: "Feb 15", Hours: .25, Note: "Gideon"};
job2720.hours_logged[1]= {Date: "Feb 21", Hours: .5, Note: "Ligouri"};
job2720.hours_logged[2] = {Date: "Feb 23", Hours: .5, Note: "Ligouri revisions"};
job2720.hours_logged[3] = {Date: "Feb 23", Hours: .5, Note: "6 print-ready pdfs"};
job2720.hours_logged[4] = {Date: "Feb 23", Hours: .5, Note: "Norberg Edward Jones"};
job2720.hours_logged[5] = {Date: "Mar 4", Hours: .5, Note: "Boston College Ethics"};
job2720.hours_logged[6] = {Date: "Mar 21", Hours: .25, Note: "Agora Trust"};
job2720.hours_logged[7] = {Date: "Mar 21", Hours: .25, Note: "Franciscan"};
job2720.hours_logged[8] = {Date: "Mar 24", Hours: .25, Note: "Glenmary"};
job2720.completed_date = "March 26, 2022";
job2720.date_billed = "March 26, 2022";
job2720.date_paid = "April 1, 2022";
jobs.push(job2720);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2721 = new Job(2721, 13, "Biretta Books", "Divine Mercy Novena", "5.5 x 8.5, 16 page booklet", "March 4, 2022", "N/A");
job2721.hours_logged[0] = {Date: "Mar 4", Hours: 1, Note: "Initial layout"};
job2721.hours_logged[1] = {Date: "Mar 5", Hours: 1, Note: "layout"};
job2721.hours_logged[2] = {Date: "Mar 8", Hours: .5, Note: "layout"};
job2721.hours_logged[3] = {Date: "Mar 9", Hours: 1, Note: "2nd draft"};
job2721.hours_logged[4] = {Date: "Mar 10", Hours: .5, Note: "pages added"};
job2721.hours_logged[5] = {Date: "Mar 14", Hours: .25, Note: "finalize pdf"};
job2721.completed_date = "March 14, 2022";
job2721.date_billed = "March 26, 2022";
job2721.date_paid = "March 31, 2022";
jobs.push(job2721);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2722 = new Job(2722, 14, "The Fellowship of St. James", "<em>Thousand Words</em> Book", "by Mary Elizabeth Podles, 8.5\" by 11\"", "March 8th, 2022", "November 1st, 2022");
job2722.hours_logged[0] = {Date: "Mar 8", Hours: .75, Note: "Initial layout"};
job2722.hours_logged[1] = {Date: "Apr 6", Hours: .5, Note: "Try 1 col layout"};
job2722.hours_logged[2] = {Date: "Jun 5", Hours: 1, Note: "Ara Pacis Augustae"};
job2722.hours_logged[3] = {Date: "Jun 6", Hours: 1.5, Note: "Ancient World completed"};
job2722.hours_logged[4] = {Date: "Jun 10", Hours: 1, Note: "Rembrandt Introduction"};
job2722.hours_logged[5] = {Date: "Jun 12", Hours: 1, Note: "Byzantium intro, Hagia Sophia"};
job2722.hours_logged[6] = {Date: "Jun 15", Hours: 1, Note: "Christ of Mt. Sinai"};
job2722.hours_logged[7] = {Date: "Jun 16", Hours: 1, Note: "Apse of St. Apollinarius"};
job2722.hours_logged[8] = {Date: "Jun 20", Hours: 1, Note: "Throne of Maximian"};
job2722.hours_logged[9] = {Date: "Jun 24", Hours: 1, Note: "Gospel Book Augustine"};
job2722.hours_logged[10] = {Date: "Jun 28", Hours: 1, Note: "Crown of Recceswinth"};
job2722.hours_logged[11] = {Date: "Jun 29", Hours: 1, Note: "The Alfred Jewel"};
job2722.hours_logged[12] = {Date: "Jul 1", Hours: 2, Note: "Otto III; Beekeepers"};
job2722.hours_logged[13] = {Date: "Jul 1", Hours: 1, Note: "Chalice of Abbot Suger"};
job2722.hours_logged[14] = {Date: "Jul 11", Hours: 1, Note: "Portico de la Gloria"};
job2722.hours_logged[15] = {Date: "Aug 31", Hours: 1, Note: "Madonna and Child on Curved Throne"};
job2722.hours_logged[16] = {Date: "Sep 1", Hours: 1, Note: "Anastasis"};
job2722.hours_logged[17] = {Date: "Sep 2", Hours: 1, Note: "The Transfiguration"};
job2722.hours_logged[18] = {Date: "Sep 3", Hours: 1, Note: "The Trinity"};
job2722.hours_logged[19] = {Date: "Sep 5", Hours: 1, Note: "The Nativity"};
job2722.hours_logged[20] = {Date: "Sep 6", Hours: 1, Note: "Madonna on Curved Throne"};
job2722.hours_logged[21] = {Date: "Sep 8", Hours: 1.5, Note: "Ghent I &amp; II"};
job2722.hours_logged[22] = {Date: "Sep 8", Hours: 1, Note: "Ghent III; Portinari Altarpiece"};
job2722.hours_logged[23] = {Date: "Sep 9", Hours: 1, Note: "Durer Candlesticks"};
job2722.hours_logged[24] = {Date: "Sep 10", Hours: 1, Note: "Durer Noli Me Tangere"};
job2722.hours_logged[25] = {Date: "Sep 14", Hours: 1, Note: "Intro and DaVinci Vitruvian Man"};
job2722.hours_logged[26] = {Date: "Sep 14", Hours: 1, Note: "DaVinci Madonna and child and Anne"};
job2722.hours_logged[27] = {Date: "Sep 15", Hours: 1, Note: "Raphael Alba Madonna"};
job2722.hours_logged[28] = {Date: "Sep 22", Hours: 1, Note: "Raphael Sistine Madonna"};
job2722.hours_logged[29] = {Date: "Sep 23", Hours: 2, Note: "Michelangelo and Titian"};
job2722.hours_logged[30] = {Date: "Sep 26", Hours: 2, Note: "two Titians"};
job2722.hours_logged[31] = {Date: "Sep 27", Hours: 2, Note: "First two from later Ren."};
job2722.hours_logged[32] = {Date: "Sep 28", Hours: 2, Note: "Two El Grecos"};
job2722.hours_logged[33] = {Date: "Oct 5", Hours: 2, Note: "Equation Clock & Archdukes"};
job2722.hours_logged[34] = {Date: "Oct 18", Hours: 1, Note: "Fontana della Barcaccia"};
job2722.hours_logged[35] = {Date: "Oct 19", Hours: 1, Note: "Poussins Holy Family"};
job2722.hours_logged[36] = {Date: "Oct 20", Hours: 1, Note: "Dolci Marriage"};
job2722.hours_logged[37] = {Date: "Oct 21", Hours: 1, Note: "Vermeer Balances"};
job2722.hours_logged[38] = {Date: "Oct 22", Hours: 1, Note: "St Peter's Denial"};
job2722.hours_logged[39] = {Date: "Oct 23", Hours: 1, Note: "St. Paul"};
job2722.hours_logged[40] = {Date: "Oct 24", Hours: 1, Note: "Jan Steen"};
job2722.hours_logged[41] = {Date: "Oct 25", Hours: 2, Note: "flowers/vase; modern age; Assumption ceiling"};
job2722.hours_logged[42] = {Date: "Oct 26", Hours: 1, Note: "John the Baptist"};
job2722.hours_logged[43] = {Date: "Oct 26", Hours: 1, Note: "West Nativity"};
job2722.hours_logged[44] = {Date: "Oct 27", Hours: 2, Note: "Falls of Kaaterskills & Annunciation"};
job2722.hours_logged[45] = {Date: "Oct 28", Hours: 1, Note: "Tanner Flight into Egypt"};   
jobs.push(job2722);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2723 = new Job(2723, 15, "Biretta Books", "Mother's Day Cards", "5 x 7 Custom Card 4 color", "March 27, 2022", "April 7, 2022");
job2723.hours_logged[0] = {Date: "Apr 4", Hours: 1, Note: "Setup/Layout"};
job2723.hours_logged[1] = {Date: "Apr 6", Hours: 1, Note: "Layout/Finalize"};
job2723.completed_date = "April 6, 2022";
job2723.date_billed = "May 6, 2022";
job2723.date_paid = "May 12, 2022";
jobs.push(job2723);


//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2724 = new Job(2724, 16, "Publishing Management Associates", "PMA Small Ads 5", "Small ads created or reformatted", "April 21, 2022", "N/A");
job2724.hours_logged[0] = {Date: "Apr 21", Hours: .25, Note: "Watergate book"};
job2724.hours_logged[1] = {Date: "Apr 21", Hours: .25, Note: "Run & Hide book"};
job2724.hours_logged[2] = {Date: "Apr 21", Hours: .25, Note: "Transcendantalists book"};
job2724.hours_logged[3] = {Date: "Apr 22", Hours: .75, Note: "FT 2022 Spring FR"};
job2724.hours_logged[4] = {Date: "Apr 25", Hours: .5, Note: "four portraits"};
job2724.hours_logged[5] = {Date: "Apr 29", Hours: .5, Note: "McCleod, Romans webad"};
job2724.hours_logged[6] = {Date: "Apr 29", Hours: .5, Note: "Roman Roads ad reformat"};
job2724.hours_logged[7] = {Date: "May 6", Hours: .25, Note: "Holy Cross flat"};
job2724.hours_logged[8] = {Date: "May 11", Hours: .5, Note: "Arouca Press"};
job2724.completed_date = "May 11, 2022";
job2724.date_billed = "June 7, 2022";
job2724.date_paid = "June 15, 2022";
jobs.push(job2724);
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const job2725 = new Job(2725, 17, "Douglas Shaw & Associates", "TSM-0785", "The Scott Mission <br /><em>July '22 eAppeal</em><ul><li>1 Homepage banner &#10003; </li><li>1 Donation page &#10003; </li><li>1 Email &#10003; </li><li>1 FB Post &#10003; </li><li>1 Twitter Post &#10003; </li></ul>", "May 25, 2022", "June 2, 2022");
job2725.filesReceived = true;
job2725.hours_logged[0] = {Date: "May 25", Hours: 1, Note: "Getting started. email"};
job2725.hours_logged[1] = {Date: "May 26", Hours: 1.5, Note: "Donation and social"};
job2725.hours_logged[2] = {Date: "May 27", Hours: 1, Note: "Banner and output"}; 
job2725.hours_logged[2] = {Date: "May 31", Hours: .25, Note: "1st submit"}; 
job2725.mockupSubmitted = true;
job2725.hours_logged[3] = {Date: "June 1", Hours: .25, Note: "changes, submitted"}; 
job2725.hours_logged[4] = {Date: "June 8", Hours: 1, Note: "changes, submitted"};
job2725.hours_logged[5] = {Date: "June 10", Hours: .25, Note: "changes, submitted"};
job2725.hours_logged[6] = {Date: "June 23", Hours: .25, Note: "changes, submitted"};
job2725.hours_logged[7] = {Date: "June 23", Hours: .5, Note: "web assets assembled"};
job2725.hours_logged[8] = {Date: "June 24", Hours: .5, Note: "final files uploaded"};
job2725.completed_date = "June 24, 2022"; 
job2725.date_billed = "July 12, 2022"; 
job2725.thumbnail = true;
job2725.pdf = true;
job2725.date_paid = "August 4th, 2022";
jobs.push(job2725);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2726 = new Job(2726, 18, "Biretta Books", "Mozart Vespers", "8 pages, 8.5 x 11", "June 8, 2022", "June 10, 2022");
job2726.hours_logged[0] = {Date: "Jun 8", Hours: .5, Note: "creating text file from pdf"};
job2726.hours_logged[1] = {Date: "Jun 8", Hours: 1, Note: "Initial layout"};
job2726.hours_logged[2] = {Date: "Jun 9", Hours: 2, Note: "layout submission"};
job2726.hours_logged[3] = {Date: "Jun 9", Hours: 1, Note: "more layout"};
job2726.hours_logged[4] = {Date: "Jun 9", Hours: .5, Note: "finalize pdf"};
job2726.completed_date = "June 9, 2022";
job2726.date_billed = "June 10, 2022";
job2726.date_paid = "June 16, 2022";
job2726.thumbnail = true;
job2726.pdf = true;
jobs.push(job2726);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2727 = new Job(2727, 19, "Douglas Shaw & Associates", "CFD-0197", "Chicago Food Depository <br /><em>August '22 eAppeal </em> <ol><li> homepage banner &#10003; </li><li>email 1 &#10003; </li><li>email 2 &#10003; </li><li>donation page &#10003; </li><li>donation page 2&#10003; </li><li>thank you email &#10003; </li></ol>", "June 13, 2022", "June 17, 2022");
job2727.filesReceived = true;
job2727.hours_logged[0] = {Date: "Jun 15", Hours: 2, Note: "mock emails"};
job2727.hours_logged[1] = {Date: "Jun 16", Hours: 1, Note: "donation page and banner"};
job2727.hours_logged[2] = {Date: "Jun 17", Hours: .5, Note: "check and 1st submit"};
job2727.mockupSubmitted = true;
job2727.hours_logged[3] = {Date: "Jun 17", Hours: .75, Note: "edits returned"};
job2727.hours_logged[4] = {Date: "Jun 20", Hours: .25, Note: "first route submitted"};
job2727.hours_logged[5] = {Date: "Jun 22", Hours: .5, Note: "changes, cs review 1 submitted"};
job2727.hours_logged[6] = {Date: "Jun 27", Hours: .25, Note: "changes, cs review 2 submitted"};
job2727.hours_logged[7] = {Date: "Jun 28", Hours: .5, Note: "photoshopped t-shirt, cs review 3 submitted"};
job2727.hours_logged[8] = {Date: "Jul 13", Hours: .75, Note: "edits made; Client Review 02 submitted"};
job2727.hours_logged[9] = {Date: "Jul 14", Hours: .25, Note: "edits made; donation page 2 added; CR03 submitted"};
job2727.hours_logged[10] = {Date: "Jul 26", Hours: .5, Note: "edits made to emails; CR04 submitted"};
job2727.hours_logged[11] = {Date: "Jul 27", Hours: .25, Note: "edit made to donation2; CR05 submitted"};
job2727.hours_logged[12] = {Date: "Jul 29", Hours: .25, Note: "edit made to email; CR06(emails) submitted"};
job2727.hours_logged[13] = {Date: "Jul 29", Hours: .5, Note: "edits made donation pages; FinalRoute02 submitted; banners uploaded"};
job2727.hours_logged[14] = {Date: "Aug 4", Hours: .16, Note: "edits made emails; FinalRoute02 (emails) submitted"};
job2727.hours_logged[15] = {Date: "Aug 5", Hours: .33, Note: "final email asses created/uploaded"};
job2727.completed_date = "August 5th, 2022";
job2727.date_billed = "August 5th, 2022";
job2727.pdf = true;
job2727.thumbnail = true;
job2727.date_paid = "September 1st, 2022";
jobs.push(job2727);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2728 = new Job(2728, 20, "Douglas Shaw & Associates", "CFD-0204", "Chicago Food Depository <br /><em>September Hunger Action Month</em><ol><li>Homepage Banner &#10003;</li><li>Hover Ad &#10003;</li><li>Donation Page &#10003</li><li>Social Ambassador Email &#10003;</li><li>Autogenerated Social Post&#10003; &#10003; &#10003; </li><li>Autogenerated Email &#10003;</li><li>Email 1 &#10003;</li><li>Email 2 &#10003;</li><li>Email 3 &#10003;</li><li>Email 4 &#10003; </li><li>Email 5 &#10003; </li><li>Email 6 &#10003; </li><li>Email 7 Thank you &#10003; </li><li>Social Media Post 1 <br />(FB, Insta, Twitter) &#10003; &#10003; &#10003;</li><li>Social Media Post 2 <br /> (FB, Insta, Twitter)  &#10003; &#10003; &#10003;</li><li>Social Media Post 3 <br />(FB, Insta, Twitter) &#10003; &#10003; &#10003;</li><li>Facebook General Ad &#10003;</li><li>Facebook South Side Ad &#10003; </li><li>Facebook Latino Neighbors Ad &#10003;</li>", "June 14, 2022", "July 14, 2022");
job2728.hours_logged[0] = {Date: "Jun 14", Hours: .5, Note: "Initial meeting"};
job2728.filesReceived = true;
job2728.hours_logged[1] = {Date: "Jul 9", Hours: .25, Note: "Files recieved; initial setup"};
job2728.due_date = "July 18th, 2022";
job2728.hours_logged[2] = {Date: "Jul 12", Hours: 1.75, Note: "Homepage Banner; Hover Ad; Social Email"};
job2728.hours_logged[3] = {Date: "Jul 14", Hours: 2, Note: "Reworked social email and share posts; emails 1-2-3"};
job2728.hours_logged[4] = {Date: "Jul 15", Hours: 1.5, Note: "emails 4-7; begin social ads and shares"};
job2728.hours_logged[5] = {Date: "Jul 17", Hours: 1.5, Note: "3fb ads and 3 fb posts"};
job2728.hours_logged[6] = {Date: "Jul 18", Hours: 1, Note: "3 twitter and 3 insta posts; files created; mockups submitted"};
job2728.mockupSubmitted = true;
job2728.hours_logged[7] = {Date: "Jul 20", Hours: .25, Note: "meeting; questions answered"};
job2728.hours_logged[8] = {Date: "Jul 21", Hours: 1.75, Note: "edits; design and photo changes; CR02 submitted"};
job2728.hours_logged[9] = {Date: "Aug 1", Hours: 1.5, Note: "extensive edits"};
job2728.hours_logged[10] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2728.completed_date = "September 5th, 2022";
job2728.date_billed = "September 13th, 2022";
job2728.date_paid = "October 13th, 2022";
jobs.push(job2728);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2729 = new Job(2729, 21, "Douglas Shaw & Associates", "MCR-0522", "Moody Church Media<br /> <em>2022 FYE Digital Campaign</em><ul><li>2 Facebook ads &#10003; </li><li>3 total emails &#10003; </li><li>1 hover ad &#10003; </li><li>1 Homepage Banner &#10003; </li><li>1 Donation page &#10003; </li></ul>", "June 21, 2022", "June 27, 2022");
job2729.filesReceived = true;
job2729.hours_logged[0] = {Date: "Jun 22", Hours: 1, Note: "FB ads and email 1"};
job2729.hours_logged[1] = {Date: "Jun 22", Hours: .5, Note: "email 2"};
job2729.hours_logged[2] = {Date: "Jun 24", Hours: .5, Note: "email 3, homepage banner"};
job2729.hours_logged[3] = {Date: "Jun 25", Hours: 1.25, Note: "finished, output"};
job2729.hours_logged[4] = {Date: "Jun 27", Hours: .25, Note: "checked; 1st submit"};
job2729.mockupSubmitted = true;
job2729.hours_logged[5] = {Date: "Jul 15", Hours: .25, Note: "edits; CS.01 submitted"};
job2729.hours_logged[6] = {Date: "Jul 19", Hours: 1, Note: "new photos received; worked up; added. CS.02 submitted"};
job2729.hours_logged[7] = {Date: "Jul 27", Hours: 1, Note: "edits; ClientReview02 submitted"};
job2729.hours_logged[8] = {Date: "Jul 29", Hours: .33, Note: "edits; ClientReview03 submitted"};
job2729.hours_logged[9] = {Date: "Aug 2", Hours: .2, Note: "edit; CS Final Approval.01 submitted"};
job2729.hours_logged[10] = {Date: "Aug 3", Hours: .5, Note: "final web assets compiled; uploaded"};
job2729.completed_date = "August 3rd, 2022";
job2729.pdf = true;
job2729.thumbnail = true;
job2729.date_billed = "August 5th, 2022";
job2729.date_paid = "September 1st, 2022";
jobs.push(job2729);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2730 = new Job(2730, 22, "Publishing Management Associates", "PMA Small Ads 6", "Small ads created or reformatted", "June 23, 2022", "n/a");
job2730.hours_logged[0] = {Date: "Jun 23", Hours: .25, Note: "CICW_FirstThings color conversion"};
job2730.hours_logged[1] = {Date: "Jun 23", Hours: .5, Note: "5 images"};
job2730.hours_logged[2] = {Date: "Jun 24", Hours: .25, Note: "Stuebenville hiring ad"};
job2730.hours_logged[3] = {Date: "Jun 27", Hours: .25, Note: "photo format"};
job2730.hours_logged[4] = {Date: "Jul 21", Hours: .2, Note: "photo format"};
job2730.hours_logged[5] = {Date: "Aug 10", Hours: .2, Note: "ad reformat; ft"};
job2730.hours_logged[6] = {Date: "Aug 10", Hours: .16, Note: "ad reformat; magdalen"};
job2730.hours_logged[7] = {Date: "Aug 16", Hours: .25, Note: "reformat; 2 FT ads"};
job2730.hours_logged[8] = {Date: "Aug 19", Hours: .5, Note: "photo reformat (7)"};
job2730.hours_logged[9] = {Date: "Aug 22", Hours: .25, Note: "McClay buckslip resized"};
job2730.hours_logged[10] = {Date: "Aug 31", Hours: 1, Note: "Wiland promotion; FB ads"};
job2730.hours_logged[11] = {Date: "Sep 9", Hours: .5, Note: "Plough rate card edits"};
job2730.hours_logged[12] = {Date: "Sep 21", Hours: .5, Note: "FT 5 image pdfs created"};
job2730.hours_logged[13] = {Date: "Sep 22", Hours: .5, Note: "FT 4 image pdfs created"};
job2730.hours_logged[14] = {Date: "Sep 27", Hours: .5, Note: "FT Wiland ads edits"};
job2730.hours_logged[15] = {Date: "Oct 12", Hours: .25, Note: "FT ads reformatted"};
job2730.hours_logged[16] = {Date: "Oct 18", Hours: .33, Note: "ft finalize 5 pics"};
job2730.completed_date = "October 18, 2022";
job2730.date_billed = "October 25, 2022"; 
job2730.date_paid = "October 31, 2022";
jobs.push(job2730);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2731 = new Job(2731, 23, "Douglas Shaw & Associates", "WAS-1185", "Wycliffe Associates<br /><em>August 2 Partner Letter Digital Campaign</em><ol><li>homepage banner &#10003; </li><li>donation page &#10003;</li><li>hover ad &#10003;</li><li>Facebook ad &#10003;</li><li>Facebook post  &#10003; </li><li>native ad &#10003; </li><li>social ambassador email &#10003;</li><li>auto-generated post &#10003;</li><li>(7) email &#10003; &#10003; &#10003; &#10003; &#10003; &#10003; &#10003;</li><li>blog post &#10003;</li></ol>", "June 25, 2022", "June 30, 2022");
job2731.filesReceived = true;
job2731.hours_logged[0] = {Date: "Jun 25", Hours: .5, Note: "Setup; homepage banner"};
job2731.hours_logged[1] = {Date: "Jun 26", Hours: 1, Note: "donation page; blog post"};
job2731.hours_logged[2] = {Date: "Jun 27", Hours: .75, Note: "facebook; social; native"};
job2731.hours_logged[3] = {Date: "Jun 28", Hours: .25, Note: "ambassador email"};
job2731.hours_logged[4] = {Date: "Jun 28", Hours: .5, Note: "email 1 control and test"};
job2731.hours_logged[5] = {Date: "Jun 28", Hours: .25, Note: "email 2"};
job2731.hours_logged[6] = {Date: "Jun 29", Hours: 1.5, Note: "all emails; blurring; organizing"};
job2731.hours_logged[7] = {Date: "Jun 30", Hours: 1, Note: "hover ad; web images; 1st submit"};
job2731.mockupSubmitted = true;
job2731.hours_logged[8] = {Date: "Jul 6", Hours: 1.5, Note: "fix artboards; margins; edits. 1st Route submitted"};
job2731.hours_logged[9] = {Date: "Jul 7", Hours: 1.75, Note: "1st Route edits recieved; changes made"};
job2731.hours_logged[10] = {Date: "Jul 8", Hours: .25, Note: "CS Review.01 compiled and submitted"};
job2731.hours_logged[11] = {Date: "Jul 11", Hours: .25, Note: "edits made; CS Review.02 submitted"};
job2731.hours_logged[12] = {Date: "Aug 4", Hours: .75, Note: "edits made; Client Review.02 submitted"};
job2731.hours_logged[13] = {Date: "Aug 4", Hours: .5, Note: "edits made; Client Review.03 submitted"};
job2731.hours_logged[14] = {Date: "Aug 22", Hours: .17, Note: "minor edit; Client Review.04 sent"};
job2731.hours_logged[15] = {Date: "Aug 23", Hours: .5, Note: "applying better blur to photos; CR.05 sent"};
job2731.hours_logged[16] = {Date: "Aug 26", Hours: .75, Note: "edits; FinalRoute.02 sent"};
job2731.hours_logged[17] = {Date: "Aug 29", Hours: .25, Note: "edits; Final Approval.02 sent"};
job2731.hours_logged[18] = {Date: "Aug 30", Hours: .5, Note: "job completed; final graphics output and uploaded"};
job2731.completed_date = "August 30th, 2022";
job2731.date_billed = "August 30th, 2022";
job2731.pdf = true;
job2731.thumbnail = true;
job2731.date_paid = "September 21st, 2022";
jobs.push(job2731);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2732 = new Job(2732, 24, "Douglas Shaw & Associates", "CFD-0212", "Chicago Food Depository<br /><em>October Digital Donor Report</em><ol><li>Email &#10003;</li><li>Impact Landing Page &#10003;</li><li>Blog Article 1 &#10003;</li><li>Blog Article 2 &#10003;</li><li>Donation Page &#10003;</ol>", "June 27, 2022", "August 17th, 2022");
job2732.hours_logged[0] = {Date: "Jun 27", Hours: .25, Note: "Initial meeting"};
job2732.filesReceived = true;
job2732.hours_logged[1] = {Date: "Aug 10", Hours: .75, Note: "Email layout"};
job2732.hours_logged[2] = {Date: "Aug 10", Hours: .75, Note: "Impact page layout"};
job2732.hours_logged[3] = {Date: "Aug 11", Hours: 1, Note: "Blog articles, Donation page layout"};
job2732.hours_logged[4] = {Date: "Aug 12", Hours: .5, Note: "Photo editing, compile and submit CreativeReview.01"};
job2732.mockupSubmitted = true;
job2732.hours_logged[5] = {Date: "Aug 15", Hours: .5, Note: "photo edits; submit CR.02"};
job2732.hours_logged[6] = {Date: "Aug 15", Hours: .25, Note: "photo edits; submit CR.03"};
job2732.hours_logged[7] = {Date: "Aug 18", Hours: .5, Note: "edits; submit CS.01"};
job2732.hours_logged[8] = {Date: "Aug 19", Hours: .25, Note: "edits; submit CS.02"}
job2732.hours_logged[9] = {Date: "Aug 19", Hours: .166, Note: "edits; submit CS.03"}
job2732.hours_logged[10] = {Date: "Sep 1", Hours: .75, Note: "edits; submit CS.04"};
job2732.hours_logged[11] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2732.completed_date = "September 5th, 2022";
job2732.date_billed = "September 13th, 2022";
job2732.date_paid = "October 13th, 2022";
jobs.push(job2732);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2733 = new Job(2733, 25, "Douglas Shaw & Associates", "WAS-1189", "Wycliffe Associates<br /><em>September Partner Letter Digital Campaign</em><ol><li>Banner &#10003; </li><li>Donation Page &#10003; </li></ol>", "July 19th, 2022", "July 25th, 2022");
job2733.filesReceived = true;
job2733.hours_logged[0] = {Date: "Jul 19", Hours: .25, Note: "Files created; Getting Organized"};
job2733.hours_logged[1] = {Date: "Jul 20", Hours: .5, Note: "CR.01 / mockup submitted"};
job2733.mockupSubmitted = true;
job2733.hours_logged[2] = {Date: "Jul 27", Hours: .2, Note: "edit; CS Review.01 submitted"};
job2733.hours_logged[3] = {Date: "Aug 2", Hours: .2, Note: "edit; ClientReview.02 submitted"};
job2733.hours_logged[4] = {Date: "Aug 4", Hours: .25, Note: "to web and working files submitted"};
job2733.completed_date = "August 3rd, 2022";
job2733.pdf = true;
job2733.thumbnail = true;
job2733.date_billed = "August 5th, 2022";
job2733.date_paid = "September 1st, 2022";
jobs.push(job2733);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2734 = new Job(2734, 26, "Biretta Books", "July Bulletins", "St. John Cantius Sunday Bulletins <ul><li>July 10th &#10003;</li><li>July 17th &#10003;</li><li>July 24th &#10003;</li><li>July 31st &#10003;</li>", "June 29th, 2022", "July 28th, 2022");
job2734.hours_logged[0] = {Date: "Jun 29", Hours: .5, Note: "getting started"};
job2734.hours_logged[1] = {Date: "Jun 30", Hours: 1, Note: "starting layout"};
job2734.hours_logged[2] = {Date: "Jul 5", Hours: 1.5, Note: "finish layout for July 10 bulletin"};
job2734.hours_logged[3] = {Date: "Jul 13", Hours: 2, Note: "layout for July 17; send finals"};
job2734.hours_logged[4] = {Date: "Jul 20", Hours: 1.5, Note: "layout for July 24"};
job2734.hours_logged[4] = {Date: "Jul 26", Hours: 1.5, Note: "layout for July 31"};
job2734.completed_date = "July 26, 2022";
job2734.date_billed = "July 26, 2022"; 
job2734.date_paid = "July 27, 2022";
jobs.push(job2734);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2735 = new Job(2735, 27, "Douglas Shaw & Associates", "CFD-0195", "Chicago Food Depository<br /><em>August Social Ambassador</em><ol><li>Email &#10003;</li><li>Story 1 Social Share (FB, Twitter, LinkedIn) &#10003;</li><li>Story 1 Email Share &#10003;</li><li>Story 2 Social Share (FB, Twitter, LinkedIn) &#10003;</li><li>Story 2 Email Share &#10003;</li></ol>", "July 6, 2022", "July 13, 2022");
job2735.filesReceived = true;
job2735.hours_logged[0] = {Date: "Jul 6th", Hours: .25, Note: "files received; getting organized"};
job2735.hours_logged[1] = {Date: "Jul 10", Hours: 2, Note: "email and social 1 posts; templates reworked" };
job2735.hours_logged[2] = {Date: "Jul 10", Hours: .75, Note: "social posts 2; pdf created; mock-up submitted"};
job2735.mockupSubmitted = true;
job2735.hours_logged[3] = {Date: "Jul 11", Hours: .25, Note: "edits made; CR 02 submitted"};
job2735.hours_logged[4] = {Date: "Jul 12", Hours: .25, Note: "edits made; First Route submitted"};
job2735.hours_logged[5] = {Date: "Jul 20", Hours: .75, Note: "edits made (new story 2); CS 01 submitted"};
job2735.hours_logged[6] = {Date: "Aug 2", Hours: .33, Note: "edits made; ClientReview 02 submitted"};
job2735.hours_logged[7] = {Date: "Aug 8", Hours: .16, Note: "edits made; ClientReview 03 submitted"};
job2735.hours_logged[8] = {Date: "Aug 9", Hours: .25, Note: "final files uploaded"};
job2735.completed_date = "August 9, 2022";
job2735.thumbnail = true;
job2735.pdf = true;
job2735.date_billed = "August 25th, 2022";
job2735.date_paid = "September 21st, 2022";
jobs.push(job2735);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2736 = new Job(2736, 28, "Douglas Shaw & Associates", "CFD-0201", "Chicago Food Depository<br /><em>September '22 Social Ambassador Email</em><ol><li>Email &#10003;</li><li>Auto-generated Social Posts; Twitter &#10003;, FB &#10003;, LinkedIn &#10003;</li><li>Auto-generated Email &#10003;</li></ol>", "July 12, 2022", "July 27th, 2022");
job2736.filesReceived = true;
job2736.hours_logged[0] = {Date: "Jul 15", Hours: .25, Note: "Downloading files; setting up folder; getting organized"};
job2736.hours_logged[1] = {Date: "Jul 20", Hours: .5, Note: "mockups of email; FB; Twitter"};
job2736.hours_logged[2] = {Date: "Jul 25", Hours: .25, Note: "email and creative review 01"};
job2736.mockupSubmitted = true;
job2736.hours_logged[3] = {Date: "Jul 28", Hours: .2, Note: "edit; CS Review01 submitted"};
job2736.hours_logged[4] = {Date: "Aug 11", Hours: .17, Note: "edits; Client Review02 submitted"};
job2736.hours_logged[5] = {Date: "Aug 11", Hours: .17, Note: "edit; Client Review03 submitted"};
job2736.hours_logged[6] = {Date: "Aug 25", Hours: .17, Note: "edit; Client Review04 submitted"};
job2736.hours_logged[7] = {Date: "Aug 31", Hours: .25, Note: "edit; Client Review05 submitted"};
job2736.hours_logged[8] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2736.completed_date = "September 5th, 2022";
job2736.date_billed = "September 13th, 2022";
job2736.date_paid = "October 13th, 2022";
jobs.push(job2736);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2737 = new Job(2737, 29, "Biretta Books", "2022/23 Music Schedule", "16 page booklet, 5.5 x 8.5, St. John Cantius Church", "July 15, 2022", "August 1, 2022");
job2737.hours_logged[0] = {Date: "Jul 27", Hours: .75, Note: "Word docs and pictures created/downloaded"};
job2737.hours_logged[1] = {Date: "Aug 1", Hours: 1.5, Note: "Layout"};
job2737.hours_logged[1] = {Date: "Aug 3", Hours: 1.5, Note: "styling/editing date text"};
job2737.hours_logged[2] = {Date: "Aug 4", Hours: 2, Note: "layout"};
job2737.hours_logged[3] = {Date: "Aug 5", Hours: 1, Note: "first draft completed/sent"};
job2737.hours_logged[4] = {Date: "Aug 9", Hours: 1.25, Note: "edits, second draft sent"};
job2737.hours_logged[5] = {Date: "Aug 9", Hours: 1, Note: "edits; pictures formatted; fnl submitted"};
job2737.completed_date = "August 10th, 2022";
job2737.date_billed = "August 10th, 2022";
job2737.pdf = true;
job2737.thumbnail = true;
job2737.date_paid = "August 11th, 2022";
jobs.push(job2737);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2738 = new Job(2738, 30, "Douglas Shaw & Associates", "CFD-0210", "Chicago Food Depository<br /><em>October e-Appeal</em><ol><li>Homepage Banner &#10003;</li><li>Donation Page &#10003;</li><li>Email 1 &#10003;</li><li>Email 2 &#10003;</li><li>Thank you &#10003;</li>", "July 19th, 2022", "August 15th, 2022");
job2738.hours_logged[0] = {Date: "Jul 19", Hours: .5, Note: "Meeting; Getting Organized"};
job2738.filesReceived = true;
job2738.hours_logged[1] = {Date: "Aug 7", Hours: 1.33, Note: "Layout completed"};
job2738.hours_logged[2] = {Date: "Aug 8", Hours: .16, Note: "compiled and send Creative Review 01"};
job2738.mockupSubmitted = true;
job2738.hours_logged[3] = {Date: "Aug 9", Hours: .75, Note: "edits; form 2 creation; CR02 sent"};
job2738.hours_logged[4] = {Date: "Aug 18", Hours: 1, Note: "photoshop edits; CS.01 sent"};
job2738.hours_logged[5] = {Date: "Aug 18", Hours: .166, Note: "small adj. CS.01 re-sent"};
job2738.hours_logged[6] = {Date: "Aug 19", Hours: .5, Note: "edits; CS.02 sent"};
job2738.hours_logged[7] = {Date: "Aug 30", Hours: 1.5, Note: "edits; fresh look; ClientReview.02 sent"};
job2738.hours_logged[8] = {Date: "Sep 1", Hours: .5, Note: "edits; unfreshed look; ClientReview.03 sent"};
job2738.hours_logged[9] = {Date: "Sep 5", Hours: .5, Note: "edits; ClientReview.04 sent; job closed"};
job2738.completed_date = "September 5th, 2022";
job2738.date_billed = "September 13th, 2022";
job2738.date_paid = "October 13th, 2022";
jobs.push(job2738);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2739 = new Job(2739, 31, "Douglas Shaw & Associates", "MCR-0519", "Moody Church Radio<br /><em>August 2022 Matching Challenge Follow-Up Appeal</em><ol><li>Web Banner</li></ol>", "July 22nd, 2022", "July 26th, 2022");
job2739.hours_logged[0] = {Date: "Jul 26", Hours: 0, Note: "job rescinded"};
job2739.filesReceived = true;
job2739.mockupSubmitted = true;
job2739.completed_date = "July 26, 2022";
job2739.date_billed = "July 26, 2022";
job2739.date_paid = "July 26, 2022";
jobs.push(job2739);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2740 = new Job(2740, 32, "Douglas Shaw & Associates", "CFD-0220", "Chicago Food Depository<br /><em>Giving Tuesday IDC</em><ol><li>Homepage Banner &#10003;</li><li>Hover Ad &#10003;</li><li>Donation Landing Page &#10003;</li><li>Social Ambassador Email &#10003;</li><li>Auto Social Posts &#10003; &#10003; &#10003;</li><li>Auto Social Email &#10003;</li><li>Email 1 &#10003;</li><li>Email 2 &#10003;</li><li>Email 3 &#10003;</li><li>Email 4 &#10003;</li><li>Email 5 &#10003;</li><li>Email 6 &#10003;</li><li>Email 7 &#10003;</li><li>Facebook Ads (2) &#10003; &#10003;</li><li>Social Posts (3) &#10003; &#10003; &#10003;</li></ol>", "July 26, 2022", "August 29th, 2022");
job2740.hours_logged[0] = {Date: "Jul 26", Hours: .5, Note: "Meeting & Setup"};
job2740.filesReceived = true;
job2740.hours_logged[1] = {Date: "Aug 20", Hours: .5, Note: "Homepage banner; other"};
job2740.hours_logged[2] = {Date: "Aug 21", Hours: 1.33, Note: "Hover ad; Donation page; SA Email; SA Posts"};
job2740.hours_logged[3] = {Date: "Aug 22", Hours: .5, Note: "Email1"};
job2740.hours_logged[4] = {Date: "Aug 25", Hours: .5, Note: "Emails 2 and 3"};
job2740.hours_logged[5] = {Date: "Aug 27", Hours: 1, Note: "Emails 4-6"};
job2740.hours_logged[6] = {Date: "Aug 28", Hours: 2, Note: "email 7; Social posts 1 and 2"};
job2740.hours_logged[7] = {Date: "Aug 29", Hours: 1.5, Note: "Social 3 and FB ads; mockup sent"};
job2740.mockupSubmitted = true;
job2740.hours_logged[8] = {Date: "Aug 31", Hours: 1, Note: "Creative edits; Creative Review02 sent"};
job2740.hours_logged[9] = {Date: "Sep 2", Hours: 1, Note: "Extensive edits; Creative Review 03 sent"};
job2740.hours_logged[10] = {Date: "Sep 7", Hours: .5, Note: "edits; first route; files uploaded; job closed"};
job2740.completed_date = "September 7th, 2022";
job2740.date_billed = "September 13th, 2022";
job2740.date_paid = "October 13th, 2022";
jobs.push(job2740);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2741 = new Job(2741, 33, "Douglas Shaw & Associates", "WAS-1215", "Wycliffe Associates<br /><em>Social Ambassador Special Email &#8212;September 2022</em><ol><li>Social Ambassador Email &#10003;</li><li>Blog post &#10003;</li></ol>", "July 28th, 2022", "August 3rd, 2022");
job2741.filesReceived = true;
job2741.hours_logged[0] = {Date: "Jul 29", Hours: .75, Note: "layout; Creative Review 01 submitted"};
job2741.hours_logged[1] = {Date: "Aug 3", Hours: .16, Note: "edits; CS Review01 submitted"};
job2741.hours_logged[2] = {Date: "Aug 22", Hours: .16, Note: "edit; ClientReview02 submitted"};
job2741.mockupSubmitted = true;
job2741.hours_logged[3] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2741.completed_date = "September 5th, 2022";
job2741.date_billed = "September 13th, 2022";
job2741.date_paid = "October 13th, 2022";
jobs.push(job2741);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2742 = new Job(2742, 34, "Biretta Books", "August Bulletins", "St. John Cantius Sunday Bulletins <ul><li>August 7th &#10003;</li><li>August 14th &#10003;</li><li>August 21st &#10003;</li><li>August 28th &#10003;</li>", "August 2nd, 2022", "August 23rd");
job2742.hours_logged[0] = {Date: "Aug 2", Hours: 1.75, Note: "layout; adjustments and edits; final submit"};
job2742.hours_logged[1] = {Date: "Aug 9", Hours: 2, Note: "layout; adjustments; final submit"};
job2742.hours_logged[2] = {Date: "Aug 16", Hours: 2, Note: "Aug 21 creation and file submitted"};
job2742.hours_logged[3] = {Date: "Aug 22", Hours: 1, Note: "Aug 28 draft created"};
job2742.hours_logged[4] = {Date: "Aug 24", Hours: 1.5, Note: "Aug 28; extra pages; edits; final created/submitted"};
job2742.completed_date = "August 29th, 2022";
job2742.date_billed = "August 29th, 2022";
job2742.date_paid = "September 8th, 2022";
jobs.push(job2742);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2743 = new Job(2743, 35, "Douglas Shaw & Associates", "WAS-1219", "Wycliffe Associates<br /><em>Quarterly Thank You Email 4</em><ol><li>Email</li><li>Donation Page</li></ol>", "August 2nd, 2022", "August 8th, 2022");
job2743.filesReceived = true;
job2743.hours_logged[0] = {Date: "Aug 6", Hours: .5, Note: "Layout, Creative Review 01 Submitted"};
job2743.mockupSubmitted = true;
job2743.hours_logged[1] = {Date: "Aug 15", Hours: .3, Note: "edits, CR.02 submitted"};
job2743.hours_logged[2] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2743.completed_date = "September 5th, 2022";
job2743.date_billed = "September 13th, 2022";
job2743.date_paid = "October 13th, 2022";
jobs.push(job2743);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2744 = new Job(2744, 36, "Douglas Shaw & Associates", "WAS-1382", "Wycliffe Associates<br /><em>October Bible Distribution Partner Digital Campaign</em><ol><li>Ambassador Email &#10003;</li><li>Email 1 &#10003;</li><li>Email 2 &#10003;</li><li>Email 3 w/ .gif &#10003;</li><li>Email Resend &#10003;</li><li>Donation Page &#10003;</li><li>Homepage Banner &#10003;</li><li>Hover Ad &#10003;</li><li>Facebook Ad &#10003;</li><li>Facebook Post &#10003;</li><li>Blog Post &#10003;</li></ol>", "August 4th, 2022", "August 25th, 2022");
job2744.hours_logged[0] = {Date: "Aug 4", Hours: .5, Note: "Meeting / Setup"};
job2744.hours_logged[1] = {Date: "Aug 18", Hours: .5, Note: "gif creation"};
job2744.hours_logged[2] = {Date: "Aug 18", Hours: 1, Note: "gif idea finalized and submitted"};
job2744.hours_logged[3] = {Date: "Aug 18", Hours: 1, Note: "creating gif"};
job2744.hours_logged[4] = {Date: "Aug 18", Hours: 1, Note: "finishing gif"};
job2744.filesReceived = true;
job2744.hours_logged[5] = {Date: "Aug 22", Hours: .16, Note: "Files received; Getting re-organized"};
job2744.hours_logged[6] = {Date: "Aug 23", Hours: 2, Note: "layout for most items complete"};
job2744.hours_logged[7] = {Date: "Aug 24", Hours: 1.5, Note: "layout complete; Creative Review.01 submitted"};
job2744.mockupSubmitted = true;
job2744.hours_logged[8] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2744.completed_date = "September 5th, 2022";
job2744.date_billed = "September 13th, 2022";
job2744.date_paid = "October 13th, 2022";
jobs.push(job2744);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2745 = new Job(2745, 37, "Douglas Shaw & Associates", "WAS-1239", "Wycliffe Associates<br /><em>August eNDA</em><ol><li>Facebook Ad </li><li>Display Ad</li><li>Native Ad</li><li>Responsive Google Ad</li></ol>", "August 16th, 2022", "August 19th, 2022");
job2745.filesReceived = true;
job2745.hours_logged[0] = {Date: "Aug 17", Hours: 1, Note: "First mockup created and submitted"};
job2745.mockupSubmitted = true;
job2745.hours_logged[1] = {Date: "Aug 19", Hours: .25, Note: "CS.01 submitted"};
job2745.hours_logged[2] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2745.completed_date = "September 5th, 2022";
job2745.date_billed = "September 13th, 2022";
job2745.date_paid = "October 13th, 2022";
jobs.push(job2745);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2746 = new Job(2746, 38, "Douglas Shaw & Associates", "WAS-1448", "Wycliffe Associates<br /><em>Ukraine Emergency Gram Digital Campaign</em>", "August 17th, 2022", "August 29th, 2022");
job2746.hours_logged[0] = {Date: "Aug 17", Hours: .5, Note: "Metting"};
job2746.filesReceived = true;
job2746.hours_logged[1] = {Date: "Aug 29", Hours: 1, Note: "files created; mockup submitted"};
job2746.mockupSubmitted = true;
job2746.hours_logged[2] = {Date: "Aug 31", Hours: .5, Note: "photo change; edit; CSReview.01 submit"};
job2746.hours_logged[3] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2746.completed_date = "September 5th, 2022";
job2746.date_billed = "September 13th, 2022";
job2746.date_paid = "October 13th, 2022";
jobs.push(job2746);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2747 = new Job(2747, 39, "Douglas Shaw & Associates", "MCR-0532", "Moody Church Radio<br />No Reason to Hide <em>Book Homepage Banner</em>", "August 19th, 2022", "August 23rd, 2022");
job2747.filesReceived = true;
job2747.hours_logged[0] = {Date: "Aug 19", Hours: .25, Note: "Getting organized"};
job2747.hours_logged[1] = {Date: "Aug 19", Hours: 1, Note: "First draft of banner"};
job2747.hours_logged[2] = {Date: "Aug 20", Hours: .25, Note: "final adjustments; sent CR.01"};
job2747.mockupSubmitted = true;
job2747.hours_logged[3] = {Date: "Aug 22", Hours: .25, Note: "small edits; sent CR.02"};
job2747.hours_logged[4] = {Date: "Aug 22", Hours: .17, Note: "small edit; sent CR.03"};
job2747.hours_logged[5] = {Date: "Aug 22", Hours: .25, Note: "ad flip; sent CR.04"};
job2747.hours_logged[6] = {Date: "Aug 23", Hours: .25, Note: "output final files"};
job2747.completed_date = "August 23, 2022";
job2747.pdf = true;
job2747.thumbnail = true;
job2747.date_billed = "August 25, 2022";
job2747.date_paid = "September 21st, 2022";
jobs.push(job2747);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2748 = new Job(2748, 40, "Douglas Shaw & Associates", "WAS-1399", "Wycliffe Associates<br /><em>October Ambassador Special Content Email </em><ol><li>Social Ambassador Email &#10003;</li><li>Web graphics &#10003;</li><li>Blog Post &#10003;</li><li>Donation Form &#10003;</li></ol>", "August 22nd, 2022", "August 26th, 2022");
job2748.filesReceived = true;
job2748.hours_logged[0] = {Date: "Aug 25", Hours: 1, Note: "mockups assembled"};
job2748.hours_logged[1] = {Date: "Aug 26", Hours: .5, Note: "mockup completed; Creative Review.01 submitted"};
job2748.mockupSubmitted = true;
job2748.hours_logged[1] = {Date: "Sep 2", Hours: .5, Note: "photo and text edits; CS Review.01 sent"};
job2748.hours_logged[2] = {Date: "Sep 5", Hours: .17, Note: "files uploaded; job closed"};
job2748.completed_date = "September 5th, 2022";
job2748.date_billed = "September 13th, 2022";
job2748.date_paid = "October 13th, 2022";
jobs.push(job2748);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2749 = new Job(2749, 41, "Douglas Shaw & Associates", "CFD-0207", "Chicago Food Depository<br /><em>October Social Ambassador</em><ol><li>Social Ambassador Email &#10003;</li><li>FB Post &#10003;</li><li>Twitter Post &#10003;</li><li>LinkedIn Post &#10003;</li><li>Email Post &#10003;</li></ol>", "August 25th, 2022", "September 2nd, 2022");
job2749.filesReceived = true;
job2749.hours_logged[0] = {Date: "Aug 25", Hours: .25, Note: "getting setup"};
job2749.hours_logged[1] = {Date: "Sep 2", Hours: 1, Note: "mockup created; Creative Review.01 sent"};
job2749.mockupSubmitted = true;
job2749.hours_logged[2] = {Date: "Sep 5", Hours: .25, Note: "photo swap; Creative Review.02 sent"};
job2749.hours_logged[3] = {Date: "Sep 6", Hours: .17, Note: "small edits; First Route.01 sent"};
job2749.hours_logged[4] = {Date: "Sep 7", Hours: .17, Note: "files uploaded; job closed"};
job2749.completed_date = "September 7th, 2022";
job2749.date_billed = "September 13th, 2022";
job2749.date_paid = "October 13th, 2022";
jobs.push(job2749);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2750 = new Job(2750, 42, "Douglas Shaw & Associates", "CFD-0214", "Chicago Food Depository<br /><em>November Social Ambassador</em>", "August 25th, 2022", "September 19th, 2022");
job2750.hours_logged[0] = {Date: "Aug 25", Hours: .17, Note: "Planning meeting"};
job2750.filesReceived = true;
job2750.hours_logged[1] = {Date: "Sep 5", Hours: -.17, Note: "Job closed. no bill"};
job2750.mockupSubmitted = true;
job2750.completed_date = "September 5th, 2022";
job2750.date_billed = "September 5th, 2022";
job2750.date_paid = "September 5th, 2022";
jobs.push(job2750);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2751 = new Job(2751, 43, "Douglas Shaw & Associates", "CFD-0217", "Chicago Food Depository<br /><em>November eAppeal</em>", "August 25th, 2022", "September 16th, 2022");
job2751.hours_logged[0] = {Date: "Aug 25", Hours: .34, Note: "Planning meeting"};
job2751.filesReceived = true;
job2751.hours_logged[1] = {Date: "Sep 5", Hours: -.34, Note: "Job closed. no bill"};
job2751.mockupSubmitted = true;
job2751.completed_date = "September 5th, 2022";
job2751.date_billed = "September 5th, 2022";
job2751.date_paid = "September 5th, 2022";
jobs.push(job2751);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2752 = new Job(2752, 44, "Biretta Books", "September Bulletins", "St. John Cantius Sunday Bulletins <ul><li>September 4th &#10003;</li><li>September 11th &#10003;</li>", "August 30th, 2022", "September 21st");
job2752.hours_logged[0] = {Date: "Aug 30", Hours: 1.75, Note: "Sept 4th completed"};
job2752.hours_logged[1] = {Date: "Sep 7", Hours: 1.25, Note: "Sept 11th completed"};
job2752.completed_date = "September 7th, 2022";
job2752.date_billed = "September 19th, 2022";
job2752.date_paid = "September 21st, 2022";
jobs.push(job2752);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2753 = new Job(2753, 45, "Biretta Books", "2023 Ordo", "6 x 9, spiral-bound, 150+ page reference book for St. John Cantius Church", "September 1st, 2022", "October 1st, 2022");
job2753.hours_logged[0] = {Date: "Sep 13", Hours: 1, Note: "Advent22"};
job2753.hours_logged[1] = {Date: "Sep 14", Hours: 1.5, Note: "Front Matter; finish Advent 22"};
job2753.hours_logged[2] = {Date: "Sep 15", Hours: .75, Note: "Christmastide 22-23"};
job2753.hours_logged[3] = {Date: "Sep 19", Hours: .75, Note: "Epiphanytide 23"};
job2753.hours_logged[4] = {Date: "Sep 19", Hours: .5, Note: "Septuagesima"};
job2753.hours_logged[5] = {Date: "Sep 22", Hours: 1, Note: "Lent"};
job2753.hours_logged[6] = {Date: "Sep 29", Hours: 1.5, Note: "March 26 - May 14"};
job2753.hours_logged[7] = {Date: "Sep30", Hours: 1.5, Note: "through June 30"};
job2753.hours_logged[8] = {Date: "Sep 30", Hours: 1, Note: "through July 31"};
job2753.hours_logged[9] = {Date: "Oct 1", Hours: 1, Note: "through Aug 31"};
job2753.hours_logged[10] = {Date: "Oct 3", Hours: 1, Note: "through Sept 30"};
job2753.hours_logged[11] = {Date: "Oct 5", Hours: 2, Note: "through Dec. 2"};
job2753.hours_logged[12] = {Date: "Oct 5", Hours: 1.5, Note: "through Letter Accompanying Traditionis Custodes"};
job2753.hours_logged[13] = {Date: "Oct 6", Hours: 1, Note: "finish initial layout"};
job2753.hours_logged[14] = {Date: "Oct 17", Hours: .75, Note: "cover"};
job2753.hours_logged[15] = {Date: "Oct 28", Hours: .5, Note: "applying edits"};
job2753.hours_logged[16] = {Date: "Oct 29", Hours: 1, Note: "finish applying edits"};
job2753.hours_logged[17] = {Date: "Oct 30", Hours: .5, Note: "finalize graphics; output pdf"};
job2753.completed_date = "October 29th, 2022";
job2753.date_billed = "November 7th, 2022";
job2753.date_paid = "November 9th, 2022";
jobs.push(job2753);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2754 = new Job(2754, 46, "Biretta Books", "<em>Via Sacra</em> Fall 22", "16 page booklet redesign", "September 9th, 2022", "September 15th, 2022");
job2754.hours_logged[0] = {Date: "Sept 10", Hours: 1.5, Note: "pp 1-4"};
job2754.hours_logged[1] = {Date: "Sept 11", Hours: 2.5, Note: "pp 5-11"};
job2754.hours_logged[2] = {Date: "Sept 11", Hours: 1.5, Note: "finished first draft; job closed"};
job2754.completed_date = "September 16th, 2022";
job2754.date_billed = "September 16th, 2022";
job2754.date_paid = "September 21st, 2022";
jobs.push(job2754);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2755 = new Job(2755, 47, "Publishing Management Associates", "Small Ads 7", "Small ads created; pictures reformatted; etc.", "November 15th, 2022", "N/A");
job2755.hours_logged[0] = {Date: "Nov 15", Hours: .5, Note: "Call for papers ad"};
job2755.hours_logged[1] = {Date: "Nov 16", Hours: .75, Note: "photo reformatting"};
job2755.hours_logged[2] = {Date: "Nov 17", Hours: .25, Note: "finish call for papers ad"};
job2755.hours_logged[3] = {Date: "Nov 21", Hours: .25, Note: "photo reformatting (2)"};
job2755.hours_logged[4] = {Date: "Dec 16", Hours: .75, Note: "photo reformatting (3)"};
jobs.push(job2755);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2756 = new Job(2756, 48, "Biretta Books", "Maronite Booklet", "8.5 x 11; 40 page booklet", "December 12, 2022", "January 22, 2022");
jobs.push(job2756);