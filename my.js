function testGS() {

    var url = "https://script.googleusercontent.com/a/macros/georgetown.edu/echo?user_content_key=Mjzb_UwlB6vmKmMFCglVFIcasSOMpTR5788Shrlu5PHFb8zMBljmFu8xLKciYv5gnTFPpp6CgGhiRn2p1S_-E9BXM6TD7_YQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_somEH0VO9G8l_mT0SNpLRpbGYfaIuFVoS4chwneYR2vobCuPsKWDSKwSQoG6olLcnPKcB2RudzpEmCV3zilwYMOpyR1BoIqbkaSCh4rR6161liWvYgWzoA&lib=Mk-4mRBgqOKBWGnxUViSKe9Y7yp0QSEB_";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
    
        });

}
function addGS() {
// here we are going to be doing a 'post' request
    var url = "https://script.google.com/macros/s/AKfycbzm99ObzBPz6rr0wAi2d7fgaEiojZaimIzk53Ce_zDT_26eTKk/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:'Olivia'}) // body data type must match "Content-Type" header
      });

}

document.getElementById('btn').addEventListener('click', testGS);
document.getElementById('btn2').addEventListener('click', addGS);
