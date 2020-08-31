document.getElementById("input").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    let exportText = fr.result;
    let converted = JSON.parse(exportText);
    console.log(converted);
    generateGraph(converted);
  };

  fr.readAsText(this.files[0]);
});

function generateGraph(converted) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: converted[0].temperatureList,
      datasets: [
        {
          label: `Temperature data for ${converted[0].id}`,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: converted[0].temperatureList
        },
        {
          label: `Temperature data for ${converted[1].id}`,
          backgroundColor: "rgb(34, 242, 86)",
          borderColor: "rgb(34, 242, 86)",
          data: converted[1].temperatureList
        },
        {
          label: `Temperature data for ${converted[2].id}`,
          backgroundColor: "rgb(242, 211, 34)",
          borderColor: "rgb(242, 211, 34)",
          data: converted[2].temperatureList
        },
        {
          label: `Temperature data for ${converted[3].id}`,
          backgroundColor: "rgb(34, 242, 221)",
          borderColor: "rgb(34, 242, 221)",
          data: converted[3].temperatureList
        },
        {
          label: `Temperature data for ${converted[4].id}`,
          backgroundColor: "rgb(34, 83, 242)",
          borderColor: "rgb(34, 83, 242)",
          data: converted[4].temperatureList
        },
        {
          label: `Temperature data for ${converted[5].id}`,
          backgroundColor: "rgb(242,34,242)",
          borderColor: "rgb(242,34,242)",
          data: converted[5].temperatureList
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
}

function generateGraph2() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
}

// generateGraph2();
