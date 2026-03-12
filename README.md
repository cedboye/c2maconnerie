# C2 Maçonnerie – Site web

Site vitrine professionnel pour C2 Maçonnerie (Mascouche, Terrebonne, Laval, Rive-Nord).

## Structure du site

- **index.html** – Accueil (Hero, présentation, services, réalisations, témoignages, CTA)
- **services.html** – 7 services détaillés avec photos et descriptions SEO
- **realisations.html** – Galerie dynamique des chantiers
- **a-propos.html** – À propos de l’entreprise
- **zones-desservies.html** – Mascouche, Terrebonne, Repentigny, Laval, Blainville, Montréal
- **soumission.html** – Formulaire de demande de soumission
- **contact.html** – Coordonnées et contact

## Technologies

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (menu mobile, galerie dynamique)

## Déploiement

1. Copiez tout le contenu du dossier sur votre hébergeur (ex. : Netlify, Vercel, hébergement web classique).
2. Assurez-vous que le dossier `photo/` contient toutes les images et que les chemins restent corrects.
3. Mettez à jour le `action` du formulaire de soumission pour l’envoyer à votre backend ou à un service comme Formspree.

### Formulaire de soumission (Formspree)

Pour recevoir les demandes de soumission par courriel sans backend :

1. Créez un compte sur [Formspree.io](https://formspree.io)
2. Créez un formulaire et récupérez l’URL (ex. `https://formspree.io/f/xyzabcde`)
3. Dans `soumission.html`, remplacez `action="#"` par :
   ```html
   action="https://formspree.io/f/VOTRE_ID"
   method="POST"
   ```

### Coordonnées de contact

Dans `contact.html`, remplacez :
- `450-555-1234` par le vrai numéro
- `info@c2maconnerie.com` par le vrai courriel

## Ajouter des photos à la galerie

1. Copiez vos images dans `photo/`
2. Éditez `js/gallery-data.js` et ajoutez le nom du fichier au tableau `GALLERY_IMAGES`
3. Optionnel : ajoutez une ville correspondante dans `GALLERY_ALT_CITIES` pour le SEO

## SEO

Le site est optimisé pour :
- maçonnerie Mascouche
- maçonnerie Terrebonne
- maçonnerie Laval
- maçonnerie Rive-Nord
- maçonnerie Repentigny, Blainville, Montréal
