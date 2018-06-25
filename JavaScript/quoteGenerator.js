var quotes = [
    'Don\'t Worry, Be Happy!',
    'No amount of prayer or meditation can do what helping others can do.',
    'I love everybody. Each one plays the role they have to play...',
    'Love God and find him within - the only treasure worth finding.',
    'Mastery in Servitude',
    '...What will the present chaos lead to? How will it all end? It can only end in one way. Mankind will be ' +
    'sick of it all....',
    'True love is no game of the faint-hearted and the weak. It is born of strength and understanding.',
    'The human form was never [formed] to beget children. This tendency among people to cohabit is nothing but ' +
    'animal instinct inherited from all the previous lives of evolution from the stone to the human form.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('showQuote').innerHTML = quotes[randomNumber];
}