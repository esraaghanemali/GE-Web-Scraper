var result = {
    show: function noti(notificationTitle, notificationBody, iconCode) {
        const notification = {
            title: notificationTitle,
            body: notificationBody,
            icon: global.appRoot + '/assets/img/programming.png'
        }
        const myNotification = new window.Notification(notification.title, notification)

        myNotification.onclick = () => {
            console.log('Notification clicked')
        }
    }
}

module.exports = result
