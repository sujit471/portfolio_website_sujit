var tablinks = document.getElementsByClassName("details");
var content = document.getElementsByClassName("contents"); 
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(contents of content){
        contents.classList.remove('active-tab');
    }
    
event.currentTarget.classList.add('active-link');
/*event using is used to switch the tab color onclick.
*/
document.getElementById(tabname).classList.add('active-tab');

}
