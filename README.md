# Café 8 - Website

Een moderne, responsive website voor Café 8 - een gezellig café met heerlijke hapjes en premium koffie.

## 🚀 Features

- **Moderne Design**: Luxe uitstraling met warme kleuren en elegante typografie
- **Responsive**: Volledig geoptimaliseerd voor desktop, tablet en mobiel
- **Interactieve Menu**: Tabbed interface voor koffie, eten en dranken
- **Reserveringssysteem**: Online reserveringsformulier
- **Smooth Animations**: Vloeiende animaties en hover effecten
- **Mobile-First**: Geoptimaliseerd voor mobiele apparaten
- **SEO-Vriendelijk**: Goed gestructureerde HTML voor zoekmachines

## 📁 Project Structuur

```
cafe8/
├── index.html          # Hoofdpagina
├── styles.css          # CSS styling
├── script.js           # JavaScript functionaliteit
└── README.md           # Project documentatie
```

## 🛠️ Installatie & Gebruik

### Lokale Ontwikkeling

1. **Clone of download** het project naar je lokale machine
2. **Open** `index.html` in je webbrowser
3. **Of start een lokale server**:
   ```bash
   # Met Python 3
   python -m http.server 8000
   
   # Met Node.js (als je live-server hebt geïnstalleerd)
   npx live-server
   
   # Met PHP
   php -S localhost:8000
   ```

### Online Deployment

1. **Upload** alle bestanden naar je webhosting
2. **Zorg ervoor** dat de bestandsstructuur behouden blijft
3. **Test** de website op verschillende apparaten

## 🎨 Design Features

### Kleurenschema
- **Primaire kleur**: Warm bruin (#8B4513)
- **Secundaire kleur**: Lichter bruin (#A0522D)
- **Achtergrond**: Licht grijs (#f8f9fa)
- **Tekst**: Donker grijs (#333)

### Typografie
- **Hoofdtitels**: Playfair Display (serif)
- **Body tekst**: Inter (sans-serif)

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobiel**: < 768px

## 📱 Functionaliteiten

### Navigatie
- **Fixed navbar** met smooth scrolling
- **Mobile hamburger menu**
- **Active state** voor huidige sectie

### Menu Sectie
- **Tabbed interface** voor verschillende menu categorieën
- **Hover effecten** op menu items
- **Responsive grid** layout

### Contact & Reservering
- **Contact informatie** met click-to-copy functionaliteit
- **Reserveringsformulier** met validatie
- **Openingstijden** overzicht

### Animaties
- **Fade-in effecten** bij scrollen
- **Hover animaties** op kaarten
- **Typing effect** op hero titel
- **Parallax effect** op hero afbeelding

## 🔧 Aanpassingen

### Menu Items Wijzigen
Bewerk de menu items in `index.html`:

```html
<div class="menu-item">
    <h4>Nieuwe Koffie</h4>
    <p>Beschrijving van de nieuwe koffie</p>
    <span class="price">€4.50</span>
</div>
```

### Kleuren Aanpassen
Wijzig de CSS variabelen in `styles.css`:

```css
/* Zoek en vervang deze kleuren */
#8B4513  /* Primaire kleur */
#A0522D  /* Secundaire kleur */
```

### Contact Informatie
Update de contact gegevens in `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h4>Adres</h4>
        <p>Jouw Adres<br>Postcode Plaats</p>
    </div>
</div>
```

## 📸 Afbeeldingen Toevoegen

### Hero Afbeelding
Vervang de placeholder in `index.html`:

```html
<div class="hero-image">
    <img src="path/to/your/image.jpg" alt="Café 8 Interieur">
</div>
```

### Menu Afbeeldingen
Voeg afbeeldingen toe aan menu items:

```html
<div class="menu-item">
    <img src="path/to/food-image.jpg" alt="Gerecht Naam">
    <h4>Gerecht Naam</h4>
    <p>Beschrijving</p>
    <span class="price">€12.50</span>
</div>
```

## 🌐 Browser Ondersteuning

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Internet Explorer**: Niet ondersteund

## 📞 Support

Voor vragen of aanpassingen:
- **Email**: info@cafe8.nl
- **Telefoon**: +31 (0)20 123 4567

## 📄 Licentie

Dit project is gemaakt voor Café 8. Alle rechten voorbehouden.

---

**Café 8** - Waar gezelligheid en kwaliteit samenkomen ☕
