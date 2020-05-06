!function() {

   var operation = d3.select('body').append('div').append('h2');
   
   // This contains all the reference links for each axis modal popup
   // the <a href="#"> needs to be updated and link title for each <li> item
   var data_resources = 
   [
       // Application Development
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Mobile Apps
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Web Development
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Business Analysis
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Database Management
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Infrastructure/Platforms
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Telecommunications
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>',
       
       // Testing
       '<ul><li><a href="https://hbr.org/2016/06/627-building-resilience-ic-5-ways-to-build-your-personal-resilience-at-work" target="_blank">Read - 23 Resilience Building Tools and Exercises</a></li><li><a href="https://www.youtube.com/watch?v=WKLy71DO6CQ" target="_blank">Watch - TED TALK on Super-Resilience - How to FALL UP</a></li><li><a href="https://positivepsychology.com/resilience-activities-exercises/" target="_blank">Do - 5 Ways to Boost Your Resilience at Work</a></li></ul>',
       
       // Security
       '<ul><li><a href="#" target="_blank">Link 01</a></li><li><a href="#" target="_blank">Link 02</a></li><li><a href="#" target="_blank">Link 03</a></li></ul>'
   ];

   // data here populates the radar for each key with its own value set.
   // "resources" here reference the "data_resources[]" array above, as to not have to repeat each time below.
      data_02 = 
      [  
        {  
          "key":"Junior Prototyping Specialist",
          "values":[  
            {  "axis":"Application Development", "value":2.5, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":2.5, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":2.5, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":1.0, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":2.0, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":2.0, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":2.5, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":2.0, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Manager",
          "values":[  
            {  "axis":"Application Development", "value":2.3, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":1.7, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":2.0, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":3.3, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":1.7, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":1.7, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":1.7, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":2.0, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":2.0, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Mutlimedia Design Specialist",
          "values":[  
            {  "axis":"Application Development", "value":2.7, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":2.7, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":3.3, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":2.7, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":2.3, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":2.3, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":2.7, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":2.3, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Prototyping Specialist",
          "values":[  
            {  "axis":"Application Development", "value":3.7, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":3.0, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":3.3, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":3.0, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":3.0, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":3.0, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":2.3, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":3.3, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":3.3, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Team Leader",
          "values":[  
            {  "axis":"Application Development", "value":2.7, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":1.8, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":2.2, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":3.0, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":2.0, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":1.8, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":1.8, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":2.3, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":2.2, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Team Leader - Technical",
          "values":[  
            {  "axis":"Application Development", "value":4.3, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":3.5, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":3.8, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":3.5, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":3.3, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":3.5, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":3.0, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":3.5, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":3.3, "resources":data_resources[8] }
          ]
        },
        {  
          "key":"Dave",
          "values":[  
            {  "axis":"Application Development", "value":2, "resources":data_resources[0] }, 
            {  "axis":"Mobile Apps", "value":1, "resources":data_resources[1] },
            {  "axis":"Web Development", "value":2, "resources":data_resources[2] }, 
            {  "axis":"Business Analysis", "value":3, "resources":data_resources[3] },
            {  "axis":"Database Management", "value":2, "resources":data_resources[4] }, 
            {  "axis":"Infrastructure/Platforms", "value":1, "resources":data_resources[5] },
            {  "axis":"Telecommunications", "value":1, "resources":data_resources[6] }, 
            {  "axis":"Testing", "value":4, "resources":data_resources[7] }, 
            {  "axis":"Security", "value":3, "resources":data_resources[8] }
          ]
        }
      ];


      
    
 /*     
   setTimeout(function() { 
      radarChart.data(data_01).duration(1000).update();

      radarChart.filterAxes(9);
      radarChart.options({circles: {maxValue: 5, levels: 5}}).update();
      radarChart.colors({
         'Patrice': '#e41a1c', 
         'Aleem': '#377eb8', 
         'Dave': '#4daf4a', 
         'Ryan': '#984ea3', 
         'Eric': '#ff7f00', 
         'Gil': '#ffff33', 
         'Jonathan': '#f781bf', 
         'Bruno': '#a65628', 
         'Team': 'black'}).update();;
   }, 200);
*/
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
       'Dave': '#4daf4a'}).update();
 }, 200);

   
 

/*
   setTimeout(function() { 
      operation.text(' radarChart.data(data).duration(1000).update(); ');
      radarChart.data(data).duration(1000).update();
   }, 200);

   
   setTimeout(function() { 
      operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update(); ");
      radarChart.options({'legend': {display: true}});
      radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update();
   }, 4000);
   
   setTimeout(function() { 
      operation.html(" radarChart.filterAxes(7); <br> radarChart.options({circles: {maxValue: 1, levels: 4}}).update(); ");
      radarChart.filterAxes(7);
      radarChart.options({circles: {maxValue: 1, levels: 4}}).update();
   }, 8000);
   
   setTimeout(function() { 
      operation.text(" radarChart.maxValue(.5).levels(7).update(); ");
      radarChart.maxValue(.5).levels(7).update();
   }, 12000);
   
   setTimeout(function() { 
      operation.text(" radarChart.invert(4).update(); ");
      radarChart.invert(4).update();
   }, 16000);

   setTimeout(function() { 
      operation.text(" radarChart.ranges({'Contract Cost': [-1, 2]}).update(); ");
      radarChart.ranges({'Contract Cost': [-1, 2]}).update();
   }, 20000);

   setTimeout(function() { 
      operation.html(" data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })<br> radarChart.data(data).update(); ");
      chart_data = JSON.parse(JSON.stringify(data));
      chart_data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })
      radarChart.data(chart_data).update();
   }, 24000);

   setTimeout(function() { 
      operation.html(" var one = radarChart.slice(1, 2); <br> radarChart.data(one).update(); ");
      var one = radarChart.slice(1, 2);
      radarChart.data(one).update();
   }, 28000);

   setTimeout(function() { 
      operation.html(" radarChart.ranges({'Contract Cost': []}).invert(4); <br> radarChart.data(data).update(); ");
      radarChart.ranges({'Contract Cost': []}).invert(4);
      radarChart.data(data).update();
   }, 32000);

   setTimeout(function() { 
      operation.html(" radarChart.options({circles: {fill: 'violet'}}); <br> radarChart.options({axes: {lineColor: 'lightyellow'}}); <br> radarChart.options({circles: {color: '#FF99CC'}}); <br> radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'}); ");
      radarChart.options({circles: {fill: 'violet', color: '#FF99CC'}});
      radarChart.options({axes: {lineColor: "lightyellow"}});
      radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'});
      radarChart.update();
   }, 36000);

   setTimeout(function() { 
      operation.text(" radarChart.options({circles: {maxValue: 1, levels: 3}, legend: {symbol: 'circle'}, filter: false}).update(); ");
      radarChart.options({circles: {maxValue: 1, levels: 3}, legendSymbol: 'circle', filter: false}).update();
   }, 40000);

   setTimeout(function() { 
      operation.text(" radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update(); ");
      radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update();
   }, 44000);

   setTimeout(function() { 
      operation.text(" radarChart.height(500).width(500).options({'areas': {'dotRadius': 4}}).update(); ");
      radarChart.height(600).width(600).options({'areas': {'dotRadius': 4}}).update();
   }, 48000);

   setTimeout(function() { 
      operation.html(" radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}}); <br> radarChart.options({filter: 'rc_glow'}); <br> radarChart.colors({}).data(data).update(); <br> radarChart.maxValue(.5).levels(7).filterAxes(7);");
      radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}});
      radarChart.options({filter: 'rc_glow'});
      radarChart.maxValue(.5).levels(7).filterAxes(7);
      radarChart.colors({}).data(data).update();
   }, 52000);

*/

}();
