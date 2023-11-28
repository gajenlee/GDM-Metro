function callTheCourseInfo(url, section) {
    location.href = url
    sessionStorage.clear();
    sessionStorage.setItem(section, 'clicked');
}