var WorkerCategory;
(function (WorkerCategory) {
    WorkerCategory[WorkerCategory["BUSINNES_ANALYST"] = 0] = "BUSINNES_ANALYST";
    WorkerCategory[WorkerCategory["DEVELOPER"] = 1] = "DEVELOPER";
    WorkerCategory[WorkerCategory["DESIGNER"] = 2] = "DESIGNER";
    WorkerCategory[WorkerCategory["QA"] = 3] = "QA";
    WorkerCategory[WorkerCategory["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(WorkerCategory || (WorkerCategory = {}));
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Inna', surname: 'Ivanova', available: true, salary: 1000, category: WorkerCategory.SCRUM_MASTER },
        { id: 2, name: 'Vova', surname: 'Koval', available: true, salary: 1500, category: WorkerCategory.DEVELOPER },
        { id: 3, name: 'Vika', surname: 'Vasylieva', available: false, salary: 1600, category: WorkerCategory.DESIGNER },
        { id: 4, name: 'Eugen', surname: 'Floyd', available: true, salary: 1300, category: WorkerCategory.DEVELOPER }
    ];
    return workers;
}
function logFirstAvalible(workersArray) {
    if (workersArray === void 0) { workersArray = getAllworkers(); }
    console.log("Length of array: ".concat(workersArray.length));
    var availableWorker;
    for (var _i = 0, workersArray_1 = workersArray; _i < workersArray_1.length; _i++) {
        var currentWorker = workersArray_1[_i];
        if (currentWorker.available == true) {
            availableWorker = currentWorker;
            break;
        }
    }
    if (availableWorker != null) {
        console.log("Name: ".concat(availableWorker.name));
        console.log("Surname: ".concat(availableWorker.surname));
    }
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = WorkerCategory.DESIGNER; }
    var array = new Array();
    var workers = getAllworkers();
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category == category) {
            array.push(worker.surname);
        }
    }
    return array;
}
function logWorkersNames(surnames) {
    console.log("Workers:");
    for (var _i = 0, surnames_1 = surnames; _i < surnames_1.length; _i++) {
        var surname = surnames_1[_i];
        console.log(surname);
    }
}
function getWorkerByID(id) {
    return getAllworkers().find(function (worker) { return worker.id == id; });
}
function createCustomerID(name, id) {
    return name.concat(id.toString());
}
function createCustomer(name, age, city) {
    console.log("".concat(name, " ").concat(age != undefined ? age : "", " ").concat(city != undefined ? city : ""));
}
function сheckoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var availableWorkes = new Array();
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        var worker = getWorkerByID(id);
        if (worker === null || worker === void 0 ? void 0 : worker.available) {
            availableWorkes.push(worker);
        }
    }
    console.log("Customer's name: ".concat(customer));
    return availableWorkes;
}
logFirstAvalible(getAllworkers());
logWorkersNames(getWorkersNamesByCategory(WorkerCategory.DEVELOPER));
console.log("Using forEach:");
var workers = getAllworkers();
workers.forEach(function (worker) {
    if (worker.category == WorkerCategory.DEVELOPER) {
        console.log("Worker: ".concat(worker.name, " ").concat(worker.surname));
    }
});
var foundWorker = getWorkerByID(2);
if (foundWorker != null) {
    console.log("Name: ".concat(foundWorker.name));
    console.log("Surname: ".concat(foundWorker.surname));
    console.log("Salary: ".concat(foundWorker.salary));
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var idGenerator = function (name, id) {
    return name.concat(id.toString());
};
idGenerator = createCustomerID;
console.log(idGenerator("Ann", 10));
createCustomer("May");
createCustomer("May", 22);
createCustomer("May", 22, "Ban");
console.log(getWorkersNamesByCategory()[0]);
logFirstAvalible();
var myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(function (worker) {
    console.log("".concat(worker.name, " ").concat(worker.surname));
});
