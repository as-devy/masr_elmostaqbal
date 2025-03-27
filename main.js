window.onload = () => {
    document.querySelector(".pre_loader").classList.add("disactive")
}

const mobileMenu = document.querySelector("#mobile_menu");
const burger_menu = document.querySelector("#burger_menu");

if (burger_menu) {
    burger_menu.addEventListener("click", () => {
        console.log("burger_menu")
        mobileMenu.classList.toggle("active")
    })

}


document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !burger_menu.contains(event.target)) {
        mobileMenu.classList.remove("active");
    }
});

if (document.querySelectorAll(".PPhIP")) {
    document.querySelectorAll(".PPhIP").forEach(ele => {
        ele.style.display = 'none';
    })
}

// Function to get visitors from localStorage
function getVisitors() {
    return JSON.parse(localStorage.getItem("visitors")) || [];
}

// Function to save visitors to localStorage
function saveVisitors(visitors) {
    localStorage.setItem("visitors", JSON.stringify(visitors));
}

// Function to track visitors
function trackVisitor() {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            const visitor = {
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country_name,
                isp: data.org,
                timestamp: new Date().toISOString()
            };

            let visitors = getVisitors();

            // Check if visitor with the same IP already exists
            if (!visitors.some(v => v.ip === visitor.ip)) {
                visitors.push(visitor);
                saveVisitors(visitors);
            }

            console.log("Updated Visitors List:", visitors);
        })
        .catch(error => console.error("Error fetching visitor data:", error));
}

// Execute visitor tracking on page load
trackVisitor();
