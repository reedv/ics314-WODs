/**
 * Created by reedvilanueva on 9/15/16.
 */

/*
 Create a variable called “testData” and assign it to be the first few elements of the uhdata array. You should use testData to help you verify that the following two functions are implemented correctly.

 Implement a function called “minMaxDegrees”. This function should take a parameter providing an array structured like uhdata and return an array with two numbers: the minimum number of degrees awarded by any entry and the maximum number of degrees awarded by any entry. For example, in the above sample of uhdata that contains two entries, the return value would be [69, 322].

 Hint: You might want to use the pluck, min, and max underscore functions. Calculate the minimum and the maximum into two local variables, then return an array constructed from them. The min for uhdata is 1, and the max is 704.


 Implement a function called “hawaiianCSDegrees”. This function should take a parameter providing an array structured like uhdata and return the total number of computer science degrees awarded to those of Hawaiian ancestry. Note that "CIP_DESC":"Computer Science" indicates computer science degrees, and "HAWAIIAN_LEGACY":"HAWAIIAN" indicates Hawaiian ancestry.

 Hint: you might want to use the filter, pluck, and reduce underscore functions, and console.log(hawaiianCSDegrees(uhdata)) should print out 28.
* */


function minMaxDegrees(data){
    let min = _.min(_.pluck(data, "AWARDS"))
    let max = _.max(_.pluck(data, "AWARDS"))
    return [min, max]
}
console.log(minMaxDegrees(uhdata))  // DONE


function hawaiianCSDegrees(data){
    // filter out dataPts w/out HWAIIAN_LEGACY="HAWAIIAN" and CIP_DESC="Computer Science"
    let hawaiianCS = _.filter(data, (item)=>{
        return item["HAWAIIAN_LEGACY"]=="HAWAIIAN" && item["CIP_DESC"]=="Computer Science"
    })
    // console.log(hawaiianCS)
    return _.reduce(_.pluck(hawaiianCS, "AWARDS"), (memo, dataPt)=>{return memo + dataPt}, 0)
}


