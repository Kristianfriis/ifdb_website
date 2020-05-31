function showSearchbar() {
    let target = document.getElementById("searchbar");
    let btn = document.getElementById('showsearch_btn');
    if(target.className == "container hideSearch") {
        target.classList.remove('hideSearch')
        btn.style.backgroundColor = '#BB3F25'
    } else if (target.className != "hideSearch") {
        target.classList.add('hideSearch');
        btn.style.backgroundColor = '#0250BC'        
    }
}

export default showSearchbar