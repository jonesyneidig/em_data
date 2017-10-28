 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2o_tRFdogf6sOosrjgKYwgMg_Dio_H4A",
    authDomain: "employee-data-a62b9.firebaseapp.com",
    databaseURL: "https://employee-data-a62b9.firebaseio.com",
    projectId: "employee-data-a62b9",
    storageBucket: "",
    messagingSenderId: "523831199462"
  };
  firebase.initializeApp(config);

  var database = firebase.datebase();

  $(document).on("click","#submit", function(event){

    var employeeName = $("#empName").val().trim();
    var role = $("#empRole").val().trim();
    var startDate = $("#empStart").val().trim();
    var monthlyRate = $("#empRate").val().trim();
    var newEmployee = {
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthsWorked: 0,
      monthlyRate: monthlyRate,
      totalBilled: 0
    };
    database.ref().push(newEmployee);
  })

  database.ref().on("child_added",function(snapshot) {
    var employeeName = snapshot.val().employeeName;
    var role = snapshot.val().role;
    var startDate = snapshot.val().startDate, ("MM-DD-YYYY");
    var monthlyRate = snapshot.val().monthlyRate;

    $("tbody").append("<tr><td>"+employeeName+"</td><td>"+role+"</td><td>"+startDate+"</td><td>"+monthsWorked+"</td><td>"+monthlyRate+"</td><td>"+totalBilled+"</td></tr>")

  })