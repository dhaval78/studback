const express = require('express');
const app = express();
app.use(express.json());
var cors=require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
app.use(cors());


customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam","Willie"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita","Willie"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James","Willie"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = customers.find(u => u.email === email && u.password === password);
  if (user) {
    res.json(user);
  } else {
    res.status(500).json({ error: "Invalid credentials" });
  }
});


app.post('/register', (req, res) => {
  const userData = req.body;
  
  
  const maxCustId = customers.reduce((max, customer) => {
    return customer.custId > max ? customer.custId : max;
  }, 0);
  const maxFacId = faculties.reduce((max, fac) => {
    return fac.id > max ? fac.id : max;
  }, 0);
  const maxStudId = students.reduce((max, fac) => {
    return fac.id > max ? fac.id : max;
  }, 0);


  const newUser = { ...userData, custId: maxCustId + 1 };

console.log(userData.role,userData.name)
let facData={id:maxFacId+1,name:userData.name,courses:[]}
if(userData.role==="Faculty")
{
  faculties.unshift(facData);
}
let studData={id:maxStudId+1,name:userData.name,dob:"",gender:"",about:"",courses:[]}
if(userData.role==="Student")
{
  students.unshift(studData);
}


  customers.push(newUser);


  res.json(newUser);
});

app.get('/getStudentNames', (req, res) => {
  res.json(students);
});

app.get('/getClasses', (req, res) => {
  res.json(classes);
});

app.get('/getCourses',(req,res)=>{
  res.json(courses);
})

app.get('/getFacultyNames', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 3;
 
  
  const courseFilter = req.query.course ? req.query.course.split(',') : null;

  const filteredFaculties = courseFilter
    ? faculties.filter(student => {
        const studentCourses = student.courses.map(course => course.toLowerCase());
        return courseFilter.some(filterCourse => studentCourses.includes(filterCourse.toLowerCase()));
      })
    : faculties;
    const totalNum = filteredFaculties.length;
    const totalItems = Math.ceil(totalNum / pageSize);
    const items = filteredFaculties.slice((page - 1) * pageSize, page * pageSize);

  res.json({ page, items, totalItems, totalNum });
});


app.get('/getClasses/:name', (req, res) => {
  const facultyName = req.params.name;

  
  const Coursesc = classes.filter(c => c.facultyName.includes(facultyName));

  if (Coursesc.length > 0) {
    res.json(Coursesc);
  } else {
    res.status(404).json({ error: "Classes not found or not assigned to any Classes" });
  }
});

app.get('/users', (req, res) => {
  
  res.json(customers);
});
app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);

  const course = courses.find(course => course.courseId === courseId);

  if (!course) {
    res.status(404).json({ message: 'Course not found' });
  } else {
    res.json(course);
  }
});
app.put('/putCourse', (req, res) => {
  const updatedCourseData = req.body;
  const courseIdToUpdate = updatedCourseData.courseId;

  const courseIndex = courses.findIndex((course) => course.courseId === courseIdToUpdate);

  if (courseIndex !== -1) {
    const existingCourse = courses[courseIndex];

   
    courses[courseIndex] = updatedCourseData;

    if (Array.isArray(updatedCourseData.faculty)) {
      const facultyNames = updatedCourseData.faculty;

      facultyNames.forEach((facultyName) => {
        let faculty = faculties.find((faculty) => faculty.name === facultyName);
        if (faculty !== undefined) {
          if (!faculty.courses.includes(existingCourse.name)) {
            faculty.courses.push(existingCourse.name);
          }
        } else {
          faculties.push({ name: facultyName, courses: [existingCourse.name] });
        }
      });
if(existingCourse.faculty!==undefined){
      existingCourse.faculty.forEach((facultyName) => {
        if (!updatedCourseData.faculty.includes(facultyName)) {
          let faculty = faculties.find((faculty) => faculty.name === facultyName);
          if (faculty !== undefined) {
            faculty.courses = faculty.courses.filter(course => course !== existingCourse.name);
          }
        }
      });
    }
    }

    if (Array.isArray(updatedCourseData.students)) {
      const studentNames = updatedCourseData.students;

      studentNames.forEach((studentName) => {
        let student = students.find((student) => student.name === studentName);
        if (student !== undefined) {
          if (!student.courses.includes(existingCourse.name)) {
            student.courses.push(existingCourse.name);
          }
        } else {
          res.status(404).json({ error: 'Student not found' });
          return;
        }
      });

     if(existingCourse.students!==undefined){
      existingCourse.students.forEach((studentName) => {
        if (!updatedCourseData.students.includes(studentName)) {
          let student = students.find((student) => student.name === studentName);
          if (student !== undefined) {
            student.courses = student.courses.filter(course => course !== existingCourse.name);
          }
        }
      });}
    }

    res.json(existingCourse);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});


app.get('/getFacultyCourses/:name', (req, res) => {
  const facultyName = req.params.name;

  
  const facultyCourses = courses.filter(course => course.faculty.includes(facultyName));

  if (facultyCourses.length > 0) {
    res.json(facultyCourses);
  } else {
    res.status(404).json({ error: "Faculty not found or not assigned to any courses" });
  }
});



app.get('/getStudents', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 4;
  
  const courseFilter = req.query.course ? req.query.course.split(',') : null;

  const filteredStudents = courseFilter
    ? students.filter(student => {
        const studentCourses = student.courses.map(course => course.toLowerCase());
        return courseFilter.some(filterCourse => studentCourses.includes(filterCourse.toLowerCase()));
      })
    : students;

  const totalNum = filteredStudents.length;
  const totalItems = Math.ceil(totalNum / pageSize);
  const items = filteredStudents.slice((page - 1) * pageSize, page * pageSize);

  res.json({ page, items, totalItems, totalNum });
});


app.get('/getFaculties', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5;

 
  const courseFilter = req.query.course ? req.query.course.split(',') : null;

  const filteredFaculties = courseFilter
    ? faculties.filter(faculty => faculty.courses.some(course => courseFilter.includes(course)))
    : faculties;

  const totalNum = filteredFaculties.length;
  const totalItems = Math.ceil(totalNum / pageSize);
  const items = filteredFaculties.slice((page - 1) * pageSize, page * pageSize);

  res.json({ page, items, totalItems, totalNum });
});

app.get('/getFacultiesname',(req,res)=>{
  res.json({faculties});
})


app.post('/postStudentDetails', (req, res) => {
  const studentData = req.body;
  const existingStudent = students.find(student => student.id === studentData.id && student.name === studentData.name);

  if (existingStudent) {
    
    existingStudent.dob = studentData.dob;
    existingStudent.gender = studentData.gender;
    existingStudent.about = studentData.about;
    existingStudent.courses = studentData.courses;
    res.json(existingStudent);
  } else {
   
    studentData.id = students.length + 1;
    students.unshift(studentData);
    res.json(studentData);
  }
})

app.post('/postClass', (req, res) => {
 
  const { course, time, endTime, topic, facultyName } = req.body;

  const classId = classes.length + 1;

  const newClass = {
    classId,
    course,
    time,
    endTime,
    topic,
    facultyName,
  };

  classes.push(newClass);

  res.status(201).json(newClass);
});
app.put('/editClass/:classId', (req, res) => {
  const classId = parseInt(req.params.classId);
  const updatedClassData = req.body;

  
  const classIndex = classes.findIndex((cls) => cls.classId === classId);

  if (classIndex === -1) {
    return res.status(404).json({ error: "Class not found" });
  }

 
  classes[classIndex] = { ...classes[classIndex], ...updatedClassData };

  res.json(classes[classIndex]);
});

app.get('/getStudentDetails/:name', (req, res) => {
  const name = req.params.name;
  const studentx = students.find(s => s.name === name);
  if (studentx) {
    res.json(studentx);
  } else {
    res.status(500).json({ error: "Student not found" });
  }
});


app.get('/getStudentCourses/:studentName', (req, res) => {
  const studentName = req.params.studentName;
  const filteredCourses = courses.filter((course) =>
    course.students.includes(studentName)
  );

  if (filteredCourses.length > 0) {
    res.json(filteredCourses);
  } else {
    res.status(404).json({ error: "No courses found for the student" });
  }
});

app.get('/getStudentClasses/:name', (req, res) => {
  const name = req.params.name;
  const student = students.find(s => s.name === name);
  if (student) {
  
    res.json(classes);
  } else {
    res.status(500).json({ error: "Student not found" });
  }
})
const port=2410;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

