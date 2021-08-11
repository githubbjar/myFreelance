//Insert the object data
document.title = "INVOICE #" + jobs[x].invoice_number + ", " + jobs[x].employer_nickname();
document.getElementById("invoice_number").innerHTML = "INVOICE #" + jobs[x].invoice_number;
document.getElementById("date_billed").innerHTML = "BILLING DATE: " + jobs[x].date_billed;
document.getElementById("project").innerHTML = jobs[x].project;
let totalDue = "Total Due: $";
if (jobs[x].date_paid) {
    totalDue = "PAID: $"
}
document.getElementById("billing_amount").innerHTML = totalDue + jobs[x].total_hours() * jobs[x].rate_of_pay;
document.getElementById("project_type").innerHTML = jobs[x].project_type;
document.getElementById("start_date").innerHTML = "START DATE: <br /> " + jobs[x].start_date;
document.getElementById("completed_date").innerHTML = "COMPLETED DATE: <br /> " + jobs[x].completed_date;
document.getElementById("total_hours").innerHTML = "TOTAL HOURS: " + jobs[x].total_hours();
document.getElementById("rate_of_pay").innerHTML = "RATE OF PAY: $" + jobs[x].rate_of_pay + " / hour";
document.getElementById("employer").innerHTML = jobs[x].employer;
document.getElementById("employer_address1").innerHTML = jobs[x].employer_address1();
document.getElementById("employer_address2").innerHTML = jobs[x].employer_address2();
document.getElementById("contact").innerHTML = jobs[x].contact();
document.getElementById("contact_email").innerHTML = jobs[x].contact_email();
document.getElementById("job-list").innerHTML = "<p><strong>Jobs:</strong></p>" + list_jobs_code;
document.getElementById("test_space").innerHTML = "";

let jobStatus = "";
//completed, billed & paid
if (jobs[x].completed_date && jobs[x].date_billed && jobs[x].date_paid) {
    jobStatus = "<div class='green'>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " &#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " &#8212;> <i class='fas fa-check-square'></i> Billed on " + jobs[x].date_billed + " &#8212> <i class='fas fa-check-square'></i> Payment Recieved on " + jobs[x].date_paid + "</div>"; 
// completed & billed
} else if (jobs[x].completed_date && jobs[x].date_billed && !jobs[x].date_paid) {
    jobStatus = "<div class='yellow'>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " &#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " &#8212;> <i class='fas fa-check-square'></i> Billed on " + jobs[x].date_billed + " &#8212> <i class='far fa-square'></i> Awaiting payment . . .</div>"
// completed
} else if (jobs[x].completed_date && !jobs[x].date_billed && !jobs[x].date_paid) {
    jobStatus = "<div class='yellow'>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + " &#8212;> <i class='fas fa-check-square'></i> Completed on " + jobs[x].completed_date + " &#8212;> <i class='far fa-square'></i> Need to bill . . .  </div>"
// not completed
} else {
    jobStatus = "<div class='blue'>&#8212;> <i class='fas fa-check-square'></i> Job started on " + jobs[x].start_date + "</div>"};
document.getElementById("job_status").innerHTML = jobStatus;


