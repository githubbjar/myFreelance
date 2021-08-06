const jobs = [];

        //Individual Jobs
        const job2708 = {
            employer: "St. John Cantius Church",
            contact: "Nick Chapello",
            employer_address1: "825 N. Carpenter Street",
            employer_address2: "Chicago, IL 60642",
            contact_email: "nchapello@cantius.org",
            project: "2021 Music Schedule",
            project_type: "16 page booklet, 5.5 x 8.5",
            invoice_number: 2708,
            start_date: "July 17, 2021",
            due_date: "August 6, 2021",
            completed_date: "August 1, 2021",
            total_hours: 8,
            rate_of_pay: 40,
            date_billed: "August 4, 2021",
            date_paid: "August 15, 2021"
        };

        const job2709 = {
            employer: "Publishing Management Associates",
            contact: "Sue Milnes",
            employer_address1: "129 Phelps Avenue, Suite 312",
            employer_address2: "Rockford, IL 61108",
            contact_email: "sue@pma-inc.net",
            project: "<em>First Things </em>Flex 2.0",
            project_type: "Online Subscription Form Creation",
            invoice_number: 2709,
            start_date: "July 16, 2021",
            due_date: "N/A",
            completed_date: "",
            total_hours: "",
            rate_of_pay: 50,
            date_billed: "",
            date_paid: ""
        };

        const job2710 = {
            employer: "St. John Cantius Church",
            contact: "Nick Chapello",
            employer_address1: "825 N. Carpenter Street",
            employer_address2: "Chicago, IL 60642",
            contact_email: "nchapello@cantius.org",
            project: "Posters",
            project_type: "Details Unknown",
            invoice_number: 2710,
            start_date: "August 6, 2021",
            due_date: "",
            completed_date: "",
            total_hours: "",
            rate_of_pay: 40,
            date_billed: "",
            date_paid: ""
        };
        
        //Add individual jobs to my jobs array
        jobs.push(job2708); // [0] St. John Cantius Church, Music Schedule Booklet
        jobs.push(job2709); // [1] PMA, First Things Flex 2.0 Forms
        jobs.push(job2710); // [2] St. John Cantius Church, Posters

        