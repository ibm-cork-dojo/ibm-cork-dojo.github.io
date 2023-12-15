const notification = document.querySelector(".notification");

const copyToClipboard = () => {
    notification.style.display = "flex"

    setTimeout(() => {
        notification.style.display = "none"
    }, 5000)
}
