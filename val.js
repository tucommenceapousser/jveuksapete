var uo = cs.getAttribute('data-ueto');
if (uo && w[uo] && typeof w[uo].setUserSignals === 'function') {
    if (/^[a-zA-Z0-9_]+$/.test(uo)) {  // Validation basique pour autoriser uniquement certains caractères
        w[uo].setUserSignals({
            'co': c, 'kc': k, 'at': a, 'bi': b, 'dt': t, 'ec': e
        });
    } else {
        console.error('Valeur de data-ueto non valide');
    }
}