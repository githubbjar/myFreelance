<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>
  <script src="https://kit.fontawesome.com/c6ab673120.js" crossorigin="anonymous"></script>
  <style> 
    body {
        margin: 0;
        padding: 0;
    }
    
    p {font-size: 18px; line-height: 22px;} 
    p.project-details {font-size: 18px; line-height: 12px; margin-bottom: 5px;} 
    #billing_amount {margin-top: -16px; font-weight: bold;}
    #header {margin-top: 25px;} 
    h2.jerry, #services, #invoice_number, #date_billed, #billing_amount {
        text-align: center;
    }
    #employer {font-weight: bold}
    #employer, #employer_address1, #employer_address2, #contact, #contact_email {margin-top: -16px;}

    #job_status {
        margin-top: 0px;
        text-align: center;
    }

    .green {
        background-color: rgb(84, 255, 62);
        padding: 10px;
    }

    .yellow {
        background-color: rgb(255, 242, 62);
        padding: 10px;
    }

    .gray {
        background-color: #CCC;
        padding: 10px;
    }

    a, a:hover {
        color: #000;
    }

    #project {
        margin-bottom: 27px;
        margin-top: 15px;
    }

    #job-list p {
        margin-left: 20px;
    }

    #job-list {
        padding-left: 45px;
        height: 250px;
    }

    .jobslist_employer_nicknames {
        font-size: 12px;
        margin-bottom: -4px;
    }
    .joblist_links {
        margin-bottom: 0px;
    }
    .joblist_projects {
        font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
        #center {
            text-align: center;
        }
        #job-list {
            display: none;
        }
    }
    
    @media print {
        #job_status, #jobList {
            display: none;
        }
    }    

  </style>
    
    
    <?php
    
        //use this code on the other page to grab x

        //grab url for use in querying database
        $raw_url = "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
        $jobx = substr($raw_url, -1, 1);

        if ($jobx === "/") {
        	$jobx = 0;
        };
    ?>

    <!--HT: https://pagecrafter.com/pass-php-variable-javascript/ -->	
    <script> 
        let x = <?php echo $jobx; ?>;
    </script> 

    <title>Freelance Invoice</title>

</head>

<body>

<!--ROW ONE BEGIN-->
<div class='row'>
    <div class="col-sm-12">
        <div id="job_status"></div>
    </div>
</div>
<div class='row' id='header'>
    <div class='col-sm-2' id='test_space'></div>
    <div class='col-sm-8'> 
        <h2 class="jerry">Jerry Janquart </h2> 
        <p id="services">Graphics / Design / Web Services</p> 
        <p id="invoice_number"></p> 
        <p id="date_billed"></p> 
        <p id="billing_amount"></p>
        <hr />
    </div>
    <div class='col-sm-2'></div>
</div>
<!--ROW ONE END-->
<!--ROW TWO BEGIN-->
<div id="center">
<div class='row'>
    <div class='col-sm-2'>
        <div id="job-list" class="overflow-scroll"></div>  
    </div>
    <div class='col-sm-4'>
        <h2 id="project"></h2>
        <p class="project-details">PROJECT DETAILS:</p>
        <p id="project_type"></p>
        <p id="start_date"></p>
        <p id="completed_date"></p>
        <p id="total_hours"></p>
        <p id="rate_of_pay"></p>
    </div>
    <div class='col-sm-4'>
        <hr /><p>BILL TO: <br />
        <p id="employer"></p>
        <p id="employer_address1"></p>
        <p id="employer_address2"></p>
        <p id="contact"></p>
        <p id="contact_email"></p>
        <hr /> <p>PAY TO: <br /> 
        <strong> Jerry Janquart </strong> <br /> 
        10438 Red Oak Drive <br /> 
        Saint John, IN 46373 <br />
        312-589-8332 <br />
        jmjanquart@gmail.com </p>
        <div class='col-sm-2'>
    </div>
    </div>
    <div class='col-sm-3'></div>
</div>
 <div class='row'>
    <div class='col-sm-2'></div>
    <div class='col-sm-8'>
        <hr /><p style='text-align:center'><strong>Thank you for the opportunity to work with you!</strong><br />
        <em>Please pay within 30 days of receiving invoice.</em></p>
    </div>
    <div class='col-sm-2'></div>
</div>


    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="job-list.js" ></script>
<script src="dom.js"></script>    
</body>
</html>