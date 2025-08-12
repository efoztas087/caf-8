# EmailJS Setup voor Café 8 Reserveringsformulier

## 📧 EmailJS Configuratie

Om het reserveringsformulier werkend te maken zodat klanten echte emails ontvangen, volg deze stappen:

### Stap 1: EmailJS Account Aanmaken

1. Ga naar [EmailJS.com](https://www.emailjs.com/)
2. Maak een gratis account aan
3. Log in op je dashboard

### Stap 2: Email Service Configureren

1. **Ga naar "Email Services"** in je dashboard
2. **Klik op "Add New Service"**
3. **Kies je email provider:**
   - Gmail (aanbevolen voor beginners)
   - Outlook
   - Yahoo
   - Of een andere provider

#### Voor Gmail:
1. Kies "Gmail"
2. Voer je Gmail adres in
3. Voer je Gmail wachtwoord in (of app-specifiek wachtwoord)
4. Klik "Create Service"

### Stap 3: Email Templates Maken

#### Template 1: Reservering naar Café 8
1. **Ga naar "Email Templates"**
2. **Klik "Create New Template"**
3. **Template naam:** "Reservering Ontvangen"
4. **Onderwerp:** "Nieuwe Reservering - {{to_name}}"
5. **Template inhoud:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #8B4513; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .details { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #8B4513; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☕ Café 8 - Nieuwe Reservering</h1>
        </div>
        <div class="content">
            <h2>Nieuwe reservering ontvangen!</h2>
            
            <div class="details">
                <strong>Naam:</strong> {{to_name}}<br>
                <strong>Email:</strong> {{to_email}}<br>
                <strong>Telefoon:</strong> {{phone_number}}<br>
                <strong>Datum:</strong> {{reservation_date}}<br>
                <strong>Tijd:</strong> {{reservation_time}}<br>
                <strong>Aantal personen:</strong> {{number_of_guests}}<br>
                <strong>Speciale wensen:</strong> {{special_requests}}
            </div>
            
            <p>Neem contact op met de klant om de reservering te bevestigen.</p>
        </div>
    </div>
</body>
</html>
```

#### Template 2: Bevestiging naar Klant
1. **Maak nog een template**
2. **Template naam:** "Reservering Bevestiging"
3. **Onderwerp:** "Reservering Bevestiging - Café 8"
4. **Template inhoud:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #8B4513; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .details { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #8B4513; }
        .footer { text-align: center; margin-top: 20px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☕ Café 8</h1>
        </div>
        <div class="content">
            <h2>Bedankt voor je reservering, {{to_name}}!</h2>
            
            <p>We hebben je reservering succesvol ontvangen en nemen binnen 24 uur contact met je op om deze te bevestigen.</p>
            
            <div class="details">
                <strong>Reserveringsdetails:</strong><br>
                <strong>Datum:</strong> {{reservation_date}}<br>
                <strong>Tijd:</strong> {{reservation_time}}<br>
                <strong>Aantal personen:</strong> {{number_of_guests}}<br>
                <strong>Speciale wensen:</strong> {{special_requests}}
            </div>
            
            <p>We kijken ernaar uit je te verwelkomen in Café 8!</p>
            
            <div class="footer">
                <p>Café 8<br>
                Hoofdstraat 123, 1234 AB Amsterdam<br>
                Tel: +31 (0)20 123 4567<br>
                Email: info@cafe8.nl</p>
            </div>
        </div>
    </div>
</body>
</html>
```

### Stap 4: JavaScript Code Updaten

Vervang in `script.js` de placeholder waarden:

```javascript
// Vervang deze waarden met je eigen EmailJS gegevens
emailjs.init("YOUR_PUBLIC_KEY"); // Je public key uit EmailJS dashboard

// In de emailjs.send functies:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
// Vervang met:
emailjs.send('service_xxxxxxx', 'template_xxxxxxx', templateParams)
```

### Stap 5: Waarden Vinden

1. **Public Key:** Ga naar "Account" → "API Keys" in je EmailJS dashboard
2. **Service ID:** Ga naar "Email Services" → kopieer de Service ID
3. **Template IDs:** Ga naar "Email Templates" → kopieer de Template IDs

### Stap 6: Testen

1. Open de website
2. Vul het reserveringsformulier in
3. Klik "Reserveren"
4. Controleer of je emails ontvangt

## 🔧 Alternatieve Oplossingen

### Optie 2: Formspree (Nog eenvoudiger)
- Ga naar [Formspree.io](https://formspree.io/)
- Maak een gratis account
- Krijg een endpoint URL
- Vervang het formulier met:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Optie 3: Netlify Forms (Als je Netlify gebruikt)
- Upload naar Netlify
- Voeg `netlify` attribuut toe aan form
- Emails worden automatisch verzonden

### Optie 4: PHP Backend (Voor geavanceerde gebruikers)
- Maak een PHP script
- Gebruik `mail()` functie
- Upload naar een server met PHP support

## 💡 Tips

- **Gratis EmailJS plan:** 200 emails per maand
- **Betaalde plannen:** Vanaf $15/maand voor meer emails
- **Test altijd** voordat je live gaat
- **Backup plan:** Zorg voor een telefoonnummer als backup

## 🆘 Problemen Oplossen

### Email komt niet aan:
1. Controleer spam folder
2. Verifieer EmailJS configuratie
3. Test met een ander email adres

### JavaScript errors:
1. Open browser console (F12)
2. Controleer voor foutmeldingen
3. Verifieer alle IDs en keys

### Form werkt niet:
1. Controleer of EmailJS geladen is
2. Verifieer form ID: `reservationForm`
3. Test in verschillende browsers

---

**Succes met het instellen van je reserveringssysteem!** 🎉
