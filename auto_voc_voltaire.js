// ==UserScript==
// @name         Projet Voltaire : Vocabulaire Automatique
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Answer all the questions for the vocabulary section of the Voltaire Project.
// @author       NH35
// @match        https://www.projet-voltaire.fr/voltaire/com.woonoz.gwt.woonoz.Voltaire/Voltaire.html?returnUrl=www.projet-voltaire.fr/choix-parcours/&applicationCode=expression
// @include      https://www.projet-voltaire.fr/voltaire/com.woonoz.gwt.woonoz.Voltaire/Voltaire.html?returnUrl=www.projet-voltaire.fr/choix-parcours/&applicationCode=expression
// @icon         https://www.google.com/s2/favicons?sz=64&domain=projet-voltaire.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    
    
    var vocabulaires = {
        "A l'envi":"A qui mieux mieux",
        "Aberrant":"Insense",
        "Aguerri":"Experimente",
        "Agreger":"Reunir",
        "Apologie":"Commentaire tres elogieux",
        "Antipode":"Oppose",
        "Avaliser":"Cautionner",
        "Avanie":"Affront",
        "Circonscrire":"Delimiter",
        "Chronique (adjectif)":"Continuel ou intermittent",
        "Concourir a":"Contribuer",
        "Condescendant":"Hautain",
        "Declaratif":"Affirmatif",
        "Decliner":"Refuser",
        "Deroger a":"Enfreindre",
        "Desappointement":"Deception",
        "Diligenter":"Activer",
        "Diplomatie":"Tact",
        "Echelonner":"Etaler",
        "Echeveau":"Dedale",
        "Emphatique":"Empreint de solennite",
        "Etalonner":"Calibrer",
        "Feindre":"Simuler",
        "Heresie":"Sacrilege",
        "Incidence":"Consequence",
        "Instance":"Organisme",
        "Lesiner":"Economiser",
        "Metaphysique":"Philosophique",
        "Oberer":"Compromettre",
        "Oxymore":"Contraste",
        "Abhorrer":"Detester",
        "Ajourner":"Reporter",
        "Appetence":"Envie",
        "Avenant (nom)":"Ajout",
        "Circonspect":"Prudent",
        "Conjecture":"Hypothese",
        "Deference":"Respect",
        "Desavouer":"Desapprouver",
        "Discredit":"Deconsideration",
        "Eclectique":"Qui apprecie des choses diverses",
        "Ethique":"Morale",
        "Empiriquement":"En experimentant",
        "Flagornerie":"Flatterie",
        "Heteroclite":"Varie",
        "Implanter":"Etablir",
        "Inclination":"Penchant",
        "Interceder":"Intervenir",
        "Leurrer":"Tromper",
        "Mievre":"Fade",
        "Obsequieux":"Flatteur",
        "Palabres":"Discussions",
        "Perorer":"Discourir avec pretention",
        "Predispose":"Qui a des aptitudes particulieres pour",
        "Preempter":"Exiger d'etre prioritaire",
        "Proroger":"Prolonger",
        "Recriminer":"Critiquer",
        "Salubrite":"Hygiene",
        "Speculer sur":"Compter dessus pour reussir",
        "Surseoir":"Reporter",
        "Usurper":"S'approprier",
        "Acme":"Point culminant",
        "Alacrite":"Gaiete",
        "Approbation":"Accord",
        "Avenement":"Arrivee",
        "Circulaire (nom)":"Note ecrite",
        "Conjoncture":"Circonstances",
        "Defiance":"Mefiance",
        "Desinvolture":"Laisser-aller",
        "Discriminant":"Differenciant",
        "Ecosysteme":"Environnement",
        "Emulation":"Saine competition",
        "Euphemisme":"Verite attenuee",
        "Florissant":"Prospere",
        "Heuristique":"Intuitif",
        "Incongru":"Inconvenant",
        "Intimer":"Enjoindre",
        "Limogeage":"Licenciement",
        "Mimetisme":"Imitation",
        "Obsolete":"Qui est depasse",
        "Palliatif":"Solution provisoire",
        "Persuasif":"Convaincant",
        "Pluralisme":"Qui admet des elements differents",
        "Preeminence":"Superiorite",
        "Prosaique":"Terre a terre",
        "Recrudescence":"Augmentation",
        "Sanctuariser":"Proteger",
        "Serendipite":"Art de faire une decouverte par hasard",
        "Standardiser":"Uniformiser",
        "Symptomatique":"Significatif",
        "Utopique":"Ideal mais irrealisable",
        "Abnegation":"Devouement",
        "Aleatoire":"Incertain",
        "Anthologie":"Recueil de morceaux choisis",
        "Arbitrairement":"Sans tenir compte d'autres avis",
        "Averer":"Se reveler vrai",
        "Clause":"Disposition",
        "Consensuel":"Accepte par tous",
        "Deflorer":"Gacher le suspens",
        "Desobligeant":"Blessant",
        "Disert":"Eloquent",
        "Ecreter":"Enlever ce qui depasse",
        "Encenser":"Louer",
        "Evangeliser":"Convertir",
        "Flouer":"Tromper",
        "Hiatus":"Decalage",
        "Inconsequent":"Irreflechi",
        "Intransigeant":"Intraitable",
        "Liquidites":"Argent",
        "Minutie":"Application",
        "Obtemperer":"Obeir",
        "Paradoxe":"Contradiction",
        "Philanthrope":"Altruiste",
        "Prehension":"Prise",
        "Proselytisme":"Zele a convertir",
        "Recurrent":"Qui revient frequemment",
        "Regalien":"Souverain",
        "Statuer":"Decider",
        "Synergie":"Association",
        "S'arroger":"S'attribuer",
        "Vacant":"Libre",
        "Abonder":"Approuver pleinement",
        "Aliener":"Attirer l'hostilite",
        "Arborer":"Afficher",
        "Arborescence":"Classement en branches",
        "Ayant droit":"Beneficiaire",
        "Clivant":"Qui divise un groupe",
        "Consortium":"Groupement",
        "Degressif":"Decroissant",
        "Dessein":"Projet",
        "Dispendieux":"Onereux",
        "Ecueil":"Obstacle",
        "Endemique":"Qui est propre a",
        "Evocation":"Mention",
        "Fluctuation":"Variation",
        "Grief":"Motif de plainte",
        "Hierarchiser":"Organiser",
        "Intrinsequement":"Par essence",
        "Litige":"Conflit",
        "Misogynie":"Machisme",
        "Occulter":"Cacher",
        "Paraphraser":"Faire un commentaire qui n'apporte rien",
        "Persona non grata":"Personne qui n'est pas la bienvenue",
        "Pis-aller":"Solution de fortune",
        "Prejudice":"Tort",
        "Protagoniste":"Personne concernee",
        "Recursivement":"De maniere repetee",
        "Schisme":"Separation",
        "Statu quo":"Situation qui ne progresse pas",
        "Synthetique (adjectif)":"Concis et precis",
        "Vacuite":"Vide",
        "Ad hominem":"Personnel",
        "Abroger":"Abolir",
        "Alinea":"Paragraphe",
        "Arcanes":"Mystere",
        "Beant":"Grand ouvert",
        "Coalition":"Alliance",
        "Congruent":"Qui s'applique bien",
        "Conspuer":"Huer",
        "Delegation":"Transmission temporaire de pouvoir",
        "Destituer":"Demettre",
        "Disseminer":"Disperser",
        "Edifiant":"Instructif",
        "Endogene":"Interne a un organisme",
        "Execrer":"Avoir en horreur",
        "Homogene":"Harmonieux",
        "Indicible":"Inexprimable",
        "Introverti":"A l'attitude reservee",
        "Litteralement":"Absolument",
        "Modalite":"Disposition qui precise",
        "Occurrence":"Cas",
        "Parcellaire":"Fragmentaire",
        "Plagiat":"Copie illegale d'un document",
        "Premices":"Commencement",
        "Proteiforme":"Changeant",
        "Redondant":"Superflu",
        "Se departir":"Renoncer",
        "Se formaliser":"Etre choque",
        "Stoique":"Inebranlable",
        "Systematique":"Invariable",
        "Vecteur":"Ce qui transmet",
        "Avec parcimonie":"Au compte-goutte",
        "Abscons":"Incomprehensible",
        "Affilie":"Adherent",
        "Allegation":"Affirmation",
        "Archaique":"Desuet",
        "Bienseance":"Savoir-vivre",
        "Coercitif":"Contraignant",
        "Contentieux":"Ensemble des litiges",
        "Deletere":"Nuisible",
        "Desuetude":"Obsolescence",
        "Dissuader":"Decourager",
        "Elaguer":"Couper",
        "Engouement":"Enthousiasme",
        "Exegese":"Analyse tres fouillee",
        "Fortuitement":"Par hasard",
        "Homologuer":"Approuver",
        "Indigent":"Pauvre",
        "Invectiver":"Injurier",
        "Logorrhee":"Long discours creux",
        "Modique":"Insignifiant",
        "Octroyer":"Donner",
        "Paradigme":"Referentiel",
        "Plaider":"Defendre",
        "Preposer":"Charger",
        "Protocole":"Regle",
        "Se premunir":"Se proteger",
        "Structurer":"Organiser",
        "Systemique":"Organique",
        "Regorger":"Deborder",
        "Velleite":"Envie",
        "A fortiori":"A plus forte raison",
        "Abyssal":"Tres profond",
        "Allocution":"Discours",
        "Archetype":"Modele",
        "Bienveillance":"Bonte",
        "Cohesion":"Solidarite",
        "Contractuellement":"Par obligation conventionnelle",
        "Deliberer":"Discuter",
        "Determinisme":"Phenomene dont l'issue est certaine",
        "Dialectique":"Art de l'argumentation",
        "Dithyrambique":"Elogieux",
        "Enjoindre":"Ordonner",
        "Eligible":"Qui peut beneficier de quelque chose",
        "Exhorter":"Inciter",
        "Homonyme":"Qui a le meme nom",
        "Indubitablement":"Assurement",
        "Invoquer":"Arguer",
        "Lucratif":"Rentable",
        "Moduler":"Adapter",
        "Officieusement":"En prive",
        "Parite":"Egalite entre les sexes",
        "Plebisciter":"Choisir avec engouement",
        "Pre carre":"Territoire",
        "Prerequis":"Condition",
        "Prototype":"Premier exemplaire d'un modele",
        "Rehabilitation":"Remise en etat",
        "Se prevaloir":"S'enorgueillir",
        "Subjectif":"Partial",
        "Tacite":"Inexprime",
        "Velocite":"Rapidite",
        "Accessoiriser":"Agrementer",
        "Alchimie":"Brassage harmonieux",
        "Alterer":"Degrader",
        "Arguer":"Pretexter",
        "Binaire":"Qui offre deux solutions",
        "Collegialement":"Collectivement",
        "Controverse":"Polemique",
        "Delictueux":"Qui constitue une faute condamnable",
        "Deliquescence":"Forte degradation",
        "Deliter":"Decomposer",
        "Divergence":"Desaccord",
        "Devolu":"Attribue",
        "Elite":"Fine fleur",
        "Enteriner":"Valider",
        "Exhumer":"Deterrer",
        "Fustiger":"Critiquer vivement",
        "Humblement":"Modestement",
        "Irrefutablement":"Incontestablement",
        "Indument":"A tort",
        "Magnanime":"Clement",
        "Monetiser":"Monnayer",
        "Paroxysme":"Comble",
        "Pleonasme":"Repetition fautive",
        "Prerogative":"Avantage",
        "Pugnace":"Combatif",
        "Se referer":"Se reporter",
        "Sublimer":"Embellir",
        "Reiterer":"Refaire la meme chose",
        "Tautologie":"Redondance",
        "Ventiler":"Repartir",
        "Absoudre":"Pardonner",
        "Accroitre":"Augmenter",
        "Altruisme":"Bonte",
        "Amalgame":"Melange d'elements tres differents",
        "Arriviste":"Opportuniste",
        "Blamer":"Condamner moralement",
        "Collusion":"Connivence",
        "Convergence":"Action de tendre vers un meme but",
        "Dematerialiser":"Numeriser",
        "Devoyer":"Pervertir",
        "Doctrine":"Ideologie",
        "Eloquence":"Art du discours",
        "Entremise":"Intervention de mediation",
        "Expectative":"Attente",
        "Gageure":"Defi",
        "Hypothetique":"Incertain",
        "Ineluctablement":"Fatalement",
        "Irreverencieux":"Insolent",
        "Malencontreusement":"Malheureusement",
        "Monolithique":"D'un seul bloc",
        "Omettre":"Oublier",
        "Partial":"Injuste",
        "Plethorique":"Abondant",
        "Presomptueux":"Pretentieux",
        "Putatif":"Presume",
        "Remedier":"Compenser",
        "Sedentaire":"Qui ne se deplace pas",
        "Subliminal":"Subconscient",
        "Taxinomie":"Classification",
        "Vergogne":"Scrupule",
        "Accule":"Contraint",
        "Ambigu":"Dont l'interpretation est incertaine",
        "Assentiment":"Approbation",
        "Autonome":"Independant",
        "Caduc":"Perime",
        "Comminatoire":"Menacant",
        "Cooptation":"Designation par les membres du groupe",
        "Demeriter":"Se rendre indigne",
        "Diametralement":"Completement",
        "Dogmatique":"Qui n'admet pas la contradiction",
        "Elucubration":"Divagation",
        "Entrevue":"Entretien",
        "Expedient":"Astuce qui ne regle pas le probleme",
        "Galvaniser":"Enthousiasmer",
        "Idoine":"Approprie",
        "Inertie":"Sans energie",
        "Irrevocablement":"Definitivement",
        "Mandataire":"Representant",
        "Moratoire":"Suspension d'un projet",
        "Omnipotent":"Tout-puissant",
        "Patir":"Souffrir",
        "Prisme":"Angle different",
        "Poncif":"Cliche",
        "Quidam":"Individu",
        "Requerir":"Necessiter",
        "Se focaliser":"Concentrer son attention",
        "Semantique (adjectif)":"Qui a trait au sens des mots",
        "Stricto sensu":"Au sens strict",
        "Subodorer":"Pressentir",
        "Versatile":"Inconstant",
        "Achopper":"Buter",
        "Ambivalence":"Ambiguite",
        "Assigner":"Attribuer",
        "Candeur":"Naivete",
        "Cautionner":"Approuver",
        "Competitif":"Concurrentiel",
        "Corollaire":"Consequence",
        "Demystifier":"Lever le mystere",
        "Diatribe":"Critique violente",
        "Disruptif":"Qui change la donne",
        "Doleances":"Reclamations",
        "Eluder":"Esquiver",
        "Epars":"Eparpille",
        "Exponentiel":"De plus en plus fort",
        "Galvaude":"Deprecie",
        "Illicite":"Illegal",
        "Inextinguible":"Inapaisable",
        "Investiture":"Prise de fonction officielle",
        "Iteratif":"Qui se produit de facon repetee",
        "Manicheen":"Qui range tout dans le bien ou le mal",
        "Mutation":"Changement",
        "Omnipresent":"Qui est partout",
        "Pecuniaire":"Financier",
        "Proactif":"Qui anticipe",
        "Quintessence":"Partie essentielle",
        "Resilier":"Annuler",
        "Seminaire":"Reunion",
        "Subordination":"Dependance",
        "Temporiser":"Retarder",
        "Vertueux":"Positif",
        "Acrimonie":"Agressivite",
        "Amender":"Ameliorer",
        "Assujettissement":"Soumission",
        "Canonique":"Qui pose une regle",
        "Compulser":"Consulter",
        "Conglomerat":"Regroupement d'entreprises",
        "Corroborer":"Confirmer",
        "Denigrer":"Discrediter",
        "Dichotomie":"Division",
        "Doxa":"Opinion commune",
        "En dilettante":"En amateur",
        "Emargement":"Apposition d'une mention",
        "Eponyme":"Qui donne son nom",
        "Expurger":"Eliminer",
        "Generique":"Commun",
        "Impassible":"Imperturbable",
        "Infeode":"Soumis",
        "Jalon":"Repere",
        "Manifeste":"Declaration",
        "Mutisme":"Silence d'un individu",
        "Omniscient":"Savant",
        "Pejoratif":"Devalorisant",
        "Pontifier":"Parler de maniere theatrale",
        "Probatoire":"Qui permet de prouver",
        "Radier":"Effacer",
        "Restaurer":"Reparer",
        "Sempiternel":"Eternel",
        "Subrepticement":"En cachette",
        "Tendancieux":"Oriente",
        "Veto":"Refus",
        "Ad hoc":"Adequat",
        "Amene (adjectif)":"Aimable",
        "Astreindre":"Obliger",
        "Carence":"Manque",
        "Compulsivement":"Irresistiblement",
        "Contingences":"Choses de peu d'importance",
        "Corrompre":"Pervertir",
        "Denominateur":"Point commun",
        "Didactique":"Pedagogique",
        "Drastique":"Radical",
        "Embargo":"Blocus",
        "Epistolaire":"Par echange de courriers",
        "Equanimite":"Serenite",
        "Exsangue":"Vide de sa substance",
        "Genese":"Creation",
        "Impavide":"Sans crainte",
        "Infirmer":"Invalider",
        "Jurisprudence":"Precedent qui fait loi",
        "Mansuetude":"Indulgence",
        "Mutualiser":"Regrouper",
        "Onirique":"Imaginaire",
        "Pensum":"Corvee",
        "Postulat":"Principe",
        "Probite":"Honnetete",
        "Ratifier":"Approuver",
        "Retif":"Rebelle",
        "Subsequemment":"En consequence",
        "S'enquerir":"Se renseigner",
        "Tergiverser":"Recourir a des faux-fuyants",
        "Vicie":"Pollue",
        "Adjacent":"Voisin",
        "Analogue":"Semblable",
        "Atermoyer":"Differer",
        "Caritatif":"Charitable",
        "Creance":"Droit a exiger des sommes",
        "Conceder":"Admettre",
        "Denoter":"Indiquer par une caracteristique",
        "Diffamatoire":"Calomnieux",
        "Dissident":"En desaccord",
        "Dubitatif":"Sceptique",
        "Emblematique":"Symbolique",
        "Ergonomique":"Adapte aux besoins des utilisateurs",
        "Extrapolation":"Generalisation a partir d'un point",
        "Faire-valoir":"Personne qui en met une autre en valeur",
        "Grandiloquent":"Qui s'exprime pompeusement",
        "Implicitement":"De maniere sous-entendue",
        "Informel":"Decontracte",
        "Kyrielle":"Multitude",
        "Marginaliser":"Exclure",
        "Mythifier":"Idealiser",
        "Opiniatre":"Obstine",
        "Peregrination":"Deplacements incessants",
        "Postuler":"Candidater",
        "Procrastination":"Tendance a toujours reporter",
        "Ratio":"Coefficient",
        "Retoquer":"Rejeter",
        "Sentencieux":"Solennel",
        "Subside":"Somme donnee ou pretee",
        "Transcender":"Depasser",
        "Vicissitudes":"Turbulences",
        "Adouber":"Legitimer dans sa fonction",
        "Annihiler":"Aneantir",
        "Atypique":"Inhabituel",
        "Cartesien":"Logique",
        "Charisme":"Ascendant naturel",
        "Concession":"Renoncement",
        "Deontologique":"Ethique",
        "Debonnaire":"Accommodant",
        "Digression":"Fait de s'ecarter du sujet",
        "Dupe":"Credule",
        "Emergent":"Montant",
        "Ergoter":"Pinailler",
        "Faconde":"Grande facilite a parler",
        "Gratifiant":"Valorisant",
        "Imponderable":"Imprevu",
        "Inherent":"Indissociable",
        "Laconique":"Qui s'exprime en peu de mots",
        "Lapidaire":"D'une concision brutale",
        "Meandre":"Detour",
        "Nebuleux":"Confus",
        "Opportun":"Propice",
        "Peremptoire":"Categorique",
        "Pourvoir":"Fournir",
        "Prodiguer":"Donner",
        "Rationalisation":"Optimisation",
        "Retractation":"Annulation d'un engagement",
        "Sibyllin":"Enigmatique",
        "Substantiel":"Considerable",
        "Transiger":"Faire des concessions",
        "Vindicatif":"Rancunier",
        "Afferent (a)":"Relatif (a)",
        "Antagonisme":"Opposition",
        "Augure":"Presage",
        "Casus belli":"Motif de conflit",
        "Concilier":"Accorder",
        "Debouter":"Rejeter",
        "Depositaire":"Qui recoit et garde",
        "Dilatoire":"Qui cherche a gagner du temps",
        "Ebaucher":"Esquisser",
        "Eminemment":"Extremement",
        "Ersatz":"Substitut de moindre qualite",
        "Factice":"Faux",
        "Gregaire":"Qui suit le groupe",
        "Imprecation":"Malediction",
        "Inhibant":"Paralysant",
        "Lapalissade":"Evidence",
        "Litanie":"Enumeration ennuyeuse",
        "Mandater":"Investir quelqu'un d'un pouvoir",
        "Mecene":"Bienfaiteur",
        "Nonobstant":"Malgre",
        "Opacite":"Manque de transparence",
        "Opprobre":"Honte",
        "Perenne":"Durable",
        "Pragmatique":"Adapte a l'action concrete",
        "Profane":"Non-initie",
        "Retroactivement":"En s'appliquant a des faits anterieurs",
        "Sine qua non":"Indispensable",
        "Substrat":"Fondement",
        "Translation":"Transfert",
        "Vindicte":"Vengeance",
        "Affligeant":"Consternant",
        "Antepenultieme":"Avant-avant-dernier",
        "Austere":"Sans saveur",
        "Autodidacte":"Qui se forme seul",
        "Celerite":"Rapidite",
        "Cinematique":"Enchainement des mouvements",
        "Concis":"Bref",
        "Decati":"Defraichi",
        "Deprecier":"Devaloriser",
        "Emolument":"Salaire",
        "Esclandre":"Scandale",
        "Factuel":"Avere par les faits",
        "Habilitation":"Autorisation",
        "Legislation":"Loi",
        "Liminaire":"Place en tete d'un texte",
        "Inique":"Injuste",
        "Imputer":"Attribuer",
        "Mediateur":"Conciliateur",
        "Modus vivendi":"Accord permettant de vivre ensemble",
        "Normatif":"Qui donne des regles",
        "Osmose":"Interpenetration",
        "Pericliter":"Decliner",
        "Praticien":"Qui exerce sa profession",
        "Proferer":"Exprimer a voix haute",
        "Proner":"Vanter les qualites",
        "Recipiendaire":"Beneficiaire",
        "Sacerdoce":"Vocation",
        "Solvable":"Qui a les moyens de payer ses dettes",
        "Transverse":"Recoupant plusieurs domaines",
        "Volatil":"Qui tend a se disperser",
        "Acception":"Signification",
        "Agencer":"Ordonner",
        "Antinomie":"Contradiction",
        "Autarcie":"Le fait de se suffire a soi-meme",
        "Charte":"Reglement",
        "Concomitamment":"Simultanement",
        "Decence":"Respect des convenances",
        "Depredation":"Malversation",
        "Diligence":"Rapidite",
        "Echeancier":"Planning",
        "Empathie":"Compassion",
        "Essaimer":"Se repandre",
        "Fallacieux":"Trompeur",
        "Haranguer":"Discourir solennellement",
        "In extenso":"Integralement",
        "Injonction":"Ordre",
        "Legitimement":"A juste titre",
        "Mesalliance":"Mauvais mariage",
        "Nota bene":"Observation",
        "Ostensiblement":"De maniere remarquee",
        "Permissif":"Laxiste",
        "Preambule":"Introduction",
        "Proliferer":"Se multiplier",
        "Reciprocite":"Equilibre des echanges",
        "Servile":"Soumis",
        "Sommite":"Personnage de grande renommee",
        "Superfetatoire":"Qui s'ajoute inutilement",
        "S'acquitter":"Payer",
        "Tributaire":"Dependant",
        "Volubile":"Qui parle beaucoup et avec enthousiasme",
        "Erratique":"Instable",
        "Essor":"Croissance",
        "Federer":"Unir",
        "Hegemonie":"Suprematie",
        "Inanite":"Futilite",
        "Insidieusement":"Perfidement",
        "Lenifiant":"Apaisant",
        "Metaphore":"Comparaison",
        "Neologisme":"Mot nouveau",
        "Numerus clausus":"Quota",
        "Outrecuidance":"Arrogance",
        "Pernicieux":"Nuisible",
        "Polemiquer":"Entretenir la controverse",
        "Precaire":"Fragile",
        "Predictif":"Previsionnel",
        "Presomption":"Supposition infondee",
        "Prolixe":"Trop long dans ses discours",
        "Promulger":"Publier officiellement",
        "Prospective":"Reflexion sur l'avenir",
        "Quorum":"Presence minimale",
        "Recouvrement":"Perception de ce qui ...",
        "Recouvrer":"Reprendre",
        "Sagacite":"Perspicacite",
        "Sous-jacent":"Cache",
        "Spectre":"Ensemble large",
        "Superlatif":"Exagere",
        "Supputer":"Evaluer empiriquement",
        "S'affranchir":"Se liberer",
        "Truisme":"Banalite",
        "Ubuesque":"Grotesque",
        
    }
    
    // Levenstein function : source internet
    const calculateLevenshteinDistance = (a, b) => {
        const c = a.length + 1;
        const d = b.length + 1;
        const r = Array(c);
        for (let i = 0; i < c; ++i) r[i] = Array(d);
        for (let i = 0; i < c; ++i) r[i][0] = i;
        for (let j = 0; j < d; ++j) r[0][j] = j;
        for (let i = 1; i < c; ++i) {
            for (let j = 1; j < d; ++j) {
                const s = (a[i - 1] === b[j - 1] ? 0 : 1);
                r[i][j] = Math.min(r[i - 1][j] + 1, r[i][j - 1] + 1, r[i - 1][j - 1] + s);
            }
        }
        return r[a.length][b.length];
    };
    
    // Parameters
    var manual_answer = 'g';
    var auto_answer = 'a';
    var cooldown = 700;
    var use_levenstein = true;
    var show_vocabulaire = false;
    
    // Errors logs
    var errors_undefined = [];
    var errors_levenstein = [];
    
    // Global variable
    var loop = false;
    
    
    console.log(`\n
    COMMANDES
    '${manual_answer}' : répondre à une question. (répondre trop vite entraine un risque de déconnexion du site)
    '${auto_answer}' : répondre automatiquement à toutes les questions. Appuyez à nouveau pour déasactiver.
    
    Le script est compatible avec TamperMonkey.\n

    \n`)
    
    const answer = () => {
        
        // get of DOM elements
        var tag_question_word = document.querySelector("body > div.sheetView > div.sheetCenter > div.sheetContainer.trainingSheetContainer > div > div.qccv-order > div.qccv-question-container > div.qccv-question");
        var htmlCollection_suggestions = document.getElementsByClassName("qc-proposal-button");
        
        let question_word_with_accent = tag_question_word.innerHTML; //get the word inside the tag
        let question_word_no_accent = question_word_with_accent.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove accents (because dictionnary doesn't have them)
        
        let answer_word = vocabulaires[question_word_no_accent];
        
        if (answer_word === undefined){
            
            // add to logs for debug
            errors_undefined.push(question_word_no_accent);
            errors_undefined = [...new Set(errors_undefined)] // drop duplicate

            
            // find the closest key in the database.
            if (use_levenstein){
                
                let best_key_distance = 1000;
                let best_key_word = null;
                
                // test every key in the base to find the closest to the question_word
                Object.entries(vocabulaires).forEach(([key, value]) => {
                    
                    let key_distance = calculateLevenshteinDistance(key,question_word_no_accent)
                    if (key_distance < best_key_distance){
                        best_key_distance = key_distance;
                        best_key_word = key;
                    }
                    
                });
                
                // assign the closest key in the base
                answer_word = vocabulaires[best_key_word];
                console.log(`Solved with Levenstein :\n`);
                
            }
            else {
                console.log(`
                WARNING : The exact answer is not in the database.\n
                If you want to force it, set the variable "use_levenstein" to "true" by typing :\n
                use_levenstein = true;\n
                and rerun the function by using the key '${manual_answer}'.\n
                use_levenstein is actually set to ${use_levenstein}.\n`)
                
                return -2;
            }
        }
        
        // for every suggestion
        for (let tag_proposition of htmlCollection_suggestions) {
            
            let proposition_word_with_accent = tag_proposition.innerHTML; // get the word inside the tag
            let proposition_word_no_accent = proposition_word_with_accent.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove accents
            
            if (proposition_word_no_accent === answer_word){
                console.log(`${question_word_with_accent} => ${proposition_word_with_accent}`)
                if (show_vocabulaire){
                    tag_question_word.innerHTML = `${question_word_with_accent} => ${proposition_word_with_accent}`;
                }
                tag_proposition.click();
                return 0;
            }
            
        }
        
        // if one of the suggestion does not match exactly the answer_word given by the dictionnary;
        if (use_levenstein){
            
            //intialise best
            let best_proposition_distance = 1000;
            let best_proposition = null;
            let best_proposition_word = null;
            
            for (let proposition of htmlCollection_suggestions) {
                let proposition_word_no_accent = proposition.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //suppression des accents
                
                // compare with current best
                let proposition_distance = calculateLevenshteinDistance(answer_word,proposition_word_no_accent);
                if (proposition_distance < best_proposition_distance){
                    best_proposition_distance = proposition_distance;
                    best_proposition = proposition;
                    best_proposition_word = proposition_word_no_accent;
                }
            }
            
            best_proposition.parentNode.style.backgroundColor = "cyan"; //change color for esthetic purpose
            
            console.log(`Solved with Levenstein :\n
            ${question_word_with_accent} => ${best_proposition_word}`)
            best_proposition.click(); // click on the best proposition of the list
            
            errors_levenstein.push(best_proposition_word); // add in logs for debug
            errors_levenstein = [...new Set(errors_levenstein)] // drop duplicate
            
            return 1;
        }
        else {
            errors_levenstein.push(question_word_no_accent);
            errors_levenstein = [...new Set(errors_levenstein)] // drop duplicate

            console.log(`
            WARNING : The exact answer is not in the database.\n
            If you want to force it, set the variable "use_levenstein" to "true" by typing :\n
            use_levenstein = true;\n
            and rerun the function by using the key '${manual_answer}'.\n
            use_levenstein is actually set to ${use_levenstein}.\n`)
            
            return -3;
        }
        
        return -4;
    }
    
    const next = () => {
        
        var tag_next = document.querySelector("#btn_question_suivante");
        tag_next.click();
        return 0;
    }
    
    
    //controller
    window.addEventListener('keydown', (event) => {
        
        if (event.key === manual_answer) {
            let answer_return = answer();
            if (answer_return === 0 || answer_return === 1) {
                setTimeout(()=>{
                    next();
                },cooldown)
            }
        }
        
        if (event.key === auto_answer) {
            
            if (loop) {
                loop = false;
                console.log(`Stopping loop. (start it with ${auto_answer})`)
                log();
            }else {
                console.log(`Starting loop. (stop it with ${auto_answer})`)
                loop = true;
                setTimeout(()=>{
                    autorun();
                },cooldown)
                
            }
            
        }
    });
    
    
    const autorun = () => {
        
        let answer_return = answer();
        
        if (answer_return === 0 || answer_return === 1 ) {
            setTimeout(()=>{
                next();
                
                if (loop){
                    setTimeout(()=>{
                        return autorun();
                    },cooldown)
                }
            },cooldown)
        }else{
            loop = false;
            return;
        }
        
    }
    
    
    // debug tool to see the list of errors during the process
    const log = () => {
        console.log(errors_undefined);
        console.log(errors_levenstein);
    }
    
})();