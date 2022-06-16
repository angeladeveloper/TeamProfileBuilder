# TeamProfileBuilder

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
https://pakstech.com/blog/inquirer-js/

const confirmString = async (input) => {
if (input === undefined || null) {
return 'invalid name'
} else if (typeof input === 'number') {
return 'please enter valid name'
} else {
return true
}
}
