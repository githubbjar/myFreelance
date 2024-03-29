<?php
    //BLOCK ALL IPs Except Mine
    //$ipaddress = getenv("REMOTE_ADDR");
      //  if ($ipaddress !== "107.197.41.219") {
        //  header('Location: http://www.nickjanquart.com');
    //};
    
?>
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>
    <link rel="stylesheet" type="text/css" href="styles.css" media="screen" />
    <link rel="stylesheet" href="print.css" media="print" />
    <script src="https://kit.fontawesome.com/c6ab673120.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Crimson+Text&display=swap" rel="stylesheet">
    
    <!--//What is jobx variable from url-->
    <?php
        // set URL variable
        $raw_url = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
        // Use parse_url() function to parse the URL 
        // and return an associative array which
        // contains its various components
        $url_components = parse_url($raw_url);
        // Use parse_str() function to parse the
        // string passed via URL
        parse_str($url_components['query'], $params);
        // set jobx variable based on url
        if (!$params['jobx']) {
            $jobx = 0;
        } else {
            $jobx = $params['jobx'];
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
<div class='row' id="job_status">
</div>
</div>
<div class='row' id='header'>
    <div class='col-sm-2'></div>
    <div class='col-sm-8'> 
        <div class="row">
            <div id="previous" class="col-sm-2"></div>               
            <div class="col-sm-8">
                <h2 id="jerryjob" class="jerry"></h2>
            </div>
            <div id="next" class="col-sm-2"></div>
        </div>
        <p id="services" class="crimson">Graphics / Design / Web Services</p> 
        <p id="date_billed" class="project-details"></p> 
        <p id="invoice_number"></p> 
        <p id="running_total_or_total" class="project-details-header-top"></p>
        <p id="billing_amount" class="total-due"></p>
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
        <p class="project-details-header">PROJECT DETAILS:</p>
        <p id="project_type" class="project-details"></p>
        <p class="project-details-header" id="startdate-duedate"></p>
        <p id="start_date" class="project-details"></p>
        <p id="completed-date-header" class="project-details-header"></p>
        <p id="completed_date" class="project-details"></p>
        <p class="project-details-header">TIME ON PROJECT:</p>
        <p id="total_hours" class="project-details"></p>
        <p class="project-details-header">RATE OF PAY:</p>
        <p id="rate_of_pay" class="project-details"></p>
    </div>
    <div class='col-sm-2'>
        <div id="hours_table"></div> 
    </div>
    <div class='col-sm-2'>
        <p class="billto-payto">BILL TO:</p>
        <p class="info-name" id="employer"></p>
        <p class="info" id="employer_address1"></p>
        <p class="info" id="employer_address2"></p>
        <p class="info" id="contact"></p>
        <p id="contact_email" class="info"></p>
        <hr /> 
        <p class="billto-payto">PAY TO:</p>
        <p class="info-name">Jerry Janquart</p> 
        <p class='info'>10438 Red Oak Drive <br /> 
        <p class='info'>Saint John, IN 46373 <br />
        <p class='info'>312-589-8332 <br />
        <p class='info'>jmjanquart@gmail.com </p>
        <hr />



        
        <!--Bootstrap Modal to display TOTALS for ALL JOBS FROM THIS EMPLOYER-->
        <p class="info">
            <a data-bs-toggle="modal" data-bs-target="#alljobsfromthisemployer">
            <span id="alljobsfromthisemployerlink"></span>
            </a>
        </p>
        <!-- Modal -->
        <div class="modal fade" id="alljobsfromthisemployer" tabindex="-1" aria-labelledby="alljobsfromthisemployerLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="alljobsfromthisemployerLabel"><span id="totals-from-employer-title"></span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="totals-from-employer">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>




        <!--Bootstrap Modal to display TOTALS for ALL JOBS-->
        <p class="info">
            <a data-bs-toggle="modal" data-bs-target="#alljobs">
            <span id="alljobslink"></span>
            </a>
        </p>
        <!-- Modal -->
        <div class="modal fade" id="alljobs" tabindex="-1" aria-labelledby="allJobsLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="allJobsLabel"><span id="totals-spot"></span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="totals">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
    <div class='col-sm-2'>   
        <div id="thumbnail"></div>
    </div>
</div>
 <div class='row'>
    <div class='col-sm-2'></div>
    <div class='col-sm-8'>
        <hr /><p style='text-align:center' class="project-details-header">THANK YOU FOR THE OPPORTUNITY TO WORK WITH YOU!</p>
        <p style='text-align:center' class="project-details"><em>Please pay within 30 days of receiving invoice.</em><br /></p>
    </div>
    <div class='col-sm-2'></div>
</div>


    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="job-list.js" ></script>
<script src="dom.js"></script>    
</body>
</html>