$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2o_tRFdogf6sOosrjgKYwgMg_Dio_H4A",
    authDomain: "employee-data-a62b9.firebaseapp.com",
    databaseURL: "https://employee-data-a62b9.firebaseio.com",
    projectId: "employee-data-a62b9",
    storageBucket: "employee-data-a62b9.appspot.com",
    messagingSenderId: "523831199462"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var employeeName = $("#empName").val().trim();
    var role = $("#empRole").val().trim();
    var startDate = $("#empStart").val().trim();
    var monthlyRate = $("#empRate").val().trim();
    var properStart = moment(startDate, "YYYY-MM-DD");
    var todaysDate = moment();
    var monthsWorked = todaysDate.diff(properStart, 'months');
    var totalBilled = monthsWorked * monthlyRate;
    console.log(totalBilled);
    var newEmployee = {
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthsWorked: monthsWorked,
      monthlyRate: monthlyRate,
      totalBilled: totalBilled
    };
    var employeeSnapshot = database.ref('/users').push();
    employeeSnapshot.set(newEmployee);
  });

  database.ref('/users').on("child_added", function(snapshot) {
    var employeeName = snapshot.val().employeeName;
    var role = snapshot.val().role;
    var startDate = snapshot.val().startDate;
    var monthsWorked = snapshot.val().monthsWorked;
    var monthlyRate = snapshot.val().monthlyRate;
    var totalBilled = snapshot.val().totalBilled;
    $("tbody").append("<tr><td>"+employeeName+"</td><td>"+role+"</td><td>"+startDate+"</td><td>"+monthsWorked+"</td><td>"+monthlyRate+"</td><td>"+totalBilled+"</td></tr>");
  });
});
