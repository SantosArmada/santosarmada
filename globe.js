const highlightedCountries = {
    'Mexico': '#39ff6a',
    'Guatemala': '#39ff6a',
    'Nicaragua': '#39ff6a',
    'El Salvador': '#39ff6a',
    'Peru': '#39ff6a',
    'Chile': '#39ff6a',
    'Argentina': '#39ff6a',
    'Uruguay': '#39ff6a',
    'Paraguay': '#39ff6a',
    'Bolivia': '#39ff6a',
    'Ecuador': '#39ff6a',
    'Colombia': '#39ff6a',
    'Venezuela': '#39ff6a',
    'Cuba': '#39ff6a',
    'Dominican Rep.': '#39ff6a',
    'Haiti': '#39ff6a',
    'Jamaica': '#39ff6a',
    'Spain': '#c8a96e',
    'Portugal': '#c8a96e',
    'Morocco': '#c8a96e',
    'Belgium': '#c8a96e',
    'United States of America': '#4da6ff'
};

const world = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true)
    .atmosphereColor('#4da6ff')
    .atmosphereAltitude(0.18);

fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
    .then(res => res.json())
    .then(topology => {
        const countries = topojson.feature(topology, topology.objects.countries);

        world
            .polygonsData(countries.features)
            .polygonCapColor(feat => {
                const name = feat.properties.name;
                return highlightedCountries[name] || 'rgba(255,255,255,0.04)';
            })
            .polygonSideColor(() => 'rgba(0,0,0,0)')
            .polygonStrokeColor(() => 'rgba(255,255,255,0.15)')
            .polygonAltitude(feat => highlightedCountries[feat.properties.name] ? 0.01 : 0.005)
            .onPolygonClick(feat => {
                const name = feat.properties.name;
                if (highlightedCountries[name]) {
                    document.getElementById('infoPanel').innerHTML =
                        '<p class="globe-info-label">' + name + '</p>' +
                        '<h3 class="globe-info-title">Connected Works</h3>' +
                        '<p class="globe-info-body">Authors and history tied to ' + name + ' will appear here as the archive grows.</p>';
                }
            });
    });

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.4;

window.addEventListener('resize', () => {
    world.width(window.innerWidth);
    world.height(window.innerHeight);
});