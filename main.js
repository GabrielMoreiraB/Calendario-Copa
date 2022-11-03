function createGame (player1, hour, player2) {
    return `
    <li>
        <img src="assests/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="assests/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
    `
}

let delay = -0.5;
function createCard (date, day, games) {
    delay = delay +0.5;
    return `
    <div class="card" style="animation-delay:${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}   
            </ul>
        </div>
    `
}


document.querySelector("#cards").innerHTML=    
      createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
      createCard("24/11", "quinta", createGame("brazil", "13:00", "switzerland")+ createGame("portugal", "16:00", "uruguay")) +
      createCard("24/11", "quinta", createGame("brazil", "16:00", "cameroon"))
