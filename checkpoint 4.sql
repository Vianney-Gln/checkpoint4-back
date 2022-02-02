CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `pseudo` varchar(255),
  `email` varchar(255),
  `hashedpassword` varchar(255),
  `uuid` varchar(255)
);
CREATE TABLE `facts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `joke` varchar(255),
  `id_users` int,
  `id_category` int
);
CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);
ALTER TABLE
  `users`
ADD
  FOREIGN KEY (`id`) REFERENCES `facts` (`id_users`);
ALTER TABLE
  `facts`
ADD
  FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);
  /* Remplissage de la bdd*/
INSERT INTO
  category (name)
VALUES
  ("pas drole"),
  ("très drole"),
  ("trash"),
  ("les plus connues");
INSERT INTO
  facts (joke, id_category)
VALUES
  (
    "Les ennemis des amis de Chuck Norris sont ses amis. Et oui! Les ennemis de Chuck Norris n'existent plus.",
    1
  ),
  (
    "Un jour Chuck Norris a eu un zero en latin, depuis c'est une langue morte.",
    4
  ),
  (
    "Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.",
    3
  ),
  (
    "L'avenir se demande parfois ce que Chuck Norris lui réserve.",
    2
  ),
  (
    "Les samouraïs tuent des mouches avec leurs sabres...
Chuck Norris, lui, tue des samouraïs avec des mouches",
    2
  );
  /*Pour joindre la table facts avec category  */
select
  *
from
  facts
  inner join category on facts.id_category = category.id;