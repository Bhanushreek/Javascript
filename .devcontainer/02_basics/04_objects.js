const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Bhanu"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);

// const navbar = ({company}) => { // {} indicates de-structuring

// }
// navbar(company = "bhanu")

// ++++++++++++ JSON EXAMPLE ++++++++++++++
// {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "Bhanu"
// }

[
    {},
    {},
    {}
]