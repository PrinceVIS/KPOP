enum WorkerCategory {
    BUSINNES_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

type worker = {
    id : number,
    name : string,
    surname : string,
    available : boolean,
    salary : number
    category : WorkerCategory
}

function getAllworkers() : worker[] {
    let workers : worker[] = [
        { id : 1, name: 'Inna', surname: 'Ivanova', available: true, salary: 1000, category : WorkerCategory.SCRUM_MASTER },
        { id : 2, name: 'Vova', surname: 'Koval', available: true, salary: 1500, category : WorkerCategory.DEVELOPER },
        { id : 3, name: 'Vika', surname: 'Vasylieva', available: false, salary: 1600, category : WorkerCategory.DESIGNER },
        { id : 4, name: 'Eugen', surname: 'Floyd', available: true, salary: 1300, category : WorkerCategory.DEVELOPER }
    ]
    return workers;
}

function logFirstAvalible(workersArray : worker[] = getAllworkers()) : void {
    console.log(`Length of array: ${workersArray.length}`);

    let availableWorker : worker | undefined;

    for(let currentWorker of workersArray){
        if(currentWorker.available == true){
            availableWorker = currentWorker;
            break;
        }
    }

    if(availableWorker != null){
        console.log(`Name: ${availableWorker.name}`);
        console.log(`Surname: ${availableWorker.surname}`);
    }
}

function getWorkersNamesByCategory(category : WorkerCategory = WorkerCategory.DESIGNER) : Array<string> {
    let array : Array<string> = new Array<string>();
    let workers : worker[] = getAllworkers();
    for(let worker of workers){
        if(worker.category == category){
            array.push(worker.surname);
        }
    }
    return array;
}

function logWorkersNames(surnames : Array<string>) : void {
    console.log("Workers:");
    for(let surname of surnames){
        console.log(surname);
    }
}

function getWorkerByID(id : number) : worker | undefined {
    return getAllworkers().find(worker => worker.id == id);
}

function createCustomerID(name : string, id : number) : string {
    return name.concat(id.toString());
}

function createCustomer(name : string, age? : number, city? : string) : void {
    console.log(`${name} ${age != undefined ? age : "" } ${city != undefined ? city : ""}`);
}

function сheckoutWorkers(customer : string, ...workerIDs: number[]) : Array<worker> {
    let availableWorkes : Array<worker> = new Array<worker>();
    for(let id of workerIDs){
        let worker = getWorkerByID(id);
        if(worker?.available){
            availableWorkes.push(worker);
        }
    }

    console.log(`Customer's name: ${customer}`);
    return availableWorkes;
}

logFirstAvalible(getAllworkers());
logWorkersNames(getWorkersNamesByCategory(WorkerCategory.DEVELOPER));

console.log("Using forEach:");
let workers : worker[] = getAllworkers();
workers.forEach(worker => {
    if(worker.category == WorkerCategory.DEVELOPER){
        console.log(`Worker: ${worker.name} ${worker.surname}`);
    }
});

let foundWorker : worker | undefined = getWorkerByID(2);
if(foundWorker != null){
    console.log(`Name: ${foundWorker.name}`);
    console.log(`Surname: ${foundWorker.surname}`);
    console.log(`Salary: ${foundWorker.salary}`);
}


let myID : string = createCustomerID("Ann", 10);
console.log(myID);

let idGenerator : typeof createCustomerID = (name : string, id : number) => {
    return name.concat(id.toString());
};

idGenerator = createCustomerID;

console.log(idGenerator("Ann", 10));

createCustomer("May");
createCustomer("May", 22);
createCustomer("May", 22, "Ban");

console.log(getWorkersNamesByCategory()[0]);

logFirstAvalible();

let myWorkers : Array<worker> = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => {
    console.log(`${worker.name} ${worker.surname}`);
});