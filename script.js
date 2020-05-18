function hideAndShow(hide, show) {
    var display = document.getElementById(hide).style.display;
    var display = document.getElementById(show).style.display;
    
    document.getElementById(hide).style.display = 'none';
    document.getElementById(show).style.display = 'flex';
}