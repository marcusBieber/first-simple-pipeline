# first-simple-pipeline
meine erste Pipeline mit GitHub-Actions

# Aufgabe: Erstelle eine einfache GitHub Actions Pipeline

Ziel: Erstelle eine GitHub Actions Pipeline, die bei jedem Push überprüft, ob ein Test für eine JavaScript-Datei erfolgreich durchläuft. Der Test soll sicherstellen, dass eine einfache Kalkulator-Funktion korrekt arbeitet.

# Anforderungen:

Kalkulator erstellen: Erstelle eine JavaScript-Datei, die eine Funktion add(a, b) enthält, welche zwei Zahlen addiert und das Ergebnis zurückgibt. (Für diese Aufgabe ist nur diese eine Funktion erforderlich.)

# Beispiel:

// calculator.js 
function add(a, b) { return a + b; } 
module.exports = add;
Test schreiben: Erstelle eine Testdatei, die die add-Funktion aufruft und überprüft, ob die Addition korrekt funktioniert.

# Beispiel:

// calculator.test.js 
const add = require('./calculator'); 
test('addiert 1 + 2 und gibt 3 zurück', () => { expect(add(1, 2)).toBe(3); });
GitHub Actions Pipeline erstellen: Erstelle ein .github/workflows-Verzeichnis und eine ci.yml-Datei. Die Datei soll eine GitHub Actions Pipeline definieren, die Folgendes tut:

Bei jedem Push in das Repository wird die Testumgebung eingerichtet (Node.js installieren).Alle Abhängigkeiten werden installiert.Die Tests werden ausgeführt und geprüft, ob sie erfolgreich sind.