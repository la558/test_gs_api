function testGS() {

    var url = "https://script.googleusercontent.com/a/macros/georgetown.edu/echo?user_content_key=Mjzb_UwlB6vmKmMFCglVFIcasSOMpTR5788Shrlu5PHFb8zMBljmFu8xLKciYv5gnTFPpp6CgGhiRn2p1S_-E9BXM6TD7_YQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_somEH0VO9G8l_mT0SNpLRpbGYfaIuFVoS4chwneYR2vobCuPsKWDSKwSQoG6olLcnPKcB2RudzpEmCV3zilwYMOpyR1BoIqbkaSCh4rR6161liWvYgWzoA&lib=Mk-4mRBgqOKBWGnxUViSKe9Y7yp0QSEB_";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
    
        });

}

document.getElementById('btn').addEventListener('click', testGS);
