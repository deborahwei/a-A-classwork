function Student(firstName, lastName) { 
    this.firstName = firstName
    this.lastName = lastName
    this.course = []
}

Student.prototype.name = function() { 
    return this.firstName.concat(this.lastName)
}

s = new Student("Deborah", "Wei")
// console.log(s.name())

Student.prototype.enroll = function(course) { 
    if (!this.course.includes(course) && !this.hasConflict(course)) { 
        this.course.push(course)
        return this.course
    }
    else {
        return false
    }
    
}

Student.prototype.courseLoad = function() { 
    const courseInfo = {}
    for(let i = 0; i < this.course.length; i++) {
        courseInfo[this.course] ||= 0;
        courseInfo[this.course] += this.course.credits
    }
    return courseInfo
}

Student.prototype.hasConflict(course2) = function { 
    for(const c of this.course) {
        if(c.conflictsWith(course2) && course2 !== c) { 
            return true 
        }
    }
    return false
}

function Course(courseName, department, credits, timeBlock, daysOfWeek) { 
    this.students = []
    this.courseName = courseName
    this.department = department
    this.credits = credits
    this.timeBlock = timeBlock 
    this.daysOfWeek = daysOfWeek
}

Course.prototype.addStudent = function(student){ 
    if (student.enroll(this)) {
        this.students.push(student);
        return this.students
    }
    return false 
}

Course.prototype.conflictsWith = function(course2) { 
    
}

c = new Course ("Statistics", "Math", 4)
// console.log(c)
c.addStudent(s)
console.log(c.students)