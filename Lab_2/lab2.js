var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lab2;
(function (lab2) {
    var WorkerCategory;
    (function (WorkerCategory) {
        WorkerCategory[WorkerCategory["BUSINNES_ANALYST"] = 0] = "BUSINNES_ANALYST";
        WorkerCategory[WorkerCategory["DEVELOPER"] = 1] = "DEVELOPER";
        WorkerCategory[WorkerCategory["DESIGNER"] = 2] = "DESIGNER";
        WorkerCategory[WorkerCategory["QA"] = 3] = "QA";
        WorkerCategory[WorkerCategory["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
    })(WorkerCategory || (WorkerCategory = {}));
    var UniversityLibrarian = /** @class */ (function () {
        function UniversityLibrarian(name, email, department) {
            this.name = name;
            this.email = email;
            this.department = department;
        }
        UniversityLibrarian.prototype.assistCustomer = function (custName) {
            console.log("".concat(this.name, " is assisting ").concat(custName));
        };
        return UniversityLibrarian;
    }());
    var ReferenceItem = /** @class */ (function () {
        function ReferenceItem(title, year) {
            this.title = title;
            this.year = year;
            console.log('Creating a new ReferenceItem ...');
        }
        Object.defineProperty(ReferenceItem.prototype, "publisher", {
            get: function () {
                if (this._publisher != null) {
                    return this._publisher.toUpperCase();
                }
                return "";
            },
            set: function (newPublisher) {
                this._publisher = newPublisher;
            },
            enumerable: false,
            configurable: true
        });
        ReferenceItem.prototype.printItem = function () {
            console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
        };
        ReferenceItem.department = "Static_department";
        return ReferenceItem;
    }());
    var Encyclopedia = /** @class */ (function (_super) {
        __extends(Encyclopedia, _super);
        function Encyclopedia(title, year, edition) {
            var _this = _super.call(this, title, year) || this;
            _this.edition = edition;
            return _this;
        }
        Encyclopedia.prototype.printItem = function () {
            _super.prototype.printItem.call(this);
            console.log("Edition: ".concat(this.edition, " (").concat(this.year, ")"));
        };
        Encyclopedia.prototype.printCitation = function () {
            console.log("".concat(this.title, " - ").concat(this.year));
        };
        return Encyclopedia;
    }(ReferenceItem));
    var logPrize = function (someStr) {
        console.log(someStr);
    };
    function getAllworkers() {
        var workers = [
            { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: WorkerCategory.SCRUM_MASTER, markPrize: logPrize },
            { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: WorkerCategory.DEVELOPER, markPrize: logPrize },
            { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: WorkerCategory.DESIGNER, markPrize: logPrize },
            { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: WorkerCategory.DEVELOPER, markPrize: logPrize }
        ];
        return workers;
    }
    function getWorkerByID(id) {
        return getAllworkers().find(function (worker) { return worker.id == id; });
    }
    function printWorker(worker) {
        console.log("".concat(worker.name, " ").concat(worker.surname, " got salary ").concat(worker.salary));
    }
    getAllworkers()[0].markPrize("HELLO WORLD");
    var favoriteAuthor = {
        name: "John",
        email: "author@mail.com",
        numBooksPubleshed: 15
    };
    // let favoriteLibrarian : ILibrarian = {
    //     name  : "Doe",
    //     email : "librarian@mail.com",
    //     department : "librarians_deparment",
    //     assistCustomer : (custName : string) => {
    //         console.log(`${custName} assisted!`);
    //     }
    // };
    var favoriteLibrarian = new UniversityLibrarian("Doe", "librarian@mail.com", "librarians_deparment");
    favoriteLibrarian.assistCustomer("Helix");
    // let ref : ReferenceItem = new ReferenceItem("SomeTitle", 2012);
    // ref.printItem();
    // ref.publisher = "publisher_name";
    // console.log(ref.publisher);
    // ref.printItem();
    var refBook = new Encyclopedia("EncyclopediaTitle", 2000, 5);
    refBook.printItem();
    refBook.printCitation();
})(lab2 || (lab2 = {}));
