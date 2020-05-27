!function() {

   var operation = d3.select('body').append('div').append('h2');
   
   // This contains all the reference links for each axis modal popup
   // the <a href="#"> needs to be updated and link title for each <li> item
   var data_resources = 
   [
       // Application Development
       '<ul><li><a href="https://www.edx.org/learn/app-development" target="_blank">https://www.edx.org/learn/app-development</a></li><li><a href="https://www.youtube.com/watch?v=CvJG4sQhzsw" target="_blank">https://www.youtube.com/watch?v=CvJG4sQhzsw</a></li></ul>',
       
       // Mobile Apps
       '<ul><li><a href="https://developer.android.com/course" target="_blank">Andriod - (Only Android Kotlin Fundamentals and Advanced Android in Kotlin)</a></li><li><a href="https://codewithchris.com/ios-app-development/" target="_blank">iOS</a></li>',
       
       // Web Development
       '<ul><li><a href="https://learning.oreilly.com/videos/java-8-fundamentals/9780133489354" target="_blank">Java Development</a></li><li><a href="https://www.coursera.org/specializations/full-stack-react#howItWorks" target="_blank">React JS Stack (1 month free trial on coursera and afterwards $69/month)</a></li><li><a href="https://www.softwaretestinghelp.com/" target="_blank">Selenium Testing</a></li></ul>',
       
       // Business Analysis
       '<ul><li><a href="https://readytogo.betteru.ca/wp-content/uploads/2020/03/Basic-Business-Skills-10-courses.pdf" target="_blank">https://readytogo.betteru.ca/wp-content/uploads/2020/03/Basic-Business-Skills-10-courses.pdf</a></li><li><a href="https://learning.oreilly.com/library/view/delivering-business-analysis/9781780174686/" target="_blank">https://learning.oreilly.com/library/view/delivering-business-analysis/9781780174686/</a></li><li><a href="http://iservice.prv/eng/college/business_line/cpp_oas/nat_train_prg.shtml" target="_blank">http://iservice.prv/eng/college/business_line/cpp_oas/nat_train_prg.shtml</a></li><li><a href="https://learn-apprendre.csps-efpc.gc.ca/application/en/content/fundamentals-writing-web-a313" target="_blank">https://learn-apprendre.csps-efpc.gc.ca/application/en/content/fundamentals-writing-web-a313</a></li></ul>',
       
       // Database Management
       '<ul><li><a href="https://www.udemy.com/topic/sql/free/%20G" target="_blank">https://www.udemy.com/topic/sql/free/%20G</a></li><li><a href="https://learning.oreilly.com/library/view/fundamentals-of-database/9781118213575/" target="_blank">https://learning.oreilly.com/library/view/fundamentals-of-database/9781118213575/</a></li></ul>',
       
       // Infrastructure/Platforms
       '<ul><li><a href="https://www.katacoda.com/courses/kubernetes" target="_blank">Kubernetes Training</a></li><li><a href="https://www.katacoda.com/courses/docker" target="_blank">Docker</a></li><li><a href="https://docs.microsoft.com/en-us/learn/browse/?products=azure&levels=intermediate%2Cadvanced%20" target="_blank">Azure</a></li></ul>',
       
       // Telecommunications
       '<ul><li><a href="https://learning.oreilly.com/library/view/the-essential-guide/9780134507811/" target="_blank">https://learning.oreilly.com/library/view/the-essential-guide/9780134507811/</a></li><li><a href="https://www.youtube.com/watch?v=WuGeyAn5akk&list=PLUK-hIqL9QbGuf0hyv6MFm9DY4Ju-hnuI" target="_blank">https://www.youtube.com/watch?v=WuGeyAn5akk&list=PLUK-hIqL9QbGuf0hyv6MFm9DY4Ju-hnuI</a></li></ul>',
       
       // Testing
       '<ul><li><a href="https://dialogue/grp/sme-ts/TSWG-GTSME/Professional%20Development/Forms/AllItems.aspx?RootFolder=%2Fgrp%2Fsme%2Dts%2FTSWG%2DGTSME%2FProfessional%20Development%2FTraining%20Material%2FSoftware%20Testing%20and%20Quality%20Assurance" target="_blank">Software Testing and Quality Assurance (ESDC IntraWeb)</a></li><li><a href="https://www.softwaretestinghelp.com/beginners-guide-to-mobile-application-testing/" target="_blank">https://www.softwaretestinghelp.com/beginners-guide-to-mobile-application-testing/</a></li></ul>',
       
       // Security
       '<ul><li><a href="https://safecode.org/training/" target="_blank">SAFECode Training</a></li><li><a href="https://www.cse-cst.gc.ca/en/system/files/pdf_documents/proof-v1-itslc-course-calendar-v092018-ef.pdf" target="_blank">CSE IT Security Learning Centre Course Calendar</a></li><li><a href="https://www.youtube.com/watch?v=1ghIH_Myu4U" target="_blank">Secure Coding Workshop (YouTube Video)</a></li></ul>'
   ];

   var data_popupSubtitle = 
   [
       // Application Development
       '(GC)',
       // Mobile Apps
       '(R&P)',
       // Web Development
       '(R&P)',
       // Business Analysis
       '(GC)',
       // Database Management
       '(GC)',
       // Infrastructure/Platforms
       '(GC)',
       // Telecommunications
       '(GC)',
       // Testing
       '(GC)',
       // Security
       '(GC)'
   ];

   // data here populates the radar for each key with its own value set.
   // "resources" here reference the "data_resources[]" array above, as to not have to repeat each time below.
      data_02 = 
      [  
        {  
          "key":"Junior Prototyping Specialist",
          "values":[  
            {  "axis":"Application Development", "value":2.5, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":2.5, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2.5, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":1.0, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":2.0, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2.0, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2.5, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2.0, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Manager",
          "values":[  
            {  "axis":"Application Development", "value":2.3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":1.7, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2.0, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3.3, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":1.7, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":1.7, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1.7, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2.0, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2.0, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Mutlimedia Design Specialist",
          "values":[  
            {  "axis":"Application Development", "value":2.7, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":2.7, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3.3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":2.7, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":2.3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2.3, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2.7, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2.3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Prototyping Specialist",
          "values":[  
            {  "axis":"Application Development", "value":3.7, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":3.0, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3.3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3.0, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":3.0, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":3.0, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2.3, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":3.3, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":3.3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Team Leader",
          "values":[  
            {  "axis":"Application Development", "value":2.7, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":1.8, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2.2, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3.0, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":1.8, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1.8, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2.3, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2.2, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Team Leader - Technical",
          "values":[  
            {  "axis":"Application Development", "value":4.3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":3.5, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3.8, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3.5, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":3.3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":3.5, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":3.0, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":3.5, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":3.3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Aleem",
          "values":[  
            {  "axis":"Application Development", "value":2, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":1, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":1, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":1, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":1, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":1, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":1, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Bruno",
          "values":[  
            {  "axis":"Application Development", "value":2, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":2, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":2, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Dave",
          "values":[  
            {  "axis":"Application Development", "value":2, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":1, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":1, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":4, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Eric",
          "values":[  
            {  "axis":"Application Development", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":3, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":3, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":3, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Jonathan",
          "values":[  
            {  "axis":"Application Development", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":3, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":2, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":2, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":1, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Patrice",
          "values":[  
            {  "axis":"Application Development", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":2, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":2, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":2, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Ryan",
          "values":[  
            {  "axis":"Application Development", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0]  }, 
            {  "axis":"Mobile Apps", "value":3, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1]  },
            {  "axis":"Web Development", "value":3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2]  }, 
            {  "axis":"Business Analysis", "value":2, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3]  },
            {  "axis":"Database Management", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4]  }, 
            {  "axis":"Infrastructure/Platforms", "value":1, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5]  },
            {  "axis":"Telecommunications", "value":1, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6]  }, 
            {  "axis":"Testing", "value":3, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Security", "value":2, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        }
      ];


   setTimeout(function() { 
    radarChart.data(data_02).duration(1000).update();

    radarChart.filterAxes(9);
    radarChart.options({circles: {maxValue: 5, levels: 5}}).update();
    radarChart.colors({
       'Junior Prototyping Specialist': '#8c510a', 
       'Manager': '#bf812d', 
       'Mutlimedia Design Specialist': '#f1a340', 
       'Prototyping Specialist': '#998ec3', 
       'Team Leader': '#35978f', 
       'Team Leader - Technical': '#01665e', 
       'Aleem': '#377eb8', 
       'Bruno': '#a65628',
       'Dave': '#4daf4a',
       'Eric': '#ff7f00', 
       'Gil': '#ffff33', 
       'Jonathan': '#f781bf',
       'Patrice': '#e41a1c', 
       'Ryan': '#984ea3' 
      }).update();
 }, 200);

   

}();
