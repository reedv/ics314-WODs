/**
 * Created by reedvilanueva on 9/13/16.
 */
var greenjobs = [
    {
        "Employer Name":"808- ELECTRIC AND TELECOM LLC",
        "Address":"16-206 Wiliama Pl Unit B\nKeaau, HI 96749\n(19.637427491648623, -155.0442574592578)",
        "County":"Hawaii",
        "Contact":"Douglas Oki",
        "Telephone":"808-966-7484",
        "Company Telephone":"",
        "GREEN Area":"Generate Clean, Renewable, Sustainable Energy",
        "Industry":"Construction",
        "Industry Subsector":"Building Equipment Contractors",
        "Job Title":"Electrician (PV)",
        "Job Description":"install electrical PV systems"
    },
    {
        "Employer Name":"AC EXCAVATORS INC",
        "Address":"510 Awela St\nHilo, HI 96720\n(19.67441660671369, -155.0905005980044)",
        "County":"Hawaii",
        "Contact":"Aaron Castillo",
        "Telephone":"808-959-0144",
        "Company Telephone":"808-959-6174",
        "GREEN Area":"Reduce Pollution and Waste",
        "Industry":"Construction",
        "Industry Subsector":"Other Specialty Trade Contractors",
        "Job Title":"Laborers",
        "Job Description":"recycle building material for reuse"
    },
    {
        "Employer Name":"ADON CONSTRUCTION INC",
        "Address":"45-773 Kamehameha Hwy\nKaneohe, HI 96744\n(21.41024227099993, -157.79897435727773)",
        "County":"Honolulu",
        "Contact":"Michael M Chen",
        "Telephone":"808-236-1110",
        "Company Telephone":"808-236-1110",
        "GREEN Area":"Generate Clean, Renewable, Sustainable Energy",
        "Industry":"Construction",
        "Industry Subsector":"Other Specialty Trade Contractors",
        "Job Title":"Lead Solar Installer",
        "Job Description":"crew leader in solar installation"
    },
    {
        "Employer Name":"ADON CONSTRUCTION INC",
        "Address":"45-773 Kamehameha Hwy\nKaneohe, HI 96744\n(21.41024227099993, -157.79897435727773)",
        "County":"Honolulu",
        "Contact":"Michael M Chen",
        "Telephone":"808-236-1110",
        "Company Telephone":"808-236-1110",
        "GREEN Area":"Generate Clean, Renewable, Sustainable Energy",
        "Industry":"Construction",
        "Industry Subsector":"Other Specialty Trade Contractors",
        "Job Title":"Office Manager",
        "Job Description":"Administrative tasks"
    }
]

//console.log(greenjobs.length);

let testData = greenjobs.slice(0,4);
// console.log(testData);

//////////////////////////////////////////////////////////////
// listIndustries(data). Returns a list of strings indicating all the industries providing green jobs (no duplicates).
function listIndustries(data) {
    return _.unique(_.pluck(data, "Industry"));
    /*
     uniq   _.uniq(array, [isSorted], [iteratee]) Alias: unique
     Produces a duplicate-free version of the array, using === to test object equality.
     In particular only the first occurence of each value is kept. If you know in advance that the array is sorted,
     passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a
     transformation, pass an iteratee function.
     ex.
     _.uniq([1, 2, 1, 4, 1, 3]);
     => [1, 2, 4, 3]


     pluck   _.pluck(list, propertyName)
     A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
     ex.
     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
     _.pluck(stooges, 'name');
     => ["moe", "larry", "curly"]
     * */
}
//console.log(listIndustries(greenjobs));


////////////////////////////////////////////////////////////////////////
// countyGreenJobs(data).  Returns an object where the keys are County names and the values are the number of Green Jobs listed in that County.

// 1. Group by county.
// 2. MapObject to change the array of jobs into an integer indicating the length of that array.

function groupJobsCounty(data) {
    // return obj mapping key=county to value(s)=data items within that county
    return _.groupBy(data, function(record){return record["County"];});

    /*
     groupBy   _.groupBy(list, iteratee, [context])
     Splits a collection into sets, grouped by the result of running each value through iteratee.
     If iteratee is a string instead of a function, groups by the property (named by iteratee) on each of the values.
     ex.
     _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
     => {1: [1.3], 2: [2.1, 2.4]}

     _.groupBy(['one', 'two', 'three'], 'length');
     => {3: ["one", "two"], 5: ["three"]}

     * */
}
//console.log(groupJobsCounty(greenjobs));

function countyGreenJobs (data) {
    return _.mapObject(groupJobsCounty(data), function(val, key) {return val.length;});

    /*
     mapObject   _.mapObject(object, iteratee, [context])
     Like map, but for objects. Transform the value of each property in turn and return a new object.
     ex.
     _.mapObject({start: 5, end: 12}, function(val, key) {  // notice key needs to be listed, even if unused
        return val + 5;
     });
     => {start: 10, end: 17}
     * */
}
//console.log(countyGreenJobs(greenjobs));


/////////////////////////////////////////////////////
// jobswithKeyword(data, keyword). Returns a list of Job Titles containing the passed keyword.

function pluckJobs(data) {
    return _.pluck(data, "Job Title");
}

function jobsWithKeyWord(data, keyword) {
    return _.filter(pluckJobs(data), function(jobTitle) {return jobTitle.indexOf(keyword) > -1;});

    /*
     filter   _.filter(list, predicate, [context]) Alias: select
     Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
     ex.
     var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
     => [2, 4, 6]
     * */
}
//console.log(jobsWithKeyWord(greenjobs, "Solar"));


////////////////////////////////////////////////////////////////////
// industryJobs(data). Returns an array containing objects with keys "industry" and "jobs".
// 1. Create an object with keys=industry and values=the amount of jobs in that industry.
//    Example: {Construction: 175, "Retail Trade": 45}
// 2. Map over object, restructure as [{ industry: "Construction", jobs: 175}... ]

function industryGroupCount(data) {
    return _.countBy(data, function(record) { return record["Industry"];});

    /*
     countBy   _.countBy(list, iteratee, [context])
     Sorts a list into groups and returns a count for the number of objects in each group.
     Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group.
     ex.
     _.countBy([1, 2, 3, 4, 5], function(num) {
        return (num % 2 == 0) ? 'even': 'odd';
     });
     => {odd: 3, even: 2}

     * */
}
//console.log(industryGroupCount(greenjobs));

function industryJobs(data) {
    var groupCount = industryGroupCount(data);
    return _.map(_.keys(groupCount),  // in this case, the keys are the different industries
        function(key) {return {industry: key, jobs: groupCount[key]};}
    );

    /*
     keys   _.keys(object)
     Retrieve all the names of the object's own enumerable properties.
     ex.
     _.keys({one: 1, two: 2, three: 3});
     => ["one", "two", "three"]

     * */
}
//console.log(industryJobs(greenjobs));


/////////////////////////////////////////////////////////////////
// maxIndustryJobs(data).  Returns the object from the array returned by industryJobs with the largest value for jobs.

function maxIndustryJobs(data) {
    return _.max(industryJobs(data), function (record) {return record.jobs;});

    /*
     max   _.max(list, [iteratee], [context])
     Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate
      the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be
      required. Non-numerical values in list will be ignored.
     ex.
     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
     _.max(stooges, function(stooge){ return stooge.age; });
     => {name: 'curly', age: 60};

     * */
}
console.log(maxIndustryJobs(greenjobs));


/*
* Common functions: uniq, pluck, groupBy, mapObject, filter, countBy, keys, map, min, max, reduce.
*
 reduce   _.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl
 Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of
 the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments:
 the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

 If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list.
 The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

 var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);  // memo used as init. accumulator
 => 6

 *
* Tip: whenever you see an undefined in your code, it is likely that a 'return' has not been placed in a function somewhere
* */