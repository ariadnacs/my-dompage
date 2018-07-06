
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
      "id": 6,
      "active": true,
      "birthday": "1988-01-26",
      "creationDate": "2018-06-22T16:35:16.000+0000",
      "joinDate": "2015-02-23",
      "lastName": "Velazco",
      "name": "Juan",
      "role": "Developer",
      "department": {
          "id": 2,
          "creationDate": "2018-06-20T15:58:57.000+0000",
          "departmentName": "GSS Legacy"
      }
  },
  {
      "id": 7,
      "active": true,
      "birthday": "1989-06-01",
      "creationDate": "2018-06-22T16:36:08.000+0000",
      "joinDate": "2017-12-09",
      "lastName": "Diaz",
      "name": "Rodrigo",
      "role": "DBA",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  },
  {
      "id": 9,
      "active": false,
      "birthday": "1984-01-27",
      "creationDate": "2018-06-25T21:21:58.000+0000",
      "joinDate": "2017-01-28",
      "lastName": "Ruiz",
      "name": "Guillermo",
      "role": "Dev Lead",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  },
  {
      "id": 11,
      "active": false,
      "birthday": "1984-01-27",
      "creationDate": "2018-06-26T15:57:38.000+0000",
      "joinDate": "2017-01-28",
      "lastName": "Ruiz",
      "name": "Guillermo",
      "role": "Dev Lead",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  },
  {
      "id": 13,
      "active": false,
      "birthday": "1984-01-27",
      "creationDate": "2018-06-26T16:52:00.000+0000",
      "joinDate": "2017-01-28",
      "lastName": "Ruiz",
      "name": "Guillermo",
      "role": "Dev Lead",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  },
  {
      "id": 15,
      "active": false,
      "birthday": "1984-01-27",
      "creationDate": "2018-06-26T22:11:07.000+0000",
      "joinDate": "2017-01-28",
      "lastName": "Cardenas",
      "name": "Luis",
      "role": "PLSQL",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  },
  {
      "id": 16,
      "active": false,
      "birthday": "1993-09-15",
      "creationDate": "2018-06-26T22:19:17.000+0000",
      "joinDate": "2018-03-19",
      "lastName": "Castellanos",
      "name": "Ariadna",
      "role": "Developer",
      "department": {
          "id": 3,
          "creationDate": "2018-06-20T15:59:10.000+0000",
          "departmentName": "Payroll"
      }
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class MockEmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, 1000);
    });
  }

  static saveEmployee(employee) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        /*const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;*/
          employees.push(employee);


        resolve(Object.assign({}, employee));
      }, 1000);
    });
  }

  /*static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }*/
}

export default MockEmployeeApi;
