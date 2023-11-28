
// Course Ids
const english = sessionStorage.getItem('IELTS English');
const motivation = sessionStorage.getItem('Life Skills Motivation');
const career = sessionStorage.getItem('Career Guidance');
const leadership = sessionStorage.getItem('Leadership Management');
const teaching = sessionStorage.getItem('Teaching Edification');
const mind = sessionStorage.getItem('Mind Practice');
const psychology = sessionStorage.getItem('Psychology And Counseling');
const hram = sessionStorage.getItem('Human Rights Assessment Mission');

//  course details page ids
const courseSection = 'course-details';
const outlineSction = 'course-information';
const coursePageTitle = 'course-title';
const courseImageSrc = "course-img-info";
const coursetitle = "course-title-info";
const courseDescription = "course-description-info";
const courseFee = "course-fee-info";
const courseSchedule = "schedule";
const courseDetailsTitle = 'courses-details-title';
const pricedrop = 'feedrop'
const outline = 'outline-info'
const requir = 'requir-info'


function changeTitleOfCourses(title, heading, fee_val, image, schedule, description, outline_string, requirement_string) {
    document.getElementById(courseSection).classList.add('active');
    document.getElementById(outlineSction).classList.add('active');

    document.getElementById(coursePageTitle).innerText = title;

    document.getElementById(coursetitle).innerText = heading;

    document.getElementById(courseImageSrc).setAttribute('src', image);
    document.getElementById(courseImageSrc).setAttribute('class', 'img-fluid');

    document.getElementById(courseDetailsTitle).innerText = "Course Details - " + heading

    document.getElementById(courseFee).innerText = fee_val;
    document.getElementById(courseSchedule).innerText = schedule;

    document.getElementById(courseDescription).innerText = description;

    document.getElementById(outline).innerHTML = findAndCreateHTML("course-info", outline_string);
    document.getElementById(requir).innerHTML = findAndCreateHTML("requir-info", requirement_string);

    let fee = Number(fee_val.split(",").join("")) + 3000;    
    document.getElementById(pricedrop).innerText = fee.toLocaleString("en-US");

}


// Home Page Course Infromation

if (english === 'clicked') {
    changeTitleOfCourses(
        'IELTS English Course Details - GDM Metro Campus Learing Platform',
        'IELTS English', '34,000', './assets/img/IELTS-Test-Fee-In-Pakistan.jpg', '4 Months',

        'IELTS Coach is a programme designed to maximise your success on test day by \
        equipping you with the strategies you need to succeed. The British Council is a co-owner \
        of IELTS, so we are ideally placed to help you get the result you deserve. IELTS Coach is designed for Pre - \
        Intermediate students and above looking to improve their academic performance on the IELTS test. Upon the completion you will get the GDM Metro Campus certificate',
        [
            "Speaking Speed",
            "Speak Only In English",
            "Ask, If You Do Not Understand The Question",
            "Prepare Your Answers",
            "Pronunciation",
            "Vocabulary",
            "Grammar",
            "Fluency/Coherence",
            "Practice",
            "Focus"
        ],
        ["Completion of GCE O/L, A/L examinations OR Certificate in English course"]
    );

} else if (motivation === 'clicked') {
    changeTitleOfCourses(
        'Life Skills Motivation Course Details - GDM Metro Campus Learing Platform',
        'Life Skills Motivation', '22,000', './assets/img/professionals.jpg', '4 Months', 

        'We provide life skill, motivation courses for students. The peoples always\
         struggling to solve the problem in their life so we take your skills to another\
          level and this course helps you create your own skill and then we teach how to \
          handle the skills. Upon completing the courses you can get the our certificate.',
          [

          ],
          []
    )
} else if (career === 'clicked') {
    changeTitleOfCourses(
        'Career Guidance - GDM Metro Campus Learing Platform',
        'Career Guidance', '32,000', './assets/img/Career-Guidance-1.jpg', '6 Months',

        'We take your career life to another level, the Career Guidance helps lots of people \
        to achieve their goal. We will teach you  from the scratch to the advanced level upon the successfully \
        completing the course provide GDM Metro campus certification.',
        [],
        []
    )
} else if (leadership === 'clicked') {
    changeTitleOfCourses(
        'Leadership Management - GDM Metro Campus Learing Platform',
        'Leadership Management', '35,000', './assets/img/leader.jpg', '4 Months',

        'Leadership and management are the terms that are often considered synonymous. It is essential to understand that leadership is an essential part of effective management.\
        \n\nAs a crucial component of management, remarkable leadership behaviour stresses upon building an environment in which each and every employee develops and excels. Leadership is defined as the potential to influence and drive the group efforts towards the accomplishment of goals. This influence may originate from formal sources, such as that provided by acquisition of managerial position in an organization.\
        \n\nA manager must have traits of a leader, i.e., he/she must possess leadership qualities. Leaders develop and begin strategies that build and sustain competitive advantage. Organizations require robust leadership and robust management for optimal organizational efficiency.\
        \n\n Upon the completion, you can claim GDM Metro Campus certification',
        [],
        []
    )
} else if (teaching === 'clicked') {
    changeTitleOfCourses(
        'Teaching Education - GDM Metro Campus Learing Platform',
        'Teaching Education', '34,000', './assets/img/teaching.jpg', '6 Months', 

        'Become a teacher in the school, we give you a teacher career path for the \
        students and they can learn how to teach others in a good way. \
        The current lots of teachers struggling to teach others because, they could not assure how to \
        teach others,  that is why we offer the top teacher education for students upon the completion we \
        provide the pair GDM certification for you.',
        [],
        []
    )
} else if (mind === 'clicked') {
    changeTitleOfCourses(
        'Mind Practice - GDM Metro Campus Learing Platform',
        'Mind Practice', '20,000', './assets/img/mind.jpeg', '4 Months', 

        'We provide the Mind Practice course for students, \
        they can learn the how to practice the mind on the one way. \
        Upon completing the course, they can collect the GDM Metro Campus  certification.',
        [],
        []
    )
} else if (psychology === 'clicked') {
    changeTitleOfCourses(
        'Psychology And Counseling - GDM Metro Campus Learing Platform',
        'Psychology And Counseling', '22,000', './assets/img/psychologist.jpg', '4 Months', 

        'Between managing home responsibilities, work, \
        and family relationships, everyone can benefit from talking to a \
        professional to discuss obstacles in their everyday lives. Pursuing a career \
        as a counseling psychologist is a great way to give back to others, practice empathetic listening, \
        and learn skills to navigate your own obstacles along the way. \n\n  \
        This rewarding career is a great choice for many people. Learn more about how to become a counseling psychologist, what the career includes, and the next steps to pursue a psychology GDM Metro Campus certification.',
        [],
        []
    )
} else if (hram === 'clicked') {
    changeTitleOfCourses(
        'Human Rights Assessment Mission - GDM Metro Campus Learing Platform',
        'Human Rights Assessment Mission ( HRAM )', '34,000', './assets/img/HRAM.jpg', '6 Months', 

        'Reach the your dream by learning Human Rights Assessment Mission! . In the course, students will figure\
        out how to create key human resource management designs and fulfil why diversification and\
        multiculturalism are critical to the achievement of associations. Upon completion, the student will face the exam and after successfully finished the exam, they claim the GDM Metro Campus certificate.',
        [],
        []
    )
}

//  Course Page Information 
const certificat = [
    'Certificate Marketing', 
    'Certificate Foundation In Information Technology',
    'Certificate Information Technology',
    'Certificate MS Office',
    'Certificate Spoken English',
    'Certificate IELTS English',
    'Certificate Foundation In English',
    'Certificate English',
    'Certificate HRM',
    'Certificate Logic Stricks & Chain Management',
    'Certificate Hospitality Management',
    'Certificate Life Skill Development',
    'Certificate Mind Expert',
    'Certificate Abacus Fundamental',
    'Certificate Social Science'
];


const degree = [
    'Degree Bachelor of Marketing',
    'Degree Bachelor of Business Management',
    'Degree Computer Networking',
    'Degree Software Development',
    'Degree INT. Teaching Eduation',
    'Degree HRM',
    'Degree Logic Stricks & Chain Management',
    'Degree Hospitality Management',
    'Degree Social Science'
];


const diploma = [
    'Diploma Business Management',
    'Diploma CCNA',
    'Diploma Computer Networking',
    'Diploma Software Development',
    'Diploma Computer Hardware',
    'Diploma Web Development',
    'Diploma Python Programming',
    'Diploma Java Programming',
    'Diploma Graphic Desgning',
    'Diploma Computer Programming',
    'Diploma Information Technology',
    'Diploma Spoken English',
    'Diploma IELTS English',
    'Diploma English',
    'Diploma Business English',
    'Diploma Academic English',
    'Diploma INT. Teaching Eduation',
    'Diploma HRM',
    'Diploma Logic Stricks & Chain Management',
    'Diploma Hospitality Management',
    'Diploma Life Skill Development',
    'Diploma Mind Expert'
];



const hnd = [
    'Higher-Diploma Business Management',
    'Higher-Diploma Computer Networking',
    'Higher-Diploma Software Development',
    'Higher-Diploma Web Development',
    'Higher-Diploma Hospitality Management',
    'Higher-Diploma HRM',
    'Higher-Diploma Logic Stricks & Chain Management',
    'Higher-Diploma Social Science'
];

function changeContentInTheCoursePage(title, heading, fee_val, image, schedule, description, outline_string, requirement_string) {
    document.getElementById(courseSection).classList.add('active');
    document.getElementById(outlineSction).classList.add('active');
    document.getElementById(coursePageTitle).innerText = "Course Details Of " + title  + " - GDM Metro Campus Learing Platform";

    document.getElementById(coursetitle).innerText = heading;

    document.getElementById(courseImageSrc).setAttribute('src', image);
    document.getElementById(courseImageSrc).setAttribute('class', 'img-fluid');

    document.getElementById(courseDetailsTitle).innerText = "Course Details - " + heading

    document.getElementById(courseFee).innerText = fee_val;
    document.getElementById(courseSchedule).innerText = schedule;

    document.getElementById(courseDescription).innerText = description;
    document.getElementById(outline).innerHTML = outline_string
    document.getElementById(requir).innerHTML = requirement_string;

    let fee = Number(fee_val.split(",").join("")) + 3000;    
    document.getElementById(pricedrop).innerText = fee.toLocaleString("en-US");

}

function findAndCreateHTML(class_name, outline_list){
    let full_html = "";
    let all_list = [];
    for (let out of outline_list){
        all_list.push("<p class='row " + class_name + "'>" + out + "</p>");
    }

    full_html = all_list.join("");
    return full_html;
}

function action_fun(courseType, data, course) {
    if (courseType === 'Certificat') {
        let courseId = course.split(" ").slice(1);
        courseId = courseId.join(" ");

        for (let ids in data) {
            if (ids === courseId) {

                changeContentInTheCoursePage(
                    data[ids]['name'],
                    data[ids]['name'],
                    data[ids]['fee'],
                    data[ids]['image'],
                    data[ids]['schedule'],
                    data[ids]['description'],
                    findAndCreateHTML("course-info", data[ids]['outline']),
                    findAndCreateHTML("requir-info", data[ids]['requirement'])

                );
            }
        }

    } else if (courseType === "Diploma") {
        let courseId = course.split(" ").slice(1);
        courseId = courseId.join(" ");

        for (let ids in data) {
            if (ids === courseId) {
                changeContentInTheCoursePage(
                    data[ids]['name'],
                    data[ids]['name'],
                    data[ids]['fee'],
                    data[ids]['image'],
                    data[ids]['schedule'],
                    data[ids]['description'],
                    findAndCreateHTML("course-info", data[ids]['outline']),
                    findAndCreateHTML("requir-info", data[ids]['requirement'])
                );
            }
        }

    } else if (courseType === "Higher-Diploma") {
        let courseId = course.split(" ").slice(1);
        courseId = courseId.join(" ");

        for (let ids in data) {
            if (ids === courseId) {
                changeContentInTheCoursePage(
                    data[ids]['name'],
                    data[ids]['name'],
                    data[ids]['fee'],
                    data[ids]['image'],
                    data[ids]['schedule'],
                    data[ids]['description'],
                    findAndCreateHTML("course-info", data[ids]['outline']),
                    findAndCreateHTML("requir-info", data[ids]['requirement'])
                );
            }
        }

    } else {
        let courseId = course.split(" ").slice(1);
        courseId = courseId.join(" ");

        for (let ids in data) {
            if (ids === courseId) {
                changeContentInTheCoursePage(
                    data[ids]['name'],
                    data[ids]['name'],
                    data[ids]['fee'],
                    data[ids]['image'],
                    data[ids]['schedule'],
                    data[ids]['description'],
                    outline_string = findAndCreateHTML("course-info", data[ids]['outline']),
                    findAndCreateHTML("requir-info", data[ids]['requirement'])
                );
            }
        }

    }

}


fetch('./assets/js/course_data/course.json')
    .then(res => res.json())
    .then(data => {
        let clicked = false;

        if (clicked === false) {
            for (let course of certificat) {
                if (sessionStorage.getItem(course) === 'clicked') {
                    action_fun('Certificat', data['Certificate'], course);
                    clicked = true
                } else {
                    clicked = false
                }
            }
        }
        
        if (clicked === false) {
            for (let course of diploma) {
                if (sessionStorage.getItem(course) === 'clicked') {
                    action_fun('Diploma', data['Diploma'], course);
                    clicked = true
                } else {
                    clicked = false
                }
            }
        }

        if (clicked === false) {
            for (course of hnd) {
                if (sessionStorage.getItem(course) === 'clicked') {
                    action_fun('Higher-Diploma', data['Higher-Diploma'], course);
                    clicked = true
                } else {
                    clicked = false
                }
            }
        }

        if (clicked === false) {
            for (course of degree) {
                if (sessionStorage.getItem(course) === 'clicked') {
                    action_fun('Degree', data['Degree'], course);
                    clicked = true
                } else {
                    clicked = false
                }
            }
        }
    })

const trainingCourse = [
    'Training Spoken English',
    'Training Leadership',
    'Training Marketing',
    'Training Life Skill Development',
    'Training Phone Repairing'
]

function changeTrainingCourseInfo(title, heading, fee_val, image, schedule, description, outline_string, requirement_string) {
    document.getElementById(courseSection).classList.add('active');
    document.getElementById(outlineSction).classList.add('active');
    document.getElementById(coursePageTitle).innerText = "Training Course Details Of " + title  + " - GDM Metro Campus Learing Platform";

    document.getElementById(coursetitle).innerText = heading;

    document.getElementById(courseImageSrc).setAttribute('src', image);
    document.getElementById(courseImageSrc).setAttribute('class', 'img-fluid');

    document.getElementById(courseDetailsTitle).innerText = "Training Course Details - " + heading

    document.getElementById(courseFee).innerText = fee_val;
    document.getElementById(courseSchedule).innerText = schedule;

    document.getElementById(courseDescription).innerText = description;

    document.getElementById(outline).innerHTML = findAndCreateHTML("course-info", outline_string);
    document.getElementById(requir).innerHTML = findAndCreateHTML("requir-info", requirement_string);


    let fee = Number(fee_val.split(",").join("")) + 3000;    
    document.getElementById(pricedrop).innerText = fee.toLocaleString("en-US");

}

// training courses

fetch('./assets/js/course_data/training.json')
    .then(res => res.json())
    .then(data => {
        for (let training of trainingCourse) {
            if (sessionStorage.getItem(training) === 'clicked') {
                training = training.split(" ").slice(1).join(" ")
                for (let ids in data) {
                    if(ids === training) {
                        changeTrainingCourseInfo(
                            data[ids]['name'],
                            data[ids]['name'],
                            data[ids]['fee'],
                            data[ids]['image'],
                            data[ids]['schedule'],
                            data[ids]['description'],
                            data[ids]["outline"],
                            data[ids]['requirement']
                        )
                    }
                }
            }
        }
    })