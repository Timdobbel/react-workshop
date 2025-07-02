# 🎨 Automatische Code Formatting Setup

Dit project is geconfigureerd voor **automatische code formatting** zodat je je kunt focussen op het leren van React zonder je zorgen te maken over code stijl.

## 🚀 Snelle Setup (VSCode Gebruikers)

1. **Clone en installeer dependencies:**
   ```bash
   git clone [repository-url]
   cd react-workshop
   npm install
   ```

2. **Installeer de Prettier extensie:**
   - Open VSCode
   - Je krijgt een popup die vraagt om aanbevolen extensies te installeren
   - Klik "Install" bij de Prettier extensie
   - **Dat is alles!** ✨

## ✅ Wat Je Automatisch Krijgt

- **Format bij Opslaan**: Je code wordt geformatteerd elke keer dat je opslaat
- **Format bij Plakken**: Geplakte code wordt automatisch geformatteerd  
- **Consistente Stijl**: Alle studenten hebben dezelfde code formatting

## 🔧 Handmatige Formatting (Elke Editor)

Als je geen VSCode gebruikt of handmatige formatting nodig hebt:

```bash
# Formatteer alle bestanden
npm run format

# Controleer of bestanden correct geformatteerd zijn
npm run format:check
```

## 🎯 Voorbeeld: Voor vs Na

**Voor formatting:**
```tsx
function MyComponent(){
const[count,setCount]=useState(0)
return<div onClick={()=>setCount(count+1)}>Count: {count}</div>
}
```

**Na formatting (automatisch):**
```tsx
function MyComponent() {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      Count: {count}
    </div>
  );
}
```

## 🆘 Probleemoplossing

**Formatting werkt niet?**
1. Zorg ervoor dat je de Prettier extensie hebt geïnstalleerd
2. Herstart VSCode
3. Controleer of "Format on Save" is ingeschakeld in instellingen

**Gebruik je een andere editor?**
- Voer `npm run format` uit na het maken van wijzigingen
- De meeste editors hebben Prettier plugins beschikbaar

---

*Focus op het leren van React - wij regelen de formatting! 🎉*
