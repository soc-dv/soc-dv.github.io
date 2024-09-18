function openTab(evt, tabName) {
    var i, tabcontent, tablinks, iframe;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // Set the iframe src based on tab name
    iframe = document.getElementById(tabName.toLowerCase() + '-frame');
    if (iframe) {
        switch(tabName) {
            case 'Introduction':
                iframe.src = 'introduction.html'; // URL of the Introduction page
                break;
            case 'Projects':
                iframe.src = 'projects.html'; // URL of the Projects page
                break;
            case 'Publications':
                iframe.src = 'publications.html'; // URL of the Publications page
                break;
            case 'Members':
                iframe.src = 'members.html'; // URL of the Members page
                break;
        }
    }
    
    // Optionally, if using dynamic content, uncomment the following lines
    // fetchData(tabName);
}

function fetchData(tabName) {
    let url;
    switch(tabName) {
        case 'Introduction':
            url = 'data/introduction.json'; // URL of the Introduction data
            break;
        case 'Projects':
            url = 'data/projects.json'; // URL of the Projects data
            break;
        case 'Publications':
            url = 'data/publications.json'; // URL of the Publications data
            break;
        case 'Members':
            url = 'data/members.json'; // URL of the Members data
            break;
    }

    if (url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById(tabName.toLowerCase() + '-content').innerHTML = JSON.stringify(data); // Replace with actual data rendering logic
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}
