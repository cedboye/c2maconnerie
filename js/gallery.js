/**
 * Galerie dynamique - charge les images depuis gallery-data.js
 */
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  if (!gallery || typeof GALLERY_IMAGES === 'undefined') return;

  const basePath = 'photo/';
  const types = ['pose de briques', 'pose de pierres', 'rejointoiement', 'restauration façade', 'réparation maçonnerie'];

  GALLERY_IMAGES.forEach((filename, index) => {
    const city = GALLERY_ALT_CITIES && GALLERY_ALT_CITIES[index]
      ? GALLERY_ALT_CITIES[index]
      : ['Mascouche', 'Terrebonne', 'Repentigny', 'Laval', 'Blainville', 'Montréal'][index % 6];
    const type = types[index % types.length];
    const alt = `${GALLERY_ALT_PREFIX || 'Travaux de maçonnerie à '}${city} – ${type}`;

    const div = document.createElement('div');
    div.className = 'gallery-item rounded-lg overflow-hidden shadow-md';
    div.innerHTML = `
      <a href="${basePath}${encodeURIComponent(filename)}" target="_blank" rel="noopener" class="block">
        <img src="${basePath}${encodeURIComponent(filename)}" alt="${alt}" class="w-full h-64 object-cover" loading="lazy">
      </a>
    `;
    gallery.appendChild(div);
  });
});
