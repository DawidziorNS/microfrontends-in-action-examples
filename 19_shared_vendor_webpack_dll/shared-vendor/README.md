# Współdzielone biblioteki zewnętrzne

## Generowanie statycznego pakietu bibliotek zewnętrznych

Instalowanie zależności

```
npm install
```

Budowanie statycznego pakietu z bibliotekami zewnętrznymi

```
npm run build
```

Nazwa wygenerowanego pliku zależy od zainstalowanej wersji frameworku React (`static/react_16.js`).

## Zmiana wersji frameworku

Instalacja nowej wersji frameworku

```
npm install react@15 react-dom@15
```

Ponowne budowanie projektu

```
npm run build
```

Spowoduje to utworzenie pakietu z kodem frameworku React 15 jako `static/react_15.js`.
