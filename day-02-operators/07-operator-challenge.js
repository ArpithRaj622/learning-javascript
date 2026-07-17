const age = 24;
const marks = 82;
const attendance = 78;
const hasBacklogs = false;
const hasResume = false;

// vote
console.log(`Age = ${age}
Can the student vote? -> ${age >= 18}
`);

// marks more than 60
console.log(`Marks = ${marks}%
Has the student scored more than 60%? -> ${marks > 60}
`);

// attendance
console.log(`Attendance = ${attendance}%
Does the student have 75% of attendance? -> ${attendance >= 75}
`);

// eligible for placement
console.log(`Marks = ${82}%, Attendance = ${78}%, Backlogs = ${hasBacklogs}
Is the student eligible for placements? -> ${marks >= 60 && attendance >= 75 && !hasBacklogs}
`);

// clear backlogs
console.log(`Backlogs = ${hasBacklogs}
Does the student need to clear backlogs? -> ${hasBacklogs}
`);

// Resume
console.log(`Resume ready = ${hasResume}
Is the resume ready for placement? -> ${hasResume}
`);

// company apply
console.log(`Marks = ${marks}%, Resume ready = ${hasResume}
Can the student apply for a company? -> ${marks >= 60 && hasResume}
`);