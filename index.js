// Function to load and display the menu for the selected date.
function loadMenu() {
    const selectedDate = document.getElementById("menu-date").value;
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Set the displayed date.
    document.getElementById("displayed-date").textContent = formattedDate;

    // You can replace this URL with the URL of the website that provides menu data for the selected date.
    const menuUrl = `http://www.hafs.hs.kr/?act=lunch.main2&month=${selectedDate}&code=17113`;


    // Send an HTTP GET request to the menu URL.
    fetch(menuUrl)
        .then(response => response.text())
        .then(menuData => {
            // Update the menu boxes with the extracted menu data.
            document.getElementById("morning-menu").textContent = menuData.morning;
            document.getElementById("lunch-menu").textContent = menuData.lunch;
            document.getElementById("dinner-menu").textContent = menuData.dinner;

            // Display the menu container.
            document.getElementById("menu-container").style.display = "block";
        })
        .catch(error => {
            console.error('Error fetching or parsing the menu data:', error);
        });
}
