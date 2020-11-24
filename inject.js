(function() {    
    window.onload = function(){
        // var table = document.getElements("table_575");
        var table =  document.querySelectorAll('table.tablesorter')[0];
        var tableHeaders = table.getElementsByTagName("th");

        var numUserName;
        var numEmail;
        for (var i = 0; i < tableHeaders.length; i++) {
            if (tableHeaders[i].textContent.toLowerCase().trim() == "username") {
                numUserName = i;
            } else if (tableHeaders[i].textContent.toLowerCase().trim() == "email") {
                numEmail = i;
            }
        }
        
        if (numUserName != null && numEmail != null) {
            var email;
            var lines = table.getElementsByTagName("tr");
            for (i = 0; i < lines.length; i++) {
                var items = lines[i].getElementsByTagName("td");
                for (var j = 0; j < items.length; j++) {
                    email = items[numEmail].textContent.trim();
                    email = email.substring(0, email.indexOf('@'));
                    if (items[numUserName].textContent.trim() == email) {
                        items[numUserName].innerHTML = '<mark>' + items[numUserName].innerHTML + '</mark>';
                        items[numEmail].innerHTML = '<mark>' + items[numEmail].innerHTML + '</mark>';
                    }
                }
            }
        }
    };
})();