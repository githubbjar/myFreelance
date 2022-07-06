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
            return "Michele Perisin";
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
            return "mperisin@douglasshaw.com";
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

const job2722 = new Job(2722, 14, "The Fellowship of St. James", "<em>Thousand Words</em> Book", "by Mary Elizabeth Podles, 8.5\" by 11\"", "March 8, 2022", "September 1");
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

const job2725 = new Job(2725, 17, "Douglas Shaw & Associates", "TSM-0785", "The Scott Mission <br />July '22 eAppeal<ul><li>1 Homepage banner &#10003; </li><li>1 Donation page &#10003; </li><li>1 Email &#10003; </li><li>1 FB Post &#10003; </li><li>1 Twitter Post &#10003; </li></ul>", "May 25, 2022", "June 2, 2022");
job2725.hours_logged[0] = {Date: "May 25", Hours: 1, Note: "Getting started. email"};
job2725.hours_logged[1] = {Date: "May 26", Hours: 1.5, Note: "Donation and social"};
job2725.hours_logged[2] = {Date: "May 27", Hours: 1, Note: "Banner and output"}; 
job2725.hours_logged[2] = {Date: "May 31", Hours: .25, Note: "1st Submission"}; 
job2725.hours_logged[3] = {Date: "June 1", Hours: .25, Note: "changes, submitted"}; 
job2725.hours_logged[4] = {Date: "June 8", Hours: 1, Note: "changes, submitted"};
job2725.hours_logged[5] = {Date: "June 10", Hours: .25, Note: "changes, submitted"};
job2725.hours_logged[6] = {Date: "June 23", Hours: .25, Note: "changes, submitted"};
job2725.hours_logged[7] = {Date: "June 23", Hours: .5, Note: "web assets assembled"};
job2725.hours_logged[8] = {Date: "June 24", Hours: .5, Note: "final files uploaded"};
job2725.completed_date = "June 24, 2022"; 
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
const job2727 = new Job(2727, 19, "Douglas Shaw & Associates", "CFD-0197", "Chicago Food Depository <br />August '22 eAppeal  <ol><li> homepage banner &#10003; </li><li>email 1 &#10003; </li><li>email 2 &#10003; </li><li>donation landing page &#10003; </li><li>thank you email &#10003; </li></ol>", "June 13, 2022", "June 17, 2022");
job2727.hours_logged[0] = {Date: "Jun 15", Hours: 2, Note: "mock emails"};
job2727.hours_logged[1] = {Date: "Jun 16", Hours: 1, Note: "donation page and banner"};
job2727.hours_logged[2] = {Date: "Jun 17", Hours: .5, Note: "check and send first review pdf"};
job2727.hours_logged[3] = {Date: "Jun 17", Hours: .75, Note: "edits returned"};
job2727.hours_logged[4] = {Date: "Jun 20", Hours: .25, Note: "first route submitted"};
job2727.hours_logged[5] = {Date: "Jun 22", Hours: .5, Note: "changes, cs review 1 submitted"};
job2727.hours_logged[6] = {Date: "Jun 27", Hours: .25, Note: "changes, cs review 2 submitted"};
job2727.hours_logged[7] = {Date: "Jun 28", Hours: .5, Note: "photoshopped t-shirt, cs review 3 submitted"};
jobs.push(job2727);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2728 = new Job(2728, 20, "Douglas Shaw & Associates", "CFD-0204", "Chicago Food Depository <br />September Hunger Action Month", "June 14, 2022", "July 14, 2022");
job2728.hours_logged[0] = {Date: "Jun 14", Hours: .5, Note: "Initial meeting"}
jobs.push(job2728);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2729 = new Job(2729, 21, "Douglas Shaw & Associates", "MCR-0522", "Moody Church Media<br /> 2022 FYE Digital Campaign<ul><li>2 Facebook ads &#10003; </li><li>3 total emails &#10003; </li><li>1 hover ad &#10003; </li><li>1 Homepage Banner &#10003; </li><li>1 Donation page &#10003; </li></ul>", "June 21, 2022", "June 27, 2022");
job2729.hours_logged[0] = {Date: "Jun 22", Hours: 1, Note: "FB ads and email 1"};
job2729.hours_logged[1] = {Date: "Jun 22", Hours: .5, Note: "email 2"};
job2729.hours_logged[2] = {Date: "Jun 24", Hours: .5, Note: "email 3, homepage banner"};
job2729.hours_logged[3] = {Date: "Jun 25", Hours: 1.25, Note: "finished, output"};
job2729.hours_logged[4] = {Date: "Jun 27", Hours: .25, Note: "checked; sent for review"};
jobs.push(job2729);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2730 = new Job(2730, 22, "Publishing Management Associates", "PMA Small Ads 6", "Small ads created or reformatted", "June 23, 2022", "n/a");
job2730.hours_logged[0] = {Date: "Jun 23", Hours: .25, Note: "CICW_FirstThings color conversion"};
job2730.hours_logged[1] = {Date: "Jun 23", Hours: .5, Note: "5 images"};
job2730.hours_logged[2] = {Date: "Jun 24", Hours: .25, Note: "Stuebenville hiring ad"};
job2730.hours_logged[3] = {Date: "Jun 27", Hours: .25, Note: "photo format"};
jobs.push(job2730);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2731 = new Job(2731, 23, "Douglas Shaw & Associates", "WAS-1185", "Wycliffe Associates<br />August 2 Partner Letter Digital Campaign<ol><li>homepage banner &#10003; </li><li>donation page &#10003;</li><li>hover ad &#10003;</li><li>Facebook ad &#10003;</li><li>Facebook post  &#10003; </li><li>native ad &#10003; </li><li>social ambassador email &#10003;</li><li>auto-generated post &#10003;</li><li>(7) email &#10003; &#10003; &#10003; &#10003; &#10003; &#10003; &#10003;</li><li>blog post &#10003;</li></ol>", "June 25, 2022", "June 30, 2022");
job2731.hours_logged[0] = {Date: "Jun 25", Hours: .5, Note: "Setup; homepage banner"};
job2731.hours_logged[1] = {Date: "Jun 26", Hours: 1, Note: "donation page; blog post"};
job2731.hours_logged[2] = {Date: "Jun 27", Hours: .75, Note: "facebook; social; native"};
job2731.hours_logged[3] = {Date: "Jun 28", Hours: .25, Note: "ambassador email"};
job2731.hours_logged[4] = {Date: "Jun 28", Hours: .5, Note: "email 1 control and test"};
job2731.hours_logged[5] = {Date: "Jun 28", Hours: .25, Note: "email 2"};
job2731.hours_logged[6] = {Date: "Jun 29", Hours: 1.5, Note: "all emails; blurring; organizing"};
job2731.hours_logged[7] = {Date: "Jun 30", Hours: 1, Note: "hover ad; web images; creative review 1 submit"};
job2731.hours_logged[8] = {Date: "Jul 6", Hours: 1.5, Note: "fix artboards; margins; edits. 1st Route submitted"};
jobs.push(job2731);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2732 = new Job(2732, 24, "Douglas Shaw & Associates", "CFD-0212", "Chicago Food Depository<br />October Digital Donor Report<ul><li>Donation Page</li><li>Impact Landing Page</li><li>Email</li><li>Blog Post 1</li></ul>", "June 27, 2022", "August 17, 2022");
job2732.hours_logged[0] = {Date: "Jun 27", Hours: .25, Note: "Initial meeting"};
jobs.push(job2732);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2733 = new Job(2733, 25, "Douglas Shaw & Associates", "WAS-1189", "Wycliffe Assosicate<br />September Partner Letter Digital Campaign", "June 28, 2022", "July 25, 2022");
jobs.push(job2733);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const job2734 = new Job(2734, 26, "Biretta Books", "Bulletins", "St. John Cantius Sunday Bulletins <ul><li>July 10th &#10003;</li><li>July 17th</li><li>July 24th</li><li>July 31st</li><li>August 7th</li><li>August 14</li><li>August 21</li><li>August 28</li><li>September 4</li>", "June 29th, 2022", "September 4th, 2022");
job2734.hours_logged[0] = {Date: "Jun 29", Hours: .5, Note: "getting started"};
job2734.hours_logged[1] = {Date: "Jun 30", Hours: 1, Note: "starting layout"};
job2734.hours_logged[2] = {Date: "Jul 5", Hours: 1.5, Note: "finish layout for July 10 bulletin"};
jobs.push(job2734);