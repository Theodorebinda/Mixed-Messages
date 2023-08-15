function getPhrase() {
  let listePhrases = new Array(
    ""
    "Vous n’avez aucun problème avec la solitude."
    "Vous voyez souvent des choses que les autres ne voient pas."
    "Vous êtes totalement indépendant.e."
    "Vous ne savez pas toujours demander de l’aide quand vous en avez besoin."
    "Vous avez parfois l’impression que vous vous cachez des autres et que vous ne pouvez pas leur montrer votre vraie personnalité."
    "Votre monologue intérieur ne s’arrête jamais."
    "Vous ne donnez pas facilement votre confiance à quelqu’un."
    "Vous avez parfois essayé de vous planquer derrière un masque."
    " Vous n’aimez pas être le centre de l’attention. Enfin pas trop."
    " Vous êtes très sensible à l’environnement qui vous entoure. "
    "Vous savez très bien écouter (et observer)."
    "On vous trouve souvent mystérieux.se, inaccessible, insaisissable…"
    "Vous avez des conversations avec vous-même sous la douche."
    "Vous avez tendance à trop vous perdre dans vos pensées."
    "Vous inventez des excuses pour ne pas venir à un événement."
    "Vous n’êtes pas un.e grand.e fan des sorties en soirée (qui impliquent plus de 20 personnes, en tout cas)."
    "Vous vous exprimez plus facilement à l’écrit."
  );
  document.getElementById("phrase").innerHTML = listePhrase[Math.floor(Math.random() * listePhrase.length)];
}
