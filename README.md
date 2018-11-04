# Boomer-JS-Fullstack-2018-01-client

. Alexandre Martins
. Beno�t Sommervogel
. Thomas Lenoel

. Clonez le dépot Github.
. Assurez vous d'avoir la dernière version de node.js installée sur votre machine
. Pour installer les node modules, lancez la commande: npm install

En local (production): (Vous utiliserez ainsi notre api en ligne)

. Pour lancer l'application en mode production, lancez la commande: npm run build
. Lancez la commande: npm install -g serve
. lancez la commande: serve -s build
. Rendez-vous sur http://localhost:5000
. Pour modifier la variable d'environnement de production, modifiez le contenu de API_URL dans src/environment.js

En local (developpement): (Vous devrez lancer le serveur à côté en local )

. Pour lancer l'application en mode production, lancez la commande: npm run start
. Rendez-vous sur http://localhost:3000
. Pour modifier la variable d'environnement de developpement, modifiez le contenu de API_URL dans src/environment.js

En ligne:
. Rendez-vous sur: https://boomer-fullstackjs-client.herokuapp.com/

Le but du jeu:

Dans Boomer, vous devrez entre dans une room et cliquer pour gagner des points. Les rooms ont des limites de clics basées
sur des niveaux de difficulté (Easy/Medium/Hard/Evil), si vous n'en sortez pas à temps, la room explosera et vous perdrez une partie des points gagnés.
