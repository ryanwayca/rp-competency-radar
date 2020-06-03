!function() {

   var operation = d3.select('body').append('div').append('h2');
   
   // This contains all the reference links for each axis modal popup
   // the <a href="#"> needs to be updated and link title for each <li> item
   var data_resources = 
   [
       // Agile
       '<ul><li><a href="https://www.canada.ca/en/revenue-agency/corporate/careers-cra/information-moved/cra-competencies-standardized-assessment-tools/canada-revenue-agency-competencies-april-2016/adaptability.html" target="_blank">Read - Adaptability (3 pages)</a></li><li><a href="https://study.com/academy/lesson/adaptability-in-the-workplace-strategies-importance.html" target="_blank">Watch - Adaptability in the Workplace: Strategies & Importance (5m 08s)</a></li><li><a href="https://www.mindtools.com/pages/article/flexibility-at-work.htm" target="_blank">Do - How to Be Flexible in the Workplace (2 pages)</a></li></ul>',
       
       // Action-Oriented
       '<ul><li><a href="https://psycnet.apa.org/fulltext/2014-55719-001.html" target="_blank">Read - The Learning-by-Doing Principle (10 pages)</a></li><li><a href="https://www.emergn.com/blog/learning-by-doing/" target="_blank">Watch - Why Learning By Doing is key to accelerating change (7m 58s)</a></li><li><a href="https://www.conference-board.org/blog/postdetail.cfm?post=1406" target="_blank">Do - Six Ways to Improve “Openness & Action Orientation” at Your Organization (2 pages)</a></li></ul>',
       
       // Curious
       '<ul><li><a href="https://www.lifehack.org/articles/productivity/4-reasons-why-curiosity-is-important-and-how-to-develop-it.html" target="_blank">Read - 4 Reasons Why Curiosity is Important and How to Develop It (2 pages)</a></li><li><a href="https://www.youtube.com/watch?v=28G7zjhgRDg" target="_blank">Watch - Curiosity - How important is it to be curious? (2m 33s)</a></li><li><a href="http://www.planetofsuccess.com/blog/2010/how-to-develop-curiosity/" target="_blank">Do - How to Develop Curiosity (3 pages)</a></li></ul>',
       
       // Reflective
       '<ul><li><a href="https://www.ed.ac.uk/reflection/reflectors-toolkit/goals-objectives-habits" target="_blank">Read - Goals, objectives and reflective habits (2 pages)</a></li><li><a href="https://study.com/academy/lesson/the-role-of-reflective-practice-for-managers-employees.html" target="_blank">Watch - The Role of Reflective Practice for Managers & Employees (4m 32s)</a></li><li><a href="https://www.thelawofattraction.com/develop-critical-thinking-skills/" target="_blank">Do - How To Develop Critical Thinking Skills: 5 Strategies (3 pages)</a></li></ul>',
       
       // Courageous
       '<ul><li><a href="https://boxofcrayons.com/2017/06/why-its-so-important-to-have-courage/" target="_blank">Read - WHY IT’S SO IMPORTANT TO HAVE COURAGE (1 page)</a></li><li><a href="https://www.greatmanagers.com.au/how-to-build-courage-in-teams/" target="_blank">Watch - How to Build Courage in Teams (5m 28s)</a></li><li><a href="https://www.bbc.com/worklife/article/20170606-you-can-teach-yourself-to-be-a-risk-taker" target="_blank">Do - You can teach yourself to be a risk-taker (4 pages)</a></li></ul>',
       
       // Outcomes-Focused
       '<ul><li><a href="https://www.sysaid.com/blog/entry/the-difference-between-outcomes-and-outputs-makes-a-difference" target="_blank">Read - The Difference between “Outcomes” and “Outputs” Makes a Difference! (2 pages)</a></li><li><a href="https://www.curtmercadante.com/living-an-outcomes-focused-life/" target="_blank">Watch - Building an outcomes-focused workplace (It helps explain why Learning By Doing is critical to accelerating understanding) (5m 12s)</a></li><li><a href="https://www.socialventures.com.au/sva-quarterly/how-to-adopt-an-outcomes-focused-approach-part-1/" target="_blank">Do - How to adopt an outcomes-focused approach (4 pages)</a></li></ul>',
       
       // Imaginative
       '<ul><li><a href="https://www.ideou.com/blogs/inspiration/why-creativity-is-more-important-than-ever" target="_blank">Read - Why Creativity Is More Important than Ever (4 pages)</a></li><li><a href="https://www.youtube.com/watch?time_continue=326&v=01Y7qlPFpqw&feature=emb_title" target="_blank">Watch - Igniting creativity to transform corporate culture (13m 49s)</a></li><li><a href="https://blog.hubspot.com/marketing/creative-exercises-better-than-brainstorming" target="_blank">Do - 15 Creative Exercises That Are Better Than Brainstorming (5 pages)</a></li></ul>',
       
       // Resilient
       '<ul><li><a href="https://hbr.org/2016/06/627-building-resilience-ic-5-ways-to-build-your-personal-resilience-at-work" target="_blank">Read - 5 Ways to Boost Your Resilience at Work (4 pages)</a></li><li><a href="https://www.youtube.com/watch?v=WKLy71DO6CQ" target="_blank">Watch - TED TALK on Super-Resilience - How to FALL UP / Dr. Gregg Steinberg (16m 47s)</a></li><li><a href="https://positivepsychology.com/resilience-activities-exercises/" target="_blank">Do - 23 Resilience Building Tools and Exercises (+ Mental Toughness Test) (45m)</a></li></ul>',
       
       // Empathetic
       '<ul><li><a href="https://risepeople.com/blog/empathy-in-the-workplace/" target="_blank">Read - The Importance of Showing Empathy in the Workplace (1 page)</a></li><li><a href="https://www.youtube.com/watch?v=yYe7j3Uf2ZI" target="_blank">Watch - Why Empathy is Important in the Workplace (10m 20s)</a></li><li><a href="https://www.ringcentral.com/small-business/blog/empathy-exercises/" target="_blank">Do - Empathy‌ ‌Exercises‌ ‌That‌ ‌Build‌ ‌Better‌ ‌Teams‌ (1h)</a></li></ul>'
   ];

   var data_popupSubtitle = 
   [
       // Agile
       'Responding to changing environments with flexibility.',
       // Action-Oriented
       'Biased towards action and learning by doing.',
       // Curious
       'The desire to explore multiple possibilities.',
       // Reflective
       'Habit of critically reflecting on process and results.',
       // Courageous
       'Willingness to take risks.',
       // Outcomes-Focused
       'Strong commitment to real world effects.',
       // Imaginative
       'Exploring and envisioning new possible futures.',
       // Resilient
       'The persever-ance to deal with resistance.',
       // Empathetic
       'Understanding others’ experiences and frames of reference.'
   ];

   // data here populates the radar for each key with its own value set.
   // "resources" here reference the "data_resources[]" array above, as to not have to repeat each time below.
   data_01 = 
      [  
        {  
          "key":"Aleem",
          "values":[  
            {  "axis":"Agile", "value":4, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":2, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":5, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":2,  "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":1, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Empathetic", "value":3,"resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Bruno",
          "values":[  
            {  "axis":"Agile", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":3, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":1, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":4, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":2, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":3, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":5, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Dave",
          "values":[  
            {  "axis":"Agile", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":4, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":4, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":2, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":2, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":3,  "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":5, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7]  }, 
            {  "axis":"Empathetic", "value":1,"resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8]  }
          ]
        },
        {  
          "key":"Eric",
          "values":[  
            {  "axis":"Agile", "value":4, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":5, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":4, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":2, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] },
            {  "axis":"Outcomes-Focused", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":3, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":1, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Gil",
          "values":[  
            {  "axis":"Agile", "value":2, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":5, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":4, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":3, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":1, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":4, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Jonathan",
          "values":[  
            {  "axis":"Agile", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":5, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":3, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":2, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] },
            {  "axis":"Outcomes-Focused", "value":4, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":1, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Patrice",
          "values":[  
            {  "axis":"Agile","value":5, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":1, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":4, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":3, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":2, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":3, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Ryan",
          "values":[  
            {  "axis":"Agile", "value":3, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":2, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":5, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":4, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":1, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] }, 
            {  "axis":"Outcomes-Focused", "value":3, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":3, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":4, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        },
        {  
          "key":"Team",
          "values":[  
            {  "axis":"Agile", "value":3.375, "resources":data_resources[0], "popupSubtitle":data_popupSubtitle[0] }, 
            {  "axis":"Action-Oriented", "value":3.375, "resources":data_resources[1], "popupSubtitle":data_popupSubtitle[1] },
            {  "axis":"Curious", "value":3.75, "resources":data_resources[2], "popupSubtitle":data_popupSubtitle[2] }, 
            {  "axis":"Reflective", "value":3.375, "resources":data_resources[3], "popupSubtitle":data_popupSubtitle[3] },
            {  "axis":"Courageous", "value":2.5, "resources":data_resources[4], "popupSubtitle":data_popupSubtitle[4] },
            {  "axis":"Outcomes-Focused", "value":2.875, "resources":data_resources[5], "popupSubtitle":data_popupSubtitle[5] },
            {  "axis":"Imaginative", "value":2.5, "resources":data_resources[6], "popupSubtitle":data_popupSubtitle[6] }, 
            {  "axis":"Resilient", "value":2.375, "resources":data_resources[7], "popupSubtitle":data_popupSubtitle[7] }, 
            {  "axis":"Empathetic", "value":2.875, "resources":data_resources[8], "popupSubtitle":data_popupSubtitle[8] }
          ]
        }
      ];      
    
      
   setTimeout(function() { 
      radarChart.data(data_01).duration(1000).update();

      radarChart.filterAxes(9);
      radarChart.options({circles: {maxValue: 5, levels: 5}}).update();
      radarChart.colors({
          'Aleem': '#377eb8', 
          'Bruno': '#a65628',
          'Dave': '#4daf4a',
          'Eric': '#ff7f00', 
          'Gil': '#ffff33', 
          'Jonathan': '#f781bf',
          'Patrice': '#e41a1c', 
          'Ryan': '#984ea3',
          'Team': 'black'
        }).update();;
   }, 200);

}();
