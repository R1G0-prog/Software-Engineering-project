const notifications = [
  {
    userId: 1,
    message: "Your product listing has received a new bid!",
    type: "bid",
    timestamp: new Date().toLocaleString(),
    isRead: false,
  },
  // More mock notifications if needed
];

// Function to display notifications as pop-ups
function displayNotifications() {
  const notificationContainer = document.getElementById("popup-notification-container");
  notificationContainer.innerHTML = ""; // Clear existing notifications

  notifications.forEach((notification) => {
    const notificationItem = document.createElement("div");
    notificationItem.className = "notification-item";
    notificationItem.textContent = `${notification.message} - ${notification.timestamp}`;

    // Optional: Automatically remove the notification after a few seconds
    setTimeout(() => {
      notificationItem.style.opacity = "0";
      notificationItem.style.transform = "translateY(-10px)";
      setTimeout(() => notificationItem.remove(), 300); // Remove from DOM after fade-out
    }, 5000); // Adjust timing as needed

    notificationContainer.appendChild(notificationItem);
  });
}

// Call the function to display notifications
displayNotifications();

// Simulate adding a new notification after 5 seconds
setTimeout(() => {
  notifications.push({
    userId: 1,
    message: "You have a new message from a buyer!",
    type: "message",
    timestamp: new Date().toLocaleString(),
    isRead: false,
  });
  displayNotifications(); // Update the display
}, 5000);
