Bitte erstelle mir ein Quiz für die 7. Klasse mit 7 Sets von je 6 Fragen. Jedes Set hat einen Titel, der das Thema für das Set benennt. Gib mir die Fragen bitte im folgenden Format mit je 4 Antworten, wobei die answer Möglichkeiten von 1-4 enthält:

export const fragenUndAntworten = [
{
Titel: [
{ question: "Frage", options: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], answer: "1" },
...
],
},
{
Titel: [
{ question: "Frage", options: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], answer: "4" },
...
...
],
},
]

Bitte erstelle mir ein schweres Quiz für Erwachsen mit 7 Sets von je 6 Fragen. Jedes Set hat einen Titel, der das Thema für das Set benennt. Gib mir die Fragen bitte im folgenden Format mit je 4 Antworten, wobei die answer Möglichkeiten von 1-4 enthält:

export const fragenUndAntworten = [
{
geographie: [
{ question: "Frage", options: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], answer: "1" },
...
],
},
{
economics: [
{ question: "Frage", options: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], answer: "4" },
...
...
],
},
]

GPT CSS:
Css: Bitte gib mir für die Elemente in folgendem CSS-eine Version, in der 90% des Bildschirms genutzt wird, je nach Bildschirmgröße notebook, tablet, handy hochkant und handy quer:
/_ Set general styles for the entire Quiz component _/
.quiz-container {
font-family: Arial, sans-serif;
max-width: 90vw;
margin: 0 auto;
padding: 20px;
}

/_ Style the header of the Quiz component _/
.quiz-header {
font-size: 2em;
text-align: center;
margin-bottom: 20px;
}

/_ Style the table used to display the quiz questions and answers _/
.quiz-table {
display: table;
width: 100%;
border-collapse: collapse;
margin-bottom: 20px;
}

.quiz-table th,
.quiz-table td {
padding: 10px;
text-align: center;
border: 1px solid #ddd;
}

.quiz-table th {
background-color: #f2f2f2;
font-weight: bold;
}

.quiz-table a {
text-decoration: none;
color: #333;
}

.quiz-table a:hover {
text-decoration: underline;
}

.clicked {
background: yellow;
}

.symbol {
display: inline-block;
width: 70px;
height: 70px;
}
