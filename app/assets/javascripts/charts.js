var chart;

function getCrimeStats(lat, lng) {

  $.ajax({
    url: '/crimes/stats',
    data: {
      latitude: lat,
      longitude: lng
    },
    success: function(json) {
      // var json= [{"category": "anti-social-behaviour", "persistent_id": "", "location_subtype": "", "id": 11202339, "location": {"latitude": "52.6164511", "street": {"id": 882369, "name": "On or near Adderley Road"}, "longitude": "-1.1223096"}, "context": "", "month": "2012-03", "location_type": "Force", "outcome_status": null}, {"category": "anti-social-behaviour", "persistent_id": "", "location_subtype": "", "id": 11202319, "location": {"latitude": "52.6331614", "street": {"id": 883433, "name": "On or near Castle Street"}, "longitude": "-1.1404156"}, "context": "", "month": "2012-03", "location_type": "Force", "outcome_status": null}, {"category": "anti-social-behaviour", "persistent_id": "", "location_subtype": "", "id": 11202306, "location": {"latitude": "52.6165796", "street": {"id": 882324, "name": "On or near Welford Road"}, "longitude": "-1.1263098"}, "context": "", "month": "2012-03", "location_type": "Force", "outcome_status": null}];

      // Result
      var crime_categories = _.countBy(json, function(crime) { return crime.category; });
      var results = [];

      for(var category in crime_categories) {
        results.push({ label : category, value : crime_categories[category]});
      }
      drawDonut(results);
    }
  });
}


function drawDonut(data) {

    new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: data,
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
    });

}