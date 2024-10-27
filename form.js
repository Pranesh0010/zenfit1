function submitFitnessForm(event) {
    event.preventDefault();  // Prevent form submission for demonstration
    
    // Get form values
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var goal = document.getElementById("goal").value;
  
    // Construct URL with query parameters
    var recommendationsPage = `recommendations.html?age=${age}&height=${height}&weight=${weight}&goal=${goal}`;
  
    // Navigate to recommendations page
    window.location.href = recommendationsPage;
  }
  