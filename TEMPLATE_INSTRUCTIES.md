# Email Templates Setup voor Café 8

## 📧 Je hebt 2 Email Templates nodig:

### **Template 1: Nieuwe Reservering (naar Café 8)**
**Doel:** Wanneer iemand reserveert, krijgt Café 8 een email met alle details.

**Stap 1: Maak Template 1**
1. Ga naar EmailJS Dashboard → "Email Templates"
2. Klik "Create New Template"
3. **Template naam:** "Nieuwe Reservering"
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

6. **Sla op** en kopieer de Template ID (bijv. `template_abc123`)

---

### **Template 2: Bevestiging (naar Klant)**
**Doel:** De klant krijgt een professionele bevestiging van hun reservering.

**Stap 2: Maak Template 2**
1. Ga naar EmailJS Dashboard → "Email Templates"
2. Klik "Create New Template"
3. **Template naam:** "Reservering Bevestiging"
4. **Onderwerp:** "Reservering Bevestiging - Café 8"
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

6. **Sla op** en kopieer de Template ID (bijv. `template_xyz789`)

---

## 🔧 Code Updaten

Zodra je beide Template IDs hebt, vervang je deze in `script.js`:

```javascript
// Vervang TEMPLATE_CAFE8_HIER met je eerste Template ID
emailjs.send('service_e62dtlm', 'template_abc123', templateParams)

// Vervang TEMPLATE_KLANT_HIER met je tweede Template ID  
return emailjs.send('service_e62dtlm', 'template_xyz789', customerTemplateParams)
```

## 🧪 Testen

1. Maak beide templates aan
2. Update de code met je Template IDs
3. Test het reserveringsformulier
4. Controleer of:
   - Café 8 een email krijgt met reserveringsdetails
   - De klant een bevestigingsemail krijgt

## 📋 Template IDs Noteren

**Template 1 (Café 8):** `template_xxxxxxx`
**Template 2 (Klant):** `template_xxxxxxx`

---

**Geef me je beide Template IDs en ik update de code voor je!** 🎉
