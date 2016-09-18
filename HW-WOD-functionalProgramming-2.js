/**
 * Created by reedvilanueva on 9/10/16.
 */

var uhdata = [
    {
        "FISCAL_YEAR":2010,
        "CAMPUS":"UH Manoa",
        "CIP":220101,
        "CIP_DESC":"Law",
        "GROUP1":"School of Law",
        "GROUP2":"School of Law",
        "GROUP3":"Law",
        "GROUP4":"",
        "GROUP5":"",
        "OUTCOME":"Other",
        "HAWAIIAN_LEGACY":"",
        "AWARDS":69
    },
    {
        "FISCAL_YEAR":2010,
        "CAMPUS":"Kapi`olani CC",
        "CIP":240101,
        "CIP_DESC":"Liberal Arts",
        "GROUP1":"General & Pre-Prof Ed",
        "GROUP2":"Liberal Arts",
        "GROUP3":"Liberal Arts",
        "GROUP4":"",
        "GROUP5":"",
        "OUTCOME":"Associate Degrees",
        "HAWAIIAN_LEGACY":"",
        "AWARDS":322
    },
    {
        "FISCAL_YEAR":2010,
        "CAMPUS":"Maui CC",
        "CIP":513801,
        "CIP_DESC":"Registered Nursing/Reg Nurse",
        "GROUP1":"Career & Tech Ed",
        "GROUP2":"Health Services",
        "GROUP3":"Nursing",
        "GROUP4":"Nursing",
        "GROUP5":"",
        "OUTCOME":"Associate Degrees",
        "HAWAIIAN_LEGACY":"",
        "AWARDS":43
    },
    {
        "FISCAL_YEAR":2010,
        "CAMPUS":"Honolulu CC",
        "CIP":460201,
        "CIP_DESC":"Carpentry",
        "GROUP1":"Career & Tech Ed",
        "GROUP2":"Technology",
        "GROUP3":"Carpentry Technology",
        "GROUP4":"",
        "GROUP5":"",
        "OUTCOME":"Associate Degrees",
        "HAWAIIAN_LEGACY":"",
        "AWARDS":5
    }]

/*
 Start your timer.

 Create a variable called testData and set it equal to the first few elements of the uhdata array.
 Use this variable to check that your functions work correctly before running them on the full data set.

 Use the functions provided by the underscore package to implement the following two functions.
 Note that your solutions CANNOT include a for loop or an if statement!

 totalDegrees(data): This function is passed a data structure like uhdata and returns the total number
 of degrees awarded in the data set. For the uhdata set, the correct answer is 48,186.

 percentageHawaiian(data): This function can be passed uhdata and returns the percentage of degrees that
 were awarded to students of Hawaiian Legacy in the dataset. Such students are indicated by the string
 “HAWAIIAN” in the “HAWAIIAN_LEGACY” field. For the uhdata set, correct answer is about 18.9%.
 * */

// load in underscore module
const _ = require('underscore')

let testData = _.first(uhdata, 4)
//console.log(testData)

function totalDegrees(data){
    /*
     _.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl
     reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

     If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

     ex.
     var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);  // memo acts as init. accumulator
     => 6
     * */
    return _.reduce(_.pluck(data, "AWARDS"), (memo, dataPt)=>{return memo + dataPt}, 0)

    /*
     pluck_.pluck(list, propertyName)
     A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
     _.pluck(stooges, 'name');
     => ["moe", "larry", "curly"]

     * */
}
console.log(totalDegrees(testData))
console.log(totalDegrees(uhdata))

function percentageHawaiian(data){
    /*
     Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).

     var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
     => [2, 4, 6]

     * */
    let totalHawaiian = totalDegrees(_.filter(data, (dataPt)=>{return dataPt.HAWAIIAN_LEGACY == "HAWAIIAN"}))
    return totalHawaiian / totalDegrees(data) * 100 + "%"
}
console.log(percentageHawaiian(testData))
console.log(percentageHawaiian(uhdata))



/*
 Use the functions provided by the underscore package to implement the following two functions. Note that your solutions cannot include a for loop or an if statement!

 totalDegreesByYear(data, year): This function can be passed uhdata and a year and returns the total number of degrees awarded in the passed year.

 listCampuses(data): This function can be passed uhdata and returns an array containing all the campuses referenced in the passed dataset.

 * */

function totalDegreesByYear(data, year){
    return _.reduce(_.filter(data, (dataPt)=>{return dataPt.FISCAL_YEAR == year}),
        (memo, dataPt)=>{return memo + dataPt.AWARDS},
        0);

    // could have also done totalDegrees(_.filter(data, (dataPt)=>{return dataPt.FISCAL_YEAR == year}))
    // (better since follows DRY, but did it this way for practice)
}
console.log(totalDegreesByYear(testData, 2010))
console.log(totalDegreesByYear(uhdata, 2010))


function listCampuses(data){
    return _.uniq(_.pluck(data, "CAMPUS"))
}
console.log(listCampuses(testData))
console.log(listCampuses(uhdata))

/*
* times:
* 1. 30+min (accumulated years in reduce instead of awards)
* 2. 8min
* 3. 8min
* */

// generally, in JS, if you get an 'undefined', its likely that you missed a return statement
// (since functions w/out returns return 'undefined')