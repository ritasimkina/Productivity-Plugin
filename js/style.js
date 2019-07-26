let schedule = new Vue({
    el: '#schedule',
    data: {
        currentWeek: 0,

        addTask: false,
        addTaskName: '',
        addTaskType: 'my',
        addTaskSelectDate:'',
        addTaskMessage:'',

        filterActive: false,
        filters:[
            {
                name: 'Exam',
                type:'Exam',
                color: '#3f51b5',
                visibility: false
            },
            {
                name: 'Deadline',
                type:'Deadline',
                color: '#9fa8da',
                visibility: false
            },
            {
                name: 'Lecture',
                type:'Lecture',
                color: '#90a4ae',
                visibility: false
            },
            {
                name: 'Practice',
                type:'Practice',
                color: '#64b5f6',
                visibility: false
            },
            {
                name: 'My Tasks',
                type:'my',
                color: '#bbdefb',
                visibility: false
            },
            {
                name: 'All',
                type:'all',
                color: '',
                visibility: true,
            }
        ],
        timeline: [
            [
                {
                    date:'2019-07-08T00:00:00',
                    markers: [{
                        date:'2019-07-08T09:00:00',
                        name:'MG2',
                        type:'Exam',
                        place:'HS3',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },
                    {
                        date:'2019-07-08T11:30:00',
                        name:'DSE',
                        type:'Exam',
                        place:'HS1',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                }],
              },
                {
                    date:'2019-07-09T00:00:00',
                    markers: [{
                        date:'2019-07-08T11:30:00',
                        name:'DSE',
                        type:'Lecture',
                        place:'Test1 in HS1',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    }],
                },
                {
                    date:'2019-07-10T00:00:00',
                    markers: [{
                        date:'2019-07-10T15:30:00',
                        name:'EMM',
                        type:'Lecture',
                        place:'HS1',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },
                    {
                        date:'2019-07-10T23:59:00',
                        name:'EMM',
                        type:'Deadline',
                        place:'HW on Moodle',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                            hover: false,
                    }],
                },

                {
                date:'2019-07-11T00:00:00',
                markers: [{
                    date:'2019-07-11T08:00:00',
                    name:'DSE',
                    type:'Lecture',
                    place:'HS3',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#3f51b5',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-11T11:00:00',
                    name:'SWE2',
                    type:'Practice',
                    place:'Gr.3 : PC5',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#9fa8da',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-11T16:00:00',
                    name:'FIN1',
                    type:'Lecture',
                    place:'HS1 Oskar-Morg.,1',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#90a4ae',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-11T23:59:00',
                    name:'DSE',
                    type:'Deadline',
                    place:'Feedback 1 über Moodle',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                }],
            },{
                date:'2019-07-12T00:00:00',
                markers: [{
                    date:'2019-07-12T16:45:00',
                    name:'BWL',
                    type:'Exam',
                    place:'HS6, Oskar-Morgen.,1',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#3f51b5',
                    visibility: true,
                        hover: false,
                },

                {
                    date:'2019-07-12T11:00:00',
                    name:'EMPTY',
                    type:'Deadline',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#9fa8da',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-12T12:00:00',
                    name:'EMPTY',
                    type:'Lecture',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#90a4ae',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-12T13:00:00',
                    name:'SWE2',
                    type:'Practice',
                    place:'Gr. 3 : PC5',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-12T19:45:00',
                    name:'SWE2',
                    type:'Practice',
                    place:'Deadline Talk : SR3',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-12T16:00:00',
                    name:'EMPTY',
                    type:'Practice',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-12T18:30:00',
                    name:'BWL',
                    type:'Practice',
                    place:'Tutorium in SR3',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                }],
            },{
                date:'2019-07-13T00:00:00',
                markers: [],
            },{
                date:'2019-07-14T00:00:00',
                markers: [{
                    date:'2019-07-14T10:00:00',
                    name:'Exam',
                    type:'Exam',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#3f51b5',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-14T11:00:00',
                    name:'Deadline',
                    type:'Deadline',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#9fa8da',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-14T12:00:00',
                    name:'Lecture',
                    type:'Lecture',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#90a4ae',
                    visibility: true,
                        hover: false,
                },{
                    date:'2019-07-14T13:00:00',
                    name:'Practice',
                    type:'Practice',
                    place:'Test text',
                    links:{
                        link1: 'https://moodle.univie.ac.at/login/index.php',
                        link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                    },
                    color:'#64b5f6',
                    visibility: true,
                        hover: false,
                }],
            }
            ],[
                {
                    date:'2019-07-15T00:00:00',
                    markers: [{
                        date:'2019-07-15T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-15T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-15T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-15T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-16T00:00:00',
                    markers: [{
                        date:'2019-07-16T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-16T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-16T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-16T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-17T00:00:00',
                    markers: [{
                        date:'2019-07-17T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-17T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-17T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-17T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-18T00:00:00',
                    markers: [{
                        date:'2019-07-18T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-18T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-18T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-18T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-19T00:00:00',
                    markers: [{
                        date:'2019-07-19T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-19T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-19T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-19T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-20T00:00:00',
                    markers: [{
                        date:'2019-07-20T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-20T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-20T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-20T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-21T00:00:00',
                    markers: [{
                        date:'2019-07-21T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-21T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-21T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-21T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                }
            ],[
                {
                    date:'2019-07-22T00:00:00',
                    markers: [{
                        date:'2019-07-22T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-22T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-22T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-22T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-23T00:00:00',
                    markers: [{
                        date:'2019-07-23T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-23T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-23T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-23T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-24T00:00:00',
                    markers: [{
                        date:'2019-07-24T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-24T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-24T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-24T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-25T00:00:00',
                    markers: [{
                        date:'2019-07-25T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-25T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-25T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-25T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-26T00:00:00',
                    markers: [{
                        date:'2019-07-26T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-26T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-26T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-26T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-27T00:00:00',
                    markers: [{
                        date:'2019-07-27T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-27T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-27T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-27T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                },{
                    date:'2019-07-28T00:00:00',
                    markers: [{
                        date:'2019-07-28T10:00:00',
                        name:'Exam',
                        type:'Exam',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#3f51b5',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-28T11:00:00',
                        name:'Deadline',
                        type:'Deadline',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#9fa8da',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-28T12:00:00',
                        name:'Lecture',
                        type:'Lecture',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#90a4ae',
                        visibility: true,
                        hover: false,
                    },{
                        date:'2019-07-28T13:00:00',
                        name:'Practice',
                        type:'Practice',
                        place:'Test text',
                        links:{
                            link1: 'https://moodle.univie.ac.at/login/index.php',
                            link2: 'https://ufind.univie.ac.at/en/index.html4560 *',
                        },
                        color:'#64b5f6',
                        visibility: true,
                        hover: false,
                    }],
                }
            ]
        ],
    },
    methods: {
        filterMarkers(filter) {

            if(this.filterActive === false && filter !== 'all'){
                this.timeline[this.currentWeek].forEach((day) =>{
                    day.markers.filter((mar) => {
                        mar.visibility = false;
                    });
                });
                this.filterActive = true;
            }
            this.filters.forEach((item)=>{
                if (filter === 'all'){
                    item.visibility = false;
                    this.filters[this.filters.length - 1].visibility = true;

                    this.timeline[this.currentWeek].forEach((day) =>{
                        day.markers.filter((mar) => {
                            mar.visibility = true;
                        });
                    });
                    this.filterActive = false;

                } else if(item.type === filter){
                    item.visibility = !item.visibility;
                    this.filters[this.filters.length - 1].visibility = false;
                }
            });


            this.timeline[this.currentWeek].forEach((day) =>{
                day.markers.filter((mar) => {
                    if(mar.type === filter && mar.visibility === false && filter !== 'all'){
                        mar.visibility = true;
                    }else if(mar.type === filter && mar.visibility === true && filter !== 'all'){
                        mar.visibility = false;
                    }
                });
            });



            if(
                this.filters.every((item)=>{
                    return item.visibility === false;
                })
            ){
                this.filters[this.filters.length - 1].visibility = true;

                this.timeline[this.currentWeek].forEach((day) =>{
                    day.markers.filter((mar) => {
                        mar.visibility = true;
                    });
                });
                this.filterActive = false;
            }

        },
        formatted(str, type){
            let parts = str.slice(0, -1).split('T');
            if(type === 'date'){
                //dateComponent
                return parts = parts[0].split('-').reverse().join('.').split('.',2).join('.');
            } else {
                //timeComponent
                return parts = parts[1].split(':',2).join(':');
            }
        },
        toggleAddTask(){
            this.addTask = !this.addTask;
        },
        hover(weekIndex, dayIndex, markerIndex){
            let way = this.timeline[weekIndex][dayIndex].markers[markerIndex];
            way.hover = !way.hover;
        },
        weekPrev(){
            this.currentWeek = jsTime.activeIndex - 1;
            console.log(this.currentWeek);
        },
        weekNext(){
            this.currentWeek = jsTime.activeIndex + 1;
            console.log(this.currentWeek);
        },
        addMyTask(){
            let taskObj = {};

            taskObj.date        = this.addTaskSelectDate;
            taskObj.name        = this.addTaskName;
            taskObj.type        = this.addTaskType;
            taskObj.place       = this.addTaskMessage;
            taskObj.links       = {};
            taskObj.links.link1 = '-';
            taskObj.links.link2 = '-';
            taskObj.color       = '#bbdefb';
            taskObj.visibility  = true;
            taskObj.hover       = false;

            let currentDay = this.addTaskSelectDate.slice(0, -1).split('T');
            this.timeline.forEach((week)=>{
                week.forEach((day) => {
                    let startDate = day.date.slice(0, -1).split('T');
                    if(currentDay[0] === startDate[0]){

                        let selectedTime = new Date(this.addTaskSelectDate);
                        let lenghtArrMarkers = day.markers.length - 1;

                        day.markers.every((el, index)=>{

                            let startTimeInArrMarkers = new Date( el.date );

                            if(selectedTime <  startTimeInArrMarkers ){
                                day.markers.splice(index, 0, taskObj);
                                return false;
                            }else if(index === lenghtArrMarkers){
                                day.markers.push(taskObj);
                                return false;
                            } else {
                                return true;
                            }
                        });
                    }
                });
            });

            this.addTaskSelectDate = '';
            this.addTaskName = '';
            this.addTaskMessage = '';
        }
    },
    computed: {

    },
    components: {

    }
});

var jsTime = new Swiper ('.js-time', {
    //centeredSlides: true,
    //loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
